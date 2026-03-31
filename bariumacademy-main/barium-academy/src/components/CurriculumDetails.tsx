import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { curricula } from "./Courses";
import SEO from "./SEO";

export default function CurriculumDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const selected = curricula.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!selected) {
    return (
      <main style={{ padding: "120px 0 6rem", textAlign: "center", background: "var(--light-bg)", minHeight: "100vh" }}>
        <div className="container">
          <h2 className="section-title">Program Not Found</h2>
          <p className="section-subtitle">The curriculum you are looking for does not exist or has been moved.</p>
          <button className="btn btn-primary" onClick={() => navigate("/#courses")} style={{ marginTop: "2rem" }}>
            Return to Programs
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <SEO 
        title={`${selected.name} | Expert Tutoring & Curriculum Prep | Barium Academy`}
        description={`Comprehensive ${selected.name} preparation: ${selected.tagline}. Specialized tutors for all levels and key exams.`}
        canonical={`/curriculum/${selected.id}`}
      />
      <main className="curriculum-details-page" style={{ padding: "100px 0 2rem", background: "var(--light-bg)", minHeight: "100vh", overflowX: "hidden", width: "100%" }}>
        <div className="container" style={{ maxWidth: "1100px", padding: "0 1.25rem" }}>
        
        {/* Main Content Box */}
        <div style={{ background: "white", borderRadius: "16px", overflow: "hidden", marginBottom: "1.5rem", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", width: "100%" }}>
          
          {/* Hero Header */}
          <div style={{ background: selected.color, padding: "2rem 1.5rem", color: "white", display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "3.5rem", background: "rgba(255,255,255,0.15)", padding: "1rem", borderRadius: "16px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              {selected.flag}
            </span>
            <div style={{ flex: 1, minWidth: "250px" }}>
              <h1 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900, margin: 0, letterSpacing: "-0.5px", lineHeight: 1.2 }}>{selected.name}</h1>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", fontWeight: 500, margin: "0.4rem 0 0", lineHeight: 1.4 }}>{selected.tagline}</p>
            </div>
            <div>
              <button
                className="btn btn-primary"
                style={{ background: "white", color: selected.color, fontWeight: 800, padding: "1rem 2rem", fontSize: "1.1rem" }}
                onClick={() => navigate("/registration")}
              >
                Enroll Now
              </button>
            </div>
          </div>
          
          {/* Content Body */}
          <div style={{ padding: "1.5rem" }}>
            {/* Overview */}
            <div className="modal-section" style={{ marginBottom: "1.5rem", padding: 0, border: "none", boxShadow: "none", background: "transparent" }}>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}><i className="fa-solid fa-book-open" style={{ marginRight: "8px" }}></i> Overview</h3>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.6, textAlign: "left", margin: 0 }}>{selected.overview}</p>
            </div>

            {/* 3-column details */}
            <div className="modal-cols">
              <div className="modal-col" style={{ background: "var(--light-bg)" }}>
                <h3><i className="fa-solid fa-layer-group" style={{ marginRight: "6px" }}></i> Grade Levels</h3>
                <ul>
                  {selected.levels.map((l) => (
                    <li key={l} style={{ fontSize: "0.95rem" }}>{l}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-col" style={{ background: "var(--light-bg)" }}>
                <h3><i className="fa-solid fa-pen-to-square" style={{ marginRight: "6px" }}></i> Key Exams</h3>
                <ul>
                  {selected.keyExams.map((e) => (
                    <li key={e} style={{ fontSize: "0.95rem" }}>{e}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-col" style={{ background: "var(--light-bg)" }}>
                <h3><i className="fa-solid fa-graduation-cap" style={{ marginRight: "6px" }}></i> Subjects</h3>
                <ul>
                  {selected.subjects.map((s) => (
                    <li key={s} style={{ fontSize: "0.95rem" }}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Program Details */}
            {selected.programDetails && (
              <div className="modal-section" style={{ marginTop: "2rem", padding: 0, border: "none", boxShadow: "none", background: "transparent" }}>
                <h3 style={{ marginBottom: "1.5rem", fontSize: "1.4rem" }}>
                  <i className="fa-solid fa-chalkboard-user" style={{ marginRight: "8px" }}></i> Detailed Course Sessions
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {selected.programDetails.map((detail, idx) => (
                    <div key={idx} style={{ background: "var(--light-bg)", padding: "1.5rem", borderRadius: "12px", borderLeft: `6px solid ${selected.color}` }}>
                      <h4 style={{ color: "var(--text)", fontSize: "1.15rem", marginBottom: "0.5rem", fontWeight: 800, lineHeight: 1.3 }}>{detail.title}</h4>
                      <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>{detail.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Learning Outcomes */}
            {selected.learningOutcomes && (
              <div className="modal-section" style={{ marginTop: "2rem", padding: 0, border: "none", boxShadow: "none", background: "transparent" }}>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}><i className="fa-solid fa-circle-check" style={{ marginRight: "8px", color: "#22c55e" }}></i> Key Learning Outcomes</h3>
                <ul style={{ paddingLeft: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", margin: 0 }}>
                  {selected.learningOutcomes.map((o) => (
                    <li key={o} style={{ fontSize: "1rem", color: "#4b5563", position: "relative", paddingLeft: "1.5rem", lineHeight: 1.5, fontWeight: 500 }}>
                       <span style={{ position: "absolute", left: 0, top: "2px", color: "#22c55e", fontWeight: "bold" }}>✓</span> {o}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Why Barium */}
            <div className="modal-why" style={{ marginTop: "2rem", padding: "1.5rem", borderRadius: "12px" }}>
              <span><i className="fa-solid fa-star" style={{ color: "#facc15" }}></i></span>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.5, margin: 0 }}><strong>Why Barium Academy?</strong><br/>{selected.whyBarium}</p>
            </div>

          </div>
        </div>

        {/* Action Bottom */}
        <div style={{ textAlign: "center", marginTop: "2rem", paddingBottom: "1rem" }}>
          <h2 style={{ marginBottom: "1rem", fontSize: "clamp(1.5rem, 4vw, 2.2rem)", lineHeight: 1.3 }}>Ready to Excel in {selected.name}?</h2>
          <button
            className="btn btn-primary btn-lg custom-shadow-btn"
            style={{ background: selected.color, borderColor: selected.color, padding: "1.2rem 3rem", fontSize: "1.2rem" }}
            onClick={() => navigate("/registration")}
          >
            <i className="fa-regular fa-calendar-check" style={{ marginRight: "8px" }}></i> Book a Free Demo Today
          </button>
          <div style={{ marginTop: "2rem" }}>
             <button onClick={() => navigate(-1)} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontWeight: 600, fontSize: "1rem" }}>
               <i className="fa-solid fa-arrow-left" style={{ marginRight: "6px" }}></i> Back to Curricula
             </button>
          </div>
        </div>

      </div>
    </main>
    </>
  );
}
