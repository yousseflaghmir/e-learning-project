import React from 'react'
import Hero from '../compenants/hero/hero'
import Programs from '../compenants/programs/programs'
import Courses from '../compenants/courses/courses'
import Value from '../compenants/value/value'
import Contact from '../compenants/contact/contact'
import Getstarted from '../compenants/Getstarted/getstarted'
import Categories from '../compenants/categories/categories'
const website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradiant"/>
        
        <Hero/> 
      </div>
        <Programs/>
        <Courses/>
        <Categories/>
        <Value/> 
        <Contact/>   
        <Getstarted/>  
        
    </div>
  )
}

export default website