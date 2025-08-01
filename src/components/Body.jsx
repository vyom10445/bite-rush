import React from "react";
import Card from "./Card";
import resList from "../utils/mockData";

function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resContainer">
        {resList.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
