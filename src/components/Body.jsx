import React from "react";
import Card from "./Card";
import resList from "../utils/mockData";
import { useState } from "react";

function Body() {
  const [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="body">
      <div
        className="filter-btn"
        onClick={() => {
          const filteredList = resList.filter((res) => res.info.avgRating > 4);
          setRestaurantList(filteredList);
        }}
      >
        Filter Top Restaurants
      </div>
      <div className="resContainer">
        {restaurantList.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
