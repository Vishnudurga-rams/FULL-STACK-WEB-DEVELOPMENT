import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [page, setPage] = useState("login");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !role) {
      alert("⚠️ Please enter username and select a role.");
      return;
    }

    if (role === "admin") {
      setPage("admin");
    } else if (role === "user") {
      setPage("user");
    }
  };

  // Admin Dashboard
  if (page === "admin") {
    return (
      <div style={styles.dashboard}>
        <h1>🛠️ Admin Dashboard</h1>
        <p>Welcome, {username} (Admin)</p>
        <button style={styles.button} onClick={() => setPage("login")}>
          Logout
        </button>
      </div>
    );
  }

  // User Dashboard
  if (page === "user") {
    return (
      <div style={styles.dashboard}>
        <h1>👤 User Dashboard</h1>
        <p>Welcome, {username} (User)</p>
        <button style={styles.button} onClick={() => setPage("login")}>
          Logout
        </button>
      </div>
    );
  }

  // Login Page
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🔐 Login</h2>

        <form onSubmit={handleLogin}>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <select
            style={styles.input}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <button style={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #141E30, #243B55)",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "35px",
    borderRadius: "16px",
    width: "340px",
    textAlign: "center",
    boxShadow: "0 18px 40px rgba(0,0,0,0.3)",
  },
  title: {
    marginBottom: "20px",
    color: "#243B55",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "25px",
    border: "none",
    background: "linear-gradient(135deg, #141E30, #243B55)",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  dashboard: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
    color: "#fff",
    fontFamily: "Segoe UI, sans-serif",
    gap: "15px",
  },
};

export default Login;
