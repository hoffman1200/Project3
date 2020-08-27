import React from "react";
import "../../Styles/Pages/Game.css";

function Game(props) {
  const { id } = props.match.params;
  return (
    <>
      <h1>Game!!!</h1>
      <h4>This is game {id}</h4>
    </>
  );
}

export default Game;
