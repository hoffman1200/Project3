import React from "react";
import "../../Styles/Pages/Game.css";

function Game(props) {
  const { id } = props.match.params;
  return (
    <>
      {/* Replace this with server call by Id */}
      <h2>{props.games[id - 1].title}</h2>
      <iframe
        src={props.games[id - 1].URL}
        frameborder="0"
        width="1000px"
        height="700px"
      ></iframe>
    </>
  );
}

export default Game;
