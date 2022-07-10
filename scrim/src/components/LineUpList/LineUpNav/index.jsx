import { Link } from "react-router-dom";

export function LineUpNav() {
  return (
    <nav>
      <Link to="/lineup">Line Ups</Link>
      <Link to="/createlineup">Nova Line Up</Link>
    </nav>
  );
}
