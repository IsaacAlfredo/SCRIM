import { Link } from "react-router-dom";

export function MembersNav() {
  return (
    <nav>
      <Link to="/staff">Staff</Link>
      <Link to="/player">Jogadores</Link>
      <Link to="/notassigned">Não Atribuidos</Link>
      <Link to="/newmember">Novo Membro</Link>
    </nav>
  );
}
