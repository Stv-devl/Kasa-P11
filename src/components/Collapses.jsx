import { useState } from "react";

const Collapses = ({ description, title, type }) => {
  console.log(description);

  const [IsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="menu-wrapper" onClick={() => setIsOpen(!IsOpen)}>
        <div className="collapse-title">{title}</div>
        <i className={`fa-solid fa-chevron-up ${IsOpen ? "turn" : ""}`}></i>
      </div>
      <ul className={`collapse ${IsOpen ? "active" : ""}`}>
        {type === "desc" || type === "about" ? (
          <li className="collapse-list">{description}</li>
        ) : (
          description.map((equipment, index) => (
            <li key={`list${index}`} className="collapse-list">
              {equipment}
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Collapses;
