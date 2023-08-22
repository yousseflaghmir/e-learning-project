import React from "react";
import data from "../../utils/slider1.json";
import { sliderSet } from '../../utils/commun';
import "./categories.css";
const categories = () => {
  return (
    <section>
      <div className="paddings innerWidth r-container " >
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
        <div className="slider" {...sliderSet} >
          {data.map((card, i) => (
              <div key={i} className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="primaryText">{card.name}</span>
              </div>
          ))}
        </div>
      </div>
    </section>
  
  );
};

export default categories;
