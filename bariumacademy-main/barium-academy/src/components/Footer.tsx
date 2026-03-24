import { useNavigate } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import logo from "../assets/logo.png";



export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        {/* Brand Column */}
        <div>
          <img src={logo} alt="Barium Academy" className="footer-brand-logo" />
          <p className="footer-tagline">
            Personalised online tutoring that connects students with expert educators
            for flexible, results-driven learning.
          </p>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/bariumacademy?igsh=MXZnbGdtcXJ3YWJzMA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon social-instagram"
            >
              <i className="fa-brands fa-instagram" style={{ fontSize: "1.2rem" }}></i>
            </a>
            <a
              href="https://www.facebook.com/share/1DZ8cgAeux/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon social-facebook"
            >
              <i className="fa-brands fa-facebook-f" style={{ fontSize: "1.2rem" }}></i>
            </a>
            <a
              href="https://wa.me/917306096664"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-icon social-whatsapp"
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.2rem" }}></i>
            </a>
            <a
              href="mailto:bariumacademy@gmail.com"
              aria-label="Email"
              className="social-icon social-email"
            >
              <i className="fa-regular fa-envelope" style={{ fontSize: "1.2rem" }}></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link smooth to="/#home">Home</Link></li>
            <li><Link smooth to="/#about">About Us</Link></li>
            <li><Link smooth to="/#courses">Curricula</Link></li>
            <li><Link smooth to="/#testimonials">Reviews</Link></li>
            <li><Link smooth to="/blog">Blog</Link></li>
            <li><Link smooth to="/registration">Book a Demo</Link></li>
            <li><Link smooth to="/revision-notes" style={{ color: "var(--primary)", fontWeight: "bold" }}>Free Revision Notes</Link></li>
          </ul>
        </div>

        {/* Curricula */}
        <div className="footer-col">
          <h4>Curricula</h4>
          <ul>
            <li><Link smooth to="/#courses">US Curriculum</Link></li>
            <li><Link smooth to="/#courses">UK Curriculum</Link></li>
            <li><Link smooth to="/#courses">Irish Curriculum</Link></li>
            <li><Link smooth to="/#courses">Indian Curriculum</Link></li>
            <li><Link smooth to="/#courses">Programming</Link></li>
            <li><Link smooth to="/#courses">Foreign Languages</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <div className="footer-contact-item">
            <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.2rem" }}></i>
            <a href="https://wa.me/917306096664" target="_blank" rel="noopener noreferrer">
              +91 7306 096 664
            </a>
          </div>
          <div className="footer-contact-item">
            <i className="fa-brands fa-instagram" style={{ fontSize: "1.2rem" }}></i>
            <a href="https://www.instagram.com/bariumacademy?igsh=MXZnbGdtcXJ3YWJzMA==" target="_blank" rel="noopener noreferrer">
              @bariumacademy
            </a>
          </div>
          <div className="footer-contact-item">
            <i className="fa-regular fa-envelope" style={{ fontSize: "1.2rem" }}></i>
            <a href="mailto:bariumacademy@gmail.com">
              bariumacademy@gmail.com
            </a>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <button
              className="btn btn-primary"
              style={{ width: "100%", fontSize: "0.9rem", padding: "0.7rem 1rem" }}
              onClick={() => navigate("/registration")}
            >
              📅 Book a Free Demo
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <span>© 2022 Barium Academy. All rights reserved.</span>
        <span>Made with ❤️ for students everywhere.</span>
      </div>
    </footer>
  );
}
