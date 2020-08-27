import React from "react";
import "../../Styles/Elements/NavBar.css";
import { Link } from "react-router-dom";
import Button from "./Button";

function NavBar({ isLogged, userName }) {
  return (
    <>
      <nav className="navigationBar">
        <div className="nav-left">
          <Link to="/">
            <img
              src="https://vignette.wikia.nocookie.net/rickandmorty/images/4/41/Pickle_rick_transparent_edgetrimmed.png/revision/latest?cb=20200324115455"
              className="nav-logo"
              alt="..."
            />
          </Link>
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
