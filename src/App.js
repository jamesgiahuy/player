import logo from "./logo.svg";
import "./App.css";
import Player from "./components/Player";
import { useState } from "react";
function App() {
  const initialState = [
    {
      name: "Ronaldo",
      position: "ST",
      age: "38,",
      imgUrl: "images/ronaldo.jpg",
      id: 1,
    },
    {
      name: "De Jong",
      position: "CAM",
      age: "38,",
      imgUrl: "images/ronaldo.jpg",
      id: 2,
    },
    {
      name: "Sancho",
      position: "LW",
      age: "38,",
      imgUrl: "images/ronaldo.jpg",
      id: 3,
    },
  ];

  const [players, setPlayer] = useState([]);
  const onDeleteHandler = (id) => {
    const newState = players.filter((player) => {
      return player.id != id;
    });
    setPlayer(newState);
  };
  const playerlist = players.map((player, index) => (
    <Player key={index} player={player} onDelete={onDeleteHandler} />
  ));
  const onAddHandler = () => {
    const newPlayers = [
      ...players,
      {
        name: "Sancho",
        position: "LW",
        age: "38,",
        imgUrl: "images/ronaldo.jpg",
        id: players.length + 1,
      },
    ];
    setPlayer(newPlayers);
  };
  return (
    <div className="App">
      <h1>Premiere League</h1>
      <button onClick={onAddHandler} className="btn">
        Add new Player
      </button>
      <div className="player-container">{playerlist}</div>
    </div>
  );
}

export default App;
