import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="cards-container">
      {data &&
        data.map((data, index) => (
          <Link
            to={`/appartement/${data.id}`}
            key={`card ${index}`}
            className="card-wrapper"
          >
            <img src={data.cover} alt={`${data.title}-appartement`} />
            <p className="appartement-title">{data.title}</p>
          </Link>
        ))}
    </div>
  );
};

export default Cards;
