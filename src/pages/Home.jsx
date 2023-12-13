import Cards from "../components/Cards";
import Datas from "../services/Datas";

const Home = () => {
  const { data } = Datas();

  return (
    <main>
      <div className="banner-image-wrapper">
        <h2 className="home-page-title">Chez vous, partout et ailleurs</h2>
        <img className="seaImage" src="./img.png" alt="sea-and-rock" />
      </div>
      {data && <Cards data={data} />}
    </main>
  );
};
export default Home;
