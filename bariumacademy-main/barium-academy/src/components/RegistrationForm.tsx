import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Class: "",
    number: "",
    location: "",
    subject: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

      await fetch(
        "https://script.google.com/macros/s/AKfycbx9gMulE7gqoA0axCOk_L-PCd4ph0XuUbyqJU8xhkSoDciF3W--gVEtecjVSkA9usFtdw/exec",
        {
          method: "POST",
          body: formPayload,
          mode: "no-cors",
        }
      );
      
      setStatus("success");
      setFormData({ name: "", email: "", Class: "", number: "", location: "", subject: "" });
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="registration" className="registration-section">
      <div className="registration-inner">
        <div className="registration-header">
          <h2 className="section-title">Book Your Free Demo</h2>
          <p className="section-subtitle">
            Experience high-quality tutoring with zero commitment. Book your first session today.
          </p>
        </div>

        <div className="form-card">
          <form onSubmit={handleSubmit}>
            {/* Success / Error Banner */}
            {status === "success" && (
              <div className="form-feedback form-feedback-success">
                <i className="fa-solid fa-circle-check"></i> Thank you! Your registration has been received. We\'ll be in touch soon!
              </div>
            )}
            {status === "error" && (
              <div className="form-feedback form-feedback-error">
                <i className="fa-solid fa-triangle-exclamation"></i> Something went wrong. Please try again or contact us on WhatsApp.
              </div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.2rem" }}>
              {/* Name */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label>Your Name</label>
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
                />
              </div>

              {/* Subject of Interest */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label>Subject of Interest</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Math, Physics, SAT"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="modern-input"
                />
              </div>

              {/* Class */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label>Class / Grade</label>
                <input
                  type="text"
                  name="Class"
                  placeholder="e.g. Class 10, Grade 12, Engineering"
                  value={formData.Class}
                  onChange={handleChange}
                  required
                  className="modern-input"
                />
              </div>

              {/* Phone */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label>Phone Number</label>
                <PhoneInput
                  country={"in"}
                  value={formData.number}
                  onChange={(value) => setFormData({ ...formData, number: value })}
                  inputStyle={{ width: "100%", height: "46px", fontSize: "0.95rem", borderRadius: "10px", border: "1.5px solid #d4dae3" }}
                />
              </div>

              {/* Location */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label>Your Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="City or area"
                  value={formData.location}
                  onChange={handleChange}
                  className="modern-input"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ width: "100%", marginTop: "1.5rem" }}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Submitting..." : "Book My Free Demo →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
