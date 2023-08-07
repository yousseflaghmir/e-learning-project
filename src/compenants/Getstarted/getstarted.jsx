import React from 'react'
import './getstarted.css'
import { color } from 'framer-motion'

const getstarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className="primaryText" >Get Started with Storeino</span>
                <span className="secondaryText" >Subscribe and find super attractive courses
                  <br/> Find your courses now </span>
                  <button className="button">Get Started
                    <a href="mailto:laghmeryoussef@gmail.com"></a>
                  </button>
             </div>
        </div>
    </section>
  )
}

export default getstarted