import { Header } from "../../components/Header";
import { ProfileInfo } from "../../components/profileInfo";

export function Profile() {
  return (
    <div className="Profile">
      <Header />
      <ProfileInfo
        nick="Shiota"
        elo="Platina"
        opgg="br.op.gg"
        smurfsNicks="Kayano Kaede"
      />
    </div>
  );
}
