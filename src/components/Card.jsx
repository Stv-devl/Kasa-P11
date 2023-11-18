import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card-wrapper">
      <img src={data.cover} alt={`${data.title}-appartement`} />
      <p>{data.title}</p>
    </div>
  );
};

export default Card;
