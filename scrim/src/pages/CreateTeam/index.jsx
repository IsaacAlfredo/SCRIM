import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import "./style.css";

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
        <Link to="/teaminfo">Time teste</Link>
      </main>
    </div>
  );
}
