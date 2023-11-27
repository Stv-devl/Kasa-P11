import Cards from "../components/Cards";

const Home = ({ data }) => {
  return (
    <section className="page">
      <div className="image-wrapper">
        <h2>Chez vous, partout et ailleurs</h2>
        <img className="seaImage" src="./img.png" alt="sea-and-rock" />
      </div>
      {data && <Cards data={data} />}
    </section>
  );
};
export default Home;
