import React from "react";
import './Hero.css'
import CountUp from "react-countup";
import {motion, spring} from 'framer-motion'
const Hero = ()=> {
return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            
            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1
                    initial= {{y:"2rem", opacity:0}}
                    animate={{ y:0 ,opacity : 1 }}
                    transition={{
                        duration:2,delay:.3,
                        type:"spring"
                    }}
                    >
                    Where <br/> Storeino <br/> Meets Learning                  
                    </motion.h1>
                    

                </div>
                <motion.div className=" flexColStart hero-des"
                 initial= {{x:"5rem", opacity:0}}
                 animate={{ x:0 ,opacity : 1 }}
                 transition={{
                     duration:2,delay:.3,
                     type:"spring"}}
                 
                >
                    <span className="secondaryText">"Discover Your Brilliance: LearnConnect - Illuminating Minds, Empowering Lives."</span>
                    <span className="secondaryText">"The key to learning is not attending classes, but finding your own way."</span>
                </motion.div>

                <div className="search-bar">
                    <input type="text" />
                    <button className="butto">Search</button>
                </div>

                <div className="flexCenter stats">
                     <div className="flexColCenter stat">
                        
                        <span> <CountUp start={100} end={1000} duration={20}/>
                        <span>+</span></span>  
                        <span className="secondaryText">Premium Courses </span>    

                        
                     </div>
                

                
                     <div className="flexColCenter stat">
                        
                        <span> <CountUp start={100} end={2000} duration={20}/>
                        <span>+</span></span>  
                        <span className="secondaryText">Happy student </span>    
                    
                     </div>

                
                     <div className="flexColCenter stat">
                        
                        <span> <CountUp end={10}/>
                        <span>+</span></span>  
                        <span className="secondaryText">university </span>    

                     </div> 
                    </div>
                
            </div>
          {/* right side */}

            <div className="flexCenter hero-right">
                <motion.div 
                initial= {{x:"2rem", opacity:0}}
                animate={{ x:0 ,opacity : 1 }}
                transition={{
                    duration:2,delay:.3,
                    type:"spring"}}
                
                className="image-container">
                    <img src="./hero-image1.png" alt="" />   
                </motion.div>
            </div>        
        
        
        </div>    
    </section>
  )
}

export default Hero