import React from "react";
import "../../Styles/Pages/Login.css";
import Button from "../Elements/Button";
import greenBackground from "../../assets/greenWalk.mp4";
import { Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../App";

function Login({ displayToast }) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const user = useContext(Context);
  console.log(user);

  let history = useHistory();

  const success = () => {
    displayToast(
      "Successfully Logged-in. Would you kindly...go to your profile?",
      "success"
    );
  };
  const fail = () => {
    displayToast("You've Become a Jill Sandwich. Try Again", "error");
  };

  const login = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/api/login",
    })
      .then((res) => {
        getUser();
        console.log(res.data);
        // setIsLogged(true);
        success();
        history.push("/profile");
      })
      .catch((err) => {
        fail();
        console.error(err);
      });
  };

  const getUser = (e) => {
    // e.preventDefault();
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/api/user",
    })
      .then((res) => {
        user && user.setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Uh oh", err);
      });
  };

  return (
    <>
      <video
        className="greenVideo"
        autoPlay
        loop
        muted
        source
        src={greenBackground}
        type="video/mp4"
      />

      {/* <form onSubmit={login}>
        <input placeholder="username" onChange={event => setLoginUsername(event.target.value)}/>
        <input placeholder="password" type="password" onChange={event => setLoginPassword(event.target.value)}/>
        <Button onClick={getUser}>Submit</Button>

        </form> */}

      <form onSubmit={login}>
        <Input
          onChange={(event) => setLoginUsername(event.target.value)}
          prefix={<UserOutlined />}
          placeholder="Username"
        />
        <Input
          onChange={(event) => setLoginPassword(event.target.value)}
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
        <Button htmlType="submit">Submit</Button>
        {/* <Button onClick={getUser}>Get User</Button> */}
      </form>
      {user.user ? <h1>Hello {user.user.username}</h1> : null}
    </>
  );
}
export default Login;
