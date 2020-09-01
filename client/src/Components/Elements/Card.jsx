import React from "react";
import "../../Styles/Elements/Card.css";
import { Link } from "react-router-dom";

function Card({ game }) {
  return (
    <>
      <div className="card" key={game.id} id={"card" + game.id}>
        <div className="imageContainer">
          <Link to={"/game/" + game.id}>
            <img alt={game.title} src={game.image} />
          </Link>
        </div>
        <div className="description">
          <ul>
            <li>
              <h3>{game.title}</h3>
            </li>
            <li>
              <strong>Description:</strong> {game.description}
            </li>
            <li>
              <strong>How to play: </strong> {game.instructions}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card;
