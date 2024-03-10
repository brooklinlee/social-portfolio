import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Carousel.css';

const History = ({ current, items, changeSlide }) => {
  return (
    <div className="history">
      {items.map((item, index) => (
        <button
          key={index}
          className={index === current ? "history__item active" : "history__item"}
          onClick={() => changeSlide(current, index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}


const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [isNext, setIsNext] = useState(true);

  const handlerPrev = (event) => {
    event.preventDefault()
    let index = current
    const length = images.length

    if (index < 1) {
      index = length
    }

    index = index - 1

    setCurrent(index)
    setIsNext(false)
  };

  const handlerNext = (event) => {
    event.preventDefault()
    let index = current
    const length = images.length - 1

    if (index === length) {
      index = -1
    }

    index = index + 1

    setCurrent(index)
    setIsNext(true)
  }

  const goToHistoryClick = (curIndex, index) => {
    const next = curIndex < index
    setCurrent(index)
    setIsNext(next)
  }

  return (
    <div className="carousel">
      <CSSTransition
        classNames={{
          enter: isNext ? 'enter-next' : 'enter-prev',
          enterActive: 'enter-active',
          exit: 'leave',
          exitActive: isNext ? 'leave-active-next' : 'leave-active-prev'
        }}
        timeout={500}
        key={current}
      >
        <div className="carousel_slide">
          <img src={images[current]} alt={`Image ${current}`} />
        </div>
      </CSSTransition>
      <button className="carousel_control carousel_control__prev" onClick={handlerPrev}>
        <span></span>
      </button>
      <button className="carousel_control carousel_control__next" onClick={handlerNext}>
        <span></span>
      </button>
      <div className="carousel_history">
        <History current={current} items={images} changeSlide={goToHistoryClick} />
      </div>
    </div>
  )
}

export default Carousel
