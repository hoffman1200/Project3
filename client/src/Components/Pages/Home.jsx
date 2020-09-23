import React from "react";
import "../../Styles/Pages/Home.css";
import Card from "../Elements/Card";
import axios from "axios";
import BlueBackground from "../../assets/blueBackground.mp4";

function Home({ isLogged, games, savedGames, setSavedGames, userId }) {
  let toggleSaved = (id, needSave) => {
    if (!needSave) {
      let remainingGames = savedGames.filter((sgameId) => {
        return sgameId !== id;
      });
      console.log(remainingGames);
      setSavedGames(remainingGames);
      updateServerSavedGames(remainingGames, userId);
    } else {
      let newSavedGames = [...savedGames];
      newSavedGames.push(id);
      setSavedGames(newSavedGames);
      updateServerSavedGames(newSavedGames, userId);
      console.log("SAVED Games", id, needSave, newSavedGames);
    }
  };

  const updateServerSavedGames = (savedGames, userId) => {
    axios({
      method: "PUT",
      data: {
        savedGames,
      },
      withCredentials: true,
      url: "http://gamer-dash.herokuapp.com/api/register/" + userId,
    }).then((res) => {
      console.log("LOOK HERE!!", res.data);
    });
  };

  console.log(savedGames);

  return (
    <div id="home" className={isLogged ? "loggedIn" : "loggedOut"}>
      <video
        autoPlay
        loop
        muted
        source="true"
        src={BlueBackground.toString()}
        type="video/mp4"
      />

      {games.map((game) => {
        let isSaved = savedGames.some((sg) => {
          return sg === game._id;
        });
        // console.log("CARD", sg, game.id, sg === game.id);

        return (
          <Card
            hoverable
            key={game._id}
            isLogged={isLogged}
            game={game}
            isSaved={isSaved}
            toggleSaved={toggleSaved}
          />
        );
      })}
    </div>
  );
}

export default Home;
