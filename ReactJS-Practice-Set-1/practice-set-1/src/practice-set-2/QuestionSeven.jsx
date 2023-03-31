import { useState } from "react";

const About = ({ heading, name, learning }) => {
  const [showLearning, setShowLearning] = useState("");
  return (
    <div className="Component">
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={() => setShowLearning(learning)}>Know More</button>
      <p>{showLearning}</p>
    </div>
  );
};

export default About;
