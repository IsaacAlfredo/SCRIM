import { Header } from "../../components/Header";

export function CreateTeam() {
  return (
    <div className="CreateTeam">
      <Header />
      <main>
        <h1>Criar Time</h1>
        <form action="">
          <label htmlFor="teamName">Nome do time:</label>
          <input id="teamName" type="text" />
          <button>Criar</button>
        </form>
      </main>
    </div>
  );
}
