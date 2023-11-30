import Collapses from "./Collapses";
import Carousel from "./Carousel";
import Rating from "./Rating";

const Rent = ({ data }) => {
  let splitName = data.host.name.split(" ");

  return (
    <>
      <div className="carousel-container">
        <Carousel data={data} />
      </div>

      <div className="description-container">
        <div className="profil-container">
          <div className="title-wrapper">
            <h2 className="appartement-page-title">{data.title}</h2>
            <p className="location">{data.location}</p>
          </div>
          <div className="profil-wrapper">
            <p className="profil-name">
              {splitName[0]}
              <br />
              {splitName[1]}
            </p>
            <img
              className="profil-picture"
              src={data.host.picture}
              alt={`appartement de ${data.host.name}`}
            />
          </div>
        </div>
        <div className="rating-container">
          <ul className="tag-wrapper">
            {data.tags.map((tag, index) => (
              <li key={index} className="tag">
                {tag}
              </li>
            ))}
          </ul>
          <div className="star-wrapper">
            <Rating data={data} />
          </div>
        </div>
      </div>

      <div className="collapse-container">
        <div className="collapse-wrapper">
          <Collapses
            dataDrop={data.description}
            title="Description"
            type="desc"
          />
        </div>

        <div className="collapse-wrapper">
          <Collapses
            dataDrop={data.equipments}
            title="Équipements"
            type="list"
          />
        </div>
      </div>
    </>
  );
};

export default Rent;
