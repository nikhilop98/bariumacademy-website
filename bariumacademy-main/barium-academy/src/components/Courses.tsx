import { useState } from "react";
import { useNavigate } from "react-router-dom";
import foreignLanguagesCurric from "../assets/foreign_languages_curriculum.png";
import usCurric from "../assets/us_curriculum.png";
import ukCurric from "../assets/uk_curriculum.png";
import irishCurric from "../assets/irish_curriculum.png";
import indianCurric from "../assets/indian_curriculum.png";
import australianCurric from "../assets/australian_curriculum.png";
import programmingCurric from "../assets/programming_curriculum.png";
import extraCurric from "../assets/extracurricular_curriculum.png";

export interface ProgramDetail {
  title: string;
  description: string;
}

export interface Curriculum {
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
  learningOutcomes?: string[];
  programDetails?: ProgramDetail[];
}

export const curricula: Curriculum[] = [
  {
    id: "us",
    flag: "🇺🇸",
    name: "US Elite Prep (SAT & AP)",
    tagline: "1500+ SAT Strategy & Ivy League Admission Targets",
    image: usCurric,
    color: "#1a3a6e",
    overview:
      "Gaining admission to Ivy League and Top 50 US universities demands more than high grades—it requires a holistic profile anchored by elite test scores. Engineered after PrepScholar and Magoosh test methodologies, our US track blends continuous adaptive diagnostics with descriptive drill analytics for the Digital SAT and ACT. We align perfectly with state College Board setups to secure weighted GPA advantages and AP Course Level 5 goals that set applicants apart uniformly inside selective admission tiers.",
    levels: [
      "Grade 9–10: PSAT Merit & Foundation",
      "Grade 11: Digital SAT / ACT Intensive",
      "Grade 12: Application Support & Essays",
      "Advanced Placement (AP) Prep",
      "Diagnostic Assessment Intervals"
    ],
    keyExams: [
      "Digital SAT (1500+ Score Targeted)",
      "AP Exams (STEM & Humanities core)",
      "ACT (34+ Speed Benchmarks)",
      "PSAT/NMSQT (National Merit Scholarship Preparation)"
    ],
    subjects: [
      "AP Calculus AB/BC",
      "AP Physics 1 & C",
      "AP Chemistry / Biology",
      "AP Computer Science A",
      "SAT Reading evidence-based logic",
      "SAT Quantitative mental math drills"
    ],
    whyBarium: "Formulated after high-tier US test prep analytics, our advisors teach students to eliminate reading bias traps and deploy mental algebra shortcuts that guarantee score growth in under 3 months.",
    learningOutcomes: [
      "Target absolute top score growth (1500+ SAT / 34+ ACT)",
      "Secure high score weight absolute guarantees for 4 or 5 on AP Exams",
      "Unlock analytical strategies College Board graders formally demand",
      "Establish descriptive application benchmarks for Ivy and Tier-1 colleges"
    ],
    programDetails: [
      {
        title: "How Our SAT & ACT Program Works",
        description: "Your journey starts with a full-length digital baseline diagnostic to assess your starting score and pacing. Our Elite Prep faculty then crafts a 12-week or 24-week targeted strategy focusing strictly on your vulnerabilities. During live 1-on-1 sessions, we drill high-yield topics, emphasizing mental math shortcuts for the Quantitative section and strict bias-elimination tactics for Evidence-Based Reading. Real College Board and ACT mock tests are used in timed intervals to guarantee exam-day confidence."
      },
      {
        title: "Advanced Placement (AP) Curriculum Details",
        description: "Scoring a 5 is crucial for elite university credits. Our AP specialists work in tandem with your high school syllabus to ensure your GPA stays flawless during the year. In the spring, we pivot seamlessly into rigorous exam review. You will be trained extensively on Free Response Question (FRQ) and Document-Based Question (DBQ) grading rubrics employed directly by College Board—learning exactly what buzzwords, formulas, and frameworks the examiners demand to see for top marks."
      }
    ]
  },
  {
    id: "uk",
    flag: "🇬🇧",
    name: "UK Board Mastery (GCSE & A-Level)",
    tagline: "A* / Grade 9 prep for AQA, Edexcel & OCR",
    image: ukCurric,
    color: "#003087",
    overview:
      "The UK system rewards deep subject mastery. Engineered after continuous linear diagnostic dashboards like PMT and ExamPapersPlus, our tutors specialise in predicting exam mechanics, syllabus linear splits, and examiner checklist targeting for GCSE and A-level modules directly to secure absolute A* conversion metrics.",
    levels: ["Pre-GCSE Foundation", "GCSE 9-1 Category", "A-Level / AS-Level (Year 12-13)", "UK Board linear split alignment"],
    keyExams: ["GCSE (Grade 9 targeting)", "A-Level / AS-Level (A* guidelines)", "IGCSE (Cambridge)", "AQA / Edexcel / OCR Boards"],
    subjects: ["Calculus & Further Maths", "Physics", "Chemistry", "Biology", "English Literature (6-marker drills)", "Economics", "History", "Computer Science"],
    whyBarium: "Utilising top UK tutoring methodology, our students operate with linear examiner checklists breaking down points structure for direct A* grade conversion.",
    learningOutcomes: [
      "Target Grade 9 in GCSEs and A* for A-Level certifications",
      "Absorb deep linear depth specifications safely over cramming",
      "Review past paper questions with specific examiners assessment nodes",
      "Prepare holistic study cards detailing core specification rules"
    ],
  },
  {
    id: "ireland",
    flag: "🇮🇪",
    name: "Irish Mastery (Leaving Cert & CAO)",
    tagline: "Maximise CAO Points & Higher Level Grades",
    image: irishCurric,
    color: "#169b62",
    overview:
      "The Leaving Certificate points structure rewards absolute grading alignment. Structured after top-tier boutique Grinds Academy methodologies, we specialise in past paper diagnostics, marking scheme breakdowns, and exam time management for Higher Level papers to give students a direct path into TCD or UCD guidelines safely.",
    levels: ["Junior Cycle (1st-3rd Year)", "Transition Year (Optional)", "Senior Cycle / Leaving Cert (5th-6th Year)", "Higher Level Specific coaching"],
    keyExams: ["Junior Certificate", "Leaving Certificate (Higher Level focus)", "CAO Points strategy breakdowns"],
    subjects: ["Maths (Higher Level)", "Irish", "English", "Biology / Chemistry / Physics", "Business", "Economics", "French / Spanish / German", "History"],
    whyBarium: "Our tutors are equipped with the exact Leaving Cert marking criteria, converting effort into maximum CAO points safely.",
    learningOutcomes: [
      "Maximise total CAO points coefficients for university entrance",
      "Formulate highly diagnostic Higher Level time pacing loops",
      "Interpret official tagging guidelines without reading loads",
      "Secure robust pathways into TCD and UCD requirements safely"
    ],
  },
  {
    id: "india",
    flag: "🇮🇳",
    name: "Indian Boards & Competitive (JEE / NEET)",
    tagline: "Class 12 Rigor and Speed Accuracy metrics",
    image: indianCurric,
    color: "#ff9933",
    overview:
      "India's core board structure and entrance metrics require extreme analytical speed. Framed along side elite coaching models parallel to boutique competitive setups, our courses map Class 11-12 grids to competitive test metrics applying intensive continuous assessment drills parallel to CBSE guidelines seamlessly.",
    levels: ["Class 9–10 foundations / IGCSE", "Class 11–12 boards support / IB Diploma", "Competitive Exam Intensive Setup"],
    keyExams: ["CBSE / ICSE Board (Class 10 & 12)", "IB Diploma Programme (IBDP)", "Cambridge IGCSE", "JEE Main & Advanced Prep", "NEET UG Medical", "BITSAT / State boards"],
    subjects: ["Mathematics (Advanced Level)", "Physics (Dynamics Visualised)", "Chemistry (Organic Diagnostics)", "Biology", "English", "Economics", "Computer Science", "IB TOK & Extended Essay"],
    whyBarium: "We manage multiple JEE and NEET specialists alongside top CBSE coaches to convert rigorous benchmarks into top-tier university rankings.",
    learningOutcomes: [
      "Master high-speed accuracy triggers for absolute scoring loads",
      "Bridge Class 12 board preparations with entrance diagnostics",
      "Avoid common calculation triggers that drop relative ranking",
      "Unlock analytic confidence breaking down complex organic diagnostics"
    ],
  },
  {
    id: "australia",
    flag: "🇦🇺",
    name: "Australian Secondary (ATAR & State Boards)",
    tagline: "95+ ATAR performance metrics for VCE, HSC & QCE",
    image: australianCurric,
    color: "#006a4e",
    overview:
      "High ATAR yields rely heavily on subject scaling weights. Formulated after boutique ATAR scaling analytics from high-end Australian coaching clinics, we assist students with mastering state metrics (VCE, HSC, QCE) with intensive mock intervals and descriptive answer breakdowns for top percentile targeting.",
    levels: ["Middle School (Years 7–10 foundations)", "Senior Years 11–12 (ATAR scaling support)"],
    keyExams: ["VCE (Victoria State)", "HSC (New South Wales)", "QCE (Queensland prep)", "State specific ATAR analytics"],
    subjects: ["Mathematical Methods", "Specialist Maths", "Physics & Dynamics", "Chemistry", "Biology", "English Literature", "Economics & Legal analytics"],
    whyBarium: "Aligned with top coaching outcomes across Australia, our tutors help students leverage scaling benefits to consistently target ATAR over 95.",
    learningOutcomes: [
      "Maintain absolute ATAR guidelines sitting over 95 metrics",
      "Safeguard scaling weights mapping suitable HSC/VCE courses",
      "Review descriptive mark breakdowns simulating state timelines",
      "Overcome numerical gaps inside Mathematical Method disciplines"
    ],
  },
  {
    id: "programming",
    flag: <i className="fa-solid fa-laptop-code"></i>,
    name: "Tech Accelerator (Coding & AI)",
    tagline: "Build Python, Web React, and AI interfaces from day zero",
    image: programmingCurric,
    color: "#2563eb",
    overview:
      "Programming is the ultimate analytical accelerator. We transition students aged 8-18 from block-based setups to full functional programming tools (Python, React) for data analysis and AP Computer Science curricula.",
    levels: ["Visual Logic (Ages 8-12)", "Python foundations", "Intermediate / Advanced (Functions & OOP)", "AP Computer Science setup"],
    keyExams: ["AP Computer Science A", "GCSE / A-Level Computer Science", "Industry Recognised Analytics Benchmarks"],
    subjects: [
      "Python Intensive", "Web Development (React/JS/Node)", "App Development (iOS/Android)",
      "Data Structures & Algorithms (DSA)", "Artificial Intelligence (AI)", 
      "Data Science & Machine Learning", "Cyber Security", "UI/UX Design"
    ],
    whyBarium: "Guided by active professionals, kids build full repository items and automated trackers from scratch rather than just reading guidelines.",
    learningOutcomes: [
      "Deploy custom projects to a portfolio dashboard repository",
      "Master complete React structures or Python OOP structures",
      "Develop algorithm design logic to secure top AP CS scores",
      "Learn automation scripting targeting daily task management"
    ],
  },
  {
    id: "languages",
    flag: <i className="fa-solid fa-earth-americas"></i>,
    name: "Foreign Languages",
    tagline: "French · Spanish · German · Dutch · Swedish",
    image: foreignLanguagesCurric,
    color: "#7c3aed",
    overview:
      "Learning a foreign language opens doors to new cultures, better career prospects, and higher academic achievement. We offer personalised language tutoring for beginners through to exam preparation and business-level fluency. All our language tutors are either native speakers or have achieved C1/C2 level proficiency.",
    levels: ["Beginner (A1–A2)", "Intermediate (B1–B2)", "Advanced (C1–C2)", "Exam Preparation", "Conversational Fluency", "Business / Academic Language"],
    keyExams: ["DELF / DALF (French)", "DELE (Spanish)", "GOETHE-ZERTIFIKAT (German)", "IELTS / TOEFL (English)", "HSK (Mandarin Chinese)", "GCSE / A-Level Modern Foreign Languages"],
    subjects: ["French", "Spanish", "German", "Dutch", "Swedish", "Arabic", "Mandarin Chinese", "Italian", "Portuguese", "Japanese", "Hindi (non-native speakers)", "English as a Second Language (ESL)"],
    whyBarium: "Conversational practice, grammar, writing — we cover all four skills (reading, writing, listening, speaking) with native-level tutors.",
    learningOutcomes: [
      "Target CEFR (A1-C2) business fluency or exam proficiency",
      "Perform with accent suppression coaching natively on day zero",
      "Engage directly with global grammar speeds without translation lag",
      "Enhance live speed response metrics covering IELTS / DELE grids"
    ],
  },
  {
    id: "extracurricular",
    flag: <i className="fa-solid fa-palette"></i>,
    name: "Extra-Curricular",
    tagline: "Debate · Music · Art · Sports Science",
    image: extraCurric,
    color: "#dc2626",
    overview:
      "Academic excellence is only part of a complete education. Our extra-curricular tutors help students develop the skills that universities and employers look for beyond grades — critical thinking, communication, creativity, and leadership. These sessions are especially valuable for students preparing holistic university applications.",
    levels: ["Primary Level (Ages 6–11)", "Secondary Level (Ages 12–16)", "Pre-University (Ages 16–18)", "University Application Support"],
    keyExams: ["LAMDA Examinations (Drama & Speech)", "ABRSM / Trinity (Music)", "Duke of Edinburgh Award", "Debating Competitions", "Model United Nations (MUN)", "Personal Statement / College Essay Coaching", "International Science Olympiads", "FIDE Chess Rating Prep", "First LEGO League & Robotics Challenges"],
    subjects: [
      "Public Speaking & Debate", "Creative Writing", "Music Theory & Instrument Coaching",
      "Art & Portfolio Preparation", "Sports Science", "Psychology & Wellness",
      "Study Skills", "Model United Nations (MUN)", "Financial Literacy",
      "Robotics, Drone & STEM Clubs", "Entrepreneurship & Startup Incubator",
      "Chess & Strategic Problem Solving", "Vedic Math & Mental Aptitude",
      "Filmmaking & 3D Animation", "Leadership & Active Communication"
    ],
    whyBarium: "We help students build well-rounded profiles that impress Oxbridge, Ivy League, and top university admissions teams — beyond just grades.",
    learningOutcomes: [
      "Format holistic profiles for Ivy League/Oxbridge benchmarks",
      "Optimize critical public debate frameworks inside MUN intervals",
      "Complete creative music theory and portfolio timelines flawlessly",
      "Build continuous financial literacy and college essay structures",
      "Master advanced logic through strategic gaming and robotics coding"
    ],
    programDetails: [
      {
        title: "Building the Ultimate Portfolio",
        description: "Admissions teams at Tier-1 universities look for more than academic grades; they look for impact. Our non-academic tutors help students incubate their own startup ideas, code full robotics architectures, or write award-winning creative pieces that stand out wildly on the Common App and UCAS applications."
      },
      {
        title: "Communication & Public Leadership",
        description: "Whether preparing for LAMDA speech exams, managing Model UN conferences, or pitching an entrepreneurial idea, we train students rigorously in persuasive speaking. We use the same presentation frameworks taught at elite international consulting firms, building untouchable confidence at a young age."
      }
    ]
  },
];

export default function Courses() {
  const navigate = useNavigate();

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
            From UK A-Levels to US AP exams, coding to the Indian CBSE — our expert tutors
            cover every curriculum, every grade, every goal.
          </p>
        </div>

        {/* Curriculum Cards */}
        <div className="curriculum-grid">
          {curricula.map((c) => (
            <div
              key={c.id}
              className="curriculum-card"
              onClick={() => navigate(`/curriculum/${c.id}`)}
            >
              <div className="curriculum-card-img">
                <img src={c.image} alt={c.name} loading="lazy" />
                <div className="curriculum-flag">{c.flag}</div>
                <div className="curriculum-overlay" />
              </div>
              <div className="curriculum-card-body">
                <h3 className="curriculum-name">{c.name}</h3>
                <p className="curriculum-tagline" style={{ marginBottom: "1.5rem" }}>{c.tagline}</p>

                <button className="curriculum-explore-btn" style={{ marginTop: "auto" }}>
                  Explore Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
