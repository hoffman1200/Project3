import React from "react";
import "../../Styles/Pages/Saved.css";
import Card from "../Elements/Card";
import { useContext } from "react";
import { Context } from "../../App";
import ryanBackground from "../../assets/thor.mp4";

function Saved({ savedGames, setSavedGames }) {
  const user = useContext(Context);
  console.log(user);

  let removeSaved = (gameid, isSavedSelf) => {
    console.log("I don-t want to go Mr Stark");
    console.log(gameid, isSavedSelf);
    let remainingGames = savedGames.filter((sgame) => {
      return sgame.id !== parseInt(gameid);
    });
    setSavedGames(remainingGames);
  };
  return (
    <>
    <video
        className="ryanVideo"
        autoPlay
        loop
        muted
        source
        src={ryanBackground}
        type="video/mp4"
      />
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
    </>
  );
}

export default Saved;
