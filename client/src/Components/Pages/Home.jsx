import React from "react";
import "../../Styles/Pages/Home.css";
import Card from "../Elements/Card";
import BlueBackground from "../../assets/blueBackground.mp4";

function Home({ isLogged, games, savedGames, setSavedGames }) {
  let toggleSaved = (id, needSave) => {
    if (!needSave) {
      let remainingGames = savedGames.filter((sgame) => {
        return sgame.id !== parseInt(id);
      });

      console.log(remainingGames);
      setSavedGames(remainingGames);
    } else {
      let newSavedGame = games.filter((game) => {
        console.log("Game Id", id, game._id, game._id === id);
        if (game._id === id) {
          return true;
        } else {
          return false;
        }
      });
      // console.log("SAVED Games", id, needSave, games, newSavedGame);
      let newSavedGames = [...savedGames].concat(newSavedGame);
      setSavedGames(newSavedGames);
    }
  };

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
