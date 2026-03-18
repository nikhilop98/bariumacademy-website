

const steps = [
    {
        number: "1",
        icon: <i className="fa-solid fa-bullseye"></i>,
        title: "Share Your Goals",
        desc: "Tell us what subject you need help with, your level, and your availability.",
    },
    {
        number: "2",
        icon: <i className="fa-solid fa-user-check"></i>,
        title: "Get Matched",
        desc: "We pair you with the perfect expert tutor based on your subject, level, and schedule.",
    },
    {
        number: "3",
        icon: <i className="fa-solid fa-rocket"></i>,
        title: "Start Learning",
        desc: "Book your first session and start making real progress right away.",
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
