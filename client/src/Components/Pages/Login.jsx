import React from "react";
import "../../Styles/Pages/Login.css";
import Button from "../Elements/Button";
import { Link, Redirect } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../App";


function Login({loggedUser}) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const user = useContext(Context)
  console.log(user)

  const login = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: "http://localhost:3003/api/login"
    }).then((res) => {
      getUser();
      console.log(res.data)});
    // logRedirect();
  };


  const getUser = (e) => {
    // e.preventDefault();
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3003/api/user"
    }).then((res) => {
      user && user.setUser(res.data)
      console.log(res.data)
      
    });
    loggedUser();
  }


  return (
    
    <>
      <form onSubmit={login}>
        <input placeholder="username" onChange={event => setLoginUsername(event.target.value)}/>
        <input placeholder="password" type="password" onChange={event => setLoginPassword(event.target.value)}/>
          <Button>Submit</Button>
          {/* <Button onClick={getUser}>Get User</Button> */}
      </form>
        {user.user ? <h1>Hello {user.user.username}</h1> : null}
    </>
  );
}

export default Login;
