import React from "react";
import "../../Styles/Pages/Saved.css";
import Card from "../Elements/Card";

function Saved({ savedGames, setSavedGames }) {
  let removeSaved = (gameid, isSavedSelf) => {
    console.log("I don-t want to go Mr Stark");
    console.log(gameid, isSavedSelf);
    let remainingGames = savedGames.filter((sgame) => {
      return sgame.id !== parseInt(gameid);
    });
    setSavedGames(remainingGames);
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
