// css
import './HomeHeader.css'

// assets
import brooklinOne from '../../assets/images/Brooklin-1.svg' 
// import brooklinTwo from '../../assets/images/Brooklin-2.svg'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'


const HomeHeader = () => {
  return (  
    <>
    <main className='home-header'>
      <div className='left-div'>
        <h1>Hi. I'm Brooklin.<br></br>I do Social Media.</h1>
        <p>Stop struggling with managing your social media presence alone. Instead, work with a professional to optimize your social media strategy for impactful results.</p>
        <div>
          <ul>
            <li><span><FontAwesomeIcon icon={faCircleCheck} /></span>Expertise in social media trends</li>
            <li><span><FontAwesomeIcon icon={faCircleCheck} /></span>Time-saving content creation</li>
            <li><span><FontAwesomeIcon icon={faCircleCheck} /></span>Enhanced audience engagement strategies</li>
            <li><span><FontAwesomeIcon icon={faCircleCheck} /></span>Consistent brand representation online</li>
          </ul>
        </div>
      </div>
      <div className='right-div'>
        <img src={brooklinOne} alt="Brooklin Lee Portrait" className='header-portrait'/>
        <div className="blue-shape"></div>
      </div>
    </main>
    </>
  )
}

export default HomeHeader