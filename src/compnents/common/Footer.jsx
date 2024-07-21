import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-links">
        <ul className="footer-nav-link-list">
          <li className="footer-nav-link-item">
            <Link to="/">Home</Link>
          </li>
          <li className="footer-nav-link-item">
            <Link to="/about">About</Link>
          </li>
          <li className="footer-nav-link-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="footer-nav-link-item">
            <Link to="/articles">Articles</Link>
          </li>
          <li className="footer-nav-link-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="footer-credits">
        <p className="footer-credits-text">
          © 2023 Tharindu.dev. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
