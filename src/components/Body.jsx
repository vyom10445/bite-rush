import React from "react";
import Card from "./Card";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function Body() {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
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

      // Flatten all restaurants from all cards
      const restaurants = allRestaurantCards.flatMap(
        (card) => card.card.card.gridElements.infoWithStyle.restaurants
      );

      setRestaurantList(restaurants);
    } catch (error) {
      console.log("API failed, using mock data");
      setRestaurantList(resList);
    }
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

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
