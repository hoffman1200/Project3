import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import NavBar from "./Components/Elements/NavBar";
import Footer from "./Components/Elements/Footer";
import Saved from "./Components/Pages/Saved";
import Game from "./Components/Pages/Game";
import Error404 from "./Components/Pages/Error404";
import AddGame from "./Components/Pages/AddGame";
import Profile from "./Components/Pages/Profile";
import CourseList from "./Components/Pages/CourseList";
import "antd/dist/antd.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const Context = React.createContext({ user: "", setUser: () => {} });

function App() {
  const [games, setGames] = useState([]);

  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );

  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");

  const [savedGames, setSavedGames] = useState(
    JSON.parse(localStorage.getItem("savedGames")) || []
  );

  const [isLogged, setIsLogged] = useState(
    JSON.parse(localStorage.getItem("isLogged")) || false
  );

  const [data, setData] = useState({
    user: "",
    setUser: (userName, userId, userSavedGames, avatar) => {
      setData({ ...data, user: userName });
      setUserName(userName);
      setUserId(userId);
      setSavedGames(userSavedGames);
      setAvatar(avatar);
      userName ? setIsLogged(true) : setIsLogged(false);
      localStorage.setItem("isLogged", JSON.stringify(userName ? true : false));
      localStorage.setItem("userName", userName);
      localStorage.setItem("userId", userId);
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("savedGames", JSON.stringify(userSavedGames));
    },
  });

  console.log("DATA ON APP.JS:", data);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://gamer-dash.herokuapp.com/api/games",
    })
      .then((games) => {
        console.log("GAMES", games);
        setGames(games.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://bbblue-games-server.herokuapp.com/wake",
    })
      .then((res) => {
        console.log("WAKE UP!:", res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function displayToast(message, type) {
    let options = {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    if (type === "success") {
      toast.success(message, options);
    } else if (type === "error") {
      toast.error(message, options);
    } else {
      console.error("Wrong Toast Type");
    }
  }

  function loggedUser() {
    console.log("loggedUser");
  }

  return (
    <div className={isLogged ? "main logged" : "main"}>
      <Context.Provider value={data}>
        <Router>
          <NavBar
            isLogged={isLogged}
            userName={userName}
            savedGames={savedGames}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  isLogged={isLogged}
                  games={games}
                  savedGames={savedGames}
                  setSavedGames={setSavedGames}
                  userId={userId}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={() =>
                isLogged ? (
                  <Redirect to={{ pathname: "/profile" }} />
                ) : (
                  <Login
                    isLogged={isLogged}
                    setIsLogged={setIsLogged}
                    loggedUser={loggedUser}
                    displayToast={displayToast}
                  />
                )
              }
            />
            <Route
              exact
              path="/signup"
              render={() => <SignUp displayToast={displayToast} />}
            />
            <Route
              exact
              path="/saved"
              render={
                () => (
                  // isLogged ? (
                  <Saved
                    savedGames={savedGames}
                    setSavedGames={setSavedGames}
                    games={games}
                    userId={userId}
                  />
                )
                // ) : (
                //   <Redirect to={{ pathname: "/login" }} />
                // )
              }
            />
            <Route
              exact
              path="/addgame"
              render={() =>
                isLogged ? (
                  <AddGame displayToast={displayToast} />
                ) : (
                  <Redirect to={{ pathname: "/login" }} />
                )
              }
            />
            <Route
              exact
              path="/profile"
              render={() =>
                isLogged ? (
                  <Profile userName={userName} avatar={avatar} />
                ) : (
                  <Redirect to={{ pathname: "/login" }} />
                )
              }
            />
            <Route
              exact
              path="/courselist"
              render={() =>
                isLogged ? (
                  <CourseList />
                ) : (
                  <Redirect to={{ pathname: "/login" }} />
                )
              }
            />
            <Route
              path="/game/:id"
              render={(props) => <Game {...props} games={games} />}
            />
            <Route component={Error404} />
          </Switch>
          <ToastContainer />
          <Footer />
        </Router>
      </Context.Provider>
    </div>
  );
}
export default App;
