import React, { useState } from "react";

const RandomColorP = () => {
  const [color, setColor] = useState("");

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  const handleClick = () => {
    setColor(generateRandomColor());
  };
   

  return (
    <div>
      <button onClick={handleClick} style={{ background:color, display: "flex", alignItems: "center", justifyContent: "center", width: "200px", height: "100px" }}>
        {color }
      </button>
    </div>
  );
};

export default RandomColorP;
