import { useState } from "react";

const ListingItems = ({ itemsData }) => {
  const [items, setItems] = useState([]);
  return (
    <div>
      <div>
        <button onClick={() => setItems(itemsData)}>All</button>
        <button
          onClick={() =>
            setItems(itemsData.filter(({ category }) => category === "Fruit"))
          }
        >
          Fruits
        </button>
        <button
          onClick={() =>
            setItems(
              itemsData.filter(({ category }) => category === "Vegetable")
            )
          }
        >
          Vegetables
        </button>
      </div>
      <ul>
        {items.map(({ id, name, category }) => (
          <li
            key={id}
            style={{ color: category === "Fruit" ? "orange" : "green" }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingItems;
