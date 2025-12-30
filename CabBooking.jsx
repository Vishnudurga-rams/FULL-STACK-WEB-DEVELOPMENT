import React from "react";

function CabBooking() {
  const bookCab = () => {
    const name = prompt("👤 Enter Passenger Name:");
    if (!name) {
      alert("⚠️ Booking cancelled. Name is required.");
      return;
    }

    const pickup = prompt("📍 Enter Pickup Location:");
    if (!pickup) {
      alert("⚠️ Booking cancelled. Pickup location is required.");
      return;
    }

    const drop = prompt("🏁 Enter Drop Location:");
    if (!drop) {
      alert("⚠️ Booking cancelled. Drop location is required.");
      return;
    }

    const cabType = prompt(
      "🚕 Enter Cab Type:\nMini / Sedan / SUV"
    );
    if (!cabType) {
      alert("⚠️ Booking cancelled. Cab type is required.");
      return;
    }

    const confirmBooking = confirm(
      `🚖 Confirm Your Cab Booking\n\n` +
        `Passenger: ${name}\n` +
        `Pickup: ${pickup}\n` +
        `Drop: ${drop}\n` +
        `Cab Type: ${cabType}`
    );

    if (confirmBooking) {
      alert(
        `✅ Cab Booked Successfully!\n\n` +
          `Passenger: ${name}\n` +
          `Pickup: ${pickup}\n` +
          `Drop: ${drop}\n` +
          `Cab Type: ${cabType}\n\n` +
          `🚗 Your cab is on the way!`
      );
    } else {
      alert("❌ Cab booking cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚕 Online Cab Booking</h1>
        <p style={styles.subtitle}>
          Book your cab using JavaScript dialog boxes
        </p>
        <button style={styles.button} onClick={bookCab}>
          Book Cab
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
    background: "linear-gradient(135deg, #141E30, #243B55)",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "18px",
    width: "360px",
    textAlign: "center",
    boxShadow: "0 20px 45px rgba(0,0,0,0.3)",
  },
  title: {
    color: "#243B55",
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
    background: "linear-gradient(135deg, #141E30, #243B55)",
  },
};

export default CabBooking;
