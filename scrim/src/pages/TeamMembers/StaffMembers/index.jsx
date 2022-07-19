import { Header } from "../../../components/Header";
import { MemberCard } from "../../../components/MembersList/MemberCard";
import { MembersNav } from "../../../components/MembersList/MembersNav";
import "../style.css";

export function StaffMembers() {
  return (
    <div className="PtaffMembers">
      <Header />
      <main className="memberMain">
        <MembersNav />
        <section className="memberSection">
          <h1>Staff</h1>
          <MemberCard memberName="joao" memberRole="coach" />
        </section>
      </main>
    </div>
  );
}
