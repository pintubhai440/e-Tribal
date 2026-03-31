const fs = require('fs');
const html = fs.readFileSync('gemini_share_ua.html', 'utf8');

// The text is usually inside a JSON structure in the HTML.
// Let's try to find the actual text content.
const matches = html.match(/\[\\"([^"\\]+)\\"/g);
let found = false;
if (matches) {
    matches.forEach(m => {
        if (m.includes('?') || m.includes('1.')) {
            console.log(m);
            found = true;
        }
    });
}
if (!found) {
    // try finding the text in a different way
    const allStrings = html.match(/"([^"\\]+)"/g);
    if (allStrings) {
        allStrings.forEach(s => {
            if (s.includes('?') && s.length > 20) {
                console.log(s);
            }
        });
    }
}
