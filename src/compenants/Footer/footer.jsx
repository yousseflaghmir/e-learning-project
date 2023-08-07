import React from 'react'
import './footer.css'


const footer = () => {
  return (
    
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            
            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt='' width={120}/>
                <span className="secondaryText">Our vision is to make all people<br/> Learn and Discover</span>
            </div>

            {/* right side */}
            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText">Bab Al Madina Qr، 80000 Agadir</span>
                
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Courses</span>
                    <span>Our value</span>
                    <span>About Us</span>
                </div>

            </div>
        </div>
    </section>

  )
}

export default footer