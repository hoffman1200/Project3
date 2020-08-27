import React from "react";
import "../../Styles/Pages/Join.css";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

function Join() {
  return (
    <>
      <div className="container joinContainer">
        <div className="logo">
          <img src="" className="mr-3 img-fluid" alt="..." />
        </div>
        <div>
          <Link to="/login">
            <Button>Log In</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Join;
