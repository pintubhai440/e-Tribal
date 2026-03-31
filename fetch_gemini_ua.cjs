const https = require('https');

const options = {
  hostname: 'gemini.google.com',
  port: 443,
  path: '/share/39fdb4477e5b',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'en-US,en;q=0.9',
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    require('fs').writeFileSync('gemini_share_ua.html', data);
    console.log('Saved to gemini_share_ua.html. Status code: ' + res.statusCode);
    if (res.statusCode >= 300 && res.statusCode < 400) {
      console.log('Redirect location: ' + res.headers.location);
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
