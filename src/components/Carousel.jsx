import React, { useState } from "react";

const Carousel = ({ data }) => {
  const { pictures, title } = data;
  const [indexNumber, setIndexNumber] = useState(0);
  const showChevrons = pictures.length !== 1;

  return (
    <div className="image_wrapper">
      <img
        className="appartement-image"
        src={pictures[indexNumber]}
        alt={`${title}-appartement`}
      />
      {showChevrons && (
        <>
          <i
            className="fa-solid fa-chevron-right "
            onClick={() => setIndexNumber((indexNumber + 1) % pictures.length)}
          ></i>
          <i
            className="fa-solid fa-chevron-left "
            onClick={() =>
              setIndexNumber(
                (indexNumber - 1 + pictures.length) % pictures.length
              )
            }
          ></i>
          <span className="counter">
            {indexNumber + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
};
export default Carousel;
