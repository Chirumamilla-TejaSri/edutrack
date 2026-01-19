import React from "react";
import "./StudentDashboard.css";

function StudentDashboard() {
  // ===== DUMMY DATA =====
  const student = {
    name: "Teja",
    attendance: "72%",
    grade: "B",
    pendingAssignments: 5,
    riskLevel: "High"
  };

  return (
    <div className="dashboard-container">

      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar">
        <h2 className="sidebar-title">🎓 EduTrack</h2>

        <nav className="sidebar-menu">
          <a className="active">🏠 Dashboard</a>
          <a>📊 My Performance</a>
          <a>🧑‍🏫 Counseling</a>
          <a>🚨 Alerts</a>
          <a className="logout">🚪 Logout</a>
        </nav>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="dashboard-main">

        {/* Welcome */}
        <div className="welcome-card">
          <h1>👋 Welcome, {student.name}</h1>
          <p>This is your academic overview and support status.</p>
        </div>

        {/* Risk Status */}
        <div className="risk-card">
          <h3>⚠️ Dropout Risk Status</h3>
          <p className="risk-high">{student.riskLevel} Risk</p>
          <small>
            Our system recommends immediate academic counseling.
          </small>
        </div>

        {/* Academic Summary */}
        <div className="summary-grid">

          <div className="summary-card">
            <div className="summary-icon">📅</div>
            <h4>Attendance</h4>
            <p>{student.attendance}</p>
          </div>

          <div className="summary-card">
            <div className="summary-icon">🎯</div>
            <h4>Average Grade</h4>
            <p>{student.grade}</p>
          </div>

          <div className="summary-card">
            <div className="summary-icon">📚</div>
            <h4>Assignments</h4>
            <p>{student.pendingAssignments} Pending</p>
          </div>

        </div>

        {/* Alerts */}
        <div className="alerts-card">
          <h3>🔔 Recent Alerts</h3>
          <ul>
            <li>📌 Attendance below required threshold</li>
            <li>📌 Counseling session suggested</li>
            <li>📌 Multiple assignments pending</li>
          </ul>
        </div>

      </main>
    </div>
  );
}

export default StudentDashboard;
