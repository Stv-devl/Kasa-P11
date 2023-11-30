import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="cards-container">
      {data &&
        data.map((item) => (
          <Link to={`/rent/${item.id}`} className="card-wrapper">
            <img src={item.cover} alt={`${item.title}-appartement`} />
            <p className="appartement-title">{item.title}</p>
          </Link>
        ))}
    </div>
  );
};

export default Cards;
