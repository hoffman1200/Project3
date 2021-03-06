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
      url: "http://gamer-dash.herokuapp.com/api/login",
    })
      .then((res) => {
        console.log("What are we getting?", res);
        user &&
          user.setUser(
            res.data.user.username,
            res.data.user.id,
            res.data.user.savedGames,
            res.data.user.avatar
          );
        // getUser();
        success();
        history.push("/profile");
      })
      .catch((err) => {
        fail();
        console.error(err);
      });
  };

  // const getUser = (e) => {
  //   // e.preventDefault();
  //   axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:3001/api/user",
  //   })
  //     .then((res) => {
  //       user && user.setUser(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("Uh oh", err);
  //     });
  // };

  return (
    <>
      <video
        className="greenVideo"
        autoPlay
        loop
        muted
        source="true"
        src={greenBackground}
        type="video/mp4"
      />

      <form className="login-form" onSubmit={login}>
        <Input
          onChange={(event) => setLoginUsername(event.target.value)}
          prefix={<UserOutlined />}
          placeholder="Username"
        />
        &nbsp;
        <Input
          onChange={(event) => setLoginPassword(event.target.value)}
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
        &nbsp;&nbsp;
        <Button htmlType="submit">Submit</Button>
        {/* <Button onClick={getUser}>Get User</Button> */}
      </form>
      <div className="helloHAL">
        {user.user ? <h1>Hello {user.user.username}</h1> : null}
      </div>
    </>
  );
}
export default Login;
