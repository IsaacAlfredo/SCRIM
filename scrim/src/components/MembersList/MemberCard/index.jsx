import "./style.css";

export function MemberCard(props) {
  return (
    <div className="MemberCard">
      <strong id="memberRole">{props.memberRole} </strong>
      <img
        id="memberImage"
        src="https://i.pinimg.com/564x/73/9b/92/739b9257970851cb121f0f6b4dc7e5cb.jpg"
        alt="Perfil"
      />
      <strong id="memberName">{props.memberName}</strong>
      <a href={props.memberOpgg}>opgg</a>
      <small>{props.memberStatus}</small>
      <small>{props.memberElo}</small>
      <small id="memberScore"> {props.memberScore} </small>
    </div>
  );
}
