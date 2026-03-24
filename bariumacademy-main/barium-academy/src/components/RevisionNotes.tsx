import { useEffect } from "react";

export default function RevisionNotes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resources = [
    {
      title: "US Curriculum (SAT & AP)",
      desc: "Comprehensive SAT grammar rules, mental math shortcuts, and AP FRQ grading rubrics mapped directly to College Board expectations.",
      icon: "🇺🇸",
      file: "us-revision-notes.pdf",
    },
    {
      title: "UK Curriculum (GCSE & A-Level)",
      desc: "AQA, OCR, and Edexcel specific examiner checklists, core definitions, and '6-marker' essay structural templates for absolute A* prep.",
      icon: "🇬🇧",
      file: "uk-revision-notes.pdf",
    }
  ];

  return (
    <main className="revision-notes-page" style={{ padding: "130px 0 6rem", background: "var(--light-bg)", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-tag" style={{ background: "rgba(37, 99, 235, 0.1)", color: "var(--primary)", padding: "0.5rem 1rem", borderRadius: "50px", fontWeight: 800, fontSize: "0.9rem" }}>Free Downloads</span>
          <h1 className="section-title" style={{ marginTop: "1rem" }}>Premium Revision Notes</h1>
          <p className="section-subtitle" style={{ margin: "1rem auto 0", maxWidth: "600px", fontSize: "1.1rem", lineHeight: 1.6 }}>
            Gain direct access to our expert-crafted revision guides, formulas, and examiner checklists specifically aligned to top UK and US grading rubrics.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
          {resources.map((res, i) => (
            <div key={i} style={{ background: "white", padding: "3rem 2rem", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.06)", border: "1px solid var(--border)", textAlign: "center", transition: "transform 0.3s ease", cursor: "default" }}>
               <div style={{ fontSize: "4rem", marginBottom: "1rem", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}>{res.icon}</div>
               <h3 style={{ fontSize: "1.5rem", color: "var(--text)", fontWeight: 800, marginBottom: "0.75rem", letterSpacing: "-0.5px" }}>{res.title}</h3>
               <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "2.5rem" }}>{res.desc}</p>
               
               {/* Make sure href path targets public root /bariumacademy (if serving from subpath) or let vite handle absolute path if using standard react-router */}
               <a href={`/bariumacademy/${res.file}`} download className="btn btn-primary custom-shadow-btn" style={{ width: "100%", padding: "1rem", fontSize: "1.1rem" }}>
                 <i className="fa-solid fa-file-pdf" style={{ marginRight: "10px" }}></i> Download PDF
               </a>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
