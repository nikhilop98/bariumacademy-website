import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
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
            <li><Link smooth to="/#home" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link smooth to="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link smooth to="/#courses" onClick={() => setMenuOpen(false)}>Subjects</Link></li>
            <li><Link smooth to="/#testimonials" onClick={() => setMenuOpen(false)}>Reviews</Link></li>
            <li><Link smooth to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link smooth to="/whats-new" onClick={() => setMenuOpen(false)} className="nav-whatsnew">What's New</Link></li>
            <li><Link smooth to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
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
