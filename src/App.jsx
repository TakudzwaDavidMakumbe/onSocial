import React from 'react'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Services from './pages/Services'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </Router>

  )
}

export default App
