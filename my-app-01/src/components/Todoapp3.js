import React, { useState } from "react";

const TodoApp3 = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const handleCelsiusChange = (e) => {
    const value = parseFloat(e.target.value);
    setCelsius(value);
    const convertedValue = (value * 9) / 5 + 32; // Conversion formula
    setFahrenheit(convertedValue);
  };

  return (
    <div>
      <h2>Celsius to Fahrenheit Converter {celsius}</h2>
      <label>
        Celsius:
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </label>
      <br />
      <label>
        Fahrenheit:
        <input type="number" value={fahrenheit} readOnly />
      </label>
    </div>
  );
};

export default TodoApp3;
