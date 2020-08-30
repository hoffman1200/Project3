import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import NavBar from "./Components/Elements/NavBar";
import Footer from "./Components/Elements/Footer";
import Join from "./Components/Pages/Join";
import Saved from "./Components/Pages/Saved";
import Game from "./Components/Pages/Game";
import Error404 from "./Components/Pages/Error404";
import "../src/card.json";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const [userName, setUserName] = useState("");

  // const [games, setGames] = useState([]);

  // const [savedGames, setSavedGames] = useState([]);

  // add ternary function to create two states: logged in and not logged in. This would create two different classNames for more dynamic styling

  return (
    <>
      <Router>
        <NavBar isLogged={isLogged} userName={userName} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/join" component={Join} />
          <Route path="/game/:id" component={Game} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
export default App;
