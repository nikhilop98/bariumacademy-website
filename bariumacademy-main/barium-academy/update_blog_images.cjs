const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'blogData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const mapping = {
    "how-to-score-1500-in-sat": '"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"',
    "how-to-score-5-in-ap-exams": '"https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"',
    "best-programming-languages-for-students": '"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"',
    "ib-diploma-vs-a-levels-guide": '"https://images.unsplash.com/photo-1513258496099-48162020ce3c?auto=format&fit=crop&w=1200&q=80"',
    "5-study-tips-beat-procrastination": '"https://images.unsplash.com/photo-1495364141860-b0d03dea4557?auto=format&fit=crop&w=1200&q=80"',
    "sat-math-common-traps": '"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80"',
    "ap-physics-1-core-formulas-guide": '"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80"',
    "understanding-a-levels-structure-guide": '"https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80"',
    "gcse-biology-revision-tips-2026": '"https://images.unsplash.com/photo-1530213786676-6cbb6220f4ab?auto=format&fit=crop&w=1200&q=80"',
    "how-to-revise-gcse-english-language": '"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80"',
    "test-optional-college-stats-advice": '"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"',
    "a-level-mathematics-implicit-differentiation": '"https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80"',
    "how-to-learn-a-foreign-language-fluently": '"https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80"',
    "how-to-study-effectively-less-time": '"https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=80"',
    "best-study-timetable-for-exams": '"https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=80"',
    "pomodoro-technique-guide": '"https://images.unsplash.com/photo-1516104037562-b1abe9737119?auto=format&fit=crop&w=1200&q=80"',
    "how-to-avoid-procrastination": '"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80"'
};

for (const [slug, url] of Object.entries(mapping)) {
    const rx = new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?coverImage:\\s*).*?(,)`, "g");
    content = content.replace(rx, `$1${url}$2`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Images injected!");
