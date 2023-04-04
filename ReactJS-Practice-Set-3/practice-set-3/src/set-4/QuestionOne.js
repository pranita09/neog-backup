import { useState } from "react";

const ShowCharacters = ({ charactersData }) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  return (
    <div>
      <button
        onClick={() => {
          setData(charactersData.heroes);
          setTitle("Heroes:");
        }}
      >
        Show Heroes
      </button>
      <button
        onClick={() => {
          setData(charactersData.villains);
          setTitle("Villains:");
        }}
      >
        Show Villains
      </button>
      <h2>{title}</h2>
      <ol style={{ listStyle: "none" }}>
        {data.map(({ name, powers, costume }, index) => (
          <li key={index}>
            <h4>{name}</h4>
            <p>Powers: {powers}</p>
            <p>Costume: {costume}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ShowCharacters;
