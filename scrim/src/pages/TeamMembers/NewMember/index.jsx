import { Header } from "../../../components/Header";
import { MembersNav } from "../../../components/Members List/MembersNav";

export function NewMember() {
  return (
    <div className="NewMember">
      <Header />
      <main>
        <MembersNav />
        <h1>Convide um novo membro para a equipe</h1>
        <input type="text" placeholder="Nome de Usuário" />
        <button>Enviar convite</button>
        <small>Convite enviado!</small>
      </main>
    </div>
  );
}
