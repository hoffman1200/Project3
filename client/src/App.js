import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from "react-router-dom";
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
import 'antd/dist/antd.css';
export const Context = React.createContext({user: "", setUser: () => {}});

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const [userName, setUserName] = useState("");

  const [games, setGames] = useState([...gameSeed]);

  const [savedGames, setSavedGames] = useState([games[0], games[2]]);
  
  const [data, setData] = useState({
    user: "",
    setUser: (userName) => {
      setData({...data, user: userName})
      setUserName(userName)
      !userName ? setIsLogged(false) : setIsLogged(true) 
    }
  });

  function loggedUser () {
    console.log("loggedUser")
    // userName && 
  }

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() =>
          isLogged ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login"
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
          exact path="/login" 
          render={() => (
            <Login
            isLogged={isLogged}
            loggedUser={loggedUser} 
              />
            )}  
          />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute>
          <Route
            exact
            path="/saved"
            render={() => (
              <Saved savedGames={savedGames} setSavedGames={setSavedGames} />
            )}
          />
          </PrivateRoute>
          <Route exact path="/join" component={Join} />
          <Route
            path="/game/:id"
            render={(props) => <Game {...props} games={games} />}
          />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </Router>
      </Context.Provider>
    </div>
  );
}
export default App;
