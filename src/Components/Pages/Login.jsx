import React from "react";
import "../../Styles/Pages/Login.css";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <form>
        <input placeholder="username" onChange></input>
        <input placeholder="password" type="password"></input>
        <Link to="/">
          <Button>Submit</Button>
        </Link>
      </form>
    </>
  );
}

export default Login;
