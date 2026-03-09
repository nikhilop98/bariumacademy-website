import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <div className="header-logo">
          <img src={logo} alt="Barium Academy" />
        </div>

        {/* Nav Links */}
        <nav>
          <ul className={`header-nav ${menuOpen ? "open" : ""}`}>
            <li><a href="/#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="/#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="/#courses" onClick={() => setMenuOpen(false)}>Subjects</a></li>
            <li><a href="/#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a></li>
            <li><a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
            <li><a href="/whats-new" onClick={() => setMenuOpen(false)} className="nav-whatsnew">What's New</a></li>
            <li><a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className={`header-actions ${menuOpen ? "open" : ""}`}>
          <button
            className="btn btn-outline"
            style={{ padding: "0.55rem 1.25rem", fontSize: "0.9rem" }}
            onClick={() => { navigate("/registration"); setMenuOpen(false); }}
          >
            Book a Demo
          </button>
          <button
            className="btn btn-primary"
            style={{ padding: "0.55rem 1.25rem", fontSize: "0.9rem" }}
            onClick={() => { navigate("/tutor-registration"); setMenuOpen(false); }}
          >
            Be a Tutor
          </button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
