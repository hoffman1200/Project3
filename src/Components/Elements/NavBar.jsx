import React from "react";
import "../../Styles/Elements/NavBar.css";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

function NavBar({ isLogged, userName }) {
  const location = useLocation();
  return (
    <>
      <nav className="navigationBar">
        <Link to="/">
          <img src="" className="logo" alt="..." />
        </Link>
        <div id="navbarNav">
          <ul className="navbar">
            {isLogged ? (
              <>
                <li>
                  <p className="username">{userName}</p>
                </li>
                <li className="navbar-item">
                  <Link to="/saved">
                    <Button>My Saved Games</Button>
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/logout">
                    <Button>Log Out</Button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="navbar-item">
                  <Link to="/login">
                    <Button>Login</Button>
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/signup">
                    <Button>Sign Up</Button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
