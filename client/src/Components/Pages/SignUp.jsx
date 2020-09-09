import React, { useState } from "react";
import "../../Styles/Pages/SignUp.css";
// import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import axios from "axios";
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
        <p>Create Your Account</p>
        <input
          placeholder="Username"
          onChange={(event) => setRegisterUsername(event.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(event) => setRegisterPassword(event.target.value)}
        />
        <Button onClick={register}>Create Account</Button>
      </form>
    </>
  );
}

export default SignUp;
