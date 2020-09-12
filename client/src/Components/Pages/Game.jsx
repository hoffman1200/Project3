import React, { useState, useEffect } from "react";
import "../../Styles/Pages/Game.css";
import axios from "axios";
import dragonBackground from "../../assets/dragon.mp4";

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
    <video
        className="loadVideo"
        autoPlay
        loop
        muted
        source="true"
        src={dragonBackground}
        type="video/mp4"
      />
      <div className="gamePage">
      <h2 className="gameFont">{game.title}</h2>
      <p className="gameFont">{game.description}</p>
      <iframe
        title={game.title}
        src={game.url}
        frameborder="0"
        width="1000px"
        height="700px"
      ></iframe>
      <p className="gameFont">Added by: {game.username}</p>
      <p className="gameFont">{game.instructions}</p>
      </div>
    </>
  );
}

export default Game;
