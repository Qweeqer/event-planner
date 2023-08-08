import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {" "}
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="loading"
        width="64"
        visible={true}
      />
    </div>
  );
}

export default Loader;
