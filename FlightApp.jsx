import React from "react";

function App() {
  const bookTicket = () => {
    const name = prompt("✈️ Enter Passenger Name:");
    if (!name) {
      alert("⚠️ Booking cancelled. Name is required.");
      return;
    }

    const destination = prompt("🌍 Enter Destination:");
    if (!destination) {
      alert("⚠️ Booking cancelled. Destination is required.");
      return;
    }

    const seat = prompt("💺 Enter Seat Preference (Window / Aisle):");
    if (!seat) {
      alert("⚠️ Booking cancelled. Seat preference is required.");
      return;
    }

    const confirmBooking = confirm(
      `🛫 Confirm Your Flight Booking\n\n` +
        `Passenger: ${name}\n` +
        `Destination: ${destination}\n` +
        `Seat Preference: ${seat}`
    );

    if (confirmBooking) {
      alert(
        `✅ Booking Successful!\n\n` +
          `Passenger: ${name}\n` +
          `Destination: ${destination}\n` +
          `Seat: ${seat}\n\n` +
          `✨ Have a safe and happy journey!`
      );
    } else {
      alert("❌ Booking not confirmed.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>✈️ Flight Ticket Booking</h1>
        <p style={styles.subtitle}>
          Simple flight booking using JavaScript dialog boxes
        </p>
        <button style={styles.button} onClick={bookTicket}>
          Book Flight
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
    background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "18px",
    width: "360px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
  },
  title: {
    color: "#2193b0",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "30px",
  },
  button: {
    padding: "14px 30px",
    fontSize: "16px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
  },
};

export default App;
