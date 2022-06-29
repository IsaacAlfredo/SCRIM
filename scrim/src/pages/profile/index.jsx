import { ProfileInfo } from "../../components/profileInfo";

export function Profile() {
  return (
    <div className="Profile">
      <header>
        <h1>SCRIM</h1>
        <nav>
          <a href="">Buscar scrims</a>
          <a href="">Meu time</a>
          <a href="">Editar perfil</a>
        </nav>
      </header>
      <ProfileInfo
        nick="Shiota"
        elo="Platina"
        opgg="br.op.gg"
        smurfsNicks="Kayano Kaede"
      />
    </div>
  );
}
