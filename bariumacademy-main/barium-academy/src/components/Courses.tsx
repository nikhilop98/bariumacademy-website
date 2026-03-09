import { useState } from "react";

interface Curriculum {
  id: string;
  flag: React.ReactNode;
  name: string;
  tagline: string;
  image: string;
  color: string;
  overview: string;
  levels: string[];
  keyExams: string[];
  subjects: string[];
  whyBarium: string;
}

const curricula: Curriculum[] = [
  {
    id: "us",
    flag: "🇺🇸",
    name: "US Curriculum",
    tagline: "Common Core · AP · SAT · ACT",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=85",
    color: "#1a3a6e",
    overview:
      "The US education system follows Common Core State Standards from K–12, with Advanced Placement (AP) courses offering college-level content in high school. Students typically take the SAT or ACT for college admissions. Our tutors specialise in all grade levels, AP subjects, and test preparation.",
    levels: ["Elementary (K–5)", "Middle School (6–8)", "High School (9–12)", "Advanced Placement (AP)", "SAT / ACT Prep"],
    keyExams: ["SAT", "ACT", "AP Exams (30+ subjects)", "PSAT/NMSQT", "GED"],
    subjects: ["Algebra & Pre-Calculus", "AP Calculus AB/BC", "AP Physics", "AP Chemistry", "AP Biology", "AP English Literature", "AP Computer Science", "US History", "SAT Reading & Writing", "SAT Math"],
    whyBarium: "Our US curriculum tutors are experienced with College Board standards and help students achieve 1400–1600 on the SAT and score 4–5 on AP exams.",
  },
  {
    id: "uk",
    flag: "🇬🇧",
    name: "UK Curriculum",
    tagline: "GCSE · A-Level · 11+ · IGCSE",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=600&q=85",
    color: "#003087",
    overview:
      "The UK National Curriculum covers Key Stages 1–4, culminating in GCSE (General Certificate of Secondary Education) at age 16 and A-Levels at 18. A-Level results determine university admission to leading UK institutions like Oxford, Cambridge, and UCL. We cover all major UK exam boards: AQA, Edexcel, OCR, and WJEC.",
    levels: ["Key Stage 1 (Years 1–2)", "Key Stage 2 (Years 3–6)", "Key Stage 3 (Years 7–9)", "GCSE (Years 10–11)", "A-Level / AS-Level (Years 12–13)", "11+ Entrance Exam"],
    keyExams: ["GCSE (AQA, Edexcel, OCR)", "A-Level / AS-Level", "IGCSE (Cambridge)", "11+ / 13+ Common Entrance", "UKCAT / BMAT (Medicine)"],
    subjects: ["Maths", "Further Maths", "Physics", "Chemistry", "Biology", "English Language & Literature", "Economics", "History", "Geography", "Computer Science", "Psychology"],
    whyBarium: "Our UK tutors are well-versed in all major exam boards (AQA, Edexcel, OCR) and help students consistently achieve A* and A grades in GCSE and A-Level.",
  },
  {
    id: "ireland",
    flag: "🇮🇪",
    name: "Irish Curriculum",
    tagline: "Junior Cert · Leaving Cert · CAO",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=85",
    color: "#169b62",
    overview:
      "The Irish education system is governed by the NCCA (National Council for Curriculum and Assessment). Students complete the Junior Certificate at age 15–16, followed by the Leaving Certificate at 17–18, which determines entry into Irish universities via the CAO (Central Applications Office) points system. Higher, Ordinary, and Foundation level papers are available for most subjects.",
    levels: ["Primary (Junior Infants – 6th Class)", "Junior Cycle (1st–3rd Year)", "Transition Year (Optional)", "Senior Cycle / Leaving Cert (5th–6th Year)"],
    keyExams: ["Junior Certificate", "Leaving Certificate (Higher / Ordinary Level)", "Leaving Certificate Applied (LCA)", "Leaving Certificate Vocational Programme (LCVP)", "CAO Points System"],
    subjects: ["Maths (Higher Level)", "Irish", "English", "Biology", "Chemistry", "Physics", "Accounting", "Business", "Economics", "French / Spanish / German", "History", "Geography"],
    whyBarium: "Our tutors are experienced with the Leaving Certificate marking schemes and help students maximise CAO points for entry into top Irish universities like UCD, Trinity, and UCC.",
  },
  {
    id: "india",
    flag: "🇮🇳",
    name: "Indian Curriculum",
    tagline: "CBSE · ICSE · State Boards · JEE · NEET",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=85",
    color: "#ff9933",
    overview:
      "India's education system covers CBSE (Central Board of Secondary Education), ICSE (Indian Certificate of Secondary Education), and various state boards. Class 10 (SSC/ICSE) and Class 12 (HSC/ISC) board exams are critical milestones. Competitive exams like JEE (engineering) and NEET (medicine) require specialised preparation.",
    levels: ["Primary (Class 1–5)", "Upper Primary (Class 6–8)", "Secondary (Class 9–10)", "Higher Secondary (Class 11–12)", "Competitive Exam Prep"],
    keyExams: ["CBSE Board (Class 10 & 12)", "ICSE / ISC", "JEE Main & Advanced", "NEET UG", "BITSAT", "State Board Exams"],
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Accountancy", "Economics", "Computer Science", "Hindi", "Social Science"],
    whyBarium: "We are based in India and deeply understand the CBSE and ICSE syllabi. Our JEE and NEET specialists have helped students crack top-100 ranks.",
  },
  {
    id: "australia",
    flag: "🇦🇺",
    name: "Australian Curriculum",
    tagline: "ATAR · VCE · WACE · HSC · QCE",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=85",
    color: "#006a4e",
    overview:
      "Australia uses the Australian Curriculum (Years F–10) with state-specific senior secondary programs (Years 11–12) such as VCE (Victoria), HSC (NSW), QCE (Queensland), and WACE (WA). The ATAR (Australian Tertiary Admission Rank) score is used for university entry. Our tutors cover all states and territory-specific syllabi.",
    levels: ["Foundation – Year 6 (Primary)", "Years 7–10 (Secondary)", "Years 11–12 (Senior / ATAR)"],
    keyExams: ["VCE (Victoria)", "HSC (New South Wales)", "QCE (Queensland)", "WACE (Western Australia)", "SACE (South Australia)", "NAPLAN", "ATAR Score"],
    subjects: ["Mathematical Methods", "Specialist Maths", "Physics", "Chemistry", "Biology", "English / English Literature", "Economics", "Psychology", "Legal Studies", "IT & Software Development"],
    whyBarium: "Our tutors excel at subject-specific VCE, HSC, and QCE preparation and have helped students achieve ATARs above 95.",
  },
  {
    id: "programming",
    flag: <i className="fa-solid fa-laptop-code"></i>,
    name: "Programming & Tech",
    tagline: "Python · Web Dev · AI · Data Science",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=85",
    color: "#2563eb",
    overview:
      "Programming is one of the most valuable skills of the 21st century. We offer structured 1-on-1 coding courses for students aged 8 to 18+, covering everything from beginner Scratch to advanced Python, web development, and AI. Courses are structured to build practical, real-world skills alongside academic computer science curricula.",
    levels: ["Scratch (Ages 8–12)", "Python Beginner", "Python Intermediate / Advanced", "Web Development (HTML, CSS, JS)", "Data Science & Machine Learning", "AP Computer Science A / Principles"],
    keyExams: ["AP Computer Science A (Java)", "AP Computer Science Principles", "GCSE / A-Level Computer Science", "Google IT Support Certificate", "Cambridge IGCSE Computer Science"],
    subjects: ["Python", "JavaScript", "HTML & CSS", "React.js", "Java", "C++", "Scratch", "Artificial Intelligence", "Machine Learning", "Data Science (Pandas, NumPy)", "Cyber Security Basics"],
    whyBarium: "Our programming tutors are practising software engineers and CS graduates who go beyond theory — students build real projects from day one.",
  },
  {
    id: "languages",
    flag: <i className="fa-solid fa-earth-americas"></i>,
    name: "Foreign Languages",
    tagline: "French · Spanish · German · Dutch · Swedish",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=85",
    color: "#7c3aed",
    overview:
      "Learning a foreign language opens doors to new cultures, better career prospects, and higher academic achievement. We offer personalised language tutoring for beginners through to exam preparation and business-level fluency. All our language tutors are either native speakers or have achieved C1/C2 level proficiency.",
    levels: ["Beginner (A1–A2)", "Intermediate (B1–B2)", "Advanced (C1–C2)", "Exam Preparation", "Conversational Fluency", "Business / Academic Language"],
    keyExams: ["DELF / DALF (French)", "DELE (Spanish)", "GOETHE-ZERTIFIKAT (German)", "IELTS / TOEFL (English)", "HSK (Mandarin Chinese)", "GCSE / A-Level Modern Foreign Languages"],
    subjects: ["French", "Spanish", "German", "Dutch", "Swedish", "Arabic", "Mandarin Chinese", "Italian", "Portuguese", "Japanese", "Hindi (non-native speakers)", "English as a Second Language (ESL)"],
    whyBarium: "Conversational practice, grammar, writing — we cover all four skills (reading, writing, listening, speaking) with native-level tutors.",
  },
  {
    id: "extracurricular",
    flag: <i className="fa-solid fa-palette"></i>,
    name: "Extra-Curricular",
    tagline: "Debate · Music · Art · Sports Science",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=85",
    color: "#dc2626",
    overview:
      "Academic excellence is only part of a complete education. Our extra-curricular tutors help students develop the skills that universities and employers look for beyond grades — critical thinking, communication, creativity, and leadership. These sessions are especially valuable for students preparing holistic university applications.",
    levels: ["Primary Level (Ages 6–11)", "Secondary Level (Ages 12–16)", "Pre-University (Ages 16–18)", "University Application Support"],
    keyExams: ["LAMDA Examinations (Drama & Speech)", "ABRSM / Trinity (Music)", "Duke of Edinburgh Award", "Debating Competitions", "Model United Nations (MUN)", "Personal Statement / College Essay Coaching"],
    subjects: ["Public Speaking & Debate", "Creative Writing", "Music Theory & Instrument Coaching", "Art & Portfolio Preparation", "Sports Science", "Psychology of Learning", "Study Skills", "University Application & Personal Statement Coaching", "Model United Nations (MUN)", "Financial Literacy"],
    whyBarium: "We help students build well-rounded profiles that impress Oxbridge, Ivy League, and top university admissions teams — beyond just grades.",
  },
];

export default function Courses() {
  const [selected, setSelected] = useState<Curriculum | null>(null);

  return (
    <section id="courses" className="courses-section section">
      <div className="container">
        {/* Header */}
        <div className="subjects-header text-center">
          <span className="section-tag">Our Programmes</span>
          <h2 className="section-title">
            World-Class Tutoring,<br />
            <span style={{ color: "var(--primary)" }}>Every Curriculum Covered</span>
          </h2>
          <p className="section-subtitle">
            From the Indian CBSE to UK A-Levels, US AP exams to coding — our expert tutors
            cover every curriculum, every grade, every goal.
          </p>
        </div>

        {/* Curriculum Cards */}
        <div className="curriculum-grid">
          {curricula.map((c) => (
            <div
              key={c.id}
              className="curriculum-card"
              onClick={() => setSelected(c)}
            >
              <div className="curriculum-card-img">
                <img src={c.image} alt={c.name} loading="lazy" />
                <div className="curriculum-flag">{c.flag}</div>
                <div className="curriculum-overlay" />
              </div>
              <div className="curriculum-card-body">
                <h3 className="curriculum-name">{c.name}</h3>
                <p className="curriculum-tagline">{c.tagline}</p>

                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {c.overview}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                  {c.subjects.slice(0, 3).map((sub, i) => (
                    <span key={i} style={{ fontSize: "0.75rem", background: "var(--light-bg)", color: "var(--text)", padding: "0.2rem 0.5rem", borderRadius: "4px", border: "1px solid var(--border)" }}>
                      {sub}
                    </span>
                  ))}
                  {c.subjects.length > 3 && (
                    <span style={{ fontSize: "0.75rem", color: "var(--primary)", padding: "0.2rem 0.5rem", fontWeight: 600, display: "flex", alignItems: "center" }}>
                      +{c.subjects.length - 3} more
                    </span>
                  )}
                </div>

                <button className="curriculum-explore-btn" style={{ marginTop: "auto" }}>
                  Explore Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="modal-header"
              style={{ background: selected.color }}
            >
              <span className="modal-flag">{selected.flag}</span>
              <div>
                <h2 className="modal-title">{selected.name}</h2>
                <p className="modal-subtitle">{selected.tagline}</p>
              </div>
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal body */}
            <div className="modal-body">
              {/* Overview */}
              <div className="modal-section">
                <h3><i className="fa-solid fa-book-open" style={{ marginRight: "6px" }}></i> Overview</h3>
                <p>{selected.overview}</p>
              </div>

              {/* 3-column details */}
              <div className="modal-cols">
                <div className="modal-col">
                  <h3><i className="fa-solid fa-layer-group" style={{ marginRight: "6px" }}></i> Grade Levels</h3>
                  <ul>
                    {selected.levels.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-col">
                  <h3><i className="fa-solid fa-pen-to-square" style={{ marginRight: "6px" }}></i> Key Exams</h3>
                  <ul>
                    {selected.keyExams.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-col">
                  <h3><i className="fa-solid fa-graduation-cap" style={{ marginRight: "6px" }}></i> Subjects Covered</h3>
                  <ul>
                    {selected.subjects.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Why Barium */}
              <div className="modal-why">
                <span><i className="fa-solid fa-star" style={{ color: "#facc15" }}></i></span>
                <p><strong>Why Barium Academy?</strong> {selected.whyBarium}</p>
              </div>

              {/* CTA */}
              <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                <a
                  href="/registration"
                  className="btn btn-primary btn-lg"
                  onClick={() => setSelected(null)}
                >
                  <i className="fa-regular fa-calendar-check" style={{ marginRight: "6px" }}></i> Book a Free Demo for {selected.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
