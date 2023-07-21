import React from "react";
import './Hero.css'
import CountUp from "react-countup";
const Hero = ()=> {
return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            
            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                    Where <br/> Curiosity <br/> Meets Learning                  
                    </h1>
                    

                </div>
                <div className=" flexColStart hero-des">
                    <span>"Discover Your Brilliance: LearnConnect - Illuminating Minds, Empowering Lives."</span>
                    <span>"The key to learning is not attending classes, but finding your own way."</span>
                </div>

                <div className="search-bar">
                    <input type="text" />
                    <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">
                     <div className="flexColStart stat">
                        
                        <span> <CountUp start={100} end={1000} duration={20}/>
                        <span>+</span></span>  
                        <span >Premium Courses </span>    

                        
                     </div>
                </div>

                <div className="flexCenter stats">
                     <div className="flexColStart stat">
                        
                        <span> <CountUp start={100} end={2000} duration={20}/>
                        <span>+</span></span>  
                        <span >Happy student </span>    

                        
                     </div>
                </div>

                <div className="flexCenter stats">
                     <div className="flexColStart stat">
                        
                        <span> <CountUp start={1} end={10} duration={4}/>
                        <span>+</span></span>  
                        <span >university </span>    

                        
                     </div>
                </div>
            </div>
          {/* right side */}

            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />   
                </div>
            </div>        
        
        
        </div>    
    </section>
  )
}

export default Hero