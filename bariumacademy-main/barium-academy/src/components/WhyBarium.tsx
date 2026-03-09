

const features = [
  {
    icon: <i className="fa-solid fa-trophy"></i>,
    title: "Expert, Vetted Tutors",
    desc: "Every tutor is carefully selected and background-checked. Only the top educators make our platform.",
  },
  {
    icon: <i className="fa-solid fa-calendar-days"></i>,
    title: "Flexible Scheduling",
    desc: "Learn at your own pace. Book sessions whenever it suits you — mornings, evenings, or weekends.",
  },
  {
    icon: <i className="fa-solid fa-bullseye"></i>,
    title: "Personalised Learning",
    desc: "One-on-one lessons tailored to your exact curriculum, learning style, and goals.",
  },
  {
    icon: <i className="fa-solid fa-chart-line"></i>,
    title: "Proven Results",
    desc: "98% of our students report improved grades within the first month of tutoring.",
  },
  {
    icon: <i className="fa-solid fa-lightbulb"></i>,
    title: "Interactive Sessions",
    desc: "Live whiteboard tools, screen sharing, and real-time exercises make lessons engaging.",
  },
  {
    icon: <i className="fa-solid fa-sack-dollar"></i>,
    title: "Affordable Plans",
    desc: "Quality education shouldn't be expensive. We offer transparent, competitive pricing.",
  },
];

export default function WhyBarium() {
  return (
    <section id="about" className="why-section">
      <div className="container">
        <div className="why-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Why Barium Academy?</h2>
          <p className="section-subtitle">
            We don't just connect you with tutors — we build a complete learning experience
            that drives real, measurable results.
          </p>
        </div>

        <div className="why-grid">
          {features.map((f, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
