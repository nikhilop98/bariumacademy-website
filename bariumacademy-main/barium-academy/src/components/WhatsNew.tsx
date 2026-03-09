import { useNavigate } from "react-router-dom";
import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";

const programs = [
    {
        id: "summer",
        badge: <span><i className="fa-solid fa-sun" style={{ marginRight: "6px" }}></i> Limited Spots</span>,
        title: "Summer Intensive Programs 2026",
        tagline: "June – August · All Curricula · Ages 10–18",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=85",
        color: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
        highlights: [
            "8-week structured programs across all curricula (US, UK, Indian, Irish, Australian)",
            "Personalised 1-on-1 sessions with expert tutors — not group classes",
            "Catch-up on weak areas or get ahead for the next academic year",
            "Flexible scheduling — morning, afternoon, or evening batches",
            "Special tracks: SAT Crash Course, GCSE Revision, CBSE Board Prep",
            "Weekly progress reports sent to parents",
        ],
        subjects: ["Mathematics", "Sciences", "English", "Programming (Python & Web Dev)", "Foreign Languages", "Study Skills & Exam Techniques"],
        dates: "June 1 – August 15, 2026",
        price: "Starting from ₹4,999/month (1-on-1 sessions)",
        cta: "Reserve Your Spot →",
    },
    {
        id: "ap-bootcamp",
        badge: <span><i className="fa-solid fa-rocket" style={{ marginRight: "6px" }}></i> New for 2026</span>,
        title: "AP Exam Bootcamp",
        tagline: "March – May · Score 4–5 Guaranteed Strategy · All AP Subjects",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=85",
        color: "linear-gradient(135deg, #004aad 0%, #0066cc 100%)",
        highlights: [
            "Intensive 10-week AP preparation with subject-specialist tutors",
            "Covers 15+ AP subjects: Calculus, Physics, Chemistry, Biology, CS, English & more",
            "Focus on Free Response Questions (FRQs) — where most students lose marks",
            "Weekly full-length mock exams under timed conditions",
            "College Board scoring rubric breakdown — know exactly what graders look for",
            "Average score improvement: 1.5 points (from 3 → 4/5)",
        ],
        subjects: ["AP Calculus AB/BC", "AP Physics 1 & 2", "AP Chemistry", "AP Biology", "AP English Literature", "AP Computer Science A", "AP US History", "AP Psychology"],
        dates: "March 1 – May 10, 2026",
        price: "Starting from ₹6,999/month (1-on-1 sessions)",
        cta: "Join AP Bootcamp →",
    },
];

export default function WhatsNew() {
    const navigate = useNavigate();

    return (
        <>
            <SEO
                title="What's New — Summer Programs & AP Bootcamp"
                description="Explore Barium Academy's latest offerings: Summer Intensive Programs and AP Exam Bootcamp. Limited spots available for 2026. Reserve your spot today!"
                keywords="summer tutoring program, AP bootcamp, AP exam prep, summer classes for students, intensive tutoring, barium academy programs"
                canonical="/whats-new"
            />
            <Header />

            {/* Hero */}
            <section className="whatsnew-hero">
                <div className="container">
                    <span className="section-tag">✨ New at Barium Academy</span>
                    <h1 className="whatsnew-hero-title">
                        What's New
                    </h1>
                    <p className="whatsnew-hero-subtitle">
                        Exciting new programs designed to help students achieve more — faster.
                    </p>
                </div>
            </section>

            {/* Programs */}
            <section className="whatsnew-section">
                <div className="container">
                    {programs.map((prog, idx) => (
                        <div key={prog.id} className={`whatsnew-card ${idx % 2 === 1 ? "whatsnew-card-reverse" : ""}`}>
                            {/* Image side */}
                            <div className="whatsnew-card-img">
                                <img src={prog.image} alt={prog.title} loading="lazy" />
                                <div className="whatsnew-card-badge" style={{ background: prog.color }}>
                                    {prog.badge}
                                </div>
                            </div>

                            {/* Content side */}
                            <div className="whatsnew-card-content">
                                <h2 className="whatsnew-card-title">{prog.title}</h2>
                                <p className="whatsnew-card-tagline">{prog.tagline}</p>

                                <div className="whatsnew-highlights">
                                    <h3>Programme Highlights</h3>
                                    <ul>
                                        {prog.highlights.map((h, i) => (
                                            <li key={i}>{h}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="whatsnew-subjects">
                                    <h3>Subjects Offered</h3>
                                    <div className="whatsnew-subject-tags">
                                        {prog.subjects.map((s) => (
                                            <span key={s} className="whatsnew-subject-tag">{s}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="whatsnew-details">
                                    <div className="whatsnew-detail">
                                        <span className="whatsnew-detail-icon"><i className="fa-regular fa-calendar-days"></i></span>
                                        <div>
                                            <strong>Dates</strong>
                                            <p>{prog.dates}</p>
                                        </div>
                                    </div>
                                    <div className="whatsnew-detail">
                                        <span className="whatsnew-detail-icon"><i className="fa-solid fa-sack-dollar"></i></span>
                                        <div>
                                            <strong>Price</strong>
                                            <p>{prog.price}</p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="btn btn-primary btn-lg"
                                    onClick={() => navigate("/registration")}
                                >
                                    {prog.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="whatsnew-bottom-cta">
                <div className="container" style={{ textAlign: "center" }}>
                    <h2>Have Questions About Our Programs?</h2>
                    <p>Chat with us directly — we're happy to help you choose the right program for your child.</p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => navigate("/registration")}
                        >
                            📅 Book a Free Demo
                        </button>
                        <button
                            className="btn btn-outline btn-lg"
                            onClick={() => window.open("https://wa.me/917306096664", "_blank")}
                        >
                            💬 Chat on WhatsApp
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
