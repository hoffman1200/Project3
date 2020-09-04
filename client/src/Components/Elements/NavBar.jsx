import React from "react";
import "../../Styles/Elements/NavBar.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "../../assets/logo.png";
import "../../assets/fonts/Minecraft.ttf";

function NavBar({ isLogged, userName, savedGames, location }) {
  console.log(location)
  return (
    <>
      <nav className="navigationBar">
        <div className="nav-left">
          <Link to="/">
            <img src={Logo} className="nav-logo" alt="..." />
          </Link>
        </div>

        <div className="nav-center">
          <p>
            Gamer Dash{" "}
            {savedGames.map((sg) => {
              return <>{sg.id}</>;
            })}
          </p>
        </div>

        <div className="nav-right">
          {isLogged ? (
            <>
              <p className="username">{userName}</p>
              <Link to="/saved">
                <Button>My Saved Games</Button>
              </Link>
              <Link to="/logout">
                <Button>Log Out</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              &nbsp;&nbsp;&nbsp; 
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
