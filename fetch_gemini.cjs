const https = require('https');

https.get('https://gemini.google.com/share/39fdb4477e5b', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // Extract text content from the HTML
    const matches = data.match(/<script nonce="[^"]*">([\s\S]*?)<\/script>/g);
    if (matches) {
      matches.forEach(m => {
        if (m.includes('AF_initDataCallback')) {
          console.log(m.substring(0, 500) + '...');
        }
      });
    }
    // Also just dump the whole thing to a file so we can grep it
    require('fs').writeFileSync('gemini_share.html', data);
    console.log('Saved to gemini_share.html');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
