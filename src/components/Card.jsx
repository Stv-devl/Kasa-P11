import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={`/rent/${data.id}`} className="card-wrapper" data={data}>
      <img src={data.cover} alt={`${data.title}-appartement`} />
      <p>{data.title}</p>
    </Link>
  );
};

export default Card;
