const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\805f1890-57f2-4d8b-88d2-f71b6ecccee1';
const destDir = path.join(__dirname, 'public', 'blog-images');
const blogDataFile = path.join(__dirname, 'src', 'data', 'blogData.ts');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

// Read all files in artifacts directory
const files = fs.readdirSync(srcDir);

// Map of expected slugs to the prefix of the generated image we want to use
const mapping = {
    "how-to-score-1500-in-sat": "sat_1500_guide",
    "how-to-score-5-in-ap-exams": "ap_score_5",
    "best-programming-languages-for-students": "programming_guide",
    "ib-diploma-vs-a-levels-guide": "ib_vs_alevels",
    "5-study-tips-beat-procrastination": "beat_procrastination",
    "sat-math-common-traps": "sat_math_traps",
    "ap-physics-1-core-formulas-guide": "ap_physics_1",
    "understanding-a-levels-structure-guide": "alevels_guide",
    "gcse-biology-revision-tips-2026": "gcse_biology",
    "how-to-revise-gcse-english-language": "gcse_english",
    "test-optional-college-stats-advice": "sat_optional",
    "a-level-mathematics-implicit-differentiation": "alevel_math",
    "how-to-learn-a-foreign-language-fluently": "learn_language",
    "how-to-study-effectively-less-time": "study_effectively",
    "best-study-timetable-for-exams": "study_timetable",
    "pomodoro-technique-guide": "pomodoro_technique",
    "how-to-avoid-procrastination": "beat_procrastination" // fallback to beat_procrastination since quota hit
};

let content = fs.readFileSync(blogDataFile, 'utf8');

for (const [slug, prefix] of Object.entries(mapping)) {
    // Find the latest file starting with prefix
    const matches = files.filter(f => f.startsWith(prefix) && f.endsWith('.png')).sort().reverse();
    if (matches.length > 0) {
        const latestFile = matches[0];
        // Copy to public/blog-images
        fs.copyFileSync(path.join(srcDir, latestFile), path.join(destDir, latestFile));
        
        // Update blogData.ts
        // Replace ONLY the matching slug's coverImage line
        const rx = new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?coverImage:\\s*).*?(,)`, "g");
        
        // using /bariumacademy/... base URL approach for dev server compatibility
        content = content.replace(rx, `$1"/bariumacademy/blog-images/${latestFile}"$2`);
        console.log(`Updated ${slug} -> ${latestFile}`);
    } else {
        console.log(`Missing image for prefix ${prefix}`);
    }
}

fs.writeFileSync(blogDataFile, content, 'utf8');
console.log("Image re-linking complete.");
