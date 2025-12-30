import React, { useState } from "react";

function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const title = prompt("Enter notification title:");
    if (!title) {
      alert("⚠️ Notification title is required!");
      return;
    }

    const message = prompt("Enter notification message:");
    if (!message) {
      alert("⚠️ Notification message is required!");
      return;
    }

    const newNotification = {
      id: Date.now(),
      title,
      message,
      time: new Date().toLocaleTimeString(),
    };

    setNotifications([newNotification, ...notifications]);
    alert("✅ Notification added successfully!");
  };

  const clearNotifications = () => {
    if (notifications.length === 0) {
      alert("⚠️ No notifications to clear!");
      return;
    }

    const confirmClear = confirm("Are you sure you want to clear all notifications?");
    if (confirmClear) {
      setNotifications([]);
      alert("🗑️ All notifications cleared!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.dashboard}>
        <h1 style={styles.title}>📢 Dashboard Notifications</h1>
        <div style={styles.buttons}>
          <button style={styles.button} onClick={addNotification}>
            Add Notification
          </button>
          <button style={{...styles.button, background: "#e74c3c"}} onClick={clearNotifications}>
            Clear All
          </button>
        </div>

        <div style={styles.notificationList}>
          {notifications.length === 0 ? (
            <p style={{ color: "#999" }}>No notifications yet</p>
          ) : (
            notifications.map((notif) => (
              <div key={notif.id} style={styles.notificationItem}>
                <strong>{notif.title}</strong>
                <p>{notif.message}</p>
                <span style={styles.time}>{notif.time}</span>
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
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    background: "linear-gradient(135deg, #36d1dc, #5b86e5)",
    fontFamily: "Segoe UI, sans-serif",
    padding: "30px",
  },
  dashboard: {
    background: "#fff",
    borderRadius: "16px",
    padding: "30px",
    width: "400px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.3)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#5b86e5",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 18px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    background: "#36d1dc",
  },
  notificationList: {
    maxHeight: "300px",
    overflowY: "auto",
    borderTop: "1px solid #ccc",
    paddingTop: "10px",
  },
  notificationItem: {
    background: "#f1f1f1",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  time: {
    fontSize: "11px",
    color: "#666",
  },
};

export default NotificationSystem;
