import React from "react";
import "../Styles/Home.css";

function Home() {
  return (
    <>
      <div className="container homeContainer">
        <div className="logo">
          <img src="" className="mr-3 img-fluid" alt="..." />
        </div>
        <div>
          <button type="button" className="btn btn-primary btn-lg">
            Log In
          </button>
          <button type="button" className="btn btn-primary btn-lg">
            Sign Up
          </button>
          <button type="button" className="btn btn-primary btn-lg">
            Sign in as Guest
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
