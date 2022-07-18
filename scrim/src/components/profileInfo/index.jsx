import "./style.css";

export function ProfileInfo(props) {
  return (
    <section className="ProfileInfo">
      <div id="profileCard">
        <img
          id="profileImage"
          src="https://i.pinimg.com/564x/73/9b/92/739b9257970851cb121f0f6b4dc7e5cb.jpg"
          alt="Foto de perfil"
        />
        <strong id="nickProfile">Nome de Usuário</strong>
      </div>
      <div id="profileTableEdit">
        <a id="profileEdit" className="defaultButton" href="">
          Editar Perfil
        </a>
        <table>
          <tbody id="accInfo">
            <tr className="accInfoRow">
              <td>Conta Main:</td>
              <td className="infoData">{props.nick}</td>
            </tr>
            <tr className="accInfoRow">
              <td>Elo:</td>
              <td className="infoData">{props.elo}</td>
            </tr>
            <tr className="accInfoRow">
              <td>Op.gg:</td>
              <td className="infoData">{props.opgg} </td>
            </tr>
            <tr className="accInfoRow">
              <td>Smurfs:</td>
              <td className="infoData">{props.smurfsNicks}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
