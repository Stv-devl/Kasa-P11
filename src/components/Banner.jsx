import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="nav-container">
      <img src="" alt="logo-Kasa" />
      <div className="nav-wrapper">
        <NavLink to="/home">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </div>
    </div>
  );
};

export default Banner;
