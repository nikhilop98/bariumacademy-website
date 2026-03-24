const fs = require('fs');
const path = require('path');

const operations = [
  { src: "C:\\Users\\HP\\.gemini\\antigravity\\brain\\6940eb3d-2144-4a9e-bbf0-afa027c606c8\\sat_blog_cover_1773765066886.png", dest: "sat_blog_cover.png" },
  { src: "C:\\Users\\HP\\.gemini\\antigravity\\brain\\6940eb3d-2144-4a9e-bbf0-afa027c606c8\\ap_blog_cover_1773765089029.png", dest: "ap_blog_cover.png" },
  { src: "C:\\Users\\HP\\.gemini\\antigravity\\brain\\6940eb3d-2144-4a9e-bbf0-afa027c606c8\\programming_blog_cover_1773765110760.png", dest: "programming_blog_cover.png" },
  { src: "C:\\Users\\HP\\.gemini\\antigravity\\brain\\6940eb3d-2144-4a9e-bbf0-afa027c606c8\\languages_blog_cover_1773765135366.png", dest: "languages_blog_cover.png" }
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
