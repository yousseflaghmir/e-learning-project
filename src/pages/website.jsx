import React from 'react'
import Header from '../compenants/header/header'
import Hero from '../compenants/hero/hero'
import Programs from '../compenants/programs/programs'
import Courses from '../compenants/courses/courses'
import Value from '../compenants/value/value'
import Contact from '../compenants/contact/contact'
import Getstarted from '../compenants/Getstarted/getstarted'
import Footer from '../compenants/Footer/footer'

const website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradiant"/>
        
        <Hero/> 
      </div>
        <Programs/>
        <Courses/>
        <Value/> 
        <Contact/>   
        <Getstarted/>  
        
    </div>
  )
}

export default website