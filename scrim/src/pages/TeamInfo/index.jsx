import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

export function TeamInfo(props) {
  return (
    <div className="TeamInfo">
      <Header />
      <main>
        <header>
          <img src={props.teamLogo} alt={`Logo ${props.teamName}`} />
          <h1>{props.teamName}</h1>
        </header>
        <nav>
          <Link>Line Ups</Link>
          <Link>Membros</Link>
        </nav>
      </main>
    </div>
  );
}
