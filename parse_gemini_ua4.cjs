const fs = require('fs');
const html = fs.readFileSync('gemini_share_ua.html', 'utf8');

// Find all strings in the HTML that look like questions or options
// A question usually ends with ?
// Let's extract all string literals from the HTML
const stringRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
let match;
const strings = [];
while ((match = stringRegex.exec(html)) !== null) {
    let s = match[1];
    // unescape
    s = s.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, '\\');
    if (s.length > 20 && s.length < 500) {
        strings.push(s);
    }
}

// Filter strings that look like questions or options
const questions = strings.filter(s => s.includes('?') && (s.includes('Eastern Ghats') || s.includes('Tribal') || s.match(/^\d+\./)));
console.log("Possible questions:");
questions.slice(0, 30).forEach(q => console.log(q));

// Let's also look for the word "quiz" and print surrounding strings
const quizIndex = strings.findIndex(s => s.toLowerCase().includes('quiz'));
if (quizIndex !== -1) {
    console.log("\nStrings around 'quiz':");
    for (let i = Math.max(0, quizIndex - 5); i < Math.min(strings.length, quizIndex + 30); i++) {
        console.log(`[${i}] ${strings[i]}`);
    }
}
