import { useState } from "react";
const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const red = "#EE4B2B";
  const blue = "#89CFF0";
  const green = "#7FFFD4";
  return (
    <div className="Component">
      <h1>ColorPicker</h1>
      <ul style={{ listStyle: "none" }}>
        <li style={{ margin: "0.5rem" }}>
          <button onClick={() => setSelectedColor(red)}>Red Color</button>
        </li>
        <li style={{ margin: "0.5rem" }}>
          <button onClick={() => setSelectedColor(blue)}>Blue Color</button>
        </li>
        <li style={{ margin: "0.5rem" }}>
          <button onClick={() => setSelectedColor(green)}>Green Color</button>
        </li>
      </ul>
      <p>{selectedColor}</p>
    </div>
  );
};

export default ColorPicker;
