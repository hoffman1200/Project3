import React from "react";
import { Input } from "antd";
import Button from "../Elements/Button";
import { useState, useContext } from "react";
import "../../Styles/Pages/AddGame.css";
import axios from "axios";
import { Context } from "../../App";

function AddGame() {
  const [urlGame, setUrlGame] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const user = useContext(Context);
  console.log(user.user.username);
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
        username: user.user.username,
      },
      url: "http://localhost:3003/api/games",
    }).then((res) => {
      console.log(res.data);
      console.log("New Game Added!");
    });
  };

  return (
    <div>
      <form onSubmit={newGame}>
        <Input
          onChange={(event) => setUrlGame(event.target.value)}
          placeholder="URL"
        />
        <Input
          onChange={(event) => setImage(event.target.value)}
          placeholder="Image"
        />
        <Input
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
        />
        <Input
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Description"
        />
        <Input
          onChange={(event) => setInstructions(event.target.value)}
          placeholder="Instructions / Notes"
        />
        <Input
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Category"
        />
        <Button htmlType="submit">Add Game!</Button>
      </form>
    </div>
  );
}

export default AddGame;