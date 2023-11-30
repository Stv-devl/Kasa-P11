import Rent from "../components/Rent";
import { useParams } from "react-router-dom";

const Appartement = ({ data }) => {
  let { id } = useParams();

  return (
    <main>
      {data &&
        data
          .filter((el) => el.id === id)
          .map((item) => <Rent key={item.id} data={item} />)}
    </main>
  );
};

export default Appartement;
