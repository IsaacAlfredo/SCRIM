import { Header } from "../../../components/Header";
import { MemberCard } from "../../../components/Members List/MemberCard";
import { MembersNav } from "../../../components/Members List/MembersNav";
export function NotAssignedMembers() {
  return (
    <div className="NotAssignedMembers">
      <Header />
      <main>
        <MembersNav />
        <section>
          <h1>Membros não atribuidos</h1>
          <MemberCard memberName="joao" memberRole="Não Atribuido" />
        </section>
      </main>
    </div>
  );
}
