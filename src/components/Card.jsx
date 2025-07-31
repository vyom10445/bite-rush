import React from "react";

function Card({ resData }) {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt="Restaurant Image"
      />
      <div className="res-details">
        <h3>{resData.info.name}</h3>
        <h5>{resData.info.cuisines.join(", ")}</h5>
        <h5 className="rating">{resData.info.avgRating} stars</h5>
        <h5>{resData.info.costForTwo}</h5>
        <h5>{resData.info.sla.deliveryTime} Mins</h5>
      </div>
    </div>
  );
}

export default Card;
