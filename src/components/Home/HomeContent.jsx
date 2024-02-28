// css
import './HomeContent.css'

// assets
import Phones from '../../assets/images/Phones.svg'

const HomeContent = () => {
  return (  
    <>
      <main className='home-content'>
        <h1>Your Account Could Look <br />Like This</h1>
        <img src={Phones} alt="six phones showing social media feeds from different brands" />
        <div className='half-circle'></div>
      </main>
    </>
  )
}

export default HomeContent