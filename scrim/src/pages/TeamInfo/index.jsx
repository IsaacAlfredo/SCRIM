import { Link } from "react-router-dom";

export function TeamInfo(props) {
  return (
    <div className="TeamInfo">
      <main>
        <header>
          <img src="" alt={`logo ${props.teamName}`} />
          <h1>{props.teamName}</h1>
        </header>
        <nav>
          <Link>Line Ups</Link>
          <Link>Integrantes</Link>
        </nav>
      </main>
    </div>
  );
}
