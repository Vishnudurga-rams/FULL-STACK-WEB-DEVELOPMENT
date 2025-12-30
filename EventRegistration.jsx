import React from "react";

function EventRegistration() {
  const registerEvent = () => {
    const name = prompt("👤 Enter Participant Name:");
    if (!name) {
      alert("⚠️ Registration cancelled. Name is required.");
      return;
    }

    const email = prompt("📧 Enter Email Address:");
    if (!email) {
      alert("⚠️ Registration cancelled. Email is required.");
      return;
    }

    const eventName = prompt(
      "🎫 Enter Event Name:\nTech Talk / Workshop / Seminar"
    );
    if (!eventName) {
      alert("⚠️ Registration cancelled. Event name is required.");
      return;
    }

    const confirmRegistration = confirm(
      `🎉 Confirm Event Registration\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Event: ${eventName}`
    );

    if (confirmRegistration) {
      alert(
        `✅ Registration Successful!\n\n` +
          `Participant: ${name}\n` +
          `Event: ${eventName}\n\n` +
          `📩 Confirmation email sent to ${email}`
      );
    } else {
      alert("❌ Registration not confirmed.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎉 Event Registration</h1>
        <p style={styles.subtitle}>
          Register for events using confirmation alerts
        </p>
        <button style={styles.button} onClick={registerEvent}>
          Register Now
        </button>
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
    background: "linear-gradient(135deg, #ff512f, #dd2476)",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "18px",
    width: "370px",
    textAlign: "center",
    boxShadow: "0 18px 45px rgba(0,0,0,0.3)",
  },
  title: {
    color: "#dd2476",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "30px",
  },
  button: {
    padding: "14px 34px",
    fontSize: "16px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    background: "linear-gradient(135deg, #ff512f, #dd2476)",
  },
};

export default EventRegistration;
