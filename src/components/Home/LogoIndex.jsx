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
import WordPress from '../../assets/images/WordPress.svg'
import CapCut from '../../assets/images/CapCut.svg'


  const LogoIndex = () => {

  const logos = [
    {src: SproutSocial, alt: 'Sprout Social Logo'},
    {src: MetaBusiness, alt: 'Meta Business Logo'},
    {src: Instagram, alt: 'Instagram Logo'},
    {src: Facebook, alt: 'Facebook Logo'},
    {src: Pinterest, alt: 'Pinterest Logo'},
    {src: TikTok, alt: 'TikTok Logo'},
    {src: YouTube, alt: 'YouTube Logo'},
    {src: LinkedIn, alt: 'LinkedIn Logo'},
    {src: Premier, alt: 'Premier Pro Logo'},
    {src: Lightroom, alt: 'Lightroom Logo'},
    {src: AI, alt: 'Adobe Illustrator Logo'},
    {src: Canva, alt: 'Canva Logo'},
    {src: HTML, alt: 'HTML Logo'},
    {src: CSS, alt: 'CSS Logo'},
    {src: JavaScript, alt: 'JavaScript Logo'},
    {src: React, alt: 'React JS Logo'},
    {src: WordPress, alt: 'WordPress Logo'},
    {src: CapCut, alt: 'CapCut Logo'},
  ]

  return (
    <div className="skill-icon-section">
      {logos.map((logo, index) => {
        return <img key={index} src={logo.src} alt={logo.alt} />
      })}
    </div>
  )
}  


export default LogoIndex