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
import gameSeed from "../src/card.json";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const [userName, setUserName] = useState("");

  const [games, setGames] = useState([...gameSeed]);

  // const [savedGames, setSavedGames] = useState([]);

  // add ternary function to create two states: logged in and not logged in. This would create two different classNames for more dynamic styling

  return (
    <div className={isLogged ? "main logged" : "main"}>
      <Router>
        <NavBar isLogged={isLogged} userName={userName} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home isLogged={isLogged} games={games} />}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/join" component={Join} />
          <Route
            path="/game/:id"
            render={(props) => <Game {...props} games={games} />}
          />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
