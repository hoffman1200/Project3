import React from "react";
import "../../Styles/Elements/Button.css";

function Button({ children }) {
  return (
    <>
      <button className="button"> {children} </button>
    </>
  );
}

export default Button;
