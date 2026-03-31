const fs = require('fs');
const path = require('path');

const mockCoursesPath = path.join(__dirname, 'src', 'data', 'mockCourses.ts');
let content = fs.readFileSync(mockCoursesPath, 'utf8');

content = content.replace(
  /thumbnailUrl:\s*'https:\/\/images\.unsplash\.com\/photo-1519892300165-cb5542fb47c7\?w=640&h=360&fit=crop'/,
  "thumbnailUrl: 'https://loremflickr.com/640/360/drum,music?lock=157'"
);

content = content.replace(
  /thumbnailUrl:\s*'https:\/\/images\.unsplash\.com\/photo-1511192336575-5a79af67a629\?w=640&h=360&fit=crop'/,
  "thumbnailUrl: 'https://loremflickr.com/640/360/flute,music?lock=158'"
);

content = content.replace(
  /thumbnailUrl:\s*'https:\/\/images\.unsplash\.com\/photo-1627398240309-0837143d10f2\?w=640&h=360&fit=crop'/,
  "thumbnailUrl: 'https://loremflickr.com/640/360/web,code?lock=159'"
);

fs.writeFileSync(mockCoursesPath, content, 'utf8');
console.log("Fixed the remaining 3 courses!");
