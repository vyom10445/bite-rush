import React from "react";
import Card from "./Card";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

function Body() {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.46310&lng=80.34790&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    // Find all cards with restaurants and combine them
    const allRestaurantCards =
      json.data?.cards?.filter(
        (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
      ) || [];

    // map(extact restaurants from each card) Flatten all restaurants from all cards(flatten into single array ranther than multiple arrays inside array) .
    const restaurants = allRestaurantCards.flatMap(
      (card) => card.card.card.gridElements.infoWithStyle.restaurants
    );

    setRestaurantList(restaurants);
  };

  return (
    <div className="body">
      <div
        className="filter-btn"
        onClick={() => {
          const filteredList = restaurantList.filter(
            (res) => res.info.avgRating > 4
          );
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
