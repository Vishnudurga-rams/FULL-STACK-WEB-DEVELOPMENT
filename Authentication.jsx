import React, { useState } from "react";

function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded credentials for simulation
  const validCredentials = {
    username: "admin",
    password: "12345",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("⚠️ Please enter both username and password.");
      return;
    }

    if (username === validCredentials.username && password === validCredentials.password) {
      alert("✅ Login successful! Welcome " + username);
      setUsername("");
      setPassword("");
    } else {
      alert("❌ Invalid username or password!");
    }
  };

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

          <input
            style={styles.input}
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

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
    background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
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
    color: "#ff4b2b",
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
    background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Authentication;
