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
                            <h2 className='modal-project-title'>{selectedProject[0]?.title}</h2>
                            <h2 className='modal-project-description'>{selectedProject[0]?.description}</h2>
                            <div className="modal-button-container">
                                <button className='modal-project-button'>View Site</button>
                                <button className='modal-project-button'>View Code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Modal