import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="nav-container">
      <img src="" alt="logo-Kasa" />
      <div className="nav-wrapper">
        <NavLink>Accueil</NavLink>
        <NavLink>A propos</NavLink>
      </div>
    </div>
  );
};

export default Banner;
