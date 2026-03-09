

export default function TrustBanner() {
    return (
        <div className="trust-banner">
            <div className="container">
                <p className="trust-banner-text">Our students have gone on to attend top universities and schools:</p>
                <div className="trust-logo-track">
                    {/* We use placeholders here for top generic UK/US/India universities, but keep it clean and minimal styling */}
                    <div className="trust-logo">Oxford</div>
                    <div className="trust-logo">Cambridge</div>
                    <div className="trust-logo">Harvard</div>
                    <div className="trust-logo">Stanford</div>
                    <div className="trust-logo">IIT</div>
                    <div className="trust-logo">UCL</div>
                </div>
            </div>
        </div>
    );
}
