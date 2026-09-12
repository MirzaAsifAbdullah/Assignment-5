import { useState } from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <a href="#home" className="navbar-brand">
          <img src={logo} alt="Dev Stack" />
        </a>

        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar-actions">
          <button className="sign-in-btn">Sign In</button>
          <button className="sign-up-btn">Sign Up</button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-menu">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#technologies" onClick={() => setMenuOpen(false)}>
            Technologies
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
