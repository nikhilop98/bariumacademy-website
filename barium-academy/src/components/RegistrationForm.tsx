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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resp = await fetch(
        "https://script.google.com/macros/s/AKfycbx9gMulE7gqoA0axCOk_L-PCd4ph0XuUbyqJU8xhkSoDciF3W--gVEtecjVSkA9usFtdw/exec",
        { method: "POST", body: JSON.stringify(formData) }
      );
      const text = await resp.text();
      console.log("Response:", text);
      alert("Thank you! Your registration has been received.");
      setFormData({ name: "", email: "", Class: "", number: "", location: "" });
    } catch (err) {
      console.error("Submit error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="registration" className="registration-section">
      <div className="registration-inner">
        <div className="registration-header">
          <span className="section-tag">Free Session</span>
          <p className="section-subtitle">
            Experience high-quality tutoring with zero commitment. Book your first session today.
          </p>
        </div>

        <div className="form-card">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            {/* Class */}
            <div className="form-group">
              <label>Class / Grade</label>
              <input
                type="text"
                name="Class"
                placeholder="e.g. Class 10, Grade 12, Engineering"
                value={formData.Class}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label>Phone Number</label>
              <PhoneInput
                country={"in"}
                value={formData.number}
                onChange={(value) => setFormData({ ...formData, number: value })}
                inputStyle={{ width: "100%", height: "48px", fontSize: "1rem", borderRadius: "12px", border: "1.5px solid #d4dae3" }}
              />
            </div>



            {/* Location */}
            <div className="form-group">
              <label>Your Location</label>
              <input
                type="text"
                name="location"
                placeholder="City or area"
                value={formData.location}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
              Book My Free Demo →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
