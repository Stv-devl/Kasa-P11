import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <h1 className="error">404</h1>
      <h2 className="oups">Oups! La page que vous demandez n'existe pas.</h2>
      <Link to={`/home`} className="backHome">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
};

export default Error;
