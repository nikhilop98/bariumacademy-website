const fs = require('fs');
const path = require('path');

const operations = [
  { src: "C:\\Users\\HP\\.gemini\\antigravity\\brain\\6940eb3d-2144-4a9e-bbf0-afa027c606c8\\us_curriculum_card_boy_1773764641910.png", dest: "us_curriculum.png" },
  { src: "C:\\Users\\HP\\.gemini\\antigravity\\brain\\6940eb3d-2144-4a9e-bbf0-afa027c606c8\\uk_curriculum_card_v2_1773764445122.png", dest: "uk_curriculum.png" },
  { src: "C:\\Users\\HP\\.gemini\\antigravity\\brain\\6940eb3d-2144-4a9e-bbf0-afa027c606c8\\irish_curriculum_card_v2_1773764467198.png", dest: "irish_curriculum.png" },
  { src: "C:\\Users\\HP\\.gemini\\antigravity\\brain\\6940eb3d-2144-4a9e-bbf0-afa027c606c8\\indian_curriculum_card_v2_1773764494525.png", dest: "indian_curriculum.png" },
  { src: "C:\\Users\\HP\\.gemini\\antigravity\\brain\\6940eb3d-2144-4a9e-bbf0-afa027c606c8\\australian_curriculum_card_v2_1773764517013.png", dest: "australian_curriculum.png" },
  { src: "C:\\Users\\HP\\.gemini\\antigravity\\brain\\6940eb3d-2144-4a9e-bbf0-afa027c606c8\\programming_curriculum_card_boy_1773764665702.png", dest: "programming_curriculum.png" },
  { src: "C:\\Users\\HP\\.gemini\\antigravity\\brain\\6940eb3d-2144-4a9e-bbf0-afa027c606c8\\extracurricular_curriculum_card_v2_1773764564326.png", dest: "extracurricular_curriculum.png" }
];

const destDir = "c:\\Users\\HP\\Downloads\\bariumacademy-website\\bariumacademy-main\\barium-academy\\src\\assets";

operations.forEach(op => {
  try {
    fs.copyFileSync(op.src, path.join(destDir, op.dest));
    console.log(`Copied ${op.dest}`);
  } catch(e) {
    console.error(`Failed ${op.dest}: ${e.message}`);
  }
});
