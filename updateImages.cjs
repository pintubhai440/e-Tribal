const fs = require('fs');

const file = 'src/data/mockCourses.ts';
let content = fs.readFileSync(file, 'utf8');

const replacements = [
  {
    title: "Traditional Festivals of Araku",
    newUrl: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=640&h=360&fit=crop"
  },
  {
    title: "Organic Farming Basics",
    newUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=640&h=360&fit=crop"
  },
  {
    title: "Forest Honey Collection",
    newUrl: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=640&h=360&fit=crop"
  },
  {
    title: "Leaf Plate Making",
    newUrl: "https://images.unsplash.com/photo-1611077544811-042856230864?w=640&h=360&fit=crop"
  },
  {
    title: "Rhythmic Footwork in Tribal Dance",
    newUrl: "https://images.unsplash.com/photo-1502519144081-acca18599776?w=640&h=360&fit=crop"
  },
  {
    title: "Festival Dance Choreography",
    newUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=640&h=360&fit=crop"
  },
  {
    title: "Introduction to Python Programming",
    newUrl: "https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?w=640&h=360&fit=crop"
  },
  {
    title: "Web Development Basics (HTML & CSS)",
    newUrl: "https://images.unsplash.com/photo-1627398240309-0837143d10f2?w=640&h=360&fit=crop"
  },
  {
    title: "Negotiation Skills",
    newUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=640&h=360&fit=crop"
  },
  {
    title: "Packaging and Branding",
    newUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=640&h=360&fit=crop"
  },
  {
    title: "Managing Inventory",
    newUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&h=360&fit=crop"
  },
  {
    title: "Clean Water and Hygiene",
    newUrl: "https://images.unsplash.com/photo-1538300342682-ffa5bfc5222e?w=640&h=360&fit=crop"
  },
  {
    title: "Snakebite Prevention and Care",
    newUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=640&h=360&fit=crop"
  }
];

let lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  for (const rep of replacements) {
    if (lines[i].includes("title: '" + rep.title + "'")) {
      // Look ahead for thumbnailUrl
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
console.log('Images updated successfully');
