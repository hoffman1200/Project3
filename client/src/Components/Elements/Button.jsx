import React from "react";
import "../../Styles/Elements/Button.css";
import { Button as AntButton} from 'antd';

function Button(props) {
  return (
    <>

      <button className="button" onClick={props.onClick}> {props.children} </button>

    <AntButton type="primary">
      <p> {children} </p>
    </AntButton>
    </>
  );
}

export default Button;
