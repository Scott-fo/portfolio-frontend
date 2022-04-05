import React from 'react';
import "../styles/About.css";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className='about-container'>
        <section className='about-section-image'>
            <img className='headshot' src="./images/profile.jpg" alt="" />
            <div className="social-icon-container">
                <a className='social-icon' id='github' href="https://github.com/Scott-fo"><FaGithub /></a> 
                <a className='social-icon' id='twitter' href='https://twitter.com/Scott_fo1'><FaTwitter /></a>
                <a className='social-icon' id='linkedin' href='https://www.linkedin.com/in/scottfo/'><FaLinkedin /></a>
                <a className='social-icon' id='mail' href='mailto: scottfo@live.com'><FaEnvelope /></a>
            </div>
        </section>
        <section className='about-section-description'>
            <h2 className='about-intro'>Hello, My Name Is</h2>
            <span className='about-name'>Scott <span className='colour-about-name'>Foster</span></span>
            <span className='about-job-title'>Full Stack Developer</span>
            <span>I am a recent Electronic Engineering graduate looking to grow my career as a developer. I have many years of coding experience, with my current focus on building full stack projects. I am open to remote or hybrid work in front end, back end, or full stack positions.</span>
        </section>
    </div>
  )
}

export default About