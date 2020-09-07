import React from "react";
import "../../Styles/Pages/Profile.css";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";

function Profile({ userName }) {
  return (
    <div className="profile-card">
      <img src="#" alt="" />
      <h1 className="profile-username">{userName.username}</h1>
      <p className="yourGames">Your games submission history here</p>
      <h3>Want to learn how to make your own games??</h3>
      <Link to="/courselist">
        <Button>Game Dev Courses</Button>
      </Link>
      <h3>Want to send your game to the masses??</h3>
      <Link to="/addgame">
        <Button>Add Your Game</Button>
      </Link>
    </div>
  );
}

export default Profile;
