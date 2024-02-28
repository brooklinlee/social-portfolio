// css
import './HomeContent.css'

// assets
import Phones from '../../assets/images/Phones.svg'

const HomeContent = () => {
  return (  
    <>
      <main className='home-content'>
        <h1>Your Account Could Look Like This</h1>
        <img src={Phones} alt="" />
      </main>
    </>
  )
}

export default HomeContent