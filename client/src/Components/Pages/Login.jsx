import React from "react";
import "../../Styles/Pages/Login.css";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import greenBackground from "../../assets/greenWalk.mp4";
import { Input } from 'antd';
import { UserOutlined, LockOutlined} from "@ant-design/icons"

function Login() {
  return (
    <>
    <video className="greenVideo" autoPlay loop muted source src={greenBackground} type="video/mp4"/>
      <form>
          <Input onChange
              prefix={<UserOutlined/>}
              placeholder="Username"
            />
            <Input
              prefix={<LockOutlined/>}
              type="password"
              placeholder="Password"
            />
        <Link to="/">
          <Button>Submit</Button>
        </Link>
      </form>
    </>
  );
}
export default Login;