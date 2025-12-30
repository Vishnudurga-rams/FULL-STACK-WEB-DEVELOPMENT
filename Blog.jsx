import React, { useState } from "react";

function Blog() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();

    if (!newComment.trim()) {
      alert("⚠️ Comment cannot be empty!");
      return;
    }

    const comment = {
      id: Date.now(),
      text: newComment,
      time: new Date().toLocaleTimeString(),
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.blogCard}>
        <h1 style={styles.title}>📝 My Blog Post</h1>
        <p style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <form style={styles.form} onSubmit={handleAddComment}>
          <input
            style={styles.input}
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button style={styles.button} type="submit">
            Add Comment
          </button>
        </form>

        <div style={styles.commentsSection}>
          <h3>💬 Comments ({comments.length})</h3>
          {comments.length === 0 ? (
            <p style={{ color: "#666" }}>No comments yet</p>
          ) : (
            comments.map((c) => (
              <div key={c.id} style={styles.comment}>
                <p>{c.text}</p>
                <span style={styles.time}>{c.time}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f4f4f4",
    fontFamily: "Segoe UI, sans-serif",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
  },
  blogCard: {
    background: "#fff",
    borderRadius: "12px",
    padding: "30px",
    maxWidth: "700px",
    width: "100%",
    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
  },
  title: {
    marginBottom: "15px",
    color: "#333",
  },
  content: {
    marginBottom: "25px",
    lineHeight: "1.6",
    color: "#555",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  commentsSection: {
    borderTop: "1px solid #ccc",
    paddingTop: "15px",
  },
  comment: {
    background: "#f9f9f9",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  time: {
    fontSize: "11px",
    color: "#999",
  },
};

export default Blog;
