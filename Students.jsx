import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Sample student data
const students = [
  { id: 1, name: "Alice Johnson", grade: "A", age: 16 },
  { id: 2, name: "Bob Smith", grade: "B", age: 17 },
  { id: 3, name: "Charlie Lee", grade: "A+", age: 16 },
];

// Dashboard Page
function Dashboard() {
  return (
    <div>
      <h2>📊 Dashboard</h2>
      <p>Total Students: {students.length}</p>
    </div>
  );
}

// Students Page
function Students() {
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
}

// About Page
function About() {
  return (
    <div>
      <h2>ℹ️ About</h2>
      <p>This is a multi-page student dashboard using React Router.</p>
    </div>
  );
}

function StudentDashboard() {
  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.sidebar}>
          <h2 style={{ color: "#fff", textAlign: "center" }}>Dashboard</h2>
          <Link style={styles.link} to="/">
            Dashboard
          </Link>
          <Link style={styles.link} to="/students">
            Students
          </Link>
          <Link style={styles.link} to="/about">
            About
          </Link>
        </nav>

        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
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
  link: {
    color: "#fff",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "8px",
    background: "#34495e",
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
