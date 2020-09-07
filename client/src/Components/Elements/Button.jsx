import React from "react";
import "../../Styles/Elements/Button.css";
import { Button as AntButton} from 'antd';


function Button(props) {
  return (
    <>
      {/* <button className="button" onClick={props.onClick}> {props.children} </button> */}

    <AntButton htmlType={props.htmlType} type="primary" onClick={props.onClick}>
      <p> {props.children} </p>
    </AntButton>

    </>
  );
}

export default Button;
