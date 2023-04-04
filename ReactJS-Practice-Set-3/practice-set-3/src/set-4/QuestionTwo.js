import { useState } from "react";

const FontSizeHandler = () => {
  const [fontSizeStyle, setFontSizeStyle] = useState(18);

  return (
    <div>
      <h1 style={{ fontSize: `${fontSizeStyle}px` }}>Welcome</h1>
      <button onClick={() => setFontSizeStyle(fontSizeStyle + 1)}>+</button>
      <button onClick={() => setFontSizeStyle(fontSizeStyle - 1)}>-</button>
    </div>
  );
};

export default FontSizeHandler;
