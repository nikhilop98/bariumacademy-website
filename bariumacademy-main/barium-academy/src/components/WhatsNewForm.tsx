import React, { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

const PROGRAM_OPTIONS = [
    // What's New Intensive Programs
    "AP Exam Bootcamp",
    "GCSE 9-1 Revision Mastery",
    "A-Level Revision Mastery",
    
    // Summer Programs
    "SAT & ACT Preparation",
    "Critical Thinking & Problem Solving",
    "University Essay Writing & Admissions Strategy",
    "Robotics & Coding",
    "AI & Website Creation Bootcamp",
    "Game Development & App Design",
    "Cybersecurity & Ethical Hacking",
    "Debate & Public Speaking",
    "Creative Writing & Storytelling",
    "Digital Media & Film Production",
    "Chess Summer Camp",
    "STEM Exploration",
    "Foreign Language Immersion",
    "Entrepreneurship & Business Fundamentals",
    "Other"
];
export default function WhatsNewForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        Class: "",
        number: "",
        location: "",
    });
    
    // Multi-select state
    const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    // Close dropdown on outside click
    useEffect(() => {
        function handleOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleOutside);
        return () => document.removeEventListener("mousedown", handleOutside);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleProgram = (option: string) => {
        setSelectedPrograms((prev) =>
            prev.includes(option) ? prev.filter((p) => p !== option) : [...prev, option]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (selectedPrograms.length === 0) {
            alert("Please select at least one program.");
            return;
        }
        
        setStatus("loading");
        try {
            const formPayload = new FormData();
            Object.keys(formData).forEach((key) => {
                formPayload.append(key, formData[key as keyof typeof formData]);
            });
            // Send multiple selections as a comma-separated string
            formPayload.append("program", selectedPrograms.join(", "));

            // Submit securely to the new What's New/Summer Programs Google Sheet URL
            await fetch(
                "https://script.google.com/macros/s/AKfycbyMJXE7ibbnimb1ZsoSy47kLx-e7ML3k9ztfAiBeebg1SPMXWElm_zEVU--x9JnauMSVA/exec",
                {
                    method: "POST",
                    body: formPayload,
                    mode: "no-cors",
                }
            );

            setStatus("success");
            setFormData({ name: "", email: "", Class: "", number: "", location: "" });
            setSelectedPrograms([]); // Reset custom dropdown
        } catch (err) {
            console.error("Submit error:", err);
            setStatus("error");
        }
    };

    const labelStyle: React.CSSProperties = {
        fontWeight: 600,
        fontSize: "0.9rem",
        marginBottom: "0.4rem",
        display: "block",
        color: "#374151" // neutral dark gray
    };

    return (
        <>
            <SEO
                title="Register for Programs | Barium Academy"
                description="Secure your spot in Barium Academy's specialized intensive tutoring programs, including AP Bootcamp and GCSE Mastery."
            />
            <Header />
            <section id="registration" className="registration-section" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem 1.5rem 6rem", position: "relative", zIndex: 50 }}>
                <div className="registration-inner" style={{ width: "100%", maxWidth: "800px" }}>
                    <div className="registration-header">
                        <h2 className="section-title">Special Programs Registration</h2>
                        <p className="section-subtitle">
                            Secure your spot for our upcoming Summer Intensives, AP Bootcamps, or GCSE Mastery tracks.
                        </p>
                    </div>

                    <div className="form-card" style={{ padding: "1.5rem" }}>
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

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.85rem", marginBottom: "0.85rem" }}>
                                {/* Name */}
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label style={labelStyle}>Student / Parent Name <span style={{ color: "red" }}>*</span></label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="modern-input"
                                        style={{ width: "100%", padding: "0.65rem", borderRadius: "8px", border: "1px solid #ccc" }}
                                    />
                                </div>

                                {/* Email */}
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label style={labelStyle}>Email Address <span style={{ color: "red" }}>*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="modern-input"
                                        style={{ width: "100%", padding: "0.65rem", borderRadius: "8px", border: "1px solid #ccc" }}
                                    />
                                </div>

                                {/* Class */}
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label style={labelStyle}>Current Grade / Year <span style={{ color: "red" }}>*</span></label>
                                    <input
                                        type="text"
                                        name="Class"
                                        placeholder="e.g. Year 10, Grade 11"
                                        value={formData.Class}
                                        onChange={handleChange}
                                        required
                                        className="modern-input"
                                        style={{ width: "100%", padding: "0.65rem", borderRadius: "8px", border: "1px solid #ccc" }}
                                    />
                                </div>

                                {/* Phone */}
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label style={labelStyle}>Phone Number <span style={{ color: "red" }}>*</span></label>
                                    <PhoneInput
                                        country={"in"}
                                        value={formData.number}
                                        onChange={(value) => setFormData({ ...formData, number: value })}
                                        inputStyle={{ width: "100%", height: "42px", fontSize: "0.95rem", borderRadius: "8px", border: "1px solid #ccc" }}
                                    />
                                </div>

                                {/* Location */}
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label style={labelStyle}>City / Location <span style={{ color: "red" }}>*</span></label>
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Enter your location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        className="modern-input"
                                        style={{ width: "100%", padding: "0.65rem", borderRadius: "8px", border: "1px solid #ccc" }}
                                    />
                                </div>
                            </div>

                            {/* Custom Multi-Select Dropdown for Programs */}
                            <div style={{ marginBottom: "1rem", position: "relative" }} ref={dropdownRef}>
                                <label style={labelStyle}>
                                    Program(s) of Interest <span style={{ color: "red" }}>*</span>
                                </label>

                                {/* Trigger */}
                                <button
                                    type="button"
                                    onClick={() => setDropdownOpen((o) => !o)}
                                    style={{
                                        width: "100%",
                                        padding: "0.65rem",
                                        borderRadius: "8px",
                                        border: `1px solid ${dropdownOpen ? "var(--primary)" : "#ccc"}`,
                                        background: "white",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        fontSize: "0.95rem",
                                        color: selectedPrograms.length ? "var(--text)" : "#6b7280",
                                        cursor: "pointer",
                                        fontFamily: "inherit",
                                        textAlign: "left",
                                        transition: "border-color 0.2s",
                                    }}
                                >
                                    <span>
                                        {selectedPrograms.length === 0
                                            ? "Select Programs..."
                                            : `${selectedPrograms.length} selected: ${selectedPrograms.slice(0, 2).join(", ")}${selectedPrograms.length > 2 ? ` +${selectedPrograms.length - 2} more` : ""}`}
                                    </span>
                                    <i className={`fa-solid fa-chevron-${dropdownOpen ? "up" : "down"}`} style={{ fontSize: "0.8rem", color: "#6b7280", flexShrink: 0 }}></i>
                                </button>

                                {/* Dropdown Panel */}
                                {dropdownOpen && (
                                    <div style={{
                                        position: "absolute",
                                        top: "calc(100% + 4px)",
                                        left: 0,
                                        zIndex: 999,
                                        background: "white",
                                        border: "1px solid var(--primary)",
                                        borderRadius: "8px",
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                                        padding: "0.5rem",
                                        maxHeight: "260px",
                                        overflowY: "auto",
                                        overscrollBehavior: "contain",
                                        WebkitOverflowScrolling: "touch",
                                        width: "100%",
                                    }}>
                                        {PROGRAM_OPTIONS.map((option) => {
                                            const checked = selectedPrograms.includes(option);
                                            return (
                                                <div
                                                    key={option}
                                                    onClick={() => toggleProgram(option)}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.7rem",
                                                        padding: "0.6rem 0.8rem",
                                                        borderRadius: "6px",
                                                        cursor: "pointer",
                                                        background: checked ? "var(--primary-light, #eff6ff)" : "transparent",
                                                        fontWeight: checked ? 600 : 400,
                                                        fontSize: "0.9rem",
                                                        color: "var(--text)",
                                                        transition: "background 0.15s",
                                                        userSelect: "none",
                                                    }}
                                                >
                                                    {/* Checkbox Icon UI */}
                                                    <span style={{
                                                        width: "18px",
                                                        height: "18px",
                                                        minWidth: "18px",
                                                        borderRadius: "4px",
                                                        border: checked ? "2px solid var(--primary)" : "2px solid #ccc",
                                                        background: checked ? "var(--primary)" : "white",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        transition: "all 0.15s",
                                                    }}>
                                                        {checked && <i className="fa-solid fa-check" style={{ fontSize: "0.6rem", color: "white" }}></i>}
                                                    </span>
                                                    {option}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {/* Selected Label Below */}
                                {selectedPrograms.length > 0 && (
                                    <p style={{ fontSize: "0.85rem", color: "var(--primary)", marginTop: "0.5rem", fontWeight: 600 }}>
                                        ✓ Selected: {selectedPrograms.join(", ")}
                                    </p>
                                )}
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

