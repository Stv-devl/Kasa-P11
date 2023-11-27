import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <nav className="nav-container">
      <img src="../Logo-desktop.png" alt="logo-Kasa" />
      <div className="nav-wrapper">
        <NavLink to="/home">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </div>
    </nav>
  );
};

export default Banner;
