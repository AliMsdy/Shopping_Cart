import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="lds-roller d-flex justify-content-center">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
