import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";

interface ProgramDetail {
    label: string;
    items: string[];
}

interface Program {
    id: string;
    emoji: string;
    badge: string;
    badgeColor: string;
    title: string;
    ageRange: string;
    tagline: string;
    image: string;
    color: string;
    overview: string;
    highlights: ProgramDetail[];
    skills: string[];
    assessments: string[];
}

const programs: Program[] = [
    {
        id: "ap-bootcamp",
        emoji: "🏫",
        badge: "Now Enrolling",
        badgeColor: "#004aad",
        title: "AP Bootcamp",
        ageRange: "Ages 15–18",
        tagline: "Advanced Placement Exam Prep — Comprehensive coaching for scores of 4 & 5",
        image: "/bariumacademy-website/whatsnew-images/ap_bootcamp.png",
        color: "#003087",
        overview:
            "Designed for high school students aiming for AP exams in Calculus AB/BC, Physics, Chemistry, Biology, Computer Science, English, and more. Our AP Bootcamp combines concept-level mastery with exam-focused strategy to target scores of 4 and 5 across all AP subjects.",
        highlights: [
            {
                label: "Comprehensive Syllabus Coverage",
                items: [
                    "Concept-level clarity across every topic in your chosen AP subjects",
                    "Multiple-choice strategy workshops — eliminating wrong answers systematically",
                    "Free-response and essay structuring workshops (DBQ, LEQ, SAQ for History)",
                    "Lab-based practical question preparation for AP Sciences",
                ],
            },
            {
                label: "Exam-Focused Teaching",
                items: [
                    "Diagnostic assessment: Initial test to identify strengths and weaknesses",
                    "Past exam analysis: Step-by-step walkthrough of top-scoring student solutions",
                    "Time management workshops: Pacing the exam, prioritizing, reducing careless errors",
                    "Small group discussions, peer problem-solving challenges, and live Q&A",
                ],
            },
        ],
        skills: [
            "Mastery of AP-level concepts",
            "Advanced problem-solving & critical thinking",
            "Exam strategies & time management",
            "Lab and data analysis (Sciences)",
            "Confidence in high-pressure exam questions",
        ],
        assessments: [
            "Weekly topic quizzes with detailed worked solutions",
            "Full-length AP mock exams under timed conditions",
            "Personalized score reports highlighting weak areas",
            "Individualized improvement roadmap per student",
            "Certificate of completion and AP exam readiness indicator",
        ],
    },
    {
        id: "gcse-revision",
        emoji: "📘",
        badge: "Grade 9 Targets",
        badgeColor: "#059669",
        title: "GCSE Revision Program",
        ageRange: "Ages 14–16",
        tagline: "Structured revision for GCSE exams — Maths, English, Sciences & optional subjects",
        image: "/bariumacademy-website/whatsnew-images/gcse_revision.png",
        color: "#059669",
        overview:
            "Targeted at students preparing for GCSE exams in core subjects (Maths, English, Sciences) and optional subjects (History, Geography, Modern Languages). We break every subject into structured topic sessions with examiner-led marking scheme awareness — helping students move from predicted grades to Grade 9.",
        highlights: [
            {
                label: "Structured Syllabus Revision",
                items: [
                    "Each subject broken into manageable topics with concept clarification sessions",
                    "Marking scheme awareness — teaching students the exact language examiners reward",
                    "Common exam pitfalls identified and drilled to avoid mark drops",
                    "Multiple-choice and structured answer strategies for every question type",
                ],
            },
            {
                label: "Practice-Driven Approach",
                items: [
                    "Extensive past paper practice with step-by-step solution walkthroughs",
                    "Problem-solving under timed conditions — full exam simulation",
                    "Doubt-clearing workshops and group discussion of challenging questions",
                    "Personalized learning logs and performance analytics to track progress",
                ],
            },
        ],
        skills: [
            "Strong understanding of core & optional subjects",
            "Exam readiness with improved time management",
            "Applying concepts to typical and tricky exam questions",
            "Confidence in structured and multiple-choice question formats",
        ],
        assessments: [
            "Daily mini-tests per subject with marking and feedback",
            "Topic-wise practice assignments with written tutor feedback",
            "Full-length mock exams simulating actual GCSE conditions",
            "Performance analytics dashboard tracking strengths and weak areas",
            "Targeted remedial sessions for consistently weak topics",
            "Completion certificate and GCSE readiness score indicator",
        ],
    },
    {
        id: "alevel-revision",
        emoji: "🧑‍🎓",
        badge: "A* Targets",
        badgeColor: "#7c3aed",
        title: "A-Level Revision Program",
        ageRange: "Ages 16–18",
        tagline: "Deep A-Level exam preparation — Maths, Sciences, Humanities & more",
        image: "/bariumacademy-website/whatsnew-images/gcse_revision.png",
        color: "#7c3aed",
        overview:
            "Designed for students preparing for A-Level exams in Maths, Physics, Chemistry, Biology, Computer Science, English Literature, Economics, and other subjects. We focus on deep syllabus mastery, advanced exam technique, and building the structured answer-writing ability that university admissions teams look for.",
        highlights: [
            {
                label: "Deep Syllabus Coverage",
                items: [
                    "Core concepts, derivations, formulas, and high-weight topic mastery",
                    "Structured answer writing for long-form questions — what markers actually reward",
                    "Stepwise problem-solving frameworks for high-difficulty questions",
                    "Practical/lab-based question preparation for A-Level Sciences",
                ],
            },
            {
                label: "Strategic Past Paper Integration",
                items: [
                    "Full walkthroughs of previous A-Level papers by subject-specialist tutors",
                    "Identifying recurring patterns in mark schemes and examiners' reports",
                    "Prioritizing topics by mark weighting and difficulty level",
                    "Quick memory techniques for formulas, key definitions, and case study details",
                ],
            },
        ],
        skills: [
            "A-Level concept mastery with exam-ready confidence",
            "Advanced problem-solving & critical reasoning",
            "Effective time management for 3-hour exam papers",
            "Precision in lab work and practical evaluation",
            "Structured answers for high-mark essay and extended response questions",
        ],
        assessments: [
            "Daily topic quizzes with detailed written feedback",
            "Weekly mini-mock tests to consolidate weekly learning",
            "Full A-Level mock exams under exam conditions",
            "Examiner-style marking with mark allocation explanations",
            "One-to-one review sessions for consistently weak topics",
            "Completion certificate and predicted grade indicator",
        ],
    },
];

export default function WhatsNew() {
    const navigate = useNavigate();
    const [activeId, setActiveId] = useState<string>("ap-bootcamp");

    const active = programs.find((p) => p.id === activeId)!;

    return (
        <>
            <SEO
                title="What's New — Programs at Barium Academy"
                description="Explore Barium Academy's latest programs: AP Bootcamp, GCSE Revision, A-Level Revision, and Summer Intensive Programs 2026. Expert tutoring for exam success."
                keywords="AP bootcamp, GCSE revision, A-Level revision, summer tutoring program, exam prep, barium academy programs"
                canonical="/whats-new"
            />
            <Header />

            {/* Hero */}
            <section style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
                color: "white",
                padding: "3.5rem 2rem 2rem",
                textAlign: "center",
            }}>
                <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                    <span className="section-tag" style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}>
                        ✨ New at Barium Academy
                    </span>
                    <h1 style={{ color: "white", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, marginTop: "1rem", marginBottom: "0.8rem" }}>
                        What's New
                    </h1>
                    <p style={{ opacity: 0.9, fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>
                        Expertly designed programs to help students achieve their best results — from AP and GCSE to Summer bootcamps.
                    </p>
                </div>
            </section>

            {/* ── Summer Programs Banner ── */}
            <section style={{ background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)", padding: "2.5rem 2rem" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
                    <div style={{ color: "white" }}>
                        <div style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "1px", textTransform: "uppercase", opacity: 0.85, marginBottom: "0.4rem" }}>
                            ☀️ Now Enrolling — Summer 2026
                        </div>
                        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, margin: "0 0 0.4rem" }}>Summer Intensive Programs 2026</h2>
                        <p style={{ opacity: 0.9, margin: 0, fontSize: "0.95rem" }}>
                            14 programs · Academic, Tech, Arts & Life Skills · Ages 7–18 · June–August 2026
                        </p>
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem", flexShrink: 0, flexWrap: "wrap", width: "100%", maxWidth: "400px" }}>
                        <button
                            onClick={() => navigate("/summer-programs")}
                            style={{
                                background: "white", color: "#ff6b35", border: "none",
                                padding: "0.8rem 1rem", borderRadius: "10px",
                                fontWeight: 800, fontSize: "0.95rem", cursor: "pointer", fontFamily: "inherit",
                                flex: "1 1 auto", textAlign: "center", whiteSpace: "nowrap"
                            }}
                        >
                            View All Programs
                        </button>
                        <button
                            onClick={() => navigate("/whats-new-registration")}
                            style={{
                                background: "rgba(255,255,255,0.15)", color: "white",
                                border: "2px solid rgba(255,255,255,0.5)",
                                padding: "0.8rem 1rem", borderRadius: "10px",
                                fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", fontFamily: "inherit",
                                flex: "1 1 auto", textAlign: "center", whiteSpace: "nowrap"
                            }}
                        >
                            Reserve Support
                        </button>
                    </div>
                </div>
            </section>

            {/* ── Three Detailed Programs ── */}
            <section style={{ background: "#f8fafc", padding: "4rem 2rem" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span className="section-tag">Programme Details</span>
                        <h2 className="section-title" style={{ marginTop: "0.75rem" }}>Exam Preparation Programs</h2>
                        <p className="section-subtitle" style={{ margin: "0 auto" }}>
                            Click a program below to explore its full details, curriculum, and assessment structure.
                        </p>
                    </div>

                    {/* Tab selector */}
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                        {programs.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => setActiveId(p.id)}
                                style={{
                                    padding: "0.7rem 1.6rem",
                                    borderRadius: "50px",
                                    border: activeId === p.id ? `2px solid ${p.color}` : "2px solid #e5e7eb",
                                    background: activeId === p.id ? p.color : "white",
                                    color: activeId === p.id ? "white" : "#6b7280",
                                    fontWeight: 700,
                                    fontSize: "0.9rem",
                                    cursor: "pointer",
                                    fontFamily: "inherit",
                                    transition: "all 0.2s",
                                }}
                            >
                                {p.emoji} {p.title}
                            </button>
                        ))}
                    </div>

                    {/* Active program detail card */}
                    <div style={{ background: "white", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.08)" }}>

                        {/* Header band */}
                        <div style={{
                            background: active.color,
                            padding: "2.5rem 3rem",
                            color: "white",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "2rem",
                            flexWrap: "wrap",
                        }}>
                            <div style={{ fontSize: "3.5rem", background: "rgba(255,255,255,0.15)", width: "80px", height: "80px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                {active.emoji}
                            </div>
                            <div style={{ flex: 1, minWidth: "260px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                                    <span style={{
                                        background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)",
                                        borderRadius: "50px", padding: "0.25rem 0.9rem",
                                        fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.5px",
                                    }}>
                                        {active.badge}
                                    </span>
                                    <span style={{ opacity: 0.8, fontSize: "0.85rem" }}>📍 Target Students: {active.ageRange}</span>
                                </div>
                                <h2 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 0.4rem" }}>{active.title}</h2>
                                <p style={{ opacity: 0.85, margin: 0, fontSize: "1rem" }}>{active.tagline}</p>
                            </div>
                            <button
                                className="btn btn-primary"
                                style={{ background: "white", color: active.color, fontWeight: 800, padding: "0.9rem 2rem", fontSize: "1rem", flexShrink: 0 }}
                                onClick={() => navigate("/whats-new-registration")}
                            >
                                Enrol Now →
                            </button>
                        </div>

                        {/* Body */}
                        <div style={{ padding: "2.5rem 3rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>

                            {/* Overview */}
                            <div>
                                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: active.color, marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <i className="fa-solid fa-book-open"></i> Overview
                                </h3>
                                <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#374151", margin: 0 }}>{active.overview}</p>
                            </div>

                            {/* Highlights */}
                            <div>
                                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: active.color, marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <i className="fa-solid fa-star"></i> Programme Highlights
                                </h3>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
                                    {active.highlights.map((section, i) => (
                                        <div key={i} style={{ background: "#f8fafc", borderRadius: "12px", padding: "1.5rem", borderLeft: `5px solid ${active.color}` }}>
                                            <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: active.color, marginBottom: "0.75rem" }}>{section.label}</h4>
                                            <ul style={{ paddingLeft: "1.1rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                                {section.items.map((item, j) => (
                                                    <li key={j} style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.6 }}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Skills + Assessment — two columns */}
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                                {/* Skills */}
                                <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "1.5rem" }}>
                                    <h3 style={{ fontSize: "1rem", fontWeight: 800, color: active.color, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <i className="fa-solid fa-bolt"></i> Skills Gained
                                    </h3>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                        {active.skills.map((s) => (
                                            <span key={s} style={{
                                                background: `${active.color}15`, color: active.color,
                                                border: `1px solid ${active.color}30`,
                                                borderRadius: "50px", padding: "0.35rem 0.9rem",
                                                fontSize: "0.82rem", fontWeight: 600,
                                            }}>{s}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Assessment */}
                                <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "1.5rem" }}>
                                    <h3 style={{ fontSize: "1rem", fontWeight: 800, color: active.color, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <i className="fa-solid fa-circle-check"></i> Assessment & Outcomes
                                    </h3>
                                    <ul style={{ paddingLeft: "1.1rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                                        {active.assessments.map((a, i) => (
                                            <li key={i} style={{ fontSize: "0.88rem", color: "#374151", lineHeight: 1.6 }}>{a}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* CTA row */}
                            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", paddingTop: "0.5rem" }}>
                                <button
                                    className="btn btn-primary btn-lg"
                                    style={{ background: active.color, borderColor: active.color }}
                                    onClick={() => navigate("/whats-new-registration")}
                                >
                                    📅 Enrol in {active.title}
                                </button>
                                <button
                                    className="btn btn-outline btn-lg"
                                    onClick={() => window.open("https://wa.me/917306096664", "_blank")}
                                >
                                    💬 Ask a Question
                                </button>
                            </div>
                        </div>
                    </div>
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
                            onClick={() => navigate("/whats-new-registration")}
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
