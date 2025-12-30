import React, { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !rating || !comments) {
      alert("⚠️ Please fill all fields before submitting.");
      return;
    }

    alert(
      `✅ Feedback Submitted!\n\n` +
        `Name: ${name}\n` +
        `Rating: ${rating} / 5\n` +
        `Comments: ${comments}`
    );

    // Reset form
    setName("");
    setRating("");
    setComments("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📝 Student Feedback</h2>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select
            style={styles.input}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>

          <textarea
            style={{ ...styles.input, height: "100px" }}
            placeholder="Your Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />

          <button style={styles.button} type="submit">
            Submit Feedback
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
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Segoe UI, sans-serif",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "35px",
    borderRadius: "16px",
    width: "360px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.3)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#764ba2",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    resize: "none",
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
};

export default Feedback;
