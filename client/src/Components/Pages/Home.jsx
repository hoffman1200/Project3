import React from "react";
import "../../Styles/Pages/Home.css";
import Card from "../Elements/Card";
import BlueBackground from "../../assets/blueBackground.mp4";

function Home({ isLogged, games, savedGames, setSavedGames }) {
  
  let toggleSaved = (id, isSaved) => {
    console.log(id);
    console.log(isSaved);
    if (isSaved) {
      let remainingGames = savedGames.filter((sgame) => {
        return sgame._id !== parseInt(id);
      });
      console.log(remainingGames);
      setSavedGames(remainingGames);
    } else {
      let newSavedGame = games.filter((game) => {
        if (game._id === parseInt(id)) {
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
      <video autoPlay loop muted source src={BlueBackground} type="video/mp4" />

      {games.map((game) => {
        let isSaved = savedGames.includes(game);

        return (
          <Card
            hoverable
            key={game._id}
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
