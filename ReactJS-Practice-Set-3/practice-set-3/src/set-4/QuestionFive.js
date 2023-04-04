import { useState } from "react";

const TodoList = ({ todoItemsData }) => {
  const [todoItems, setTodoItems] = useState(todoItemsData);

  const handleDoneToggle = (id) => {
    const newTodoItems = todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setTodoItems(newTodoItems);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul style={{ listStyle: "none" }}>
        {todoItems.map(({ id, task, isDone }) => (
          <li
            key={id}
            style={
              isDone
                ? { textDecoration: "line-through", color: "red" }
                : { textDecoration: "none", color: "black" }
            }
          >
            {task}{" "}
            <button onClick={() => handleDoneToggle(id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
