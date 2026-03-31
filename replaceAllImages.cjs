const fs = require('fs');

const file = 'src/data/mockCourses.ts';
let content = fs.readFileSync(file, 'utf8');

let count = 0;
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?w=640&h=360&fit=crop/g, (match) => {
  count++;
  return 'https://picsum.photos/seed/course' + count + '/640/360';
});

fs.writeFileSync(file, content);
console.log('Replaced ' + count + ' Unsplash URLs with Picsum URLs');
