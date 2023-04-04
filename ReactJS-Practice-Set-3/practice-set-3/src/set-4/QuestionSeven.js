import { useState } from "react";

const LivesInGame = () => {
  const [livesCounter, setLivesCounter] = useState(5);
  return (
    <div>
      <h1>Current Lives: {livesCounter}</h1>
      <button
        onClick={() => {
          if (livesCounter > 0) setLivesCounter(livesCounter - 1);
        }}
      >
        Lose a Life
      </button>
      {livesCounter === 0 ? <h2>Game Over!</h2> : <></>}
    </div>
  );
};

export default LivesInGame;
