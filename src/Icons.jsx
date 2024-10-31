import React from "react";
import img1 from "./Images/scroll1.png";
import img2 from "./Images/scroll2.png";
import img3 from "./Images/scroll3.png";
import img6 from "./Images/scroll6.png";
import img7 from "./Images/scroll7.png";
import img9 from "./Images/scroll9.png";
import "./Icon.css";

const Icons = () => {
  return (
    <div>
      <div className="scroll-icons scroll">
        <div className="marquee ins-scroll">
          <ul className="marquee-content">
            <li>
              <img src={img1} alt="" />
            </li>
            <li>
              <img src={img2} alt="" />
            </li>
            <li>
              <img src={img3} alt="" />
            </li>

            <li>
              <img src={img6} alt="" />
            </li>
            <li>
              <img src={img7} alt="" />
            </li>

            <li>
              <img src={img9} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Icons;
