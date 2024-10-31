import React, { useState } from "react";
import img from './Images/scroll5.png';
import "./Card.css";

const Card = () => {
  
  return (
    <div>
      <div className="testimonial-section">
        <h3>
          <span className="mobile">Mobile</span>Stock
        </h3>
      </div>
      <div className="testimonial-cards">
        <div className="card-full">
          <img src={img} />
          <div className="card-text">
            <h4>Iphone 14 pro Max</h4>
            <p>Apple Iphone 14 pro 512GB Gold(MQ233)</p>
          </div>
        </div>
        <div className="card-full">
          <img src={img} />
          <div className="card-text">
            <h4>Iphone 14 pro Max</h4>
            <p>Apple Iphone 14 pro 512GB Gold(MQ233)</p>
          </div>
        </div>
        <div className="card-full">
          <img src={img} />
          <div className="card-text">
            <h4>Iphone 14 pro Max</h4>
            <p>Apple Iphone 14 pro 512GB Gold(MQ233)</p>
          </div>
        </div>
        <div className="card-full">
          <img src={img} />
          <div className="card-text">
            <h4>Iphone 14 pro Max</h4>
            <p>Apple Iphone 14 pro 512GB Gold(MQ233)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
