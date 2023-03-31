import { useState } from "react";

const Article = ({ title, content }) => {
  const [showContent, setShowContent] = useState("");
  const btnHandler = () => setShowContent(content);
  return (
    <div className="Component">
      <h1>{title}</h1>
      <button onClick={btnHandler}>Show Content</button>
      <p>{showContent}</p>
    </div>
  );
};

export default Article;
