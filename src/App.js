import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Guest from "./Components/Guest";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
       <Router>
      <NavBar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/guest" component={Guest} />
        {/* <Route path="/" component={Error404} /> */}
      </Router>
      <Footer/>
    </>
  );
}

export default App;
