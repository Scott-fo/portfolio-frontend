import React, { useEffect, useState } from 'react';
import "../styles/ProjectsSection.css";
import data from "../testdata.json"
import Modal from './Modal';

const ProjectsSection = () => {
  const [ showModal, setShowModal ] = useState(false);
  const [ selectedProject, setSelectedProject ] = useState(null);

  const handleClick = (e) => {
    setShowModal(true);
    setSelectedProject(data.filter((project) => project.title === e.target.id));
  };

  useEffect(() => {
    // console.log(selectedProject)
  }, [selectedProject])

  const projects = data.map((project) => {
    return (
        <div className='projects-container' id ={project.title} key={project.title} onClick={(e) => handleClick(e)}>
            <img id ={project.title} src={project.image} alt="" className='project-image'/>
            <div className="projects-content" id ={project.title} >
                <h2 className='project-title' id ={project.title}>{project.title}</h2>
                <h2 className='project-summary' id ={project.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias omnis numquam, fuga libero vitae repudiandae quos assumenda laborum velit, hic nobis ratione nam est! Excepturi sit totam officia numquam dolores!</h2>
                <div className="button-container" id ={project.title}>
                    <button className='project-button'>View Site</button>
                    <button className='project-button'>View Code</button>
                </div>
            </div>
        </div>
    );
  })
  return (
    <div className='rendered-projects'>
        {projects}
        {showModal && <Modal showModal={showModal} setShowModal={setShowModal} selectedProject={selectedProject} />}
    </div>
  )
}

export default ProjectsSection