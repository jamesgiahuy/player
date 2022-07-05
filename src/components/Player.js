const Player = (props) => {
  console.log(props);
  const { onDelete } = props;
  const { name, position, age, imgUrl, id } = props.player;

  return (
    <div className="player-wrapper">
      <h1>{name}</h1>
      <img src={imgUrl} alt="#"></img>
      <p>{position}</p>
      <p>{age}</p>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  );
};

export default Player;
