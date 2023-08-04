import React from 'react'
import './Resume.css'
import Fade from 'react-reveal/Fade';
import { BsBook } from 'react-icons/bs'
import { AiFillProject } from 'react-icons/ai'

function Resume() {
  return (
    <Fade bottom>
    <div className='Resume'>
      <h1 className='resume-logo'>Resume</h1>


      <div className='edu'>
         <BsBook className='resume-book' />
         <h1 className='education'>Education</h1>
         <hr className='line-8'></hr>
         <hr className='line-9'></hr>
          <span className='degree1-dot'></span>
          <span className='degree2-dot'></span>
          <span className='degree3-dot'></span>
         <p className='resume-degree1'>BIMS College, Bangalore Currently Pursuing BCA.</p>
         <p className='resume-degree2'>Dayananda Sagar College, Bangalore(2ndPuc), Commerce CGPA: 2.88/4</p>
         <p className='resume-degree3'>ST.Ann’s Indian High School, Bangalore(10th) CGPA: 2.60/4</p>
      </div>  


      <div className='projects'>
         <AiFillProject className='resume-project' />
         <h1 className='project'>Projects</h1>
         <hr className='line-10'></hr>
         <hr className='line-11'></hr>
          <span className='project1-dot'></span>
          <span className='project2-dot'></span>
          <span className='project3-dot'></span>
         <a className='project1' href='https://disney-hotstarclone.netlify.app/'>HOTSTAR - CLONE</a>
         <a className='project2' href='https://chiranjitmu.github.io/Banaoproject/'>BOOTSTRAP - PROJECT</a>
      </div>   

      <div className='skills'>
         <AiFillProject className='resume-skill' />
         <h1 className='skill'>Skills</h1>
         <hr className='line-12'></hr>
         <h1 className='skill-react'>React 75%</h1>
         <hr className='line-13'></hr>
         <hr className='line-14'></hr>
         <h1 className='skill-html'>HTML 85%</h1>
         <hr className='line-15'></hr>
         <hr className='line-16'></hr>
         <h1 className='skill-css'>CSS 85%</h1>
         <hr className='line-17'></hr>
         <hr className='line-18'></hr>
         <h1 className='skill-javascript'>JavaScript 70%</h1>
         <hr className='line-19'></hr>
         <hr className='line-20'></hr>
           <h1 className='skill-cplus'>C++ 80%</h1>
         <hr className='line-21'></hr>
         <hr className='line-22'></hr>
      </div>
    </div>
    </Fade>
  )
}

export default Resume