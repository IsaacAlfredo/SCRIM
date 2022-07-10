export function MemberCard(props) {
  return (
    <div className="MemberCard">
      <strong>{props.memberRole} </strong>
      <img src="" alt="Perfil" />
      <strong>{props.memberName}</strong>
      <small> {props.memberScore} </small>
      <a href="">{props.memberOpgg}</a>
      <small>{props.memberStatus}</small>
      <small>{props.memberElo}</small>
    </div>
  );
}
