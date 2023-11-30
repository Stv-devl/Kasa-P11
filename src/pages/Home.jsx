import Cards from "../components/Cards";

const Home = ({ data }) => {
  return (
    <main className="main-home">
      <div className="banner-image-wrapper">
        <h2 className="home-page-title">Chez vous, partout et ailleurs</h2>
        <img className="seaImage" src="./img.png" alt="sea-and-rock" />
      </div>
      {data && <Cards data={data} />}
    </main>
  );
};
export default Home;
