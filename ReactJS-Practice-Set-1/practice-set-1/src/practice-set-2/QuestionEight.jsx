import { useState } from "react";

const MyGadgets = ({ gadgetsList }) => {
  const [bgColor, setBgColor] = useState(false);

  const GadgetData = ({ name, desc, price }) => {
    return (
      <li
        style={{
          padding: "0.2rem",
          margin: "0.2rem",
          backgroundColor: price > 50000 && bgColor ? "lightgreen" : "white"
        }}
      >
        <p>{name}</p>
        <p>{desc}</p>
        <p>{price}</p>
      </li>
    );
  };

  return (
    <div className="Component">
      <h1>List of Gadgets</h1>
      <ol>
        {gadgetsList.map(({ id, name, description, price }) => (
          <GadgetData key={id} name={name} desc={description} price={price} />
        ))}
      </ol>
      <button onClick={() => setBgColor(!bgColor)}>
        Highlight Expensive Gadget
      </button>
    </div>
  );
};

export default MyGadgets;
