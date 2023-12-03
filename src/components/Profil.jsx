import React from "react";

const Profil = ({ data: { host } }) => {
  let splitName = host.name.split(" ");

  return (
    <div className="profil-wrapper">
      <p className="profil-name">
        {splitName[0]}
        <br />
        {splitName[1]}
      </p>
      <img
        className="profil-picture"
        src={host.picture}
        alt={`appartement de ${host.name}`}
      />
    </div>
  );
};

export default Profil;
