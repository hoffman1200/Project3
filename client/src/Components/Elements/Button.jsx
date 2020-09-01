import React from "react";
import "../../Styles/Elements/Button.css";

function Button(props) {
  return (
    <>
      <button className="button" onClick={props.onClick}> {props.children} </button>
    </>
  );
}

export default Button;
