export function LineUpCard(props) {
  return (
    <div className="LineUpCard">
      <header>
        <h2>{props.lineUpName}</h2>
        <button>Editar nome</button>
      </header>
      <section>
        <strong>Elo medio: {props.lineUpElo}</strong>
        <strong>Score medio: {props.lineUpScore}</strong>
      </section>
      <section>
        <button>Editar jogadores</button>
        {props.memberList}
      </section>
    </div>
  );
}
