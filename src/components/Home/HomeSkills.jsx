// components
import LogoIndex from './LogoIndex'

// css
import './HomeSkills.css'



const HomeSkills = () => {
  return (  
    <>
      <main className="home-skills">
        <h1 className='heading-primary'>Skills, Technologies & Platforms... Oh My!</h1>
        <div className="skill-icon-section">
          <LogoIndex />
        </div>
        <p>I am proficient in a diverse array of skills and technologies essential for both social media management and basic front-end software engineering. My expertise extends to crafting and refining content from conceptualization to post-analysis, including optimizing posts and landing pages based on analytics data. I excel in developing a cohesive brand presence that resonates with audiences across various platforms, ensuring consistency and engagement.</p>
        {/* <div className='button-div'>
            <button className='blue-button'>Check out My Portfolio!</button>
        </div> */}
      </main>
    </>
  )
}

export default HomeSkills