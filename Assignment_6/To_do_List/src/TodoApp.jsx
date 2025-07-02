import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    const trimmed = task.trim();
    if (!trimmed) return;

    const updatedTodos = [...todos, trimmed];
    updatedTodos.sort((a, b) => a.localeCompare(b));
    setTodos(updatedTodos);
    setTask("");
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    updatedTodos.sort((a, b) => a.localeCompare(b));
    setTodos(updatedTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div>
      <h2>📝 Todo List</h2>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyPress}
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />
      <button onClick={handleAddTask} style={{ padding: "8px 12px" }}>
        Add
      </button>

      {todos.length === 0 ? (
        <p style={{ marginTop: "20px" }}>No tasks yet.</p>
      ) : (
        <ul style={{ marginTop: "20px", paddingLeft: "20px" }}>
          {todos.map((todo, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {todo}
              <button
                onClick={() => handleDelete(index)}
                style={{ marginLeft: "10px", padding: "4px 8px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoApp;
