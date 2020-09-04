import React from "react";
import "../../Styles/Elements/Button.css";
import { Button as AntButton} from 'antd';

function Button({ children }) {
  return (
    <>
    <AntButton type="primary">
      <p> {children} </p>
    </AntButton>
    </>
  );
}

export default Button;
