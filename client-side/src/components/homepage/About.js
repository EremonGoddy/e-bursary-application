import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Homepage.css";

const About = () => {

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
        <div className="container">
          <Link
            className="navbar-brand fw-bold text-primary "
          >
            Ebursary
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
          
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
             
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/services"
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section with Full Background Image */}
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center text-center text-white"
  
      >
        <div
          className="w-100 bg-dark bg-opacity-50 p-3 rounded d-flex justify-content-center align-items-center"
        >
          <h2 className="display-4 fw-bold">About Us</h2>
        </div>
      </div>
      <div className="content-section my-3">
        <div className="row">
          {/* Program Overview */}
          <div className="col-md-4 mb-4">
            <div className="p-4">
              <h2>Our Mission</h2>
              <p>
              Welcome to our e-Bursary System! Our mission is to streamline the 
bursary application process for students by offering a user-friendly, 
efficient, and transparent platform. We aim to bridge the gap between 
students and financial resources, ensuring no student is left behind 
due to financial constraints.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4">
              <h2>Our Vision</h2>
              <p>
              To be the leading digital platform in providing seamless access to 
          educational opportunities, fostering a future where every student 
          achieves their academic potential through equitable resource allocation.
              </p>
            </div>
          </div>

          {/* Important Announcement */}
          <div className="col-md-4 mb-4">
            <div className="p-4">
              <h2>Our Commitment</h2>
              <p>
              We are committed to ensuring equitable access to education by connecting 
    deserving students with the resources they need. Through innovation and 
    dedication, we strive to make the bursary application process transparent, 
    accountable, and accessible to all.
              </p>
            </div>
          </div>
        </div>
      </div>
   

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} E-Bursary | Empowering Education
      </footer>
    </div>
  );
};

export default About;