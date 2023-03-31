const Todo = ({ todoItems }) => {
    const DisplayTask = ({ title, desc, isFulfilled }) => {
      const taskColor = (flag) => (flag === true ? "green" : "red");
  
      return (
        <li
          style={{
            color: taskColor(isFulfilled),
            border: "1px solid black",
            margin: "0.5rem"
          }}
        >
          <h1>{title}</h1>
          <p>{desc}</p>
        </li>
      );
    };
  
    return (
      <div className="Component">
        <h3>Todo List</h3>
        <ul style={{ listStyle: "none" }}>
          {todoItems.map(({ id, title, description, isCompleted }) => (
            <DisplayTask
              key={id}
              title={title}
              desc={description}
              isFulfilled={isCompleted}
            />
          ))}
        </ul>
      </div>
    );
  };
  
  export default Todo;
  