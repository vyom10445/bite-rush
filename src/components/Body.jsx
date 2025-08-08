import React from "react";
import Card from "./Card";
import resList from "../utils/mockData";
import { onState } from "react";

const [restaurantList, setRestaurantList] = onState(resList);

function Body() {
  return (
    <div className="body">
      <div
        className="filter-btn"
        onClick={() => {
          const filteredList = resList.map((res) => res.info.avgRating > 4);
          setRestaurantList(filteredList);
        }}
      >
        Filter Top Restaurants
      </div>
      <div className="resContainer">
        {resList.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
