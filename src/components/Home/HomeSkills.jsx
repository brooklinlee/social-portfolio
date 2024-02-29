// css
import './HomeSkills.css'

// assets
import SproutSocial from '../../assets/images/Sprout.svg'
import MetaBusiness from '../../assets/images/Meta.svg'
import Instagram from '../../assets/images/Instagram.svg'
import Facebook from '../../assets/images/Facebook.svg'
import Pinterest from '../../assets/images/Pinterest.svg'
import TikTok from '../../assets/images/TT.svg'
import YouTube from '../../assets/images/YouTube.svg'
import LinkedIn from '../../assets/images/LinkedIn.svg'
import Premier from '../../assets/images/Premier.svg'
import Lightroom from '../../assets/images/Lightroom.svg'
import AI from '../../assets/images/AI.svg'
import Canva from '../../assets/images/Canva.svg'
import HTML from '../../assets/images/HTML.svg'
import CSS from '../../assets/images/CSS.svg'
import JavaScript from '../../assets/images/JS.svg'
import React from '../../assets/images/React.svg'

const HomeSkills = () => {
  return (  
    <>
      <main className="full-screen-view">
        <h1>Skills, Technologies & Platforms... Oh My!</h1>
        <div className="skill-icon-section">
          <img src={ SproutSocial } alt="Sprout Social Logo" />
          <img src={ MetaBusiness } alt="MetaBusiness Logo" />
          <img src={ Instagram } alt="Instagram Logo" />
          <img src={ Facebook } alt="Facebook Logo" />
          <img src={ Pinterest } alt="Pinterest Logo" />
          <img src={ TikTok } alt="TikTok Logo" />
          <img src={ YouTube } alt="YouTube Logo" />
          <img src={ LinkedIn } alt="LinkedIn Logo" />
          <img src={ Premier } alt="Premier Logo" />
          <img src={ Lightroom } alt="Lightroom Logo" />
          <img src={ AI } alt="AI Logo" />
          <img src={ Canva } alt="Canva Logo" />
          <img src={ HTML } alt="HTML Logo" />
          <img src={ CSS } alt="CSS Logo" />
          <img src={ JavaScript } alt="JavaScript Logo" />
          <img src={ React } alt="React Logo" />
        </div>
      </main>
    </>
  )
}

export default HomeSkills