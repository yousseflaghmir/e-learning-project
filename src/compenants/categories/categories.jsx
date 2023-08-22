import React from "react";
import {Swiper, SwiperSlide,} from "swiper/react" ;
import "swiper/css";
import data from "../../utils/slider1.json";
import { sliderSet } from '../../utils/commun';
import "./categories.css";
const categories = () => {
  return (
    <section>
      <div className="paddings innerWidth r-container">
        <div className="j-head flexColStart">
          <span className="myspan orangeText">Best Categories</span>
          <span className="primaryText">A wide selection of categories</span>
          <span className="secondaryText">
            Choose from over 210,000 online course videos. New courses are added
            every month
            <br />
            check out{" "}
          </span>
        </div>
        <Swiper {...sliderSet}>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="primaryText">{card.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default categories;
