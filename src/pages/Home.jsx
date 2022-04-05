import React from 'react'
import Nav from "../components/Nav"
import About from '../components/About'
import Skills from '../components/Skills';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Nav />
      <About />
      <Skills />
    </div>
  )
}

export default Home