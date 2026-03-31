import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

const categories = [
    { id: "academic", label: "🎓 Academic & College-Prep", color: "#1a3a6e" },
    { id: "tech", label: "💻 Tech & Innovation", color: "#2563eb" },
    { id: "arts", label: "🎨 Arts & Communication", color: "#7c3aed" },
    { id: "life", label: "🌱 Life Skills & Enrichment", color: "#059669" },
];

const programs = [
    // ── ACADEMIC ──
    {
        id: "sat-act",
        category: "academic",
        letter: "A",
        icon: "fa-solid fa-pen-to-square",
        title: "SAT & ACT Preparation",
        ageRange: "Ages 14–18",
        color: "#1a3a6e",
        tagline: "Comprehensive coaching for US college admissions test success",
        highlights: [
            "Full coverage of Reading, Writing & Language, and Math sections",
            "Personalized coaching to target each student's weak areas",
            "Practice exams with detailed scoring and section-by-section analysis",
            "Advanced grammar rules, algebra shortcuts, and reading strategies",
        ],
        skills: ["Test-taking strategies", "Time management", "Problem-solving techniques", "Advanced grammar"],
        assessment: "Weekly quizzes, full-length mock exams, detailed performance reports",
    },
    {
        id: "critical-thinking",
        category: "academic",
        letter: "B",
        icon: "fa-solid fa-brain",
        title: "Critical Thinking & Problem Solving",
        ageRange: "Ages 12–18",
        color: "#1a3a6e",
        tagline: "Build the analytical reasoning skills top universities demand",
        highlights: [
            "Logic puzzles and lateral thinking exercises",
            "Real-world case studies across business, science, and social topics",
            "Analytical reasoning workshops with structured frameworks",
            "Team problem-solving challenges and group debates",
        ],
        skills: ["Logical reasoning", "Analytical thinking", "Structured argumentation", "Evidence evaluation"],
        assessment: "Case presentations, reasoning tests, peer-review feedback sessions",
    },
    {
        id: "uni-essay",
        category: "academic",
        letter: "C",
        icon: "fa-solid fa-file-pen",
        title: "University Essay Writing & Admissions Strategy",
        ageRange: "Ages 15–18",
        color: "#1a3a6e",
        tagline: "Craft compelling applications for top universities worldwide",
        highlights: [
            "Crafting powerful personal statements and supplemental essays",
            "Application strategy sessions — school list, major selection, timing",
            "Storytelling techniques to make your application stand out",
            "Multiple editing cycles with expert written feedback",
        ],
        skills: ["Persuasive writing", "Self-reflection", "Admissions insight", "Narrative structure"],
        assessment: "Draft reviews, editing cycles, final portfolio submission",
    },

    // ── TECH ──
    {
        id: "robotics-coding",
        category: "tech",
        letter: "D",
        icon: "fa-solid fa-robot",
        title: "Robotics & Coding",
        ageRange: "Ages 10–18",
        color: "#2563eb",
        tagline: "Build real robots and learn to code from the ground up",
        highlights: [
            "Arduino, Raspberry Pi, sensors and actuator control",
            "Python & Java basics — variables, loops, functions, OOP",
            "AI & ML fundamentals — what they are and how they work",
            "Team-based engineering and coding challenges",
        ],
        skills: ["Computational thinking", "Programming logic", "Engineering principles", "Teamwork"],
        assessment: "Live project demonstrations, competitive challenges, final robot showcase",
    },
    {
        id: "ai-web",
        category: "tech",
        letter: "E",
        icon: "fa-solid fa-globe",
        title: "AI & Website Creation Bootcamp",
        ageRange: "Ages 12–18",
        color: "#2563eb",
        tagline: "Build AI-powered websites from scratch — no experience needed",
        highlights: [
            "Introduction to AI / ML fundamentals — neural networks, prompting",
            "Web development with HTML, CSS, JavaScript, and React",
            "Deploying interactive, AI-powered websites online",
            "Design thinking: UX principles, wireframing, and prototyping",
        ],
        skills: ["Full-stack development basics", "Design thinking", "AI integration", "Deployment"],
        assessment: "Final portfolio website project, peer reviews, instructor feedback",
    },
    {
        id: "game-dev",
        category: "tech",
        letter: "F",
        icon: "fa-solid fa-gamepad",
        title: "Game Development & App Design",
        ageRange: "Ages 12–18",
        color: "#2563eb",
        tagline: "Design and build your own playable game or mobile app",
        highlights: [
            "Unity / Unreal Engine basics for 2D and 3D game environments",
            "Game mechanics: physics, collision detection, scoring systems",
            "User experience principles and UI design for apps",
            "App prototyping with real tools used in the industry",
        ],
        skills: ["Creative coding", "UI/UX design", "Iterative testing", "Game mechanics"],
        assessment: "Playable game / app build, design documentation, live showcase day",
    },
    {
        id: "cybersecurity",
        category: "tech",
        letter: "G",
        icon: "fa-solid fa-shield-halved",
        title: "Cybersecurity & Ethical Hacking Foundations",
        ageRange: "Ages 14–18",
        color: "#2563eb",
        tagline: "Learn to protect systems — and understand how attacks work",
        highlights: [
            "Fundamentals of online security and threat modelling",
            "Encryption basics — how data is protected on the internet",
            "Ethical hacking labs — controlled vulnerability testing",
            "Digital safety simulations and incident response scenarios",
        ],
        skills: ["Computer security principles", "Risk analysis", "Safe coding habits", "Ethical hacking basics"],
        assessment: "Security challenge competitions, vulnerability reports, completion certificates",
    },

    // ── ARTS ──
    {
        id: "debate",
        category: "arts",
        letter: "H",
        icon: "fa-solid fa-microphone",
        title: "Debate & Public Speaking",
        ageRange: "Ages 12–18",
        color: "#7c3aed",
        tagline: "Find your voice — and learn to command any room",
        highlights: [
            "Structured debate formats: British Parliamentary, Lincoln-Douglas, MUN",
            "Speech writing and delivery coaching from experienced coaches",
            "Impromptu speaking challenges to build in-the-moment confidence",
            "Research techniques and evidence-based argumentation",
        ],
        skills: ["Critical thinking", "Confidence building", "Persuasive communication", "Research skills"],
        assessment: "Graded debate performances, instructor feedback, mock tournaments",
    },
    {
        id: "creative-writing",
        category: "arts",
        letter: "I",
        icon: "fa-solid fa-feather-pointed",
        title: "Creative Writing & Storytelling",
        ageRange: "Ages 10–18",
        color: "#7c3aed",
        tagline: "Discover your creative voice through fiction, poetry and script",
        highlights: [
            "Fiction writing — plot structure, character development, world-building",
            "Poetry — imagery, rhythm, form, and contemporary styles",
            "Scriptwriting for stage, film, and digital media",
            "Peer workshops and critique sessions to sharpen your craft",
        ],
        skills: ["Voice development", "Writing craft", "Editing and revision", "Narrative structure"],
        assessment: "Published anthology contribution, public reading showcase event",
    },
    {
        id: "film",
        category: "arts",
        letter: "J",
        icon: "fa-solid fa-film",
        title: "Digital Media & Film Production",
        ageRange: "Ages 12–18",
        color: "#7c3aed",
        tagline: "From script to screen — create, direct and produce your own short film",
        highlights: [
            "Storyboarding and pre-production planning",
            "Camera techniques, lighting, and on-location filming",
            "Editing tools: Adobe Premiere Pro and DaVinci Resolve",
            "Audio design, voiceover, and music scoring basics",
        ],
        skills: ["Visual storytelling", "Media production", "Teamwork", "Post-production editing"],
        assessment: "Short film premiere event, digital portfolio content creation",
    },

    // ── LIFE SKILLS ──
    {
        id: "chess",
        category: "life",
        letter: "K",
        icon: "fa-solid fa-chess",
        title: "Chess Summer Camp",
        ageRange: "Ages 7–18 · Beginners to Advanced",
        color: "#059669",
        tagline: "Think deeper, plan better — master the royal game",
        highlights: [
            "Tactics and pattern recognition — forks, pins, skewers, and sacrifices",
            "Opening theory — Sicilian, Italian, Queen's Gambit, and more",
            "Middle-game strategy: pawn structure, piece activity, king safety",
            "Endgame mastery and puzzle training for precision calculation",
        ],
        skills: ["Strategic thinking", "Concentration", "Patience", "Calculation"],
        assessment: "Elo-style rating improvement tracking, internal camp tournament ranking",
    },
    {
        id: "stem",
        category: "life",
        letter: "L",
        icon: "fa-solid fa-flask",
        title: "STEM Exploration (Science & Engineering)",
        ageRange: "Ages 10–18",
        color: "#059669",
        tagline: "Hands-on science and engineering projects that actually work",
        highlights: [
            "Physics, Chemistry, and Biology hands-on lab sessions",
            "Engineering projects: bridge building, renewable energy models",
            "Problem-based learning with real scientific inquiry methods",
            "Group experiments and peer collaboration across disciplines",
        ],
        skills: ["Scientific inquiry", "Experimental methods", "Engineering thinking", "Collaboration"],
        assessment: "Lab reports, group presentations, innovation demo day",
    },
    {
        id: "languages-immersion",
        category: "life",
        letter: "M",
        icon: "fa-solid fa-earth-americas",
        title: "Foreign Language Immersion",
        ageRange: "Ages 10–18",
        color: "#059669",
        tagline: "Speak, listen, read and write — total immersion in your target language",
        highlights: [
            "Available in: English, Spanish, French, German, Chinese (Mandarin), Arabic",
            "All four CEFR skills: speaking, listening, reading, and writing",
            "Cultural immersion projects to deepen real-world understanding",
            "Conversational practice with near-native and native tutors",
        ],
        skills: ["Fluency development", "Vocabulary building", "Comprehension", "Cross-cultural understanding"],
        assessment: "Oral presentations, proficiency-level tests, cultural project showcases",
    },
    {
        id: "entrepreneurship",
        category: "life",
        letter: "N",
        icon: "fa-solid fa-lightbulb",
        title: "Entrepreneurship & Business Fundamentals",
        ageRange: "Ages 14–18",
        color: "#059669",
        tagline: "Build your first business — from idea to investor pitch",
        highlights: [
            "Business model design — value propositions, customer segments, revenue",
            "Marketing basics — branding, social media strategy, target audiences",
            "Finance fundamentals — budgeting, break-even analysis, cash flow",
            "Investor pitch practice — communicate your idea with confidence",
        ],
        skills: ["Problem solving", "Financial literacy", "Team management", "Pitching"],
        assessment: "Business pitch presentations to a panel, project rubric evaluations",
    },
];

export default function SummerPrograms() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("academic");
    const [expanded, setExpanded] = useState<string | null>(null);

    const filtered = programs.filter((p) => p.category === activeCategory);
    const activeCat = categories.find((c) => c.id === activeCategory)!;

    return (
        <>
            <SEO
                title="Summer Programs 2026 — Barium Academy"
                description="Explore Barium Academy's Summer 2026 programs: SAT/ACT prep, Robotics, AI bootcamps, Debate, Creative Writing, Chess, STEM, and more. Ages 7–18."
                keywords="summer tutoring programs, SAT prep camp, AI bootcamp, robotics summer camp, debate summer school, STEM program, coding camp, barium academy"
                canonical="/summer-programs"
            />
            <Header />

            {/* Hero */}
            <section style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1a3a6e 100%)",
                color: "white",
                padding: "8rem 2rem 5rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
            }}>
                {/* Decorative circles */}
                <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "250px", height: "250px", borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
                <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />

                <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
                    <span style={{ 
                        background: "rgba(255,107,53,0.2)", 
                        color: "#ff6b35", 
                        border: "1px solid rgba(255,107,53,0.4)", 
                        borderRadius: "50px", 
                        padding: "0.4rem 1rem", 
                        fontSize: "clamp(0.7rem, 2.5vw, 0.85rem)", 
                        fontWeight: 700, 
                        letterSpacing: "0.5px", 
                        textTransform: "uppercase",
                        display: "inline-block",
                        maxWidth: "95%"
                    }}>
                        ☀️ Enrolling Now for Summer 2026
                    </span>
                    <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 900, marginTop: "1.5rem", marginBottom: "1rem", lineHeight: 1.2 }}>
                        Summer Programs 2026
                    </h1>
                    <p style={{ fontSize: "1.2rem", opacity: 0.8, lineHeight: 1.7, marginBottom: "2rem" }}>
                        14 expertly designed programs across Academic, Tech, Arts & Life Skills —
                        for students aged 7–18 worldwide.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <button className="btn btn-primary btn-lg" onClick={() => navigate("/whats-new-registration")} style={{ background: "#ff6b35", borderColor: "#ff6b35" }}>
                            📅 Reserve Your Spot
                        </button>
                        <button className="btn btn-outline btn-lg" onClick={() => window.open("https://wa.me/917306096664", "_blank")} style={{ color: "white", borderColor: "rgba(255,255,255,0.5)" }}>
                            💬 Ask a Question
                        </button>
                    </div>

                    {/* Stats row */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", marginTop: "3.5rem", maxWidth: "700px", margin: "3.5rem auto 0" }}>
                        {[
                            { n: "14", l: "Programs" },
                            { n: "4", l: "Categories" },
                            { n: "Ages 7–18", l: "All Levels" },
                            { n: "100%", l: "Online & Flexible" },
                        ].map((s) => (
                            <div key={s.l} style={{ textAlign: "center" }}>
                                <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "#ff6b35" }}>{s.n}</div>
                                <div style={{ fontSize: "0.8rem", opacity: 0.65, marginTop: "0.2rem" }}>{s.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Tabs */}
            <div style={{ background: "white", borderBottom: "1px solid #e5e7eb", position: "sticky", top: "70px", zIndex: 100 }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem", display: "flex", gap: "0.25rem", overflowX: "auto" }}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            style={{
                                padding: "1rem 1.4rem",
                                border: "none",
                                borderBottom: activeCategory === cat.id ? `3px solid ${cat.color}` : "3px solid transparent",
                                background: "none",
                                fontWeight: activeCategory === cat.id ? 700 : 500,
                                color: activeCategory === cat.id ? cat.color : "#6b7280",
                                cursor: "pointer",
                                whiteSpace: "nowrap",
                                fontSize: "0.9rem",
                                transition: "all 0.2s",
                                fontFamily: "inherit",
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Programs Grid */}
            <section style={{ background: "#f8fafc", padding: "4rem 2rem" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div style={{ marginBottom: "2.5rem" }}>
                        <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: activeCat.color, marginBottom: "0.5rem" }}>
                            {activeCat.label}
                        </h2>
                        <p style={{ color: "#6b7280", fontSize: "1rem" }}>
                            {filtered.length} program{filtered.length !== 1 ? "s" : ""} available — click any card to see full details
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
                        {filtered.map((prog) => {
                            const isExpanded = expanded === prog.id;
                            return (
                                <div
                                    key={prog.id}
                                    style={{
                                        background: "white",
                                        borderRadius: "16px",
                                        overflow: "hidden",
                                        border: isExpanded ? `2px solid ${prog.color}` : "2px solid transparent",
                                        boxShadow: isExpanded ? `0 8px 30px ${prog.color}22` : "0 2px 12px rgba(0,0,0,0.07)",
                                        transition: "all 0.25s ease",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setExpanded(isExpanded ? null : prog.id)}
                                >
                                    {/* Card header */}
                                    <div style={{ background: prog.color, padding: "1.5rem", color: "white", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                                        <span style={{
                                            width: "50px", height: "50px", borderRadius: "12px",
                                            background: "rgba(255,255,255,0.15)", display: "flex",
                                            alignItems: "center", justifyContent: "center",
                                            fontSize: "1.5rem", flexShrink: 0,
                                        }}>
                                            <i className={prog.icon}></i>
                                        </span>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: "0.75rem", opacity: 0.75, fontWeight: 700, letterSpacing: "0.5px", marginBottom: "0.25rem" }}>
                                                Program {prog.letter} · {prog.ageRange}
                                            </div>
                                            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, margin: 0, lineHeight: 1.3 }}>{prog.title}</h3>
                                        </div>
                                        <i className={`fa-solid fa-chevron-${isExpanded ? "up" : "down"}`} style={{ opacity: 0.7, marginTop: "4px", flexShrink: 0 }}></i>
                                    </div>

                                    {/* Tagline always visible */}
                                    <div style={{ padding: "1rem 1.5rem 0.75rem" }}>
                                        <p style={{ color: "#4b5563", fontSize: "0.9rem", margin: 0, fontStyle: "italic" }}>{prog.tagline}</p>
                                    </div>

                                    {/* Expandable content */}
                                    {isExpanded && (
                                        <div style={{ padding: "0 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                                            {/* Highlights */}
                                            <div>
                                                <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: prog.color, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.6rem" }}>
                                                    ✦ Programme Highlights
                                                </h4>
                                                <ul style={{ paddingLeft: "1.2rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                                                    {prog.highlights.map((h, i) => (
                                                        <li key={i} style={{ fontSize: "0.88rem", color: "#374151", lineHeight: 1.5 }}>{h}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Skills */}
                                            <div>
                                                <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: prog.color, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.6rem" }}>
                                                    ✦ Skills Gained
                                                </h4>
                                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                                    {prog.skills.map((s) => (
                                                        <span key={s} style={{
                                                            background: `${prog.color}15`, color: prog.color,
                                                            border: `1px solid ${prog.color}30`, borderRadius: "50px",
                                                            padding: "0.3rem 0.8rem", fontSize: "0.78rem", fontWeight: 600,
                                                        }}>{s}</span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Assessment */}
                                            <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "0.9rem 1rem", borderLeft: `4px solid ${prog.color}` }}>
                                                <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: prog.color, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.3rem" }}>
                                                    Assessment & Outcomes
                                                </h4>
                                                <p style={{ fontSize: "0.85rem", color: "#4b5563", margin: 0 }}>{prog.assessment}</p>
                                            </div>

                                            <button
                                                className="btn btn-primary"
                                                onClick={(e) => { e.stopPropagation(); navigate("/whats-new-registration"); }}
                                                style={{ background: prog.color, borderColor: prog.color, width: "100%", marginTop: "0.5rem" }}
                                            >
                                                Enrol in This Program →
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", color: "white", padding: "5rem 2rem", textAlign: "center" }}>
                <div style={{ maxWidth: "650px", margin: "0 auto" }}>
                    <span style={{ fontSize: "2.5rem" }}>☀️</span>
                    <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, margin: "1rem 0 0.75rem" }}>
                        Ready to Make This Summer Count?
                    </h2>
                    <p style={{ opacity: 0.75, fontSize: "1.1rem", marginBottom: "2rem", lineHeight: 1.7 }}>
                        Spots fill quickly. Reserve your place now and we'll match you with the perfect program and tutor.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <button className="btn btn-primary btn-lg" onClick={() => navigate("/whats-new-registration")} style={{ background: "#ff6b35", borderColor: "#ff6b35" }}>
                            📅 Book a Free Consultation
                        </button>
                        <button className="btn btn-outline btn-lg" onClick={() => window.open("https://wa.me/917306096664", "_blank")} style={{ color: "white", borderColor: "rgba(255,255,255,0.5)" }}>
                            💬 WhatsApp Us
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
