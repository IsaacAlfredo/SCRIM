import { Link } from "react-router-dom";

export function MembersNav() {
  return (
    <nav>
      <Link>Staff</Link>
      <Link>Jogadores</Link>
      <Link>Não Atribuidos</Link>
      <Link>Novo Membro</Link>
    </nav>
  );
}
