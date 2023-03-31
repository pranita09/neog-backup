import { useState } from "react";

const Gadgets = ({ gadgetsList }) => {
  const [borderStyle, setBorderStyle] = useState(false);

  const btnHandler = () => setBorderStyle(!borderStyle);

  const costlyGadget = (gadgetsList) =>
    gadgetsList.reduce((acc, curr) => (acc < curr.price ? curr.price : acc), 0);

  function GadgetData({ name, desc, price }) {
    return (
      <li
        style={{
          padding: "0.2rem",
          border:
            price === costlyGadget(gadgetsList) && borderStyle
              ? "2px solid red"
              : "none"
        }}
      >
        <p>{name}</p>
        <p>INR {price}</p>
        <p>{desc}</p>
      </li>
    );
  }

  return (
    <div className="Component">
      <h1>List of Gadgets</h1>
      <ol>
        {gadgetsList.map(({ id, name, description, price }) => (
          <GadgetData key={id} name={name} desc={description} price={price} />
        ))}
      </ol>
      <button onClick={btnHandler}>Highlight Costly Gadget</button>
    </div>
  );
};

export default Gadgets;
