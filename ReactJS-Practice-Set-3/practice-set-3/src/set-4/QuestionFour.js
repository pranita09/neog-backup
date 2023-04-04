import { useState } from "react";

const ToDoList = ({ toDoItemsData }) => {
  const [todoItems, setTodoItems] = useState(toDoItemsData);
  const deleteBtnHandler = (index) => {
    let newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoItems.map(({ id, task, isDone }, index) => (
          <li key={id} style={{ textDecoration: isDone ? "line-through" : "" }}>
            {task} <button onClick={() => deleteBtnHandler(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
