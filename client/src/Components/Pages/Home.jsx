import React from "react";
import "../../Styles/Pages/Home.css";
import Card from "../Elements/Card";

function Home({ isLogged, games, savedGames, setSavedGames }) {
  let toggleSaved = (id, isSaved) => {
    if (isSaved) {
      let remainingGames = savedGames.filter((sgame) => {
        return sgame.id !== parseInt(id);
      });

      console.log(remainingGames);
      setSavedGames(remainingGames);
    } else {
      let newSavedGame = games.filter((game) => {
        if (game.id === parseInt(id)) {
          return true;
        } else {
          return false;
        }
      });
      let newSavedGames = [...savedGames].concat(newSavedGame);
      console.log(newSavedGames);
      setSavedGames(newSavedGames);
    }
  };

  return (
    <div id="home" className={isLogged ? "loggedIn" : "loggedOut"}>
      {games.map((game) => {
        let isSaved = savedGames.includes(game);

        return (
          <Card
            key={game.id}
            isLogged={true}
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