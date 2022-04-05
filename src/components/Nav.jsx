import React, { useEffect, useState } from 'react';
import "../styles/Nav.css";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/Projects">Projects</Link>
                    <Link className='nav-link' to="/Contact">Contact</Link>
                </nav>
            }
            <FaBars className='dropdown-button' onClick={handleClick}/>
        </div>
            {viewDropDown && 
                <nav className="dropdown-links">
                    <Link className='dropdown-link' to="/">Home</Link>
                    <Link className='dropdown-link' to="/Projects">Projects</Link>
                    <Link className='dropdown-link' to="/Contact">Contact</Link>
                </nav>
            }
    </header>
  )
}

export default Nav