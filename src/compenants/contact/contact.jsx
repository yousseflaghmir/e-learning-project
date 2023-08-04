import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill, BsFillQuestionCircleFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const contact = () => {
  return (
    
    <div className="paddings innerWidth flexCenter c-container">
        {/*left side */}
        <div className="flexColStart c-left">
            <span className="orangeText">Our Contacts</span>
            <span className="primaryText">Easy to Contact us</span>
            <span className="secondaryText">We always ready to help you by providing the best service </span>
        

        <div className="flexColStart contactmodes">

            {/* first row*/}
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                          <MdCall size={25}/>

                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Call</span>
                            <span className="secondaryText">+212 641 174 791</span>
                        </div>
                    </div>
                  <div className="flexCenter button">Call Now</div>
                </div>

            {/*second mode la carte de chat*/}
            <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                          <BsFillChatDotsFill size={25}/>

                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Chat</span>
                            <span className="secondaryText">+212 641 174 791</span>
                        </div>
                    </div>
                  <div className="flexCenter button">Chat Now</div>
            </div>    

            
            </div>

            {/* second row */}
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                          <BsFillChatDotsFill size={25}/>

                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Video Call</span>
                            <span className="secondaryText">+212 641 174 791</span>
                        </div>
                    </div>
                  <div className="flexCenter button">Video Call Now</div>
                </div>

            {/*fourth mode*/}
            <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                          <HiChatBubbleBottomCenter size={25}/>

                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Message</span>
                            <span className="secondaryText">+212 641 174 791</span>
                        </div>
                    </div>
                  <div className="flexCenter button">Message Now</div>
            </div>    

            
            </div>
        </div>
        
        
        
        
        
        </div>

        {/*right side */}
        <div className="c-right">
            <div className="image-container">
                <img src="./contact1.png" alt="" />
            </div>
        </div>

    </div>
  )
}

export default contact