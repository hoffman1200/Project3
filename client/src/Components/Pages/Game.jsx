import React, { useState, useEffect } from "react";
import "../../Styles/Pages/Game.css";
import axios from "axios";

function Game(props) {
  let [game, setGame] = useState({});
  const { id } = props.match.params;
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/api/games/" + id,
    })
      .then((game) => {
        console.log("GAME", game);
        setGame(game.data);
      })
      .catch((err) => {
        console.log("GAME ERROR", err);
      });
  }, [id]);
  return (
    <>
      <h2>{game.title}</h2>
      <p>{game.description}</p>
      <iframe
        title={game.title}
        src={game.url}
        frameborder="0"
        width="1000px"
        height="700px"
      ></iframe>
      <p>Added by: {game.username}</p>
      <p>{game.instructions}</p>
    </>
  );
}

export default Game;
