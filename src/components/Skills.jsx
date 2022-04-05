import React from 'react';
import "../styles/Skills.css";
import { SiJavascript, SiCss3, SiHtml5, SiNextdotjs, SiTailwindcss, SiRedux, SiReact, SiPython, SiJava, SiExpress, SiMongodb, SiGit, SiDocker, SiArduino, SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Skills = () => {
  return (
    <div className='skills-container'>
        <h1 className='skills-title'><span className='skills-color'>Skills</span> Summary</h1>
        <ul className="skills-section-wrapper">
            <section className='skills-left-section'>
                <h2 className='skill-category'>Programming Languages: </h2>
                <div className="skills-list-container">
                    <figure className='skill-plus-text'>
                        <SiPython id='python' className='skill'/>
                        <figcaption className='skill-caption'>Python</figcaption>
                    </figure>
                    <figure className='skill-plus-text'>
                        <SiJava id='java' className='skill'/>
                        <figcaption className='skill-caption'>Java</figcaption>
                    </figure>
                    <figure className='skill-plus-text'>
                        <SiJavascript id='javascript' className='skill'/>
                        <figcaption className='skill-caption'>JavaScript</figcaption>
                    </figure>
                    <figure className='skill-plus-text'>
                        <SiTypescript id='typescript' className='skill'/>
                        <figcaption className='skill-caption'>TypeScript</figcaption>
                    </figure>
                    <figure className='skill-plus-text'>
                        <SiArduino id='arduino' className='skill'/>
                        <figcaption className='skill-caption'>C++/Arduino</figcaption>
                    </figure>
                </div>
                <h2 className='skill-category'>DevOps: </h2>
                <div className='skills-list-container'>
                    <figure className='skill-plus-text'>
                        <SiGit id='git' className='skill'/>
                        <figcaption className='skill-caption'>Git</figcaption>
                    </figure>
                    <figure className='skill-plus-text'>
                        <SiDocker id='docker' className='skill'/>
                        <figcaption className='skill-caption'>Docker</figcaption>
                    </figure>
                </div>
            </section>
            
            <section className='skills-right-section'>
                <h2 className='skill-category'>Front End Development: </h2>
                <div className='skills-list-container'>
                    <figure className='skill-plus-text'>
                        <SiReact id='react' className='skill'/>
                        <figcaption className='skill-caption'>React</figcaption>
                    </figure>
                    <figure className='skill-plus-text'>
                        <SiNextdotjs id='next' className='skill'/>
                        <figcaption className='skill-caption'>Next</figcaption>
                    </figure>
                    <figure className='skill-plus-text'>
                        <SiJavascript id='javascript' className='skill'/>
                        <figcaption className='skill-caption'>JavaScript</figcaption>
                    </figure>
                    <figure className='skill-plus-text'>
                        <SiHtml5 id='html' className='skill'/>
                        <figcaption className='skill-caption'>HTML</figcaption>
                    </figure>
                    <figure className='skill-plus-text'>
                        <SiCss3 id='css' className='skill'/>
                        <figcaption className='skill-caption'>CSS</figcaption>
                    </figure>
                    <figure className='skill-plus-text'>
                        <SiTailwindcss id='tailwind' className='skill'/>
                        <figcaption className='skill-caption'>Tailwind</figcaption>
                    </figure>
                    <figure className='skill-plus-text'>
                        <SiRedux id='redux' className='skill'/>
                        <figcaption className='skill-caption'>Redux</figcaption>
                    </figure>
                </div>
                <h2 id='backend' className='skill-category'>Back End Development: </h2>
                <div className='skills-list-container'>
                    <figure className='skill-plus-text'>
                        <FaNodeJs id='node' className='skill'/>
                        <figcaption className='skill-caption'>NodeJS</figcaption>
                    </figure>
                    <figure className='skill-plus-text'>
                        <SiExpress id='express' className='skill'/>
                        <figcaption className='skill-caption'>Express</figcaption>
                    </figure>
                    <figure className='skill-plus-text'>
                        <SiMongodb id='mongodb' className='skill'/>
                        <figcaption className='skill-caption'>MongoDB</figcaption>
                    </figure>
                </div>
            </section>
        </ul>
    </div>
  )
}

export default Skills