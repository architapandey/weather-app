import React from "react";
import "./index.css";

const Loader = () => {
  return (
    <div className="w-full h-custom flex justify-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
