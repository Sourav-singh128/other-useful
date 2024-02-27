import React, { useEffect } from "react";
import { useRef, useState } from "react";
import "./multiselect.css";
import Ellipses from "./Ellipses";
const spoarts = [
  { id: 1, name: "cricket" },
  { id: 2, name: "football" },
  { id: 3, name: "hockey" },
  { id: 4, name: "tt" },
  { id: 5, name: "basketball" },
];

const Multiselect = () => {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef();
  const [ellipse, setEllipse] = useState([]);
  const [dropdown, setDropdown] = useState([]);

  console.log("ell ", ellipse);
  const clickOutside = (e) => {
    if (inputRef.current === e.target) {
      console.log("clicked inside");
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    setDropdown(spoarts);
    window.addEventListener("click", clickOutside);
  }, []);
  const focusHandler = () => {
    setVisible(true);
  };

  const listHandler = (e) => {
    //prettier-ignore
    let ellipseLen = (ellipse.length * 50) + "px";
    // ellipse.forEach((val) => {
    //   console.log("len-inside ", val.name.length);
    //   ellipseLen += val.name.length;
    // });

    const filterData = dropdown.filter((val) => {
      if (val.name !== e.target.innerText.trim()) {
        return val;
      } else {
        setEllipse([...ellipse, val]);
      }
    });
    setDropdown(filterData);
    setVisible(false);
    inputRef.current.focus();
    console.log("ellpse-len ", ellipseLen);
    inputRef.current.style.paddingLeft = ellipseLen;
  };

  const removeEllipse = (name) => {
    console.log(name);
    const filterData = ellipse.filter((val) => {
      if (val.name !== name.trim()) {
        return val;
      } else {
        setDropdown([...dropdown, val]);
      }
    });
    setEllipse(filterData);
    inputRef.current.style.paddingLeft =
      Number(inputRef.current.style.paddingLeft.replace("px", "")) - 30 + "px";
    inputRef.current.focus();
  };
  return (
    <div>
      <div
        style={{
          position: "relative",
        }}>
        <Ellipses data={ellipse} removeEllipse={removeEllipse} />
        <input
          type="text"
          ref={inputRef}
          onFocus={focusHandler}
          style={{
            outline: "none",
            border: "1px solid red",
            width: "50%",
            height: "50px",
          }}
          placeholder="search here"
          className="input"
        />
      </div>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          maxWidth: "200px",
        }}
        id="drop">
        {visible &&
          dropdown.map((val) => (
            <div key={val.id} onClick={listHandler} className="dropdown">
              {" "}
              {val.name}{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Multiselect;
