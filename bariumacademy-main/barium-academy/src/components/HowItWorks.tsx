

const steps = [
    {
        number: "1",
        icon: <i className="fa-solid fa-laptop-file"></i>,
        title: "Free Diagnostic Trial",
        desc: "Start with a zero-commitment session to assess your current level, learning style, and target goals.",
    },
    {
        number: "2",
        icon: <i className="fa-solid fa-chalkboard-user"></i>,
        title: "Expert Faculty Match",
        desc: "Get paired with carefully vetted, highly experienced tutors specialised in your specific curriculum.",
    },
    {
        number: "3",
        icon: <i className="fa-solid fa-map-location-dot"></i>,
        title: "Personalised Roadmap",
        desc: "Follow a structured, outcome-driven learning plan tailored completely to your pace and exam targets.",
    },
    {
        number: "4",
        icon: <i className="fa-solid fa-chart-line"></i>,
        title: "Track & Improve",
        desc: "Engage in 1-on-1 interactive virtual classrooms, with regular progress reports keeping parents updated.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <div className="how-it-works-header">
                    <span className="section-tag">Simple Process</span>
                    <h2 className="section-title">How Barium Academy Works</h2>
                    <p className="section-subtitle">
                        Getting started takes less than 2 minutes. Three simple steps to
                        unlock your learning potential.
                    </p>
                </div>

                <div className="steps-grid">
                    {steps.map((step) => (
                        <div className="step-card" key={step.number}>
                            <div className="step-number">
                                <span className="step-icon">{step.icon}</span>
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
