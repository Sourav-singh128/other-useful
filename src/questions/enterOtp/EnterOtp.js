import React, { useRef } from "react";
import "./enterotp.css";
const EnterOtp = () => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  let refArr = [input1, input2, input3, input4];
  const changeHandler = (e) => {
    // console.log("clicked ", e, " ", e.key);
    // let id = e.target.id;
    // // move cursor forward.
    // if (e.key !== "Backspace") {
    //   console.log("back- change");
    //   let tempRef = refArr[Number(id) + 1];
    //   tempRef?.current?.focus();
    // }
  };

  const pressHandler = (e) => {
    console.log("dele ", e);
    let id = 0;
    if (e.key >= "0" && e.key <= "9") {
      setTimeout(() => {
        while (id < 4 && refArr[id].current?.value) {
          id += 1;
        }
        refArr[Number(id)]?.current?.focus();
      }, 200);
    } else if (e.key === "Backspace") {
      let id = e.target.id;
      setTimeout(() => {
        console.log("back-press");
        while (!refArr[Number(id)].current.value && id > 0) {
          id -= 1;
        }
        refArr[Number(id)]?.current.focus();
      }, 200);
    }
  };
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <input
        style={{ width: "20px", height: "20px" }}
        type="number"
        ref={input1}
        // onChange={changeHandler}
        onKeyDown={pressHandler}
        id="0"
      />
      <input
        style={{ width: "20px", height: "20px" }}
        ref={input2}
        type="number"
        id="1"
        // onChange={changeHandler}
        onKeyDown={pressHandler}
      />
      <input
        style={{ width: "20px", height: "20px" }}
        ref={input3}
        type="number"
        id="2"
        // onChange={changeHandler}
        onKeyDown={pressHandler}
      />
      <input
        style={{ width: "20px", height: "20px" }}
        ref={input4}
        type="number"
        id="3"
        // onChange={changeHandler}
        onKeyDown={pressHandler}
      />
    </div>
  );
};

export default EnterOtp;
