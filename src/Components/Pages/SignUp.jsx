import React from "react";
import "../../Styles/Pages/SignUp.css";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";

function SignUp() {
  return (
    <>
      <form className="signUp-form">
        <p>Create Your Account</p>
        <input placeholder="Username"></input>
        <input placeholder="Password" type="password"></input>
        <Link to="/">
          <Button>Create Account</Button>
        </Link>
      </form>
    </>
  );
}

export default SignUp;
