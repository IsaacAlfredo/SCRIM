import { Header } from "../../../components/Header";
import { MemberCard } from "../../../components/MembersList/MemberCard";
import { MembersNav } from "../../../components/MembersList/MembersNav";
export function PlayerMembers() {
  return (
    <div className="PlayerMembers">
      <Header />
      <main>
        <MembersNav />
        <section className="memberSection">
          <h1>Jogadores</h1>
          <div id="memberCards">
            <MemberCard
              memberName="joao"
              memberRole="Top"
              memberStatus="Titular"
              memberElo="Diamond I"
              memberOpgg="br.op.gg/joao"
              memberScore="9.0"
            />
            <MemberCard
              memberName="joao"
              memberRole="Top"
              memberStatus="Titular"
              memberElo="Diamond I"
              memberOpgg="br.op.gg/joao"
              memberScore="9.0"
            />
            <MemberCard
              memberName="joao"
              memberRole="Top"
              memberStatus="Titular"
              memberElo="Diamond I"
              memberOpgg="br.op.gg/joao"
              memberScore="9.0"
            />
            <MemberCard
              memberName="joao"
              memberRole="Top"
              memberStatus="Titular"
              memberElo="Diamond I"
              memberOpgg="br.op.gg/joao"
              memberScore="9.0"
            />
            <MemberCard
              memberName="joao"
              memberRole="Top"
              memberStatus="Titular"
              memberElo="Diamond I"
              memberOpgg="br.op.gg/joao"
              memberScore="9.0"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
