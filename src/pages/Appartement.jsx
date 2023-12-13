import Rent from "../components/Rent";
import { useParams } from "react-router-dom";
import Datas from "../services/Datas";
import Error from "./Error";

const Appartement = () => {
  const { data } = Datas();
  const { id } = useParams();

  const filterData = data && data.filter((el) => el.id === id);
  //if filterData is not null and length>0 , activate Rent composant else activate Error composant
  return (
    <main>
      {filterData && filterData.length > 0 ? (
        filterData.map((item) => <Rent key={item.id} data={item} />)
      ) : (
        <Error />
      )}
    </main>
  );
};

export default Appartement;
