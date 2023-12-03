import Carousel from "./Carousel";
import Rating from "./Rating";
import Profil from "./Profil";
import Tags from "./Tags";
import CollapsesWrapper from "./CollapsesWrapper";

const Rent = ({ data }) => {
  const { title, location, description, equipments, tags, host, rating } = data;
  const collapseData = [
    { description: description, title: "Description", type: "desc" },
    { description: equipments, title: "Équipements", type: "list" },
  ];

  return (
    <>
      <div className="carousel-container">
        <Carousel data={data} />
      </div>

      <div className="description-container">
        <div className="title-tag-container">
          <div className="title-wrapper">
            <h2 className="appartement-page-title">{title}</h2>
            <p className="location">{location}</p>
          </div>
          <div className="tag-wrapper">
            <Tags data={{ tags }} />
          </div>
        </div>

        <div className="profil-rate-container">
          <div className="profil-wrapper">
            <Profil data={{ host }} />
          </div>
          <div className="star-wrapper">
            <Rating data={{ rating }} />
          </div>
        </div>
      </div>

      <div className="collapse-container">
        <CollapsesWrapper collapseData={collapseData} />
      </div>
    </>
  );
};

export default Rent;
