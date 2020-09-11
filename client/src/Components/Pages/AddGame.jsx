import React from "react";
import { Input } from "antd";
import { LinkOutlined, FileImageOutlined, EditOutlined, FormOutlined, FileDoneOutlined, SmileOutlined } from "@ant-design/icons";
import Button from "../Elements/Button";
import { useState, useContext } from "react";
import "../../Styles/Pages/AddGame.css";
import axios from "axios";
import { Context } from "../../App";
import { Row, Col } from 'antd';
import runnerBackground from "../../assets/runner.mp4";


function AddGame({ displayToast }) {
  const [urlGame, setUrlGame] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const success = () => {
    displayToast(
      "How many are there in you? Whose hopes and dreams do you encompass? Your submission was a success!",
      "success"
    );
  };
  const fail = () => {
    displayToast("The cake is a lie. Try Again", "error");
  };
  const user = useContext(Context);
  const newGame = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        url: urlGame,
        image: image,
        title: title,
        description: description,
        instructions: instructions,
        category: category,
        username: user.user
      },
      url: "http://localhost:3001/api/games",
    })
      .then((res) => {
        success();
        console.log(res.data);
        console.log("New Game Added!");
      })
      .catch((err) => {
        fail();
        console.error(err);
      });
  };

  return (
    <>
    <video
        className="runnerVideo"
        autoPlay
        loop
        muted
        source
        src={runnerBackground}
        type="video/mp4"
      />
    <div className="addForm">
      <form onSubmit={newGame}>
       <Row justify="center">
        <Col span={24}>
        <Input
          onChange={(event) => setUrlGame(event.target.value)}
          placeholder="URL"
          prefix={<LinkOutlined />}
        />
        </Col>
        </Row>
         &nbsp;
        <Row justify="center">
        <Col span={24}>
        <Input
          onChange={(event) => setImage(event.target.value)}
          placeholder="Image"
          prefix={<FileImageOutlined />}
        />
        </Col>
        </Row>
         &nbsp;
        <Row justify="center">
        <Col span={24}>
        <Input
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          prefix={<EditOutlined />}
        />
        </Col>
        </Row>
         &nbsp;
        <Row justify="center">
        <Col span={24}>
        <Input
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Description"
          prefix={<FormOutlined />}
        />
        </Col>
        </Row>
         &nbsp;
        <Row justify="center">
        <Col span={24}>
        <Input
          onChange={(event) => setInstructions(event.target.value)}
          placeholder="Instructions / Notes"
          prefix={<FileDoneOutlined />}
        />
        </Col>
        </Row>
         &nbsp;
        <Row justify="center">
        <Col span={24}>
        <Input
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Category"
          prefix={<SmileOutlined />}
        />
        </Col>
        </Row>
         &nbsp;
         <Row justify="center">
        <Button htmlType="submit">Add Game!</Button>
        </Row>
      </form>
    </div>
    </>
  );
}

export default AddGame;
