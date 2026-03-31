const fs = require('fs');
const html = fs.readFileSync('gemini_share.html', 'utf8');

// The text is usually inside a JSON structure in the HTML.
// Let's try to find the actual text content.
const matches = html.match(/\[\\"([^"\\]+)\\"/g);
if (matches) {
    console.log("Found some text:");
    matches.slice(0, 100).forEach(m => console.log(m));
} else {
    console.log("No matches found.");
}

// Let's just strip HTML tags and print a chunk
const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
console.log(text.substring(0, 2000));
