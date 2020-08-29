const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  url: {type: String, required: true},
  image: {type: String, required: true},
  title: { type: String, required: true},
  description: { type: String, required: true},
  instructions: { type: String, required: true},
  category: {type: String, required: true}
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
