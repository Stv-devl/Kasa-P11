const Rating = ({ data }) => {
  const getArray = (number) => {
    let result = [];
    for (let i = 0; i < 5; i++) {
      i < number ? result.push(true) : result.push(false);
    }
    return result;
  };

  return (
    <div>
      {getArray(data.rating).map((result, index) => (
        <div key={index} className="star">
          <i className={`fa-solid fa-star ${result ? "full" : "empty"}`}></i>
        </div>
      ))}
    </div>
  );
};

export default Rating;
