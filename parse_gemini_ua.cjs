const fs = require('fs');
const html = fs.readFileSync('gemini_share_ua.html', 'utf8');

const index = html.indexOf('Eastern Ghats');
if (index !== -1) {
    console.log("Found Eastern Ghats at index " + index);
    console.log(html.substring(index - 100, index + 500));
} else {
    console.log("Eastern Ghats not found in HTML.");
}
