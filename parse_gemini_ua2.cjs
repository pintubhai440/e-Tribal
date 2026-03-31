const fs = require('fs');
const html = fs.readFileSync('gemini_share_ua.html', 'utf8');

const index = html.indexOf('question');
if (index !== -1) {
    console.log("Found question at index " + index);
    console.log(html.substring(index - 100, index + 500));
} else {
    console.log("question not found in HTML.");
}
