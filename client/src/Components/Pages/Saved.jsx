import React from "react";
import "../../Styles/Pages/Saved.css";
import { useState } from "react";
import axios from "axios";
import Button from "../Elements/Button"

function Saved() {
  const [data, setData] = useState(null);
  
  const getUser = (e) => {
    e.preventDefault();
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3003/api/user"
    }).then((res) => {
      setData(res.data)
      console.log(res.data)
    });
  }

  return(
   <>
             <Button onClick={getUser}>Get User</Button>

   
   Saved Games Here!!
   {data ? <h1>Hello {data.username}</h1> : null}

   </>
  )
}

export default Saved;
