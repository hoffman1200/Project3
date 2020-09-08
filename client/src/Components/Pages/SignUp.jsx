import React, { useState } from "react";
import "../../Styles/Pages/SignUp.css";
// import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import axios from "axios";
import fireBoyBackground from "../../assets/chewie.mp4";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
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
      url: "http://localhost:3003/api/register",
    }).then((res) => {
      history.push("/login");
      console.log(res.config);
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
