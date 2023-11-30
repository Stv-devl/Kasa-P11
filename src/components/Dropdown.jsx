import { useState } from "react";

const Dropdown = ({ dataDrop, title, type }) => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

  return (
    <>
      <div
        className="menu-wrapper"
        onClick={() => setDropDownIsOpen(!dropDownIsOpen)}
      >
        <div className="dropdown-title">{title}</div>
        <i
          className={`fa-solid fa-chevron-up${dropDownIsOpen ? " turn" : ""}`}
        ></i>
      </div>
      <ul className={`dropdown ${dropDownIsOpen ? "active" : ""}`}>
        {type === "desc" ? (
          <li className="dropdown-list">{dataDrop}</li>
        ) : (
          dataDrop.map((equipment, index) => (
            <li key={index} className="dropdown-list">
              {equipment}
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Dropdown;
