import { Link } from "react-router-dom";
import "./style.css";

export function Header() {
  return (
    <header className="appHeader">
      <h1 className="headerTitle">SCRIM</h1>
      <div id="headerCard">
        <strong id="headerNick">Nick</strong>
        <img
          id="profileImageHeader"
          src="https://i.pinimg.com/564x/73/9b/92/739b9257970851cb121f0f6b4dc7e5cb.jpg"
          alt="Foto de Perfil"
        />
      </div>
      <nav id="headerNav">
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
