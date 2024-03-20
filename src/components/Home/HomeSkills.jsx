// components
import LogoIndex from './LogoIndex'

// css
import './HomeSkills.css'



const HomeSkills = () => {

  const PDF_FILE_URL = 'https://brooklinlee-socialmediamanager.netlify.app/BrooklinLee_SocialMediaManager.pdf';

  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop();
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]))
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        document.body.removeChild(aTag)
      })
      .catch(error => console.error('Error downloading file:', error))
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
          <button className='blue-button' onClick={() => {downloadFileAtURL(PDF_FILE_URL)}}>Download my Resume</button>
        </div>
      </main>
    </>
  )
}

export default HomeSkills