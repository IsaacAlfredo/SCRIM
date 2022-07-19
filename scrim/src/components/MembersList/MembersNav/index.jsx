import { Link } from "react-router-dom";
import "./style.css";

export function MembersNav() {
  return (
    <nav id="MembersNav">
      <Link to="/staff" className="membersNavLink" id="MNFirstLink">
        Staff
      </Link>
      <Link to="/player" className="membersNavLink">
        Jogadores
      </Link>
      <Link to="/notassigned" className="membersNavLink">
        Não Atribuidos
      </Link>
      <Link to="/newmember" className="membersNavLink">
        Novo Membro
      </Link>
    </nav>
  );
}
