import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

export function TeamInfo() {
  return (
    <div className="TeamInfo">
      <Header />
      <main>
        <header>
          <img src="" alt="Logo time" />
          <h1>Nome time</h1>
        </header>
        <nav>
          <Link to="/lineup">Line Ups</Link>
          <Link to="/staff">Membros</Link>
        </nav>
      </main>
    </div>
  );
}
