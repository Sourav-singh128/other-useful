import React from "react";

const Ellipses = ({ data, removeEllipse }) => {
  return (
    <>
      <div style={{ position: "absolute", display: "flex", gap: "10px" }}>
        {data.map((ell) => (
          <div key={ell.id}>
            <span>{ell.name}</span>
            <span
              onClick={() => {
                removeEllipse(ell.name);
              }}>
              x
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ellipses;
