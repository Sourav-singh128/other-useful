import React, { useState } from "react";
import "./sidebar.css";
import HexagonIcon from "@mui/icons-material/Hexagon";
import Avatar from "@mui/material/Avatar";

import LinkComp from "./LinkComp";
import { deepOrange } from "@mui/material/colors";

const stateObj = [
  { id: 0, initValue: true, title: "Dashboard" },
  { id: 1, initValue: false, title: "Product" },
  { id: 2, initValue: false, title: "Customer" },
];

// hard-coded login details as page is static.
const userDetails = { name: "Sourav", designation: "Software Engineer" };
const Sidebar = () => {
  const [linkState, setLinkState] = useState(stateObj);
  console.log("state ", linkState);
  const currentPage = linkState.filter((val) => val.initValue === true);

  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <div>
          <HexagonIcon />
          {currentPage[0].title}
        </div>
        <LinkComp actualState={linkState} changeState={setLinkState} />
        {/* <LinkComp
          title="Product"
          actualState={linkState}
          id={2}
          changeState={setLinkState}
        />
        <LinkComp
          title="Customer"
          actualState={linkState}
          id={3}
          changeState={setLinkState}
        /> */}

        <div className="profile-container">
          <Avatar sx={{ bgcolor: deepOrange[500] }}>OP</Avatar>
          <div>
            <div className="profile-title">{userDetails.name}</div>
            <div>{userDetails.designation}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
