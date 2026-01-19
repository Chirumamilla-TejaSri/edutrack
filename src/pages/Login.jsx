import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import loginImage from "../assets/registerimage.png";
import loginBg from "../assets/registerbackground.jpg";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://127.0.0.1:5000/login", {
        email,
        password,
      });

      if (res.data.success) {
        const role = res.data.role;

        if (role === "student") navigate("/student");
        else if (role === "admin") navigate("/admin");
        else if (role === "mentor") navigate("/mentor");
      }
    } catch {
      alert("Invalid email or password");
    }
  };

  const handleForgotPassword = () => {
    alert(
      "Password reset link will be sent to your registered email.\n(Demo feature)"
    );
  };

  return (
    <div
      className="register-page"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="register-card">

        {/* LEFT IMAGE (SAME AS REGISTER) */}
        <div className="register-left">
          <img src={loginImage} alt="Login Illustration" />
        </div>

        {/* RIGHT FORM */}
        <div className="register-right">
          <h2>Login</h2>

          <form onSubmit={handleLogin}>
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

            <button type="submit">Login</button>
          </form>

          <p style={{ marginTop: "10px", textAlign: "center" }}>
            Don’t have an account?{" "}
            <span
              style={{ color: "#1e3a8a", cursor: "pointer", fontWeight: "600" }}
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>

          <p
            style={{
              marginTop: "8px",
              textAlign: "center",
              color: "#1e3a8a",
              cursor: "pointer",
              fontSize: "14px",
            }}
            onClick={handleForgotPassword}
          >
            Forgot password?
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;
