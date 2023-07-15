import React from 'react'
import Fade from 'react-reveal/Fade';
import './About.css'

function About() {
  return (
    <Fade left>
    <div className='About'>
       <h1 className='about-logo'>About me</h1>
       <img src='mypic2.jpeg' alt='mypic' className='mypic2'/>
       <h2 className='about-greet'>HELLO!</h2>
        <p className='about-me'>
             I'm Chiranjit Mukherjee
             As a skilled React developer,
             I have a strong understanding
             of the framework and its ecosystem.
             I am able to create dynamic and
             responsive user interfaces, 
             utilizing the latest libraries
              and technologies..
        </p>
    </div>
    </Fade>
  )
}

export default About