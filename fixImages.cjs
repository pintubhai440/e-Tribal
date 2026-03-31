const fs = require('fs');

const file = 'src/data/mockCourses.ts';
let content = fs.readFileSync(file, 'utf8');

const replacements = [
  {
    title: "Traditional Festivals of Araku",
    newUrl: "https://picsum.photos/seed/arakufestival/640/360"
  },
  {
    title: "Leaf Plate Making",
    newUrl: "https://picsum.photos/seed/leafplate/640/360"
  },
  {
    title: "Introduction to Python Programming",
    newUrl: "https://picsum.photos/seed/pythoncode/640/360"
  },
  {
    title: "Web Development Basics (HTML & CSS)",
    newUrl: "https://picsum.photos/seed/htmlcss/640/360"
  },
  {
    title: "Negotiation Skills",
    newUrl: "https://picsum.photos/seed/negotiation/640/360"
  },
  {
    title: "Clean Water and Hygiene",
    newUrl: "https://picsum.photos/seed/cleanwater/640/360"
  }
];

let lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  for (const rep of replacements) {
    if (lines[i].includes("title: '" + rep.title + "'")) {
      for (let j = i + 1; j < i + 5; j++) {
        if (lines[j] && lines[j].includes('thumbnailUrl:')) {
          lines[j] = "    thumbnailUrl: '" + rep.newUrl + "',";
          break;
        }
      }
    }
  }
}

fs.writeFileSync(file, lines.join('\n'));
console.log('Images fixed successfully');
