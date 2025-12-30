import React from "react";

function FlightBooking() {
  const bookTicket = () => {
    const name = prompt("✈️ Enter Passenger Name:");
    if (!name) {
      alert("⚠️ Name is required to proceed!");
      return;
    }

    const destination = prompt("🌍 Enter Destination:");
    if (!destination) {
      alert("⚠️ Destination is required!");
      return;
    }

    const seat = prompt("💺 Enter Seat Preference (Window / Aisle):");
    if (!seat) {
      alert("⚠️ Seat preference is required!");
      return;
    }

    const confirmBooking = confirm(
      `🛫 Please Confirm Your Booking\n\n` +
      `Passenger: ${name}\n` +
      `Destination: ${destination}\n` +
      `Seat: ${seat}`
    );

    if (confirmBooking) {
      alert(
        `✅ Booking Confirmed!\n\n` +
        `Passenger: ${name}\n` +
        `Destination: ${destination}\n` +
        `Seat: ${seat}\n\n` +
        `✨ Have a pleasant journey!`
      );
    } else {
      alert("❌ Booking Cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>✈️ Flight Ticket Booking</h1>
        <p style={styles.subtitle}>
          Book your flight easily using interactive dialog boxes
        </p>
        <button style={styles.button} onClick={bookTicket}>
          Book Now
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
    background: "linear-gradient(135deg, #1d2671, #c33764)",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    background: "#ffffff",
    padding: "35px",
    borderRadius: "16px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
  },
  title: {
    marginBottom: "10px",
    color: "#1d2671",
  },
  subtitle: {
    marginBottom: "25px",
    color: "#555",
    fontSize: "14px",
  },
  button: {
    padding: "12px 28px",
    fontSize: "16px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #1d2671, #c33764)",
    color: "#fff",
    transition: "0.3s",
  },
};

export default FlightBooking;
