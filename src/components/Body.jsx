import React from "react";
import Card from "./Card";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

function Body() {
  const [restaurantList, setRestaurantList] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.46310&lng=80.34790&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  };

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
