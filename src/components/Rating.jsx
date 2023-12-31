const Rating = ({ data: { rating } }) => {
  const getArray = (number) => {
    //or use array.from()
    let result = [];
    for (let i = 0; i < 5; i++) {
      i < number ? result.push(true) : result.push(false);
    }
    return result;
  };

  return (
    <>
      {getArray(rating).map((result, index) => (
        <div key={index} className="star">
          <i className={`fa-solid fa-star ${result ? "full" : "empty"}`}></i>
        </div>
      ))}
    </>
  );
};
export default Rating;
