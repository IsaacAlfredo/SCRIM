import { Header } from "../../../components/Header";
import { MemberCard } from "../../../components/MembersList/MemberCard";
import { MembersNav } from "../../../components/MembersList/MembersNav";
export function StaffMembers() {
  return (
    <div className="PtaffMembers">
      <Header />
      <main>
        <MembersNav />
        <section>
          <h1>Staff</h1>
          <MemberCard memberName="joao" memberRole="coach" />
        </section>
      </main>
    </div>
  );
}
