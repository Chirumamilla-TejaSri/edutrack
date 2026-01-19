import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import registerImage from "../assets/registerimage.png";
import registerBg from "../assets/registerbackground.jpg";

function Register() {
  const navigate = useNavigate();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");

  // Student-only registration
  const role = "student";

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5000/register", {
        name: name,
        email: email,
        password: password,
        role: role,
        roll_number: rollNumber,
        branch: branch,
        year: year,
      });

      if (response.data.success) {
        alert("Registration successful! Please login.");
        navigate("/login");
      }
    } catch (error) {
      alert("Registration failed. Please try with a different email.");
    }
  };

  return (
    <div
      className="register-page"
      style={{ backgroundImage: `url(${registerBg})` }}
    >
      <div className="register-card">
        
        {/* LEFT IMAGE */}
        <div className="register-left">
          <img src={registerImage} alt="Student Illustration" />
        </div>

        {/* RIGHT FORM */}
        <div className="register-right">
          <h2>Create Account</h2>

          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Personal Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Roll Number"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Year of Study"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />

            <button type="submit">Register</button>
          </form>

          <p style={{ marginTop: "10px", textAlign: "center" }}>
            Already have an account?{" "}
            <span
              style={{ color: "#1e3a8a", cursor: "pointer", fontWeight: "600" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Register;
