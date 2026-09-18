import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add a new task
  const handleAddTodo = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  // Delete a task
  const handleDeleteTodo = (indexToDelete) => {
    setTodos(
      todos.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>

            <button
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;