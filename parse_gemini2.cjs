const fs = require('fs');
const html = fs.readFileSync('gemini_share.html', 'utf8');

const matches = html.match(/AF_initDataCallback\(\{key: 'ds:1', hash: '2', data:([\s\S]*?), sideChannel: {}}\);/);
if (matches) {
    console.log("Found ds:1 data");
} else {
    // Let's just search for the word "Tribal" or "Eastern Ghats" or "quiz"
    const index = html.indexOf('Eastern Ghats');
    if (index !== -1) {
        console.log("Found Eastern Ghats at index " + index);
        console.log(html.substring(index - 100, index + 500));
    } else {
        console.log("Eastern Ghats not found in HTML.");
    }
}
