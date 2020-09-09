import React from "react";
import "../../Styles/Pages/Saved.css";
import Card from "../Elements/Card";
import { useContext } from "react";
import { Context } from "../../App";

function Saved({ savedGames, setSavedGames }) {
  const user = useContext(Context);
  console.log(user);

  let removeSaved = (gameid, isSavedSelf) => {
    console.log("I don-t want to go Mr Stark");
    console.log(gameid, isSavedSelf);
    let remainingGames = savedGames.filter((sgame) => {
      return sgame._id !== parseInt(gameid);
    });
    setSavedGames(remainingGames);
  };
  return (
    <div id="saved">
      {savedGames.map((game) => {
        return (
          <Card
            key={game._id}
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
