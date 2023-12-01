import { useState } from "react";

const Collapses = ({ dataDrop, title, type }) => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="menu-wrapper" onClick={() => setIsOpen(!IsOpen)}>
        <div className="collapse-title">{title}</div>
        <i className={`fa-solid fa-chevron-up ${IsOpen ? "turn" : ""}`}></i>
      </div>
      <ul className={`collapse ${IsOpen ? "active" : ""}`}>
        {type === "desc" ? (
          <li className="collapse-list">{dataDrop}</li>
        ) : (
          dataDrop.map((equipment, index) => (
            <li key={index} className="collapse-list">
              {equipment}
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Collapses;
