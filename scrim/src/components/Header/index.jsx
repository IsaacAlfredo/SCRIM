import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1>SCRIM</h1>
      <nav>
        <Link to="/profile">Perfil</Link>
        <Link to="/createteam">Meu Time</Link>
        <a href="">Buscar scrims</a>
      </nav>
      <strong>Nick</strong>
      <img src="" alt="Foto de Perfil" />
    </header>
  );
}
