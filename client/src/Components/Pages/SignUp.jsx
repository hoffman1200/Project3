import React, { useState } from "react";
import "../../Styles/Pages/SignUp.css";
// import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import axios from "axios";
import { Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import fireBoyBackground from "../../assets/chewie.mp4";
import { useHistory } from "react-router-dom";

function SignUp({ displayToast }) {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const success = () => {
    displayToast(
      "Successfully Registered. Would you kindly...log in?",
      "success"
    );
  };
  const fail = () => {
    displayToast("You've Become a Jill Sandwich. Try Again", "error");
  };

  let history = useHistory();
  const register = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/api/register",
    })
      .then((res) => {
        success();
        history.push("/login");
        console.log(res.config);
      })
      .catch((err) => {
        fail();
        console.error(err);
      });
  };

  return (
    <>
      <video
        className="fireBoyVideo"
        autoPlay
        loop
        muted
        source
        src={fireBoyBackground}
        type="video/mp4"
      />
      <form className="signUp-form">
        <p className="signP">Enter Details</p>
        <Input
          placeholder="Username"
          prefix={<UserOutlined />}
          onChange={(event) => setRegisterUsername(event.target.value)}
        />
         &nbsp;
        <Input
          placeholder="Password"
          type="password"
          prefix={<LockOutlined />}
          onChange={(event) => setRegisterPassword(event.target.value)}
        />
         &nbsp;
        <Button onClick={register}>Create Account</Button>
      </form>
    </>
  );
}

export default SignUp;
