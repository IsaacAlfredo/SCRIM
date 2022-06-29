export function ProfileInfo(props) {
  return (
    <section className="ProfileInfo">
      <img src="" alt="Foto de perfil" />
      <strong>Nome de Usuário</strong>
      <a href="">Editar Perfil</a>
      <table>
        <tbody>
          <tr>
            <td>Conta Main:</td>
            <td>{props.nick}</td>
          </tr>
          <tr>
            <td>Elo:</td>
            <td>{props.elo}</td>
          </tr>
          <tr>
            <td>Op.gg</td>
            <td>{props.opgg} </td>
          </tr>
          <tr>
            <td>Smurfs:</td>
            <td>{props.smurfsNicks}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
