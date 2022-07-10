import { Header } from "../../../components/Header";
import { MemberCard } from "../../../components/Members List/MemberCard";
import { MembersNav } from "../../../components/Members List/MembersNav";
export function PlayerMembers() {
  return (
    <div className="PlayerMembers">
      <Header />
      <main>
        <MembersNav />

        <section>
          <h1>Jogadores</h1>
          <MemberCard
            memberName="joao"
            memberRole="Top"
            memberStatus="Titular"
            memberElo="Diamond I"
            memberOpgg="br.op.gg/joao"
            memberScore="9.0"
          />
        </section>
      </main>
    </div>
  );
}
