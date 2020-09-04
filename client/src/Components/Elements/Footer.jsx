import React from "react";
import "../../Styles/Elements/Footer.css";
import Death from "../../assets/death.png";


function Footer() {
  return (
    <footer>
      <img src={Death} className="nav-logo" alt="..." />
       <div className="footer-center">
      <p className="footer-text">
        Made with{" "}
        <span role="img" aria-label="love">
        💜
        </span>{"  "}
        by Emily, Fer and Pauli 2020
      </p>
      </div>
    </footer>

  );
}

export default Footer;
