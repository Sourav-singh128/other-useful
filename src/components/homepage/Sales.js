import React from "react";
import "./sales.css";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
const Sales = ({ details }) => {
  return (
    <div className="card-container">
      {details.map((detail) => (
        <div className="card">
          <div
            className="image-container"
            style={{ backgroundColor: detail.imageBackground }}>
            <div className="image" style={{ color: detail.imageColor }}>
              {detail.imgUrl}
            </div>
          </div>

          <div className="content">
            <div className="title">{detail.title}</div>
            <div className="price">{detail.price}</div>
            <div className="arrow-container">
              <span className="arrow">
                {detail.profit ? (
                  <NorthIcon sx={{ fontSize: 15, color: "green" }} />
                ) : (
                  <SouthIcon sx={{ fontSize: 15, color: "red" }} />
                )}
              </span>
              <span
                className="amount"
                style={{ color: detail.profit ? "green" : "red" }}>
                {detail.amount}%
              </span>
              <span className="period">{detail.period}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sales;
