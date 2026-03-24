
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
                        onClick={() => window.open("https://wa.me/917306096664", "_blank")}
                    >
                        <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.2rem" }}></i> Chat on WhatsApp
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
