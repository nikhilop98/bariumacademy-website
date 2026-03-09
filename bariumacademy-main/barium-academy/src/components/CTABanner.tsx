
import { useNavigate } from "react-router-dom";

export default function CTABanner() {
    const navigate = useNavigate();

    return (
        <section className="cta-banner">
            <div className="cta-banner-content">
                <h2>Ready to Start Your Learning Journey?</h2>
                <p>
                    Join thousands of students already achieving their goals with Barium Academy.
                    Book a free demo session today — no commitment required.
                </p>
                <div className="cta-banner-actions">
                    <button
                        className="btn btn-accent btn-lg"
                        onClick={() => navigate("/registration")}
                    >
                        📅 Book a Free Demo
                    </button>
                    <button
                        className="btn btn-outline-white btn-lg"
                        onClick={() => navigate("/tutor-registration")}
                    >
                        Become a Tutor →
                    </button>
                </div>
            </div>
        </section>
    );
}
