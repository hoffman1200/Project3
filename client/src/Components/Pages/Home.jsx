import React from "react";
import "../../Styles/Pages/Home.css";
import Card from "../Elements/Card";

function Home({ isLogged, games }) {
  return (
    <div className={isLogged ? "loggedIn" : "loggedOut"}>
      <h1>Home!!</h1>
      {games.map((game) => {
        return <Card game={game} />;
      })}
    </div>
  );
}

export default Home;
