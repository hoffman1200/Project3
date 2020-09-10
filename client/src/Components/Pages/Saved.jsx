import React from "react";
import "../../Styles/Pages/Saved.css";
import Card from "../Elements/Card";
// import { useContext } from "react";
// import { Context } from "../../App";
import axios from "axios";
import ryanBackground from "../../assets/thor.mp4";

function Saved({ games, savedGames, setSavedGames, userId }) {
  let removeSaved = (gameid, isSavedSelf) => {
    // console.log("I don't want to go Mr Stark");
    // console.log(gameid, isSavedSelf);
    let remainingGames = savedGames.filter((sgameId) => {
      return sgameId !== gameid;
    });
    setSavedGames(remainingGames);
    updateServerSavedGames(remainingGames, userId);
  };

  const updateServerSavedGames = (savedGames, userId) => {
    axios({
      method: "PUT",
      data: {
        savedGames,
      },
      withCredentials: true,
      url: "http://localhost:3001/api/register/" + userId,
    }).then((res) => {
      console.log("LOOK HERE!!", res.data);
    });
  };

  let displayGames = games.filter((g) => {
    if (
      savedGames.some((sg) => {
        return sg === g._id;
      })
    ) {
      return g;
    }
  });
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
        {displayGames.map((game) => {
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
    </>
  );
}

export default Saved;
