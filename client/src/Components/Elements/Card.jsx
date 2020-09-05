import React, { useState } from "react";
import "../../Styles/Elements/Card.css";
import { Link } from "react-router-dom";
import { Card as AntCard } from 'antd';

function Card({ game, isSaved, toggleSaved, isLogged }) {
  const [isSavedSelf, setIsSavedSelf] = useState(isSaved);

  let toggleSavedSelf = () => {
    toggleSaved(game.id, isSavedSelf);
    setIsSavedSelf(!isSavedSelf);
  };

  return (
    <>
    <AntCard className="CartContainer" hooverable>
      <div className="card" key={game.id} id={"card" + game.id}>
        <div className="imageContainer">
          <Link to={"/game/" + game.id}>
            <img alt={game.title} src={game.image} />
          </Link>
        </div>
        <div className="description">
          <h3>{game.title}</h3>
          <p>
            <strong>Description:</strong> {game.description}
          </p>
          {isLogged ? (
            <>
              <button onClick={toggleSavedSelf}>
                {isSavedSelf ? "💚" : "🤍"}
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      </AntCard>
    </>

  );
}

export default Card;
