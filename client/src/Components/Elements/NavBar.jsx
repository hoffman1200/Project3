import React from "react";
import "../../Styles/Elements/NavBar.css";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Logo from "../../assets/logo.png";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../App";
import "../../assets/fonts/Minecraft.ttf";

function NavBar({ isLogged, userName, savedGames }) {
  const user = useContext(Context);
  console.log("Is Logged?", isLogged);
  console.log("Username:", userName);
  useLocation();

  const logOut = (e) => {
    e.preventDefault();
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/api/logout",
    }).then((res) => {
      user && user.setUser("");
      console.log(res.data);
    });
  };

  function customClass() {
    const location = window.location.pathname;
    switch (location) {
      case "/login":
        return "LoginNav";
      case "/signup":
        return "SignupNav";
      case "/profile":
        return "ProfileNav";
      case "/addgame":
        return "addNav";
      case "/saved":
        return "savedNav";
      case "/courselist":
        return "courseNav";
      default:
        return "HomeNav";
    }
  }

  function fontClass() {
    const location = window.location.pathname;
    switch (location) {
      case "/login":
        return "LoginNav-center";
      case "/signup":
        return "SignupNav-center";
      case "/profile":
        return "ProfileNav-center";
      case "/addgame":
        return "addNav-center";
      case "/saved":
        return "savedNav-center";
      case "/courselist":
        return "courseNav-center";
      default:
        return "HomeNav-center";
    }
  }

  return (
    <>
      <nav className={`navigationBar ${customClass()}`}>
        <div className="nav-left">
          <Link to="/">
            <img src={Logo} className="nav-logo" alt="..." />
          </Link>
        </div>

        <div className={`Nav-center" ${fontClass()}`}>
          <p>
            Gamer Dash
            {/* {savedGames.map((sg) => {
              return <>{sg.id}</>;
            })} */}
          </p>
        </div>

        <div className="nav-right">
          {isLogged ? (
            <>
              <p className="username">{userName.username}</p>
              &nbsp;
              <Link to="/saved">
                <Button>My Saved Games</Button>
              </Link>
              <Link to="/addgame">
                <Button>Add a Game</Button>
              </Link>
              <Link to="/profile">
                <Button>Your Profile</Button>
              </Link>
              <div>
              {/* <Link to="/logout"> */}
              <Button onClick={logOut}>Log Out</Button>
              {/* </Link> */}
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              &nbsp;
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
