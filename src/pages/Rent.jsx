import Location from "../components/Location";
import { useParams } from "react-router-dom";

const Rent = ({ data }) => {
  let { id } = useParams();

  return (
    <main className="appartements">
      {data &&
        data
          .filter((el) => el.id === id)
          .map((item) => <Location key={item.id} data={item} />)}
    </main>
  );
};

export default Rent;
