import { Header } from "../../../components/Header";
import { MemberCard } from "../../../components/Members List/MemberCard";
import { MembersNav } from "../../../components/Members List/MembersNav";
export function StaffMembers() {
  return (
    <div className="staffMembers">
      <Header />
      <main>
        <section>
          <MemberCard memberName="joao" memberRole="coach" />
        </section>
      </main>
    </div>
  );
}
