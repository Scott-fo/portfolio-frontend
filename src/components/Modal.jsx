import React from 'react'
import "../styles/Modal.css"
const Modal = ({ setShowModal, showModal, selectedProject}) => {
    return (
        <div>
            {showModal && <div className="modal-container" onClick={() => setShowModal(false)}>
                <div className="modal-container-inner">
                    <div className='modal-projects-container'>
                        <img src={selectedProject[0].image} alt="" className='modal-project-image'/>
                        <div className="modal-projects-content">
                            <h2 className='modal-project-title'>{selectedProject[0].title}</h2>
                            <div className='modal-description-wrapper'>
                                <h2 className='modal-project-description'>{selectedProject[0].description}</h2>
                            </div>
                            <div className="modal-button-container">
                                {selectedProject[0].active_link && <a href={selectedProject[0].active_link}><button className='project-button' id='project-button'>View Site</button></a>}
                                <a href={selectedProject[0].source_code}><button className='project-button' id='project-button'>View Code</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Modal