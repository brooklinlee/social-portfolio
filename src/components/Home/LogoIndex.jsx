// assets
import SproutSocial from '../../assets/images/logos/Sprout.svg'
import MetaBusiness from '../../assets/images/logos/Meta.svg'
import Instagram from '../../assets/images/logos/Instagram.svg'
import Facebook from '../../assets/images/logos/Facebook.svg'
import Pinterest from '../../assets/images/logos/Pinterest.svg'
import TikTok from '../../assets/images/logos/TT.svg'
import YouTube from '../../assets/images/logos/YouTube.svg'
import LinkedIn from '../../assets/images/logos/LinkedIn.svg'
import Premier from '../../assets/images/logos/Premier.svg'
import Lightroom from '../../assets/images/logos/Lightroom.svg'
import AI from '../../assets/images/logos/AI.svg'
import Canva from '../../assets/images/logos/Canva.svg'
import HTML from '../../assets/images/logos/HTML.svg'
import CSS from '../../assets/images/logos/CSS.svg'
import JavaScript from '../../assets/images/logos/JS.svg'
import React from '../../assets/images/logos/React.svg'
import WordPress from '../../assets/images/logos/WordPress.svg'
import CapCut from '../../assets/images/logos/CapCut.svg'


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