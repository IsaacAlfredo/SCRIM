import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import "./style.css";

export function TeamInfo() {
  return (
    <div className="TeamInfo">
      <Header />
      <main id="teamInfoMain">
        <header id="teamHeader">
          <img
            id="teamLogo"
            src="https://upload.wikimedia.org/wikipedia/pt/2/23/Vivo_Keyd.png"
            alt="Logo time"
          />
          <h1 className="pageH1">Nome time</h1>
        </header>
        <nav id="teamNav">
          <Link to="/lineup">Line Ups</Link>
          <Link to="/staff">Membros</Link>
        </nav>
      </main>
    </div>
  );
}
