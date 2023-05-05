import React from 'react'
import Navbaar from './components/Navbaar'

import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Services from "./components/pages/Services"
import Portfolio from "./components/pages/Portfolio"
import Blogs from "./components/pages/Blogs"
import Contact from "./components/pages/Contact"

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
  <div className=' bg-[#f1f3f7]  ' >

 
    
     <Router >
     <Navbaar />
      <Routes>
       <Route path='/' element={<Home /> } />
       <Route path='/about' element={<About /> } />
       <Route path='/services' element={<Services /> } />
       <Route path='/portfolio' element={<Portfolio /> } />
       <Route path='/blogs' element={<Blogs /> } />
       <Route path='/contact' element={<Contact /> } />
      </Routes>
      <Footer />
     </Router>
     </div> )
}

export default App