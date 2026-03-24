const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// US Revision Notes
const usDoc = new PDFDocument();
usDoc.pipe(fs.createWriteStream(path.join(__dirname, 'public/us-revision-notes.pdf')));

usDoc.fontSize(24).font('Helvetica-Bold').text('US Curriculum Revision Notes', { align: 'center' });
usDoc.moveDown();
usDoc.fontSize(14).font('Helvetica').text('Barium Academy - The Ultimate Guide to SAT & AP Success', { align: 'center', color: 'gray' });
usDoc.moveDown(2);

usDoc.fontSize(18).font('Helvetica-Bold').fillColor('black').text('1. Digital SAT: Evidence-Based Reading Strategies');
usDoc.moveDown(0.5);
usDoc.fontSize(12).font('Helvetica').text('- ALWAYS find the core subject and verb of a sentence before identifying the modifier.');
usDoc.text('- Remember the Top 3 Reading Traps: Extreme Words (never, always), Out of Scope, and Half-Right / Half-Wrong.');
usDoc.text('- Vocabulary in Context: Cover the proposed word with your finger. Guess your own simple word first, then find the closest match in the options.');
usDoc.moveDown();

usDoc.fontSize(18).font('Helvetica-Bold').text('2. Digital SAT: Math Shortcuts');
usDoc.moveDown(0.5);
usDoc.fontSize(12).font('Helvetica').text('- DESMOS is your greatest tool. Learn how to plug in linear equations and systems to find intersecting coordinates immediately.');
usDoc.text('- The "Plug-In" method: When you see variables in the question AND in the answer choices, plug in simple numbers (like x=2, y=3) to easily bypass algebra.');
usDoc.text('- Percentages: To increase by 15%, multiply by 1.15. To decrease by 20%, multiply by 0.80.');
usDoc.moveDown();

usDoc.fontSize(18).font('Helvetica-Bold').text('3. AP Exams: FRQ & DBQ Grading Rubrics');
usDoc.moveDown(0.5);
usDoc.fontSize(12).font('Helvetica').text('- AP STEM FRQs: Always show units in your final answer. The College Board rubric explicitly deducts points for missing units, even if the math is perfect.');
usDoc.text('- AP Humanities DBQs: The thesis must be explicitly stated in the introduction AND conclusion. It cannot simply restate the prompt; it must establish a clear line of reasoning.');
usDoc.text('- Sourcing in DBQs: Remember HIPP (Historical Context, Intended Audience, Purpose, Point of View). Use at least one of these for 3+ documents.');

usDoc.end();


// UK Revision Notes
const ukDoc = new PDFDocument();
ukDoc.pipe(fs.createWriteStream(path.join(__dirname, 'public/uk-revision-notes.pdf')));

ukDoc.fontSize(24).font('Helvetica-Bold').text('UK Curriculum Revision Notes', { align: 'center' });
ukDoc.moveDown();
ukDoc.fontSize(14).font('Helvetica').text('Barium Academy - Essential Checklists for GCSE & A-Level Mastery', { align: 'center', color: 'gray' });
ukDoc.moveDown(2);

ukDoc.fontSize(18).font('Helvetica-Bold').fillColor('black').text('1. A-Level Sciences: 6-Marker Frameworks');
ukDoc.moveDown(0.5);
ukDoc.fontSize(12).font('Helvetica').text('- Do NOT write a giant paragraph. Examiners prefer bullet points as they scan for specific "keywords" on their marking scheme.');
ukDoc.text('- Command word "Evaluate": Give advantages AND disadvantages, then a justified conclusion. If you miss the conclusion, you forfeit the final marking band.');
ukDoc.text('- Command word "Describe": Say what you see in the graph or data. Do NOT explain why it happens unless asked to "Explain".');
ukDoc.moveDown();

ukDoc.fontSize(18).font('Helvetica-Bold').text('2. GCSE Maths & Further Maths: Calculation Steps');
ukDoc.moveDown(0.5);
ukDoc.fontSize(12).font('Helvetica').text('- "Show that" questions: Start with the left-hand side and manipulate it to equal the right-hand side. Do not start by assuming they are equal.');
ukDoc.text('- Even if you use a calculator, ALWAYS write down the formula you are using and substitute the numbers on paper before hitting equals. Examiners award method marks (M1) even if the final answer (A1) is wrong due to a typo.');
ukDoc.moveDown();

ukDoc.fontSize(18).font('Helvetica-Bold').text('3. A-Level Humanities: Essay Structure (AQA / Edexcel)');
ukDoc.moveDown(0.5);
ukDoc.fontSize(12).font('Helvetica').text('- The PEEL structure (Point, Evidence, Explanation, Link) remains the gold standard for high A* bands.');
ukDoc.text('- Evaluative Language: Use words like "significantly," "fundamentally," or "to a limited extent" within every paragraph to satisfy the Assessment Objective 3 (AO3) requirement for analysis.');

ukDoc.end();

console.log('PDFs generated successfully.');
