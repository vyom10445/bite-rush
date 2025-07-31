import React from "react";

function Card() {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
        alt="Restaurant Image"
      />
      <div className="res-details">
        <h3>Chinese Wok</h3>
        <h5>Chinese , North Indian , Italian</h5>
        <h5 className="rating">4.1 stars</h5>
        <h5>38 Minutes</h5>
      </div>
    </div>
  );
}

export default Card;
