const fs = require('fs');

const file = 'src/data/mockCourses.ts';
let content = fs.readFileSync(file, 'utf8');

const imageMap = [
  { keywords: ['python', 'coding'], url: 'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?w=640&h=360&fit=crop' },
  { keywords: ['web', 'html', 'css'], url: 'https://images.unsplash.com/photo-1627398240309-0837143d10f2?w=640&h=360&fit=crop' },
  { keywords: ['water', 'hygiene'], url: 'https://images.unsplash.com/photo-1538300342682-ffa5bfc5222e?w=640&h=360&fit=crop' },
  { keywords: ['honey', 'bee'], url: 'https://images.unsplash.com/photo-1587049352847-4d4b137addbe?w=640&h=360&fit=crop' },
  { keywords: ['leaf', 'plate', 'vistaraku'], url: 'https://images.unsplash.com/photo-1611077544811-042856230864?w=640&h=360&fit=crop' },
  { keywords: ['dance', 'footwork', 'choreography'], url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=640&h=360&fit=crop' },
  { keywords: ['festival', 'pongal', 'celebration'], url: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=640&h=360&fit=crop' },
  { keywords: ['farm', 'agriculture', 'crop'], url: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0a5923?w=640&h=360&fit=crop' },
  { keywords: ['negotiat', 'communication', 'buyer'], url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=640&h=360&fit=crop' },
  { keywords: ['inventory', 'stock'], url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&h=360&fit=crop' },
  { keywords: ['packag', 'brand'], url: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=640&h=360&fit=crop' },
  { keywords: ['snake', 'bite', 'forest'], url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=640&h=360&fit=crop' },
  { keywords: ['history', 'tribe', 'indigenous'], url: 'https://images.unsplash.com/photo-1533142278964-672522774136?w=640&h=360&fit=crop' },
  { keywords: ['art', 'paint', 'color'], url: 'https://images.unsplash.com/photo-1582555172866-1f56ba2eb142?w=640&h=360&fit=crop' },
  { keywords: ['language', 'kui'], url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=640&h=360&fit=crop' },
  { keywords: ['music', 'instrument', 'flute'], url: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=640&h=360&fit=crop' },
  { keywords: ['craft', 'basket', 'weave'], url: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=640&h=360&fit=crop' },
  { keywords: ['finance', 'money', 'price', 'profit'], url: 'https://images.unsplash.com/photo-1507679622114-f3df5f558c13?w=640&h=360&fit=crop' },
  { keywords: ['health', 'medic', 'first aid', 'disease'], url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=640&h=360&fit=crop' },
  { keywords: ['market', 'sell', 'customer'], url: 'https://images.unsplash.com/photo-1432888117246-f659253b055c?w=640&h=360&fit=crop' },
  { keywords: ['tailor', 'sew', 'stitch'], url: 'https://images.unsplash.com/photo-1528360983277-1a14ce263344?w=640&h=360&fit=crop' },
  { keywords: ['pottery', 'clay'], url: 'https://images.unsplash.com/photo-1610719936289-cb821142107c?w=640&h=360&fit=crop' },
  { keywords: ['bamboo', 'wood'], url: 'https://images.unsplash.com/photo-1551806235-a053de3f7f8f?w=640&h=360&fit=crop' },
  { keywords: ['digital', 'computer', 'internet', 'smartphone'], url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&h=360&fit=crop' },
  { keywords: ['nutrit', 'food', 'diet'], url: 'https://images.unsplash.com/photo-1490645935980-d41d1637511d?w=640&h=360&fit=crop' },
  { keywords: ['maternal', 'mother', 'child', 'pregnan'], url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=640&h=360&fit=crop' },
  { keywords: ['yoga', 'fitness', 'exercise'], url: 'https://images.unsplash.com/photo-1544367567056-c69e2357d310?w=640&h=360&fit=crop' },
  { keywords: ['story', 'folk', 'myth'], url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=640&h=360&fit=crop' },
  { keywords: ['cloth', 'attire', 'garment'], url: 'https://images.unsplash.com/photo-1528360983277-1a14ce263344?w=640&h=360&fit=crop' },
  { keywords: ['herb', 'plant', 'remedy'], url: 'https://images.unsplash.com/photo-1505751172876-fa143ce425aa?w=640&h=360&fit=crop' },
  { keywords: ['business', 'plan', 'startup'], url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=640&h=360&fit=crop' },
  { keywords: ['record', 'bookkeep'], url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=640&h=360&fit=crop' },
  { keywords: ['eco', 'tourism', 'guide'], url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=640&h=360&fit=crop' },
  { keywords: ['solar', 'energy', 'panel'], url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=640&h=360&fit=crop' },
  { keywords: ['e-commerce', 'online', 'payment'], url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&h=360&fit=crop' },
  { keywords: ['app', 'mobile', 'whatsapp'], url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=640&h=360&fit=crop' },
  { keywords: ['cyber', 'security', 'safe'], url: 'https://images.unsplash.com/photo-1510511459019-5d019b23ed0e?w=640&h=360&fit=crop' },
  { keywords: ['video', 'edit', 'media'], url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=640&h=360&fit=crop' },
  { keywords: ['data', 'entry', 'excel'], url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&h=360&fit=crop' },
  { keywords: ['mental', 'stress', 'mind'], url: 'https://images.unsplash.com/photo-1544367567056-c69e2357d310?w=640&h=360&fit=crop' },
  { keywords: ['sanitation', 'waste', 'toilet'], url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=640&h=360&fit=crop' },
  { keywords: ['elderly', 'care', 'aging'], url: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=640&h=360&fit=crop' },
  { keywords: ['child', 'pediatric', 'baby'], url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=640&h=360&fit=crop' },
  { keywords: ['infectious', 'fever', 'malaria'], url: 'https://images.unsplash.com/photo-1584308666744-247e89d98e87?w=640&h=360&fit=crop' }
];

const defaultImages = {
  'Culture': 'https://images.unsplash.com/photo-1533142278964-672522774136?w=640&h=360&fit=crop',
  'Skill': 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=640&h=360&fit=crop',
  'Technology': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&h=360&fit=crop',
  'Business': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=640&h=360&fit=crop',
  'Health': 'https://images.unsplash.com/photo-1505751172876-fa143ce425aa?w=640&h=360&fit=crop',
  'Dance': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=640&h=360&fit=crop'
};

let lines = content.split('\n');
let currentCategory = 'Culture';
let currentTitle = '';

for (let i = 0; i < lines.length; i++) {
  const catMatch = lines[i].match(/category:\s*'([^']+)'/);
  if (catMatch) currentCategory = catMatch[1];
  
  const titleMatch = lines[i].match(/title:\s*'([^']+)'/);
  if (titleMatch) currentTitle = titleMatch[1];

  if (lines[i].includes('thumbnailUrl:')) {
    let newUrl = defaultImages[currentCategory] || defaultImages['Culture'];
    
    const lowerTitle = currentTitle.toLowerCase();
    for (const map of imageMap) {
      if (map.keywords.some(kw => lowerTitle.includes(kw))) {
        newUrl = map.url;
        break;
      }
    }

    lines[i] = "    thumbnailUrl: '" + newUrl + "',";
  }
}

fs.writeFileSync(file, lines.join('\n'));
console.log('Images updated with relevant Unsplash URLs');
