import { Link } from "react-router-dom";
import "./style.css";

export function Header() {
  return (
    <header className="appHeader">
      <h1 className="headerTitle">SCRIM</h1>
      <div className="headerCard">
        <strong>Nick</strong>
        <img src="" alt="Foto de Perfil" />
      </div>
      <nav>
        <Link to="/profile" className="headerLink">
          Perfil
        </Link>
        <Link to="/createteam" className="headerLink">
          Meu Time
        </Link>
        <a href="" className="headerLink">
          Buscar scrims
        </a>
      </nav>
    </header>
  );
}
