import { useNavigate } from "react-router-dom";
import onlineTutoringHero from "../assets/online_tutoring_hero.png";

const avatars = [
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&h=80&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&h=80&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=80&h=80&fit=crop&auto=format&q=80",
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        {/* Left: Text Content */}
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Trusted by 1,000+ Students Across the World
          </div>

          <h1 className="hero-title">
            Find the <span>Perfect Tutor</span> for Every Subject
          </h1>

          <p className="hero-subtitle">
            Connect with expert tutors for one-on-one personalised lessons.
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate("/registration")}
            >
              <i className="fa-regular fa-calendar-check" style={{ marginRight: "8px" }}></i> Find A Tutor
            </button>

            <button
              className="btn btn-outline btn-lg btn-whatsapp"
              onClick={() => window.open("https://wa.me/917306096664", "_blank")}
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.2rem", marginRight: "8px" }}></i>
              Chat on WhatsApp
            </button>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-avatars">
              {avatars.map((src, i) => (
                <img key={i} src={src} alt={`Student ${i + 1}`} />
              ))}
            </div>
            <div className="hero-trust-text">
              <strong>1,000+</strong> happy students &amp; counting ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hero-image-wrap">
          <img
            src={onlineTutoringHero}
            alt="Student learning online with a online tutor attending"
            loading="eager"
          />

          {/* Floating card 1 */}
          <div className="hero-float-card card-1">
            <div className="hero-float-icon blue"><i className="fa-solid fa-graduation-cap"></i></div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>200+ Tutors</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Expert educators</div>
            </div>
          </div>

          {/* Floating card 2 */}
          <div className="hero-float-card card-2">
            <div className="hero-float-icon yellow"><i className="fa-solid fa-star"></i></div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>98% Satisfaction</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Student rated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
