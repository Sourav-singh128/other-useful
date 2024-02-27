import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import "./bargraph.css";

export const data = [
  ["Month", "Sales"],
  ["Jan", 1000],
  ["Feb", 1170],
  ["Mar", 660],
  ["Apr", 1030],
  ["May", 1000],
  ["Jun", 1170],
  ["Jul", 660],
  ["Aug", 1030],
  ["Sep", 1000],
  ["Oct", 1170],
  ["Nov", 660],
  ["Dec", 1030],
];

export const options = {
  Chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },

  colors: ["#b0120a"],
};

const BarGraph = () => {
  useEffect(() => {
    setTimeout(() => {
      let svg = document
        .querySelector("#reactgooglegraph-1")
        .querySelector("svg");

      let line = svg.querySelectorAll("line");
      // console.log("ele ", ele);
      line.forEach((val) => (val.style.display = "none"));
      let text = svg.querySelectorAll("text");
      text.forEach((val) => {
        if (
          val.innerHTML == "500" ||
          val.innerHTML == "1K" ||
          val.innerHTML == "0"
        ) {
          val.style.display = "none";
        }
      });
    }, 1000);

    // let child = ele.querySelector("svg");
    // console.log(child);
    // .querySelector("svg");
    // .querySelectorAll("line");
    // ele.forEach((val) => (val.style.display = "none"));
  }, []);
  return (
    <div className="chart-container">
      <Chart
        chartType="Bar"
        width="700px"
        height="250px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default BarGraph;
