import React from "react";
import "./linkComp.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const stateChangeHandler = (id, actualState, changeState) => {
  actualState.forEach((ele) => {
    if (ele.id === id) {
      ele.initValue = true;
    } else {
      ele.initValue = false;
    }
  });

  console.log("actual-state ", actualState);
  const newState = [...actualState];
  //   changeState([
  //     { id: 1, initValue: false },
  //     { id: 2, initValue: false },
  //     { id: 3, initValue: false },
  //   ]);
  changeState(newState);
};

const LinkComp = ({ actualState, changeState }) => {
  console.log("something");
  return actualState.map((state, ind) => (
    <div
      key={state.id}
      className="sidebar-link"
      style={{ backgroundColor: state.initValue && "#2d2d69" }}
      onClick={() => stateChangeHandler(ind, actualState, changeState)}>
      <div className="sidebar-title-container">
        <DashboardIcon color="white" />
        <span className="sidebar-title">{state.title}</span>
      </div>
      <ChevronRightIcon />
    </div>
  ));
};

export default LinkComp;
