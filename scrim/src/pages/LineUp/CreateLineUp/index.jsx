import { Header } from "../../../components/Header";
import { LineUpNav } from "../../../components/LineUpList/LineUpNav";

export function CreateLineUp() {
  return (
    <div className="CreateLineUp">
      <Header />
      <main>
        <LineUpNav />
        <h1>Nova Line Up</h1>
        <input type="text" placeholder="Nome" />
        <button>Criar Line Up</button>
      </main>
    </div>
  );
}
