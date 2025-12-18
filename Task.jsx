import React, { useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: input,
      },
    ]);
    setInput("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>📝 Task List Dashboard</h2>

      <div style={styles.inputRow}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p style={styles.empty}>No tasks added yet.</p>
      ) : (
        <ul style={styles.list}>
          {tasks.map((task) => (
            <li key={task.id} style={styles.listItem}>
              <span>{task.text}</span>
              <button
                onClick={() => removeTask(task.id)}
                style={styles.removeBtn}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  inputRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px",
  },
  addBtn: {
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    borderBottom: "1px solid #ddd",
  },
  removeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
  },
  empty: {
    color: "#777",
    fontStyle: "italic",
  },
};

export default Task;
