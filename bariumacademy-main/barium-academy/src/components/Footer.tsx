import { useNavigate } from "react-router-dom";
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
            <li><a href="/#home">Home</a></li>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#courses">Curricula</a></li>
            <li><a href="/#testimonials">Reviews</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/registration">Book a Demo</a></li>
          </ul>
        </div>

        {/* Curricula */}
        <div className="footer-col">
          <h4>Curricula</h4>
          <ul>
            <li><a href="/#courses">US Curriculum</a></li>
            <li><a href="/#courses">UK Curriculum</a></li>
            <li><a href="/#courses">Irish Curriculum</a></li>
            <li><a href="/#courses">Indian Curriculum</a></li>
            <li><a href="/#courses">Programming</a></li>
            <li><a href="/#courses">Foreign Languages</a></li>
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
        <span>© {new Date().getFullYear()} Barium Academy. All rights reserved.</span>
        <span>
          <a href="/#home">Privacy Policy</a> &nbsp;·&nbsp;
          <a href="/#home">Terms of Service</a>
        </span>
      </div>
    </footer>
  );
}
