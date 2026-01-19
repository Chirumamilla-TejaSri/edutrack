import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";   // EduTrack logo
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="header-inner">

          {/* LOGO ONLY */}
          <div className="logo">
            <img src={logo} alt="EduTrack Logo" />
          </div>

          <nav className="nav-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="hero-section">
        <div className="hero-overlay">
          <h1>AI-Based Student Dropout Prediction & Counseling System</h1>

          <p>
            EduTrack uses Machine Learning to identify students at risk of
            dropping out and enables early academic counseling and intervention.
          </p>

          <div className="hero-buttons">
            <button className="primary" onClick={() => navigate("/register")}>
              Sign Up
            </button>
            <button className="secondary" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
<section id="about" className="section about-section">
  <h2>About EduTrack</h2>

  <p className="about-intro">
    EduTrack is an AI-based student retention platform designed to identify
    students at risk of dropping out and enable timely academic counseling
    and intervention. The system helps educational institutions take
    data-driven actions to improve student success and continuity.
  </p>

  <div className="about-cards">
    <div className="about-card">
      <h3>The Problem</h3>
      <p>
        Student dropouts often occur due to academic difficulties, lack of
        guidance, or delayed intervention. Traditional systems fail to
        identify at-risk students early.
      </p>
    </div>

    <div className="about-card">
      <h3>The Solution</h3>
      <p>
        EduTrack uses machine learning models to analyze student data and
        predict dropout risk, enabling institutions to intervene before
        the situation becomes critical.
      </p>
    </div>

    <div className="about-card">
      <h3>The Impact</h3>
      <p>
        By providing early warnings and personalized counseling, EduTrack
        helps improve retention rates, academic performance, and overall
        student well-being.
      </p>
    </div>
  </div>
</section>


     {/* ================= FEATURES ================= */}
<section id="features" className="section features-section">
  <h2>Key Features</h2>

  <div className="features-grid">

    <div className="feature-box">
      <div className="feature-icon">📊</div>
      <h3>Early Risk Detection</h3>
      <p>
        Identifies students who are at risk of dropping out at an early stage
        using academic and behavioral data.
      </p>
    </div>

    <div className="feature-box">
      <div className="feature-icon">🤖</div>
      <h3>AI-Based Prediction</h3>
      <p>
        Machine learning models analyze historical data to predict dropout
        probability with high accuracy.
      </p>
    </div>

    <div className="feature-box">
      <div className="feature-icon">🧑‍🏫</div>
      <h3>Mentor Dashboard</h3>
      <p>
        Provides counselors and mentors with insights to monitor and guide
        at-risk students effectively.
      </p>
    </div>

    <div className="feature-box">
      <div className="feature-icon">📈</div>
      <h3>Performance Tracking</h3>
      <p>
        Tracks attendance, grades, and engagement trends over time for better
        decision-making.
      </p>
    </div>

    <div className="feature-box">
      <div className="feature-icon">🚨</div>
      <h3>Early Warning Alerts</h3>
      <p>
        Sends alerts to mentors when a student shows high dropout risk,
        enabling timely intervention.
      </p>
    </div>

    <div className="feature-box">
      <div className="feature-icon">🛠️</div>
      <h3>Personalized Interventions</h3>
      <p>
        Suggests targeted counseling and academic support plans based on
        individual student needs.
      </p>
    </div>

  </div>
</section>

{/* ================= CONTACT ================= */}
<section id="contact" className="section contact-section">
  <h2>Contact Us</h2>

  <p className="contact-intro">
    Have questions or need support? Reach out to us and our academic
    assistance team will get back to you.
  </p>

  <div className="contact-cards">

    <div className="contact-card">
      <div className="contact-icon">📧</div>
      <h3>Email</h3>
      <p>edutrack@college.edu</p>
    </div>

    <div className="contact-card">
      <div className="contact-icon">📞</div>
      <h3>Phone</h3>
      <p>+91 9XXXXXXXXX</p>
    </div>

    <div className="contact-card">
      <div className="contact-icon">🏫</div>
      <h3>Address</h3>
      <p>Department of Computer Science<br />Your College Name</p>
    </div>

  </div>

  {/* Optional Contact Form */}
  <div className="contact-form">
    <h3>Send a Message</h3>

    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</section>


    </div>
  );
}

export default Home;
