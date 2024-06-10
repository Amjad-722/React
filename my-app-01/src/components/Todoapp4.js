import React, { useState } from "react";

const Todoapp4 = () => {
  const colors = ["blue", "green", "red", "purple", "yellow", "black"];
  const [bgColor, setBgColor] = useState(colors[0]);

const toggleColor = ()=> {
const currenIndex = colors.indexOf(bgColor);
const nextIndex = (currenIndex + 1) % colors.length;
setBgColor(colors[nextIndex])

};

 
  return (
    <button
      onClick={toggleColor}
      style={{
        backgroundColor: bgColor,
        color: "white",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Click me to change color
    </button>
  );
};

export default Todoapp4;
