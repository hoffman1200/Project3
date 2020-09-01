import React from "react";
import "../../Styles/Pages/Saved.css";
import Card from "../Elements/Card";

function Saved({ savedGames }) {
  let removeSaved = () => {
    console.log("I don-t want to go Mr Stark");
  };
  return (
    <div id="saved">
      {savedGames.map((game) => {
        return (
          <Card
            key={game.id}
            isLogged={true}
            game={game}
            isSaved={true}
            toggleSaved={removeSaved}
          />
        );
      })}
    </div>
  );
}

export default Saved;
