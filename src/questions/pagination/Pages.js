import "./pagination.css";
import { useEffect, useState } from "react";
export default function Pages(props) {
  const [pagination, setPagination] = useState([]);
  const [current, setCurrent] = useState(1);
  const totalPage = props.totalPage;

  useEffect(() => {
    console.log("current-val ", current);
    props.pageFunc(current);
    const tempArrSize = 6;
    const tempArr = [];
    if (Math.abs(1 - current) >= 3) {
      tempArr[0] = 1;
      tempArr[1] = "...";
    } else {
      tempArr[tempArrSize - 1] = totalPage;
      tempArr[tempArrSize - 2] = "...";
      for (let i = 0; i < tempArrSize; i++) {
        if (!tempArr[i]) tempArr[i] = i + 1;
      }
    }
    if (Math.abs(totalPage - current) >= 3) {
      tempArr[tempArrSize - 1] = totalPage;
      tempArr[tempArrSize - 2] = "...";
    } else {
      tempArr[0] = 1;
      tempArr[1] = "...";
      for (let i = tempArrSize - 1, j = 0; i >= 0; i--, j++) {
        if (!tempArr[i]) tempArr[i] = totalPage - j;
      }
    }
    let count = 0;
    for (let i = tempArrSize - 1; i >= 0; i--) {
      if (tempArr[i]) continue;
      else {
        tempArr[i] = current - count;
        count++;
      }
    }
    console.log("temp-arr ", tempArr);
    setPagination(tempArr);
  }, [current]);

  const activeColor = (e) => {
    if (e.currentTarget.textContent === "...") return;
    setCurrent(+e.currentTarget.textContent);
  };

  const incrementOne = () => {
    setCurrent((val) => val + 1);
  };

  const decrementOne = () => {
    setCurrent((val) => val - 1);
  };

  return (
    <div>
      {console.log("arr-val ", pagination)}
      <span className={current < 2 ? "hide" : "page"} onClick={decrementOne}>
        prev
      </span>
      {pagination.map((val, i) => (
        <span
          key={i}
          className={val == current ? "page sage" : "page"}
          onClick={activeColor}>
          {val}
        </span>
      ))}
      <span
        className={current > totalPage - 1 ? "hide" : "page"}
        onClick={incrementOne}>
        next
      </span>
    </div>
  );
}
