import { ProfileInfo } from "../../components/profileInfo";

export function Profile() {
  <div className="Profile">
    <header>
      <h1>SCRIM</h1>
      <nav>
        <a href="">Buscar scrims</a>
        <a href="">Meu time</a>
        <a href="">Editar perfil</a>
      </nav>
    </header>
    <ProfileInfo />
  </div>;
}
