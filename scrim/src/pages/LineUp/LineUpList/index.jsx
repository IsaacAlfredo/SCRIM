import { Header } from "../../../components/Header";
import { LineUpCard } from "../../../components/LineUpList/LineUpCard";
import { LineUpNav } from "../../../components/LineUpList/LineUpNav";

export function LineUpList() {
  return (
    <div className="LineUpList">
      <Header />
      <main>
        <LineUpNav />
        <section>
          <h1>Line Ups</h1>
          <LineUpCard lineUpName="Line A" lineUpElo="Gold" lineUpScore="9.0" />
        </section>
      </main>
    </div>
  );
}
