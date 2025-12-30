import React, { useState } from "react";

function WorkshopRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
    level: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📝 Workshop Registration</h2>

        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <select
          style={styles.input}
          name="workshop"
          value={formData.workshop}
          onChange={handleChange}
        >
          <option value="">Select Workshop</option>
          <option value="React Basics">React Basics</option>
          <option value="Web Development">Web Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>

        <select
          style={styles.input}
          name="level"
          value={formData.level}
          onChange={handleChange}
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* LIVE PREVIEW */}
      <div style={styles.previewCard}>
        <h2 style={styles.previewTitle}>👀 Live Preview</h2>
        <p><strong>Name:</strong> {formData.name || "-"}</p>
        <p><strong>Email:</strong> {formData.email || "-"}</p>
        <p><strong>Workshop:</strong> {formData.workshop || "-"}</p>
        <p><strong>Level:</strong> {formData.level || "-"}</p>
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
    gap: "30px",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
    fontFamily: "Segoe UI, sans-serif",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    width: "330px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#185a9d",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  previewCard: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    width: "330px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
  },
  previewTitle: {
    marginBottom: "15px",
    color: "#43cea2",
  },
};

export default WorkshopRegistration;
