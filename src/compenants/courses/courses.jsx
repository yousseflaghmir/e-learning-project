import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react" ;
import "swiper/css";
import "./courses.css";
import data from "../../utils/slider.json";
import { sliderSettings } from '../../utils/commun';
import Propertycard from "../propertycard/propertycard"
const courses = () => {
    return (
        
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="myspan orangeText">Best Choices</span>
                    <span className="primaryText">Popular Courses</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <Propertycard card={card}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>


    );
}

export default courses;

const SliderButtons =()=>{
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
          <button onClick={()=> swiper.slidePrev()}>&lt;</button>
          <button onClick={()=> swiper.slideNext()}>&gt;</button>  
        </div>

    );   
};