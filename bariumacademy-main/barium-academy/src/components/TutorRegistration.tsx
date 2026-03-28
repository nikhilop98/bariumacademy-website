import React, { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CURRICULUM_OPTIONS = [
    "AP (Advanced Placement)",
    "SAT / ACT",
    "GCSE",
    "A Level / AS Level",
    "IB (International Baccalaureate)",
    "IGCSE",
    "Indian Curriculum (CBSE / ICSE)",
    "Irish Curriculum (Leaving Cert / CAO)",
    "Australian Curriculum (ATAR / VCE / HSC)",
    "Programming & Coding",
    "Foreign Languages",
    "PSAT / NMSQT",
    "Junior Certificate",
    "Extracurricular / Study Skills",
    "Other",
];

export default function TutorRegistration() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        county: "",
        description: "",
        cvLink: "",
    });
    const [selectedCurricula, setSelectedCurricula] = useState<string[]>([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const dropdownRef = useRef<HTMLDivElement>(null);

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleCurriculum = (option: string) => {
        setSelectedCurricula((prev) =>
            prev.includes(option) ? prev.filter((c) => c !== option) : [...prev, option]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedCurricula.length === 0) {
            alert("Please select at least one curriculum.");
            return;
        }
        setStatus("loading");
        try {
            const formPayload = new FormData();
            Object.keys(formData).forEach((key) => {
                formPayload.append(key, formData[key as keyof typeof formData]);
            });
            formPayload.append("curricula", selectedCurricula.join(", "));

            await fetch(
                "https://script.google.com/macros/s/AKfycbzzR4l9ShfJ17-FAttbpoNrluVG0kkroC7MzDPpFbZhoeOyovtzDt3LxM8VvHEdLqX0YA/exec",
                {
                    method: "POST",
                    body: formPayload,
                    mode: "no-cors",
                }
            );

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", phone: "", county: "", description: "", cvLink: "" });
            setSelectedCurricula([]);
        } catch (err) {
            console.error("Submit error:", err);
            setStatus("error");
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
        <section id="tutor-registration" className="tutor-page" style={{ position: "relative", zIndex: 50, padding: "3rem 1.5rem 6rem" }}>
            <div className="tutor-form-card">
                <div className="tutor-form-header">
                    <h2>Tutor Registration</h2>
                    <p>Join Our Passionate Teaching Community</p>
                </div>

                <form onSubmit={handleSubmit}>
                    {status === "success" && (
                        <div className="form-feedback form-feedback-success">
                            <i className="fa-solid fa-circle-check"></i> Thank you! Your application has been received. We'll be in touch soon!
                        </div>
                    )}
                    {status === "error" && (
                        <div className="form-feedback form-feedback-error">
                            <i className="fa-solid fa-triangle-exclamation"></i> Something went wrong. Please try again or contact us on WhatsApp.
                        </div>
                    )}

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.85rem", marginBottom: "0.85rem" }}>
                        <div>
                            <label style={labelStyle}>Full Name <span style={{ color: "red" }}>*</span></label>
                            <input type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required className="modern-input" />
                        </div>
                        <div>
                            <label style={labelStyle}>Email Address <span style={{ color: "red" }}>*</span></label>
                            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required className="modern-input" />
                        </div>
                        <div>
                            <label style={labelStyle}>Subject Expertise <span style={{ color: "red" }}>*</span></label>
                            <input type="text" name="subject" placeholder="e.g. Mathematics, Physics, English" value={formData.subject} onChange={handleChange} required className="modern-input" />
                        </div>
                        <div>
                            <label style={labelStyle}>County / City <span style={{ color: "red" }}>*</span></label>
                            <input type="text" name="county" placeholder="e.g. Dublin, London, Mumbai" value={formData.county} onChange={handleChange} required className="modern-input" />
                        </div>
                        <div>
                            <label style={labelStyle}>Contact Number <span style={{ color: "red" }}>*</span></label>
                            <PhoneInput
                                country={"in"}
                                value={formData.phone}
                                onChange={(value) => setFormData({ ...formData, phone: value })}
                                inputStyle={{ width: "100%", height: "42px", borderRadius: "10px", border: "1.5px solid #d4dae3", fontSize: "0.95rem" }}
                            />
                        </div>
                    </div>

                    {/* Custom Multi-Select Dropdown for Curriculum */}
                    <div style={{ marginBottom: "0.85rem", position: "relative" }} ref={dropdownRef}>
                        <label style={labelStyle}>
                            Curriculum You Can Teach <span style={{ color: "red" }}>*</span>
                        </label>

                        {/* Trigger */}
                        <button
                            type="button"
                            onClick={() => setDropdownOpen((o) => !o)}
                            style={{
                                width: "100%",
                                padding: "0.65rem 0.85rem",
                                borderRadius: "10px",
                                border: `1.5px solid ${dropdownOpen ? "var(--primary)" : "#d4dae3"}`,
                                background: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                fontSize: "0.9rem",
                                color: selectedCurricula.length ? "var(--text)" : "#9ca3af",
                                cursor: "pointer",
                                fontFamily: "inherit",
                                textAlign: "left",
                                transition: "border-color 0.2s",
                            }}
                        >
                            <span>
                                {selectedCurricula.length === 0
                                    ? "Click to select curricula…"
                                    : `${selectedCurricula.length} selected: ${selectedCurricula.slice(0, 2).join(", ")}${selectedCurricula.length > 2 ? ` +${selectedCurricula.length - 2} more` : ""}`}
                            </span>
                            <i className={`fa-solid fa-chevron-${dropdownOpen ? "up" : "down"}`} style={{ fontSize: "0.8rem", color: "#9ca3af", flexShrink: 0 }}></i>
                        </button>

                        {/* Dropdown Panel */}
                        {dropdownOpen && (
                            <div style={{
                                position: "absolute",
                                top: "calc(100% + 4px)",
                                left: 0,
                                zIndex: 999,
                                background: "white",
                                border: "1.5px solid var(--primary)",
                                borderRadius: "10px",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                                padding: "0.5rem",
                                maxHeight: "260px",
                                overflowY: "auto",
                                overscrollBehavior: "contain",
                                WebkitOverflowScrolling: "touch",
                                width: "100%",
                            }}>
                                {CURRICULUM_OPTIONS.map((option) => {
                                    const checked = selectedCurricula.includes(option);
                                    return (
                                        <div
                                            key={option}
                                            onClick={() => toggleCurriculum(option)}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.7rem",
                                                padding: "0.55rem 0.8rem",
                                                borderRadius: "8px",
                                                cursor: "pointer",
                                                background: checked ? "var(--primary-light, #eff6ff)" : "transparent",
                                                fontWeight: checked ? 600 : 400,
                                                fontSize: "0.88rem",
                                                color: "var(--text)",
                                                transition: "background 0.15s",
                                                userSelect: "none",
                                            }}
                                        >
                                            <span style={{
                                                width: "18px",
                                                height: "18px",
                                                minWidth: "18px",
                                                borderRadius: "5px",
                                                border: checked ? "2px solid var(--primary)" : "2px solid #d4dae3",
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

                        {selectedCurricula.length > 0 && (
                            <p style={{ fontSize: "0.8rem", color: "var(--primary)", marginTop: "0.4rem", fontWeight: 600 }}>
                                ✓ {selectedCurricula.length} selected: {selectedCurricula.join(", ")}
                            </p>
                        )}
                    </div>

                    <div style={{ display: "grid", gap: "0.85rem" }}>
                        <div>
                            <label style={labelStyle}>CV (Google Drive Link) <span style={{ color: "var(--text-muted)", fontWeight: 400, fontSize: "0.8rem" }}>(Optional)</span></label>
                            <input type="url" name="cvLink" placeholder="Paste your Google Drive CV link" value={formData.cvLink} onChange={handleChange} className="modern-input" />
                        </div>
                        <div>
                            <label style={labelStyle}>About You <span style={{ color: "red" }}>*</span></label>
                            <textarea
                                name="description"
                                placeholder="Briefly describe your teaching experience"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                className="modern-input"
                                style={{ height: "110px", resize: "vertical" }}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{ width: "100%", marginTop: "2rem" }}
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Submitting..." : "Submit Application →"}
                    </button>
                </form>
            </div>
        </section>
    );
}
