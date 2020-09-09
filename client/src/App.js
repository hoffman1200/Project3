import React, { useState } from "react";
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
import Join from "./Components/Pages/Join";
import Saved from "./Components/Pages/Saved";
import Game from "./Components/Pages/Game";
import Error404 from "./Components/Pages/Error404";
import AddGame from "./Components/Pages/AddGame";
import Profile from "./Components/Pages/Profile";
import CourseList from "./Components/Pages/CourseList";
import gameSeed from "../src/card.json";
import "antd/dist/antd.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Context = React.createContext({ user: "", setUser: () => {} });

function App() {
  
  const [userName, setUserName] = useState("");
  
  const [games, setGames] = useState([...gameSeed]);
  
  const [savedGames, setSavedGames] = useState([games[0], games[2]]);
  
  const [data, setData] = useState({
    user: "",
    setUser: (userName) => {
      setData({ ...data, user: userName });
      setUserName(userName);
      userName ? setIsLogged(true) : setIsLogged(false);
      localStorage.setItem("isLogged", JSON.stringify(userName? true : false))
    },
  });
  const [isLogged, setIsLogged] = useState(JSON.parse(localStorage.getItem("isLogged")));

  function displayToast(message, type) {
    let options = {
      position: "bottom-center",
      autoClose: 3000,
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

  function PrivateRoute({ children, ...rest }) {
    console.log(isLogged)
    console.log(rest.isLogged)
    return (

      <Route
        {...rest}
        render={() =>
          isLogged ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      />
    );
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
            <PrivateRoute>
              <Route
                exact
                path="/saved"
                render={() => (
                  <Saved
                    savedGames={savedGames}
                    setSavedGames={setSavedGames}
                  />
                )}
              />
              <Route exact path="/addgame" component={AddGame} />
              <Route
                exact
                path="/profile"
                render={() => <Profile userName={userName} />}
              />
              <Route exact path="/courselist" component={CourseList} />
            </PrivateRoute>
            <Route exact path="/join" component={Join} />
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
