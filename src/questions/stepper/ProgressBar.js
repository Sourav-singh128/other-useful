import React from "react";

const ProgressBar = ({ value, max }) => {
  return (
    <>
      <progress
        value={value}
        max={max}
        style={{ width: "77%", position: "absolute", top: "30%" }}></progress>
    </>
  );
};

export default ProgressBar;
