import React, { useState } from "react";

function TodoList() {
  // State to store tasks
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Function to add task
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput(""); // Clear input
    }
  };

  return (
    <div style={{ margin: "50px", fontFamily: "Arial, sans-serif" }}>
      <h2>Daily To-Do List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: "8px", width: "200px", marginRight: "10px" }}
      />
      <button onClick={addTask} style={{ padding: "8px 12px" }}>
        Add
      </button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
