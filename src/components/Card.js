import React from "react";
import star from "./image/Star.png";

import photo from "./image/swim.png";
const Card = () => {
  return (
    <>
      <div className="card">
        <img src={photo} alt="photo" />
        <div>
          <img src={star} alt="star" />
          <span>5.0</span>
          <span>(6)‧ </span>
          <span>USA</span>
          <p>Life lessons with Katie Zaferes</p>
          <p>
            <span className="bold">From $136</span> / person
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
