import "./App.css";
import React, { useState, useTransition } from "react";

const randomNameGenerator = (num) => {
  let arr = [];
  for (let j = 0; j < 10000; j++) {
    let res = "";
    for (let i = 0; i < Math.ceil(Math.random() * 8); i++) {
      const random = Math.floor(Math.random() * 25);
      res += String.fromCharCode(97 + random);
    }
    arr.push(res);
  }
  return arr;
};

const RandomGen = () => {
  const arrReturn = randomNameGenerator();
  const [name, setName] = useState();
  const [largeList, setLargeList] = useState(arrReturn);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
    startTransition(() => {
      setLargeList(arrReturn.filter((list) => list.includes(e.target.value)));
    });

    console.log("largeList value ", largeList);
    console.log(arrReturn.filter((li) => li.includes(e.target.value)));
  };

  console.log(arrReturn.length);
  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {isPending ? (
        <div>loading</div>
      ) : (
        largeList.map((val, ind) => {
          return <li key={ind}>{val}</li>;
        })
      )}
    </>
  );
};
