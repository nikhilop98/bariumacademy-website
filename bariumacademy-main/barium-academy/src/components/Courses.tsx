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
    name: "US Curriculum (K–12, SAT & AP)",
    tagline: "Full K–12 Academic Support · SAT/ACT · AP Exam Prep",
    image: usCurric,
    color: "#1a3a6e",
    overview:
      "Our US Curriculum programs cover all grade levels from Kindergarten through Grade 12, plus comprehensive exam preparation for SAT, ACT, and Advanced Placement (AP) subjects. Whether your child needs foundational support in elementary school, academic enrichment in middle school, college-prep guidance in high school, or intensive coaching for SAT/AP exams, Barium Academy provides personalized, interactive 1-on-1 tutoring for every stage of the American education journey.",
    levels: [
      "Elementary School (Grades K–5, Ages 5–11)",
      "Middle School (Grades 6–8, Ages 11–14)",
      "High School (Grades 9–12, Ages 14–18)",
      "SAT / ACT Exam Preparation",
      "Advanced Placement (AP) Exam Preparation",
    ],
    keyExams: [
      "Digital SAT (1500+ Score Targeted)",
      "ACT (34+ Score Prep)",
      "AP Exams — 15+ Subjects (Scores 4 & 5)",
      "PSAT / NMSQT (National Merit Prep)",
      "Common App & College Essay Support",
    ],
    subjects: [
      "English Language Arts (All Levels)",
      "Mathematics (K–12 — through Calculus)",
      "Biology / Chemistry / Physics",
      "Social Studies, History & Economics",
      "AP Calculus AB/BC, AP Physics, AP Chemistry",
      "AP Computer Science A & Principles",
      "SAT Reading, Writing & Math",
      "Foreign Languages & Electives",
    ],
    whyBarium: "Our US curriculum tutors cover everything from kindergarten foundations to Ivy League exam prep. Every session is tailored to your child’s grade level, school curriculum, and individual goals — with no generic content and no wasted time.",
    learningOutcomes: [
      "Build strong academic foundations from elementary through high school",
      "Achieve the GPA and test scores required for top US university admissions",
      "Score 1500+ on the Digital SAT or 34+ on the ACT",
      "Earn 4s and 5s across AP subjects for university credits",
      "Develop critical thinking, research, and communication skills",
      "Prepare a competitive Common App profile for college admissions",
    ],
    programDetails: [
      {
        title: "Elementary School Tutoring (Grades K–5, Ages 5–11)",
        description: "We build strong academic foundations for young learners across all core subjects. In English Language Arts, we cover reading, comprehension, writing, speaking, and listening — nurturing a lifelong love of language. In Mathematics, sessions progress through number sense, the four operations, fractions, basic geometry, and measurement with age-appropriate, hands-on methods. Science sessions include life, physical, and earth sciences with simple experiments to build curiosity. Social Studies introduces community, geography, civics, and history basics. We also integrate basic computer literacy and digital skills. Weekly exercises and concept checks, along with personalized progress tracking, ensure every young learner grows in literacy, numeracy, critical thinking, creativity, and problem-solving.",
      },
      {
        title: "Middle School Tutoring (Grades 6–8, Ages 11–14)",
        description: "Middle school is a pivotal transition — and our tutors ensure students build the academic confidence they need for high school. In English Language Arts, we develop literary analysis, structured essay writing, and public speaking. In Mathematics, we progress through pre-algebra, Algebra I, geometry, ratios, percentages, and probability. Science sessions cover life, physical, and earth sciences with lab activities and investigations. Social Studies explores U.S. and world history, geography, and civics. We also offer coding basics, creative projects, and technology literacy. Assessment includes topic quizzes, homework review, group project evaluations, and a personalized feedback and learning plan tailored to each student’s needs.",
      },
      {
        title: "High School Tutoring (Grades 9–12, Ages 14–18)",
        description: "High school academic performance directly shapes college admissions outcomes. Our tutors cover the full US high school curriculum: English (literature, essay writing, research, speech and debate), Mathematics from Algebra II and Geometry through Pre-Calculus, Calculus, and Statistics, Sciences including Biology, Chemistry, Physics and Environmental Science with lab-based sessions, and Social Studies (U.S. History, World History, Government, Economics). We also support electives including foreign languages, Computer Science, AI, Robotics, and Arts. Sessions combine concept teaching with timed practice, individualized progress feedback, and a clear improvement roadmap — ensuring students are ready for college-level rigour.",
      },
      {
        title: "SAT / ACT Exam Preparation",
        description: "Designed for high school students in Grades 9–12 aiming for US college admissions, our SAT/ACT programs deliver structured, personalized coaching across every section. For the SAT, we cover Reading, Writing & Language, and Math in depth. For the ACT, we cover English, Math, Reading, and Science. We run exam strategy workshops focusing on time management, question-solving techniques, and elimination strategies. Live problem-solving and interactive review sessions reinforce every skill learned. Assessment includes weekly quizzes, full-length timed mock exams, personalized progress reports highlighting weak areas, and targeted remedial sessions — with an average improvement of 150–200+ points for consistent students.",
      },
      {
        title: "AP Exam Preparation (15+ Subjects)",
        description: "Scoring a 4 or 5 on AP exams is one of the most impactful things a high school student can do for their college application and future university credits. Our AP specialists provide full syllabus coverage with concept-level clarity, multiple-choice strategies, and free-response structuring workshops. For AP Sciences, we prepare students for lab-based practical questions. Past paper analysis, small-group discussions, and live Q&A sessions complete each course. We cover 15+ AP subjects including Calculus AB/BC, Physics 1 & 2, Chemistry, Biology, Computer Science A, English Literature, U.S. History, Psychology, and more. Assessment includes weekly topic quizzes, full AP mock exams, personalized score reports, and an individual improvement roadmap.",
      },
      {
        title: "Optional Add-Ons for All US Programs",
        description: "Every student can enhance their program with: 1-on-1 mentorship and personalized guidance sessions, recorded lessons for self-paced review, a curated past paper portfolio with full worked solutions, a progress tracking dashboard shared with parents, and exam strategy workshops covering timing, question prioritization, and stress management. These add-ons ensure students have everything they need — in and out of sessions — to reach their full academic potential.",
      },
    ],
  },
  {
    id: "uk",
    flag: "🇬🇧",
    name: "UK Curriculum (Primary to A-Level)",
    tagline: "Full KS1–KS5 Support · GCSE · A-Level · Exam Bootcamps",
    image: ukCurric,
    color: "#003087",
    overview:
      "Our UK Curriculum programs cover all levels from Primary school through to A-Level, providing personalised guidance to help students achieve academic excellence at every stage. Whether your child needs support with KS2 SATs preparation, GCSE revision, or A-Level subject mastery for top university applications, our dedicated tutors deliver expert 1-on-1 sessions aligned to AQA, Edexcel, and OCR board specifications. We help every student — from Key Stage 1 to Year 13 — move from their predicted grade to their full potential.",
    levels: [
      "Primary School (KS1 & KS2, Ages 5–11)",
      "Secondary School (KS3, Ages 11–14)",
      "GCSE (KS4, Ages 14–16) — Grade 9 Targeting",
      "A-Level / AS-Level (KS5, Ages 16–18) — A* Prep",
      "UK Exam Bootcamps — GCSE & A-Level Pre-Exam Intensive",
    ],
    keyExams: [
      "KS2 SATs (Year 6)",
      "GCSE 9–1 (AQA, Edexcel, OCR)",
      "A-Level & AS-Level (All Major Boards)",
      "Cambridge IGCSE",
      "UCAS Personal Statement & Oxbridge Preparation",
    ],
    subjects: [
      "English Language & Literature",
      "Mathematics (Foundation & Higher Tier)",
      "Biology / Chemistry / Physics",
      "Combined Science (Trilogy)",
      "History & Geography",
      "Economics & Business Studies",
      "Psychology & Sociology",
      "Computer Science & Computing",
      "French / Spanish / German",
      "Further Mathematics",
    ],
    whyBarium: "Our tutors are specialists in UK board specifications across all key stages. We use past paper diagnostics, examiner report analysis, and mark scheme breakdowns to give students the exact tools they need — from KS2 confidence building to A* at A-Level. Every session is built around your specific exam board and year group.",
    learningOutcomes: [
      "Build strong academic foundations from Primary through to Sixth Form",
      "Achieve Grade 9 at GCSE or A* at A-Level with targeted preparation",
      "Master exam technique and mark scheme language for each board",
      "Develop confidence in challenging topics across all subjects",
      "Receive personalised feedback on coursework and mock exams",
      "Prepare a strong UCAS application backed by excellent predicted grades",
    ],
    programDetails: [
      {
        title: "Primary School Tutoring (Key Stage 1 & 2, Ages 5–11)",
        description: "We build strong literacy and numeracy foundations for young learners across all KS1 and KS2 subjects. English sessions cover reading, writing, comprehension, grammar, and vocabulary — with age-appropriate texts and creative writing prompts that make learning enjoyable. Mathematics sessions work through numbers, the four operations, fractions, geometry, and measurement, with visual methods that build genuine understanding. Science sessions include basic biology, physics, chemistry, and environmental experiments that spark curiosity. We also cover History & Geography (local and world history, map skills), Computing (digital literacy and coding introductions), and Arts & PE. Weekly quizzes, concept checks, and personalized progress tracking ensure every child grows with confidence.",
      },
      {
        title: "Secondary School Tutoring (Key Stage 3, Ages 11–14)",
        description: "Key Stage 3 sets the foundation for GCSE success. Our tutors cover the full KS3 curriculum: English (advanced reading comprehension, essay writing, literary analysis), Mathematics (Algebra, Geometry, Ratio, Probability, Statistics), Science (Biology, Chemistry, Physics with experiments and investigations), History & Geography (UK and world history, geography projects), and Computing & Technology (coding, digital literacy, and programming basics). We also support Arts, Music, and PE. Sessions combine concept teaching with topic-based quizzes, homework review, small-group problem solving, and personalized progress tracking — ensuring students arrive at GCSE already ahead of the curve.",
      },
      {
        title: "GCSE Tutoring & Revision (Key Stage 4, Ages 14–16)",
        description: "GCSE performance shapes university entrance prospects and college options. Our GCSE tutors cover core subjects (English Language & Literature, Maths, Triple and Combined Science) and all optional subjects (History, Geography, Computer Science, Economics, Modern Languages, Psychology, and more). Every session is exam-focused: we break the mark scheme down, walk through past papers step by step, and teach students exactly what examiners want to see. We offer study skill workshops on time management, exam technique, and memorization strategies. Daily mini-tests, topic exercises, full mock exams, personalized performance reports, and targeted remedial sessions ensure students progress from predicted grades to Grade 9 targets.",
      },
      {
        title: "A-Level Tutoring & Revision (Key Stage 5, Ages 16–18)",
        description: "A-Level results are the gateway to top UK universities. Our A-Level specialists provide comprehensive subject coverage across Maths, Physics, Chemistry, Biology, Computer Science, English Literature, Economics, Psychology, and all other subjects. We focus on the skills that distinguish A* students: structured long-form answer writing, stepwise problem-solving for high-difficulty questions, lab-based practical preparation for sciences, and deep pattern recognition through past paper walkthroughs. We prioritize topics by mark weighting, drill the marking scheme language, and provide 1-on-1 mentoring for consistently weak areas. Assessment includes daily topic quizzes, weekly mini-mock tests, full A-Level mock exams under exam conditions, and a personalized predicted grade indicator.",
      },
      {
        title: "UK Exam Bootcamps (GCSE & A-Level Pre-Exam Intensive)",
        description: "In the weeks before GCSE and A-Level exams, our intensive Bootcamp sessions maximize every remaining point of preparation. We run structured subject revision workshops covering the highest-priority topics, exam strategy clinics for multiple-choice, structured response, and essay questions, and timed practice paper sessions under real exam conditions. Small-group problem-solving for tricky topics is combined with targeted guidance on identified weak areas. Assessment includes weekly practice exercises, personalized performance reports with specific improvement guidance, and strategic revision plans for the final exam run-in. Bootcamp students consistently report increased confidence and measurable grade improvement.",
      },
      {
        title: "Optional Add-Ons for All UK Programs",
        description: "Every student can enhance their program with: 1-on-1 mentorship and tailored guidance sessions, recorded lessons and revision resources for self-paced review, a curated past paper portfolio with full worked solutions, a progress tracking dashboard shared with parents, and exam strategy clinics covering timing, question prioritization, and stress management. These add-ons ensure your child has every resource they need — inside and outside of sessions — to achieve their full potential at every key stage.",
      },
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
      "The Leaving Certificate is one of the most points-competitive exams in Europe, with CAO entry cutoffs rising every year. At Barium Academy, we help Irish students navigate every stage — from Junior Cycle foundations to Higher Level Leaving Cert preparation. Our tutors know the exact marking scheme language the State Examinations Commission (SEC) rewards, and we train students to deliver it consistently under timed exam conditions.",
    levels: [
      "Junior Cycle (1st–3rd Year): Foundation & Junior Certificate",
      "Transition Year (4th Year): Enrichment & Early Leaving Cert Prep",
      "Senior Cycle (5th Year): Leaving Cert Core Subject Building",
      "Leaving Cert (6th Year): Higher Level & CAO Points Maximisation",
    ],
    keyExams: [
      "Junior Certificate (Core Subjects)",
      "Leaving Certificate — Higher & Ordinary Level",
      "CAO Points Strategy & Programme Selection",
      "Oral Exams — Irish, French, Spanish, German",
      "Project & Coursework Submissions (Art, Geography, etc.)",
    ],
    subjects: [
      "Maths (Higher Level — Paper 1 & 2)",
      "Irish (Oral, Written & Aural)",
      "English (Comparative, Poetry & Unseen)",
      "Biology / Chemistry / Physics",
      "Business & Economics",
      "Geography & History",
      "French / Spanish / German",
      "Agricultural Science & Home Economics",
    ],
    whyBarium: "Our tutors know precisely what the SEC marking scheme rewards. We train students in the exact language, structure, and timing needed to convert effort into maximum CAO points — giving them a real edge when it matters most.",
    learningOutcomes: [
      "Maximise CAO points across 6 subjects with targeted Higher Level prep",
      "Master marking scheme language and SEC examiner expectations",
      "Build time management skills for long-form exam papers",
      "Achieve H1s and H2s in core subjects for competitive college courses",
      "Prepare confidently for Oral examinations in Irish and Modern Languages",
      "Develop structured essay and problem-solving frameworks for all subjects",
    ],
    programDetails: [
      {
        title: "Junior Cycle (1st–3rd Year, Ages 12–15)",
        description: "The Junior Cycle is the foundation on which Leaving Cert success is built. Our tutors support 1st, 2nd, and 3rd year students across all core subjects — Mathematics, English, Science, Irish, History, Geography, and Business. We ensure students develop genuine conceptual understanding rather than rote learning, building the analytical habits that will pay dividends in Senior Cycle. Preparation includes Junior Certificate exam technique, structured essay writing, and past paper practice to give students a strong result and a confident start to 4th year.",
      },
      {
        title: "Transition Year (4th Year, Age 15–16)",
        description: "Transition Year is a unique opportunity to explore subjects, develop skills, and get ahead on Senior Cycle preparation. Our tutors help TY students use this time productively — whether that's diving into subjects they'll take for Leaving Cert, completing enrichment projects, improving their Maths foundation, or starting early Leaving Cert course content. We also help students with work experience reflection, personal statements, and developing the study habits they'll rely on in 5th and 6th year.",
      },
      {
        title: "Senior Cycle — 5th Year (Building Foundations)",
        description: "5th Year is when Leaving Cert subject choices are locked in and serious study begins. Our tutors work with students to build solid foundations in each chosen subject — covering the full Year 1 course content systematically and ensuring no gaps are left to haunt them in 6th Year. We focus on understanding the marking scheme from day one, developing structured writing habits for English, Maths problem-solving skills for Higher Level, and strong note-making strategies across all subjects.",
      },
      {
        title: "Leaving Cert — 6th Year (CAO Points Maximisation)",
        description: "6th Year is the year that counts. Our specialist tutors provide exam-focused coaching across all Leaving Cert subjects, drilling the exact marking scheme language the SEC rewards and preparing students for the pressure of timed examinations. We cover Maths Higher Level (Paper 1 and 2), English (Comparative Study, Single Text, Poetry, Composition), the Sciences, Business, Economics, Irish, and all Modern Languages. Full-length mock exams, past paper walkthroughs, and weekly performance analysis ensure no mark is left on the table.",
      },
      {
        title: "Oral Exams — Irish, French, Spanish & German",
        description: "Oral examinations account for a substantial portion of the final grade in Irish and Modern Languages — and they are among the most underestimated parts of the Leaving Cert. Our specialist language tutors run structured oral practice sessions weeks before the official exam, covering topic conversations, role-play scenarios, grammar accuracy, pronunciation, and building the natural spoken fluency that examiners reward. Students consistently report that oral preparation was the most valuable part of their language tuition.",
      },
      {
        title: "Optional Add-Ons for All Irish Programs",
        description: "Every student can supplement their program with: 1-on-1 mentorship sessions for exam strategy and CAO application planning, recorded sessions for review, a curated past paper portfolio with detailed worked solutions, a progress tracking dashboard for parents, and intensive exam bootcamp sessions in the weeks leading up to the Leaving Certificate. We also support students applying to TCD, UCD, DCU, UCC, and Maynooth with CAO application guidance and personal statement preparation.",
      },
    ],
  },
  {
    id: "india",
    flag: "🇮🇳",
    name: "Indian Boards & Competitive (JEE / NEET)",
    tagline: "CBSE · ICSE · JEE · NEET — 1-on-1 Expert Tutoring",
    image: indianCurric,
    color: "#ff9933",
    overview:
      "India's education system is among the most competitive in the world. Whether preparing for CBSE or ICSE board exams, cracking JEE for IIT admission, or securing a NEET rank for top medical colleges, the margin for error is tiny. Barium Academy provides 1-on-1 tutoring that bridges the gap between board exam preparation and entrance exam success — helping students build the deep conceptual clarity and problem-solving speed that top ranks demand.",
    levels: [
      "Class 9–10: CBSE / ICSE Foundation & Board Prep",
      "Class 11–12: Board Exams + Entrance Exam Alignment",
      "JEE Main & Advanced Intensive Coaching",
      "NEET UG Medical Entrance Preparation",
      "IB Diploma (HL & SL) — Concurrent Support",
    ],
    keyExams: [
      "CBSE Class 10 & 12 Board Examinations",
      "ICSE / ISC Board Examinations",
      "JEE Main & JEE Advanced (IIT Entrance)",
      "NEET UG (Medical Entrance)",
      "BITSAT, VITEEE & State Engineering Entrances",
      "IB Diploma Programme (IBDP)",
    ],
    subjects: [
      "Mathematics (Calculus, Algebra, Coordinate Geometry)",
      "Physics (Mechanics, Electromagnetism, Optics)",
      "Chemistry (Organic, Inorganic & Physical)",
      "Biology (Botany, Zoology & Genetics)",
      "English (Board Exam & Communication)",
      "Economics & Business Studies",
      "Computer Science (Python & C++)",
      "IB Theory of Knowledge (TOK) & Extended Essay",
    ],
    whyBarium: "Our JEE and NEET specialists bring deep expertise in board-to-entrance bridging — so students never have to choose between high board marks and competitive rank. We align both goals from Class 11 onwards, saving time and reducing burnout.",
    learningOutcomes: [
      "Score 90%+ in CBSE / ICSE boards while building JEE / NEET readiness",
      "Develop the conceptual depth and speed that IIT entrance requires",
      "Master organic chemistry reactions, calculus, and mechanics under timed conditions",
      "Identify and eliminate common error patterns that drop rank",
      "Build a consistent revision schedule that balances board and entrance prep",
      "Achieve NEET scores competitive for government medical college admission",
    ],
    programDetails: [
      {
        title: "Class 9–10: Foundation & Board Preparation (CBSE / ICSE)",
        description: "Class 9 and 10 are critical years that shape the foundation for Class 12 boards and competitive entrance exams. Our tutors support students across all CBSE and ICSE subjects — Mathematics, Science (Physics, Chemistry, Biology), Social Science, English, and Computer Science. We focus on building conceptual understanding, not just completing the syllabus. For Class 10 board students, we shift to exam-focused sessions: CBSE marking scheme training, sample paper drills, step-by-step workings in Maths and Science, and essay technique in English — targeting 90%+ board results.",
      },
      {
        title: "Class 11–12: Board Exams & Entrance Exam Alignment",
        description: "Class 11 and 12 are where board preparation and entrance exam success must coexist. Many students struggle to balance both — our tutors are trained to align them from day one. We cover the full Class 11 and 12 CBSE/ICSE syllabi in Physics, Chemistry, Maths, and Biology while simultaneously building the deeper problem-solving skills and conceptual clarity required for JEE and NEET. Structured chapter maps, time-bound practice, and mock testing ensure both objectives are met without burnout.",
      },
      {
        title: "JEE Main & JEE Advanced Preparation",
        description: "JEE Advanced is one of the toughest entrance exams in the world. Our IIT-experienced tutors begin with a diagnostic of Class 11 and 12 concepts across Physics, Chemistry, and Mathematics. We build a structured plan: conceptual clarity first, followed by problem-solving drills at increasing difficulty. Previous Year Papers (PYPs) are used extensively — training students to spot patterns, manage time for 3-hour sessions, and avoid the negative marking traps that consistently derail rank. Assessment includes weekly quizzes, full-length JEE mock tests, and an individualized improvement roadmap.",
      },
      {
        title: "NEET UG Medical Entrance Preparation",
        description: "NEET requires mastery of Biology, Physics, and Chemistry at a level that goes beyond CBSE boards. Our NEET specialists focus on the 300+ Biology questions that dominate the exam — covering Genetics, Human Physiology, Plant Biology, Ecology, and Evolution in detail. For Chemistry, we drill Organic mechanisms, periodic trends, and chemical bonding. For Physics, we emphasise numerical accuracy and formula application under timed conditions. Regular full-length NEET mock tests, chapter-wise practice, and gap analysis sessions ensure consistent improvement toward a government college rank.",
      },
      {
        title: "IB Diploma Programme (IBDP) Support",
        description: "The IB Diploma is an internationally recognised qualification taken by students ages 16–19. Our tutors support HL and SL students across all six subject groups — from Mathematics Analysis & Approaches to Chemistry HL, Economics, English A, and Theory of Knowledge. We also guide students through their Extended Essay (EE) — a 4,000-word independent research paper — from topic selection and bibliography structure through to final submission. Strong IB scores open doors to universities globally, and our tutors know exactly what the IBO rewards.",
      },
      {
        title: "Optional Add-Ons for All Indian Programs",
        description: "Every student can enhance their program with: 1-on-1 doubt-clearing sessions on specific topics, recorded revision sessions for self-paced review, curated question banks with full worked solutions, weekly performance reports shared with parents, and intensive exam-week revision intensives. We also provide university shortlisting guidance for students applying to IITs, NITs, AIIMS, private engineering and medical colleges, and international universities through UCAS or Common App.",
      },
    ],
  },
  {
    id: "australia",
    flag: "🇦🇺",
    name: "Australian Secondary (ATAR & State Boards)",
    tagline: "95+ ATAR Targeting for VCE, HSC & QCE",
    image: australianCurric,
    color: "#006a4e",
    overview:
      "Achieving a high ATAR in Australia requires more than studying hard — it requires strategic subject selection, an understanding of how scaling works, and mastery of your state's specific exam format. At Barium Academy, our tutors specialise in VCE (Victoria), HSC (New South Wales), and QCE (Queensland), helping students target ATAR scores of 95+ through personalised 1-on-1 sessions, past paper analysis, and tailored revision strategies.",
    levels: [
      "Years 7–10: Foundation Building & Academic Momentum",
      "Year 11: Preliminary / Unit 1&2 Subject Introduction",
      "Year 12: ATAR-Focused VCE / HSC / QCE Final Preparation",
      "School Assessment & SAC / Internal Task Support",
    ],
    keyExams: [
      "VCE Units 3 & 4 External Examinations (Victoria)",
      "HSC Examinations & Internal Assessments (NSW)",
      "QCE External Examinations (Queensland)",
      "WACE Examinations (Western Australia)",
      "SACE (South Australia) & TCE (Tasmania)",
    ],
    subjects: [
      "Mathematical Methods & Specialist Mathematics",
      "Physics & Chemistry",
      "Biology & Environmental Science",
      "English Language, Literature & EAL/D",
      "Economics, Legal Studies & Business Management",
      "History & Geography",
      "Psychology",
      "Software Development & Data Analytics",
    ],
    whyBarium: "Our tutors understand how ATAR scaling works across each state and help students make smart subject choices alongside intensive academic preparation. We align every session to your specific exam board's requirements — so nothing is wasted.",
    learningOutcomes: [
      "Target ATAR 95+ with strategic subject selection and specialist preparation",
      "Master VCE, HSC, or QCE exam format and marking criteria",
      "Build confidence in high-scaling subjects like Maths Methods and Sciences",
      "Achieve top scores in School Assessed Coursework (SACs) and external exams",
      "Develop structured written responses for Humanities and Social Science subjects",
      "Prepare a strong university application backed by a competitive ATAR",
    ],
    programDetails: [
      {
        title: "Years 7–10: Foundation Building & Academic Momentum",
        description: "Strong ATAR results begin with building the right foundations in Years 7–10. Our tutors support secondary students across all core subjects — Mathematics, English, Sciences, History, Geography, and Computing. We focus on developing the study habits, time management skills, and conceptual frameworks that prevent students from feeling overwhelmed when they enter the high-stakes Year 11–12 period. For students who are already struggling in specific subjects, targeted catch-up sessions identify and fill gaps before they compound.",
      },
      {
        title: "Year 11: Preliminary / Unit 1 & 2 Subject Introduction",
        description: "Year 11 (or Units 1 & 2 in VCE) is where students encounter the depth and difficulty of senior secondary study for the first time. Our tutors help students make the adjustment — building subject-specific exam technique, strong note-taking systems, and structured answer-writing habits from the beginning of the year. We also provide subject selection advice to help students choose the courses that will maximise their ATAR scaling and align with their career goals — a decision that makes a measurable difference to the final score.",
      },
      {
        title: "Year 12 VCE (Victoria) — SAC & External Exam Preparation",
        description: "VCE Units 3 & 4 combine School Assessed Coursework (SACs) with end-of-year external examinations. Strong students prepare for both simultaneously — and that's exactly what our tutors enable. We cover Mathematical Methods, Specialist Mathematics, Physics, Chemistry, Biology, English Language, Literature, Psychology, and more. SAC preparation includes assignment feedback and structured response drafting. External exam preparation uses full VCAA past paper practice with Technology-Active and Technology-Free exam technique training.",
      },
      {
        title: "Year 12 HSC (New South Wales) — Internal & External Assessment",
        description: "The HSC combines internal school assessments (weighted at 50%) with external NESA examinations. Our tutors cover Mathematics Advanced and Extension, Physics, Chemistry, Biology, English Advanced, Economics, Legal Studies, and Modern History — providing both continuous assignment and assessment support throughout the year and intensive exam preparation before the final papers. We focus on the structured written responses and extended justification style that HSC markers consistently reward, giving students an edge in every subject.",
      },
      {
        title: "QCE (Queensland) — Internal Assessment & ATAR Exam Support",
        description: "QCE places significantly more weight on internal school-based assessments (75%) than external exams (25%) — meaning consistent preparation throughout the year is critical. Our QCE tutors support students with assignment planning and drafting, research project guidance, extended response writing across Humanities and Social Sciences, and ATAR external exam preparation for Units 3 & 4 in Maths, Sciences, and English. WACE (Western Australia), SACE (South Australia), and TCE (Tasmania) students are equally supported.",
      },
      {
        title: "Optional Add-Ons for All Australian Programs",
        description: "Every student can enhance their program with: subject selection consultation to maximise ATAR scaling, 1-on-1 mentorship for university application and early entry programs, recorded sessions for self-paced review, curated past paper portfolios with full worked solutions, a progress tracking dashboard shared with parents, and pre-exam intensive bootcamp sessions in October–November. We also support students applying to University of Melbourne, Monash, UNSW, University of Sydney, ANU, and other top Australian universities.",
      },
    ],
  },
  {
    id: "programming",
    flag: <i className="fa-solid fa-laptop-code"></i>,
    name: "Tech Accelerator (Coding & AI)",
    tagline: "Python · Web Dev · AI · Data Science · App Development",
    image: programmingCurric,
    color: "#2563eb",
    overview:
      "In today's world, coding is the most valuable skill a student can develop. Whether your child is 8 years old just discovering programming, a teenager preparing for GCSE or A-Level Computer Science, or an older student building a career-ready portfolio, Barium Academy's tech tutors guide every step of the journey. Our sessions are hands-on and project-based — students write real code, build real applications, and develop the problem-solving mindset that top universities and employers look for.",
    levels: [
      "Beginner Block Coding (Ages 8–11): Scratch & Logic Building",
      "Python Foundations (Ages 11–14): Variables, Loops, Functions",
      "Intermediate Programming (Ages 14–17): OOP, Web Dev & Projects",
      "Advanced & Academic (Ages 17+): Algorithms, AI & Exam Prep",
    ],
    keyExams: [
      "AP Computer Science A & Principles",
      "GCSE Computer Science (AQA / OCR)",
      "A-Level Computer Science",
      "IB Computer Science (HL & SL)",
      "Portfolio Preparation for University Applications",
    ],
    subjects: [
      "Python (Beginner to Advanced)",
      "Web Development (HTML, CSS, JavaScript, React)",
      "App Development (iOS / Android / Flutter)",
      "Data Structures & Algorithms (DSA)",
      "Artificial Intelligence & Machine Learning",
      "Data Science & Data Visualisation",
      "Cyber Security & Ethical Hacking",
      "UI/UX Design & Prototyping",
    ],
    whyBarium: "Our tutors are active software developers, data scientists, and engineers — not just teachers. Students learn from real-world practitioners who know exactly what skills universities and employers value, and build projects they can actually show off.",
    learningOutcomes: [
      "Build real, deployable projects for a professional portfolio",
      "Achieve top grades in GCSE, A-Level, or AP Computer Science exams",
      "Develop full-stack web applications or mobile apps from scratch",
      "Understand core algorithms and data structures used in technical interviews",
      "Write clean, readable code with industry-standard practices",
      "Apply AI and Machine Learning tools to solve real-world problems",
    ],
    programDetails: [
      {
        title: "Python Programming (All Levels)",
        description: "Python is the world's most popular programming language and the perfect starting point for beginners. We take students from variables and loops all the way through to Object-Oriented Programming, file handling, APIs, and automation scripts. Each session is project-driven — students might build a calculator, a web scraper, or a data dashboard depending on their level. For exam students (AP CS / GCSE / A-Level), we also cover all required theory and programming concepts from the specification.",
      },
      {
        title: "Web Development (Front-End & Full-Stack)",
        description: "Web development is one of the most in-demand skills in the world. We guide students through the core stack: HTML for structure, CSS for design, and JavaScript for interactivity. More advanced students move into React for front-end development and Node.js or Python Flask for back-end APIs. By the end, students have live, deployed websites they can include in university applications and job portfolios.",
      },
      {
        title: "Data Science, AI & Machine Learning",
        description: "Artificial Intelligence is transforming every industry. Our tutors introduce students to the core concepts of Machine Learning — linear regression, classification, neural networks, and natural language processing — using Python libraries like NumPy, Pandas, Scikit-Learn, and TensorFlow. Students work through real datasets, build prediction models, and learn how to evaluate and interpret results with real-world applications in mind.",
      },
      {
        title: "GCSE / A-Level / AP Computer Science Exam Prep",
        description: "Academic Computer Science exams require strong theoretical knowledge alongside programming ability. We cover all specification topics — algorithms and data structures, computational thinking, computer systems, networks, databases, and programming paradigms — while practising past paper questions and programming challenges. Our students consistently achieve top grades by combining deep understanding with structured exam technique.",
      },
      {
        title: "App Development (iOS, Android & Cross-Platform)",
        description: "Building a mobile app is one of the most impressive projects a student can showcase. Our tutors guide students through app development using Flutter (cross-platform), Swift (iOS), or React Native — from UI design through to back-end logic and deployment. Students who complete this track leave with a real, published app that stands out on any university application or coding competition entry.",
      },
    ],
  },
  {
    id: "languages",
    flag: <i className="fa-solid fa-earth-americas"></i>,
    name: "Foreign Languages",
    tagline: "French · Spanish · German · Mandarin · Arabic & More",
    image: foreignLanguagesCurric,
    color: "#7c3aed",
    overview:
      "Learning a foreign language opens doors to new cultures, better career opportunities, and stronger academic profiles. Whether you're a complete beginner, preparing for an international language exam, building conversational fluency, or supporting a child through GCSE and A-Level Modern Foreign Languages, Barium Academy has native and near-native tutors ready to help. We cover all four skills — reading, writing, listening, and speaking — in every session, ensuring balanced, real-world language development.",
    levels: [
      "Beginner (CEFR A1–A2): Core Vocabulary & Grammar",
      "Intermediate (B1–B2): Conversational Fluency & Writing",
      "Advanced (C1–C2): Academic, Professional & Near-Native",
      "Exam Preparation (DELF, DELE, Goethe, HSK, IELTS)",
      "GCSE / A-Level Modern Foreign Languages",
      "Business & Professional Language Coaching",
    ],
    keyExams: [
      "DELF / DALF (French — Alliance Française)",
      "DELE (Spanish — Instituto Cervantes)",
      "Goethe-Zertifikat (German)",
      "HSK (Mandarin Chinese)",
      "IELTS / TOEFL (English Proficiency)",
      "GCSE & A-Level Modern Foreign Languages",
    ],
    subjects: [
      "French",
      "Spanish",
      "German",
      "Mandarin Chinese",
      "Arabic",
      "Italian",
      "Portuguese",
      "Japanese",
      "Dutch & Swedish",
      "Hindi (for non-native speakers)",
      "English as a Second Language (ESL / EAL)",
      "Irish (Gaeilge)",
    ],
    whyBarium: "All our language tutors are native speakers or have achieved C1/C2 certified proficiency — not just people who studied the language at school. This makes a genuine difference to pronunciation, naturalness of expression, and cultural context that textbooks simply can't teach.",
    learningOutcomes: [
      "Progress confidently through CEFR levels from A1 to C2",
      "Pass international language certification exams (DELF, DELE, Goethe, HSK)",
      "Achieve Grade 9 / A* in GCSE and A-Level Modern Foreign Languages",
      "Hold natural conversations with native speakers without translation lag",
      "Write accurately in your target language for academic or professional contexts",
      "Develop strong listening comprehension for real-world environments",
    ],
    programDetails: [
      {
        title: "French Tutoring (All Levels)",
        description: "Whether preparing for the DELF exam, revising for GCSE or A-Level French, or simply wanting to speak more naturally, our French tutors make the language enjoyable and accessible. Sessions cover grammar structures, reading comprehension, essay writing, and oral practice. We pay special attention to the nuances of French tenses — the subjunctive, conditional, and passé composé — that students traditionally find most challenging.",
      },
      {
        title: "Spanish Tutoring (All Levels)",
        description: "Spanish is one of the most widely spoken languages in the world, and our tutors help students at every stage. For GCSE and A-Level students, we focus on writing quality, oral exam performance, listening comprehension, and translation skills. For general learners, we emphasise spoken fluency and practical vocabulary through structured conversation practice, role plays, and real-world scenarios.",
      },
      {
        title: "German Tutoring (All Levels)",
        description: "German grammar — with its four cases, gendered nouns, and complex sentence structures — intimidates many learners. Our tutors break it down systematically, building confidence step by step. Whether you're working towards Goethe-Zertifikat, preparing for GCSE or A-Level German, or want to reach B2 for university study in Germany or Austria, our tutors have the expertise and patience to get you there.",
      },
      {
        title: "Mandarin Chinese Tutoring",
        description: "Mandarin Chinese is both the hardest and most valuable language a student can learn. Our native Mandarin tutors guide students through tones, Pinyin, character writing (Hanzi), and grammar in a structured, engaging way. Using proven memory techniques for character retention and conversation-first methods for spoken fluency, we help students pass HSK exams and build genuine communication skills in the world's most spoken language.",
      },
      {
        title: "English as a Second Language (ESL / EAL)",
        description: "For students who speak English as an additional language, we provide comprehensive ESL support — covering academic writing, reading comprehension, grammar, vocabulary, and spoken fluency. Our ESL tutors work with students from primary school age through to adults preparing for IELTS or TOEFL examinations. Sessions are tailored to the student's current level and specific goals, whether that's passing an English qualification, succeeding in an English-medium school, or communicating confidently in everyday life.",
      },
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
        title: "Public Speaking, Debate & MUN",
        description: "Confident, persuasive communication is one of the most valuable and most underrated skills a student can develop. Our tutors prepare students for structured debates (British Parliamentary, Lincoln-Douglas), Model United Nations conferences, public speaking competitions, and LAMDA drama and speech examinations. We use the same argument frameworks used in elite debate circles — teaching students to build positions, anticipate counter-arguments, and speak with structure and conviction. These skills translate directly into university interviews, scholarship competitions, and professional life.",
      },
      {
        title: "Creative Writing, Film & Digital Media",
        description: "Our creative arts programs span fiction writing, poetry, screenwriting, short film production, and digital content creation. Students work with experienced writers and filmmakers to develop their unique creative voice, master storytelling structure, and produce portfolio-quality work they can submit to university applications, writing competitions, or share publicly. Film students use tools including Adobe Premiere Pro and DaVinci Resolve to create, edit, and showcase short films. Creative writing students may contribute to our published student anthology.",
      },
      {
        title: "Chess, Strategy & Critical Thinking",
        description: "Chess is one of the most powerful tools for developing strategic thinking, calculation, and patience in young learners. Our chess tutors cover everything from beginner fundamentals to advanced tournament preparation: opening theory (Sicilian, Italian, Queen's Gambit), tactical patterns (forks, pins, skewers, discovered checks), middle-game strategy, and endgame mastery. Elo-style rating improvement is tracked throughout, and students may participate in internal tournaments and external competitions. Chess skills demonstrate focus and analytical intelligence on university applications.",
      },
      {
        title: "University Application & Personal Statement Coaching",
        description: "A strong personal statement or Common App essay can be the deciding factor in a university offer. Our application coaches work 1-on-1 with students to identify their unique story, develop a compelling narrative, and refine their writing through multiple editing cycles. We support UCAS personal statements for UK universities (including Oxbridge), Common App essays for US universities, and applications to Australian, Canadian, and European institutions. Our coaches have helped students gain places at Oxford, Cambridge, Imperial, UCL, Harvard, MIT, and other top universities globally.",
      },
      {
        title: "STEM Clubs, Robotics & Science Olympiads",
        description: "For students who want to go beyond the school curriculum, our STEM enrichment programs provide access to robotics challenges (First LEGO League, VEX Robotics), science Olympiad preparation (Physics, Chemistry, Biology, Mathematics), and engineering design projects. Working with active engineers and scientists, students build real systems, run experiments, and present findings — developing exactly the kind of initiative and intellectual curiosity that top universities reward in admissions decisions.",
      },
      {
        title: "Music, Art & Portfolio Preparation",
        description: "Our arts tutors support students across music theory (ABRSM and Trinity grade exams), instrument coaching (piano, guitar, violin, and more), fine art and portfolio preparation for art school applications, and graphic design fundamentals. For students applying to art and design schools, we provide structured portfolio review sessions, helping them curate, present, and annotate their work to meet the specific expectations of top institutions like the RCA, UAL, Parsons, or RISD.",
      },
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
                <img src={c.image} alt={c.name} loading="eager" decoding="sync" />
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
