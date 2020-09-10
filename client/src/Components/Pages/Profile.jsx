import React, {useContext, useState} from "react";
import "../../Styles/Pages/Profile.css";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { Avatar } from 'antd';
import { UserOutlined, FileDoneOutlined } from "@ant-design/icons";
import profileBackground from "../../assets/mario.mp4";
import { Context } from "../../App";
import axios from "axios";
import { Row, Col, Input } from 'antd';



function Profile() {
  const [userAvatar, setUserAvatar] = useState("");
  const  user   = useContext(Context);
  console.log(user)

  const addAvatar = (e) => {
    e.preventDefault();
    console.log("hola")
    axios({
      method: "put",
      data: {
        avatar: userAvatar
      },
      url: "http://localhost:3001/api/register"
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

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
      <Avatar size={70} prefix={<UserOutlined />} src={user.user.avatar}></Avatar>
      {/* <Button onClick={addAvatar}>Add your Avatar</Button> */}

      {/* This Input Should not display until you click add avatar */}
      {/* &nbsp;
        <Row justify="center">
        <Col span={24}>
        <Input
          onChange={(event) => setUserAvatar(event.target.value)}
          placeholder="Add Link to Image"
          prefix={<FileDoneOutlined />}
        />
        </Col>
        </Row> */}


      <h1 className="profile-username">{user.user.username}</h1>
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
