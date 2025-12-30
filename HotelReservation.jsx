import React from "react";

function HotelReservation() {
  const reserveRoom = () => {
    const name = prompt("👤 Enter Guest Name:");
    if (!name) {
      alert("⚠️ Reservation cancelled. Name is required.");
      return;
    }

    const roomType = prompt(
      "🛏️ Enter Room Type:\nSingle / Double / Deluxe"
    );
    if (!roomType) {
      alert("⚠️ Reservation cancelled. Room type is required.");
      return;
    }

    const nights = prompt("🌙 Enter Number of Nights:");
    if (!nights || isNaN(nights) || nights <= 0) {
      alert("⚠️ Please enter a valid number of nights.");
      return;
    }

    const confirmReservation = confirm(
      `🏨 Confirm Your Reservation\n\n` +
        `Guest: ${name}\n` +
        `Room Type: ${roomType}\n` +
        `Nights: ${nights}`
    );

    if (confirmReservation) {
      alert(
        `✅ Reservation Successful!\n\n` +
          `Guest: ${name}\n` +
          `Room Type: ${roomType}\n` +
          `Nights: ${nights}\n\n` +
          `✨ Enjoy your stay!`
      );
    } else {
      alert("❌ Reservation not confirmed.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🏨 Hotel Reservation</h1>
        <p style={styles.subtitle}>
          Reserve your room using JavaScript dialog boxes
        </p>
        <button style={styles.button} onClick={reserveRoom}>
          Reserve Now
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
    background: "linear-gradient(135deg, #8360c3, #2ebf91)",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "38px",
    borderRadius: "18px",
    width: "360px",
    textAlign: "center",
    boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
  },
  title: {
    color: "#2ebf91",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "28px",
  },
  button: {
    padding: "14px 32px",
    fontSize: "16px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    background: "linear-gradient(135deg, #8360c3, #2ebf91)",
  },
};

export default HotelReservation;
