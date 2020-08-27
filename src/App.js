import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import NavBar from "./Components/Elements/NavBar";
import Footer from "./Components/Elements/Footer";
import Join from "./Components/Pages/Join";
import Saved from "./Components/Pages/Saved";
import Game from "./Components/Pages/Game";
import "../src/card.json";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const [userName, setUserName] = useState("");

  const [games, setGames] = useState([]);

  const [savedGames, setSavedGames] = useState([]);

  return (
    <>
      <Router>
        <NavBar isLogged={isLogged} userName={userName} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/join" component={Join} />
        <Route path="/game" component={Game} />
        {/* <Route path="/" component={Error404} /> */}
      </Router>
      <Footer />
    </>
  );
}

export default App;
