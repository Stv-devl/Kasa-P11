const Location = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>
        <img src={data.cover} alt={`${data.title}-appartement`} />
        <div className="flex">
          <h2>{data.title}</h2>
          <div className="profil-wrapper">
            <p className={data.host.name}></p>
            <img
              src={data.host.name}
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
          <div className="star-wrapper"></div>
        </div>
      </div>
      <p>{data.title}</p>
      <div className="dropdown-container">
        <div className="description-wrapper">{data.description}</div>
        <ul className="equipement-wrapper">
          {data.equipments.map((equipment, index) => (
            <li key={index} className="equipment">
              {equipment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Location;
