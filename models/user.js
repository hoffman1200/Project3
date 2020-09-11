const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    avatar: {type: String, required: false},
    savedGames: {type: [String], required: false}
})

const User = mongoose.model("User", userSchema);

module.exports = User;
