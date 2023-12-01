import React from "react";

const Profil = ({ data }) => {
  let splitName = data.host.name.split(" ");

  return (
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
  );
};

export default Profil;
