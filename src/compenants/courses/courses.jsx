import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react" ;
import "swiper/css";
import data from "../../utils/slider.json";
import "./courses.css";

const courses = () => {
    return (
        
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="myspan orangeText">Best Choices</span>
                    <span className="primaryText">Popular Courses</span>
                </div>
            </div>
        </section>


    );
}

export default courses;