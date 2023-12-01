import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <header>
      <img src="../Logo-desktop.png" alt="logo-Kasa" className="logo" />
      <nav className="nav-wrapper">
        <NavLink to="/home">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  );
};

export default Banner;
