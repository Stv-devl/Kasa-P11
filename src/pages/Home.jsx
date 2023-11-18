import Api from "../components/Api";
import Cards from "../components/Cards";

const Home = ({ data }) => {
  return (
    <div>
      <img src="" alt="sea-and-rock" />
      {data && <Cards data={data} />}
    </div>
  );
};
export default Home;
