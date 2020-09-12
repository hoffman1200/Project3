import React from "react";
import "../../Styles/Pages/Error404.css";
import errorBackground from "../../assets/castle.mp4";

function Error404() {
  return (
    <>
    <video
        className="errorVideo"
        autoPlay
        loop
        muted
        source="true"
        src={errorBackground}
        type="video/mp4"
      />
    </>
  );
}

export default Error404;
