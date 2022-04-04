import React, { useEffect, useState } from 'react';
import "../styles/Nav.css";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [ viewDropDown, setViewDropDown ] = useState(false);

  const handleClick = () => {
    setViewDropDown(!viewDropDown);
  }

  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth > 640) {
              setViewDropDown(false);
          }
      };
      
      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  })

  return (
    <header className='header-container'>
        <div className="nav-container">
            <div className="name">
                Scott Foster
            </div>
            {!viewDropDown && 
                <nav className="nav-links">
                    <p>Home</p>
                    <p>GitHub</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </nav>
            }
            <FaBars className='dropdown-button' onClick={handleClick}/>
        </div>
            {viewDropDown && 
                <nav className="dropdown-links">
                    <p>Home</p>
                    <p>GitHub</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </nav>
            }
    </header>
  )
}

export default Nav