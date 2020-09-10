import React from "react";
import "../../Styles/Pages/Home.css";
import Card from "../Elements/Card";
import axios from "axios";
import BlueBackground from "../../assets/blueBackground.mp4";

function Home({ isLogged, games, savedGames, setSavedGames, data }) {
  let toggleSaved = (id, needSave) => {
    if (!needSave) {
      let remainingGames = savedGames.filter((sgame) => {
        return sgame.id !== id;
      });

      console.log(remainingGames);
      setSavedGames(remainingGames);
    } else {
      let newSavedGame = games.filter((game) => {
        if (game._id === id) {
          return true;
        } else {
          return false;
        }
      });
      // console.log("SAVED Games", id, needSave, games, newSavedGame);
      let newSavedGames = [...savedGames].concat(newSavedGame);
      setSavedGames(newSavedGames);
      axios({
        method: "put",
        data: {
          savedGames: newSavedGames,
        },
        url: "http://localhost:3001/api/register" + data.user.id,
      }).then((res) => {
        console.log(res.data);
      });
    }
  };
  // this function needs to go inside the newSavedGame filter

  return (
    <div id="home" className={isLogged ? "loggedIn" : "loggedOut"}>
      <video autoPlay loop muted source src={BlueBackground} type="video/mp4" />

      {games.map((game) => {
        let isSaved = savedGames.includes(game);

        return (
          <Card
            hoverable
            key={game.id}
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
