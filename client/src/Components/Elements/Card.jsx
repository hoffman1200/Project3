import React from "react";
import "../Styles/Card.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="imageContainer">
          <link>
            <img alt={props.title} src={props.image} />
          </link>
        </div>
        <div className="description">
          <ul>
            <li>
              <h3>{props.title}</h3>
            </li>
            <li>
              <strong>Description:</strong> {props.description}
            </li>
            <li>
              <strong>How to play: </strong> {props.instructions}
            </li>
          </ul>
        </div>
        <span
          onClick={() => props.addToFavorites(props.id)}
          className="favorite"
        >
          {" "}
          ✔️{" "}
        </span>
        <span onClick={() => props.removeFavorite(props.id)} className="remove">
          X
        </span>
      </div>
    </>
  );
}

export default Card;
