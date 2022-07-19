import { Header } from "../../../components/Header";
import { MembersNav } from "../../../components/MembersList/MembersNav";
import "./style.css";
import "../style.css";
export function NewMember() {
  return (
    <div className="NewMember">
      <Header />
      <main id="newMemberMain">
        <MembersNav />
        <section className="memberSection">
          <h1>Convide um novo membro </h1>
          <input type="text" placeholder="Nome de Usuário" />
          <button className="defaultButton">Enviar convite</button>
          <small>Convite enviado!</small>
        </section>
      </main>
    </div>
  );
}
