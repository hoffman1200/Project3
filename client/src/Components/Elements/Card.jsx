import React, { useState } from "react";
import "../../Styles/Elements/Card.css";
import { Link } from "react-router-dom";
import { Card as AntCard } from "antd";

function Card({ game, isSaved, toggleSaved, isLogged }) {
  const [isSavedSelf, setIsSavedSelf] = useState(isSaved);

  let toggleSavedSelf = () => {
    toggleSaved(game._id, !isSavedSelf);
    console.log("SAVED Self", game._id, !isSavedSelf);
    setIsSavedSelf(!isSavedSelf);
  };

  return (
    <>
      <AntCard className="CartContainer" hooverable>
        <div className="card" key={game._id} id={"card" + game._id}>
          <div className="imageContainer">
            <Link to={"/game/" + game._id}>
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
