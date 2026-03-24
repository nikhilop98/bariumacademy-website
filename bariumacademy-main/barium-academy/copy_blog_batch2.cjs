const fs = require('fs');
const path = require('path');

const operations = [
  { src: "C:\\Users\\HP\\.gemini\\antigravity\\brain\\6940eb3d-2144-4a9e-bbf0-afa027c606c8\\ib_alevel_blog_cover_1773765238740.png", dest: "ib_alevel_blog_cover.png" },
  { src: "C:\\Users\\HP\\.gemini\\antigravity\\brain\\6940eb3d-2144-4a9e-bbf0-afa027c606c8\\procrastination_blog_cover_1773765260435.png", dest: "procrastination_blog_cover.png" }
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
