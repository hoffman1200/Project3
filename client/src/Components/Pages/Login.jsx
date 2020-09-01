import React from "react";
import "../../Styles/Pages/Login.css";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  // const click = (e) => {
  //   e.preventDefault();
  //   console.log("click");
  // }
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
    }).then((res) => console.log(res.data));
  };

  const getUser = (e) => {
    e.preventDefault();
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3003/api/user"
    }).then((res) => {
      setData(res.data)
      console.log(res.data)
    });
    
  }

  return (
    
    <>
      <form>
        <input placeholder="username" onChange={event => setLoginUsername(event.target.value)}/>
        <input placeholder="password" type="password" onChange={event => setLoginPassword(event.target.value)}/>
          <Button onClick={login}>Submit</Button>
          <Button onClick={getUser}>Get User</Button>
      </form>
        {data ? <h1>Hello {data.username}</h1> : null}
    </>
  );
}

export default Login;
