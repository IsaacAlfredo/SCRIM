import { Header } from "../../../components/Header";
import { MemberCard } from "../../../components/MembersList/MemberCard";
import { MembersNav } from "../../../components/MembersList/MembersNav";
import "../style.css";

export function NotAssignedMembers() {
  return (
    <div className="NotAssignedMembers">
      <Header />
      <main className="memberMain">
        <MembersNav />
        <section className="memberSection">
          <h1>Membros não atribuidos</h1>
          <MemberCard memberName="joao" memberRole="Não Atribuido" />
        </section>
      </main>
    </div>
  );
}
