import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div className="cards-container">
      {data && data.map((item) => <Card key={item.id} data={item} />)}
    </div>
  );
};

export default Cards;
