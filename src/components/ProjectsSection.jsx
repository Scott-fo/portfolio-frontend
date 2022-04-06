import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../styles/ProjectsSection.css";
import Modal from './Modal';

const ProjectsSection = () => {
  const [ showModal, setShowModal ] = useState(false);
  const [ selectedProject, setSelectedProject ] = useState(null);
  const [ data, setData ] = useState(null);

  const handleClick = (e) => {
    setShowModal(true);
    setSelectedProject(data.filter((project) => project.title === e.target.id));
  };

  useEffect(() => {
    // console.log("Get selected project use effect")
  }, [selectedProject])

  const getProjects = async () => {
    try {
      await axios.get("http://localhost:8000/projects").then((response) => setData(response.data));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProjects();
    // console.log("Get projects use effect")
  }, [])

  const projects = data?.map((project) => {
    if(project.image) {
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
    } else {
      return null
    }
  })

  return (
    <div>
      {!projects && 
        <div className='loader-wrapper'>
          <div className='loader'></div>
        </div>
      }

      <div className='rendered-projects'>
        {projects}
        {showModal && <Modal showModal={showModal} setShowModal={setShowModal} selectedProject={selectedProject} />}
      </div>
    </div>
  )
}

export default ProjectsSection