import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Developer from './components/Developer'
import Sponsor from './components/Sponsor'
import Footer from './components/Footer'
import Predict from './components/Predict'

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/developer' element={<Developer/>} />
        <Route path='/sponsor' element={<Sponsor/>} />
        <Route path="/predict" element={<Predict />} />
      </Routes>

      <Footer/>

    </div>
  )
}

export default App