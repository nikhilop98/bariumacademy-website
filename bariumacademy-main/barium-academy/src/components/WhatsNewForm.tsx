import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

export default function WhatsNewForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        program: "",
        Class: "",
        number: "",
        location: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const formPayload = new FormData();
            Object.keys(formData).forEach((key) => {
                formPayload.append(key, formData[key as keyof typeof formData]);
            });

            // Note: Currently uses the main student registration Google Sheet URL
            await fetch(
                "https://script.google.com/macros/s/AKfycbx9gMulE7gqoA0axCOk_L-PCd4ph0XuUbyqJU8xhkSoDciF3W--gVEtecjVSkA9usFtdw/exec",
                {
                    method: "POST",
                    body: formPayload,
                    mode: "no-cors",
                }
            );

            setStatus("success");
            setFormData({ name: "", email: "", program: "", Class: "", number: "", location: "" });
        } catch (err) {
            console.error("Submit error:", err);
            setStatus("error");
        }
    };

    return (
        <>
            <SEO
                title="Register for Programs | Barium Academy"
                description="Secure your spot in Barium Academy's specialized intensive tutoring programs, including AP Bootcamp and GCSE Mastery."
            />
            <Header />
            <section id="registration" className="registration-section" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="registration-inner" style={{ width: "100%", maxWidth: "800px" }}>
                    <div className="registration-header">
                        <h2 className="section-title">Special Programs Registration</h2>
                        <p className="section-subtitle">
                            Secure your spot for our upcoming Summer Intensives, AP Bootcamps, or GCSE Mastery tracks.
                        </p>
                    </div>

                    <div className="form-card" style={{ padding: "2rem" }}>
                        <form onSubmit={handleSubmit}>
                            {status === "success" && (
                                <div className="form-feedback form-feedback-success" style={{ marginBottom: "1rem", padding: "1rem", background: "#d1fae5", color: "#065f46", borderRadius: "8px" }}>
                                    <i className="fa-solid fa-circle-check"></i> Thank you! Your program enrollment request has been received. Our team will contact you shortly!
                                </div>
                            )}
                            {status === "error" && (
                                <div className="form-feedback form-feedback-error" style={{ marginBottom: "1rem", padding: "1rem", background: "#fee2e2", color: "#991b1b", borderRadius: "8px" }}>
                                    <i className="fa-solid fa-triangle-exclamation"></i> Something went wrong. Please try again or contact us on WhatsApp.
                                </div>
                            )}

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.2rem", marginBottom: "1.2rem" }}>
                                {/* Name */}
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label>Student / Parent Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="modern-input"
                                        style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", border: "1px solid #ccc" }}
                                    />
                                </div>

                                {/* Email */}
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="modern-input"
                                        style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", border: "1px solid #ccc" }}
                                    />
                                </div>

                                {/* Program Selection */}
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label>Program of Interest</label>
                                    <select
                                        name="program"
                                        value={formData.program}
                                        onChange={handleChange}
                                        required
                                        className="modern-input"
                                        style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", border: "1px solid #ccc", background: "white" }}
                                    >
                                        <option value="">Select a Program...</option>
                                        <option>Summer Intensive Programs 2026</option>
                                        <option>AP Exam Bootcamp</option>
                                        <option>GCSE 9-1 Revision Mastery</option>
                                        <option>Other / Custom Request</option>
                                    </select>
                                </div>

                                {/* Class */}
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label>Current Grade / Year</label>
                                    <input
                                        type="text"
                                        name="Class"
                                        placeholder="e.g. Year 10, Grade 11"
                                        value={formData.Class}
                                        onChange={handleChange}
                                        required
                                        className="modern-input"
                                        style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", border: "1px solid #ccc" }}
                                    />
                                </div>

                                {/* Phone */}
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label>Phone Number</label>
                                    <PhoneInput
                                        country={"in"}
                                        value={formData.number}
                                        onChange={(value) => setFormData({ ...formData, number: value })}
                                        inputStyle={{ width: "100%", height: "46px", fontSize: "0.95rem", borderRadius: "8px", border: "1px solid #ccc" }}
                                    />
                                </div>

                                {/* Location */}
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label>City / Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Enter your location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        className="modern-input"
                                        style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", border: "1px solid #ccc" }}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: "100%", marginTop: "1rem", padding: "1rem", fontSize: "1.1rem" }}
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? "Submitting..." : "Secure My Spot →"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
