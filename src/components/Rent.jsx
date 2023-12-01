import Collapses from "./Collapses";
import Carousel from "./Carousel";
import Rating from "./Rating";
import Profil from "./Profil";
import Tags from "./Tags";

const Rent = ({ data }) => {
  const collapseData = [
    { dataDrop: data.description, title: "Description", type: "desc" },
    { dataDrop: data.equipments, title: "Équipements", type: "list" },
  ];

  return (
    <>
      <div className="carousel-container">
        <Carousel data={data} />
      </div>

      <div className="description-container">
        <div className="title-tag-container">
          <div className="title-wrapper">
            <h2 className="appartement-page-title">{data.title}</h2>
            <p className="location">{data.location}</p>
          </div>
          <div className="tag-wrapper">
            <Tags data={data} />
          </div>
        </div>

        <div className="profil-rate-container">
          <div className="profil-wrapper">
            <Profil data={data} />
          </div>
          <div className="star-wrapper">
            <Rating data={data} />
          </div>
        </div>
      </div>

      {/* for dont repeat collapse-wrapper 2 times*/}
      <div className="collapse-container">
        {collapseData.map((collapseData, index) => (
          <div key={`collapse-wrapper${index}`} className="collapse-wrapper">
            <Collapses
              dataDrop={collapseData.dataDrop}
              title={collapseData.title}
              type={collapseData.type}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Rent;
