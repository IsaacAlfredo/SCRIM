import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

export function TeamMembers() {
  return (
    <div className="TeamMembers">
      <Header />
      <main>
        <nav>
          <Link>Staff</Link>
          <Link>Jogadores</Link>
          <Link>Não Atribuidos</Link>
          <Link>Novo Membro</Link>
        </nav>
      </main>
    </div>
  );
}
