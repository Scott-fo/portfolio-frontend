import React from 'react'
// import Nav from './components/Nav';
// import About from './components/About'
// import Skills from './components/Skills';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className='container'>
      {/* <Nav />
      <About />
      <Skills /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
