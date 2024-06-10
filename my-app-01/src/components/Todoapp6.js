

import React, { useState } from "react";

const TodoApp6 = () => {
  const [miles, setMiles] = useState(0);
  const [kilometers, setKilometers] = useState(0);

  const handleMilesChange = (e) => {
    const value = parseFloat(e.target.value);
    setMiles(value);
    const convertedValue = value * 1.60934; // Conversion factor
    setKilometers(convertedValue);
  };

  return (
    <div>
      <h2>Miles to Kilometers Converter</h2>
      <label>
        Miles:
        <input type="number" value={miles} onChange={handleMilesChange} />
      </label>
      <br />
      <label>
        Kilometers:
        <input type="number" value={kilometers} readOnly />
      </label>
    </div>
  );
};

export default TodoApp6;
