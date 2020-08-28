import React from "react";
import "../Styles/NavBar.css";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  return (
    <>
      <nav className="navigationBar">
        <Link to="/">
          <img src="" class="mr-3 img-fluid" alt="..." />
        </Link>
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/login"
                className={
                  location.pathname === "/login"
                    ? "nav-link active"
                    : "nav-link"
                }
              > Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className={
                  location.pathname === "/signup"
                    ? "nav-link active"
                    : "nav-link"
                }
              > Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
