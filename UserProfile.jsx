import React, { useState } from "react";

function UserProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (formData.age <= 0) {
      newErrors.age = "Age must be a positive number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (validate()) {
      setSuccess("✅ Profile updated successfully!");
      setFormData({ name: "", email: "", age: "" });
      setErrors({});
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>👤 Edit User Profile</h2>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}

          <input
            style={styles.input}
            type="text"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          <input
            style={styles.input}
            type="number"
            name="age"
            placeholder="Enter age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p style={styles.error}>{errors.age}</p>}

          <button style={styles.button} type="submit">
            Save Profile
          </button>
        </form>

        {success && <p style={styles.success}>{success}</p>}
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
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "35px",
    borderRadius: "18px",
    width: "360px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#667eea",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "25px",
    border: "none",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginBottom: "8px",
  },
  success: {
    color: "green",
    textAlign: "center",
    marginTop: "15px",
    fontWeight: "bold",
  },
};

export default UserProfile;
