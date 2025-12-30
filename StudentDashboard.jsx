import React, { useState } from "react";

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Sample student data
  const students = [
    { id: 1, name: "Alice Johnson", grade: "A", age: 16 },
    { id: 2, name: "Bob Smith", grade: "B", age: 17 },
    { id: 3, name: "Charlie Lee", grade: "A+", age: 16 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div>
            <h2>📊 Dashboard</h2>
            <p>Total Students: {students.length}</p>
          </div>
        );
      case "students":
        return (
          <div>
            <h2>👨‍🎓 Student List</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Grade</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.grade}</td>
                    <td>{student.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "about":
        return (
          <div>
            <h2>ℹ️ About</h2>
            <p>
              This is a simple student management dashboard built with React.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={{ color: "#fff", textAlign: "center" }}>Dashboard</h2>
        <button
          style={activeTab === "dashboard" ? styles.activeButton : styles.button}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </button>
        <button
          style={activeTab === "students" ? styles.activeButton : styles.button}
          onClick={() => setActiveTab("students")}
        >
          Students
        </button>
        <button
          style={activeTab === "about" ? styles.activeButton : styles.button}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
      </div>
      <div style={styles.content}>{renderContent()}</div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
  },
  sidebar: {
    width: "200px",
    background: "#2c3e50",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#34495e",
    color: "#fff",
    cursor: "pointer",
    textAlign: "left",
  },
  activeButton: {
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#1abc9c",
    color: "#fff",
    cursor: "pointer",
    textAlign: "left",
  },
  content: {
    flex: 1,
    padding: "30px",
    background: "#ecf0f1",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    border: "1px solid #bdc3c7",
    padding: "8px",
    background: "#95a5a6",
    color: "#fff",
  },
  td: {
    border: "1px solid #bdc3c7",
    padding: "8px",
    textAlign: "center",
  },
};

export default StudentDashboard;
