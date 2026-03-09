import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function TutorRegistration() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        description: "",
        cvLink: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const resp = await fetch(
                "https://script.google.com/macros/s/AKfycbzknubxzkO44TxZiyjTy4pDvz-yVrFAEKQCsAD5-2Q1Mx7kYarZtvmX9egWXkzPA7vKNQ/exec",
                { method: "POST", body: JSON.stringify(formData) }
            );
            const text = await resp.text();
            console.log("Response:", text);
            alert("Thank you! Your registration has been received.");
            setFormData({
                name: "",
                email: "",
                subject: "",
                phone: "",
                description: "",
                cvLink: "",
            });
        } catch (err) {
            console.error("Submit error:", err);
            alert("Something went wrong. Please try again.");
        }
    };

    const labelStyle: React.CSSProperties = {
        color: "var(--primary)",
        fontWeight: 600,
        fontSize: "0.9rem",
        marginBottom: "0.4rem",
        display: "block",
    };

    return (
        <section id="tutor-registration" className="tutor-page">
            <div className="tutor-form-card">
                <div className="tutor-form-header">
                    <h2>Tutor Registration</h2>
                    <p>Join Our Passionate Teaching Community</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ display: "grid", gap: "1rem" }}>
                        {/* Full Name */}
                        <div>
                            <label style={labelStyle}>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="modern-input"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label style={labelStyle}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="modern-input"
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label style={labelStyle}>Subject Expertise</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="e.g. Mathematics, Physics, English"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="modern-input"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label style={labelStyle}>Contact Number</label>
                            <PhoneInput
                                country={"in"}
                                value={formData.phone}
                                onChange={(value) => setFormData({ ...formData, phone: value })}
                                inputStyle={{
                                    width: "100%",
                                    height: "50px",
                                    borderRadius: "12px",
                                    border: "1.5px solid #d4dae3",
                                    fontSize: "1rem",
                                }}
                            />
                        </div>



                        {/* CV Link */}
                        <div>
                            <label style={labelStyle}>CV (Google Drive Link)</label>
                            <input
                                type="url"
                                name="cvLink"
                                placeholder="Paste your Google Drive CV link"
                                value={formData.cvLink}
                                onChange={handleChange}
                                className="modern-input"
                            />
                        </div>

                        {/* About */}
                        <div>
                            <label style={labelStyle}>About You</label>
                            <textarea
                                name="description"
                                placeholder="Briefly describe your teaching experience"
                                value={formData.description}
                                onChange={handleChange}
                                className="modern-input"
                                style={{ height: "110px", resize: "none" }}
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{ width: "100%", marginTop: "2rem" }}
                    >
                        Submit Application →
                    </button>
                </form>
            </div>
        </section>
    );
}
