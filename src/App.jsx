import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import { Element } from 'react-scroll'

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          {/* <Route
            path='/'
            element={
              <>
                <Element name="home">
                  <Home />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                <Element name="projects">
                <Projects />
              </Element>
              <Element name="contact">
                <Contact />
              </Element>
              </>
            }
          /> */}

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
