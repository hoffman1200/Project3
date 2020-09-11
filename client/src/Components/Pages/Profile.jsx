import React, { useContext } from "react";
import "../../Styles/Pages/Profile.css";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { Avatar } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import profileBackground from "../../assets/mario.mp4";
import { Context } from "../../App";
import axios from "axios";
import { Row, Col, Input } from 'antd';


function Profile() {
  const  user   = useContext(Context);
  console.log(user)

  return (
    <>
      <video
        className="profileVideo"
        autoPlay
        loop
        muted
        source="true"
        src={profileBackground}
        type="video/mp4"
      />
      <div className="profile-card">
        {/* <img src="#" alt="" /> */}
        <Avatar size={70} prefix={<UserOutlined />} src="https://avatars0.githubusercontent.com/u/61527225?s=460&u=6e6a27d698281b8830f3aea373954e44838ade18&v=4"></Avatar>
        <h1 className="profile-username">{user.user}</h1>
        <p className="yourGames">Your games submission history here</p>
        <h3>Want to learn how to make your own games??</h3>
        <Link to="/courselist">
          <Button>Game Dev Courses</Button>
        </Link>
        <h3>Want to send your game to the masses??</h3>
        <Link to="/addgame">
          <Button>Add Your Game</Button>
        </Link>
      </div>
    </>
  );
}

export default Profile;
