import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import "./style.css";

export function CreateTeam() {
  return (
    <div className="CreateTeam">
      <Header />
      <main id="CreateTeamMain">
        <h1 className="pageH1">Criar Time</h1>
        <form action="">
          <label htmlFor="teamName">Nome do time:</label>
          <input id="teamName" type="text" placeholder="Nome do Time" />
          <button className="defaultButton">Criar</button>
        </form>
        <Link to="/teaminfo">Time teste</Link>
      </main>
    </div>
  );
}
