// components
import LogoIndex from './LogoIndex'

// css
import './HomeSkills.css'



const HomeSkills = () => {

  const PNG_FILE_URL = 'https://https://brooklinlee-socialmediamanager.netlify.app/Brooklin-Lee_Social-Media-Manager.pdf'

  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    aTag.setAttribute('target', '_blank')
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  
  return (  
    <>
      <main className="home-skills">
        <h1 className='heading-primary'>Skills, Technologies & Platforms... Oh My!</h1>
        <div className="skill-icon-section">
          <LogoIndex />
        </div>
        <p>I have a diverse array of skills and proficient in several different technologies essential for both social media management. and basic front-end software engineering. My experience extends to every aspect of content creation, from initial concept development to thorough post-analysis. My strength lies in crafting a unified and cohesive brand identity that not only resonates with audiences across many platforms, but also builds a community through education, entertainment, and genuine connection. </p>
        <div className="button-div">
          <button className='blue-button' onClick={() => {downloadFileAtURL(PNG_FILE_URL)}}>Download my Resume</button>
        </div>
      </main>
    </>
  )
}

export default HomeSkills