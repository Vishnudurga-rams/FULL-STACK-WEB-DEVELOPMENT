import React, { useEffect, useState } from "react";

// Mock student list
const initialStudents = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
];

// Simulated inference function
// Think of this as a model confidence score (0–1)
const inferAttendance = () => {
  return Math.random(); // mock inference confidence
};

const Attendance = () => {
  const [students, setStudents] = useState(
    initialStudents.map((s) => ({
      ...s,
      confidence: 0,
      status: "Absent",
    }))
  );

  // Run inference every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStudents((prev) =>
        prev.map((student) => {
          const confidence = inferAttendance();
          return {
            ...student,
            confidence,
            status: confidence > 0.6 ? "Present" : "Absent",
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h2>📋 Attendance Tracker (Inference Simulation)</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Inference Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.confidence.toFixed(2)}</td>
              <td
                style={{
                  color: s.status === "Present" ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {s.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={styles.note}>
        ⏱ Status updates every 3 seconds using simulated inference confidence.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  note: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#666",
  },
};

export default Attendance;
