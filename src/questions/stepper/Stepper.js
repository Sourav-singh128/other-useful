import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
const value = [1, 2, 3, 4];
const Stepper = () => {
  const [count, setCount] = useState(1);
  console.log("count ", count);
  const backColor = (val) => {
    if (val === count) return "blue";
    else if (val < count) return "green";
    else return "none";
  };
  const color = (val) => {
    if (val < count) return "white";
    else return "black";
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
        }}>
        {value.map((val) => (
          <span
            key={val}
            style={{
              borderRadius: "50%",
              border: "1px solid black",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: `${color(val)}`,
              backgroundColor: `${backColor(val)}`,
              zIndex: 1,
            }}>
            {val < count ? <>&#x2713;</> : val}
          </span>
        ))}
        <ProgressBar value={count - 1} max={3} />
      </div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}>
        next
      </button>
    </>
  );
};

export default Stepper;
