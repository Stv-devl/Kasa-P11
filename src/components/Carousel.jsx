import React, { useState } from "react";

const Carousel = ({ data }) => {
  const [indexNumber, setIndexNumber] = useState(0);

  return (
    <div className="image_wrapper">
      <img
        className="appartement-image"
        src={data.pictures[indexNumber]}
        alt={`${data.title}-appartement`}
      />
      <i
        className="fa-solid fa-chevron-right "
        onClick={() => setIndexNumber((indexNumber + 1) % data.pictures.length)}
      ></i>
      <i
        className="fa-solid fa-chevron-left "
        onClick={() =>
          setIndexNumber(
            (indexNumber - 1 + data.pictures.length) % data.pictures.length
          )
        }
      ></i>
      <span className="counter">
        {indexNumber + 1}/{data.pictures.length}
      </span>
    </div>
  );
};

export default Carousel;
