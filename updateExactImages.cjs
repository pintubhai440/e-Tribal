const fs = require('fs');

const exactMap = {
  'Tribal History of Eastern Ghats': 'https://images.unsplash.com/photo-1533142278964-672522774136?w=640&h=360&fit=crop',
  'Introduction to Kui Language': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=640&h=360&fit=crop',
  'Savara Art and Painting': 'https://images.unsplash.com/photo-1582555172866-1f56ba2eb142?w=640&h=360&fit=crop',
  'Traditional Festivals of Araku': 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=640&h=360&fit=crop',
  'Tribal Storytelling and Folklore': 'https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?w=640&h=360&fit=crop',
  'Indigenous Clothing and Attire': 'https://images.unsplash.com/photo-1528360983277-1a14ce263344?w=640&h=360&fit=crop',
  'Traditional Tribal Cuisine': 'https://images.unsplash.com/photo-1556910103-1c02745a872f?w=640&h=360&fit=crop',
  'Forest Conservation Traditions': 'https://images.unsplash.com/photo-1511497584788-876760111969?w=640&h=360&fit=crop',
  'Tribal Wedding Customs': 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=640&h=360&fit=crop',
  'Ancient Tribal Architecture': 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=640&h=360&fit=crop',
  
  'Advanced Bamboo Crafting': 'https://images.unsplash.com/photo-1551806235-a053de3f7f8f?w=640&h=360&fit=crop',
  'Traditional Pottery Making': 'https://images.unsplash.com/photo-1610719936289-cb821142107c?w=640&h=360&fit=crop',
  'Handloom Weaving Techniques': 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=640&h=360&fit=crop',
  'Organic Farming Basics': 'https://images.unsplash.com/photo-1592982537447-6f2a6a0a5923?w=640&h=360&fit=crop',
  'Forest Honey Collection': 'https://images.unsplash.com/photo-1587049352847-4d4b137addbe?w=640&h=360&fit=crop',
  'Natural Dye Extraction': 'https://images.unsplash.com/photo-1604684722511-296e66b3b28b?w=640&h=360&fit=crop',
  'Wood Carving Fundamentals': 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=640&h=360&fit=crop',
  'Tailoring and Stitching': 'https://images.unsplash.com/photo-1528360983277-1a14ce263344?w=640&h=360&fit=crop',
  'Leaf Plate Making': 'https://images.unsplash.com/photo-1611077544811-042856230864?w=640&h=360&fit=crop',
  'Herbal Soap Crafting': 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=640&h=360&fit=crop',
  
  'Introduction to Dhimsa Dance': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=640&h=360&fit=crop',
  'Advanced Dhimsa Formations': 'https://images.unsplash.com/photo-1502519144081-acca18599776?w=640&h=360&fit=crop',
  'Savara Traditional Dance': 'https://images.unsplash.com/photo-1542840410-3092f99611a3?w=640&h=360&fit=crop',
  'Lambadi Dance Basics': 'https://images.unsplash.com/photo-1504609774667-316110515123?w=640&h=360&fit=crop',
  'Tribal Drumming (Thudumbu)': 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=640&h=360&fit=crop',
  'Flute Playing (Venu)': 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=640&h=360&fit=crop',
  'Rhythmic Footwork in Tribal Dance': 'https://images.unsplash.com/photo-1502519144081-acca18599776?w=640&h=360&fit=crop',
  'Dance Costumes and Makeup': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=640&h=360&fit=crop',
  'Festival Dance Choreography': 'https://images.unsplash.com/photo-1542840410-3092f99611a3?w=640&h=360&fit=crop',
  'Koya Dance Techniques': 'https://images.unsplash.com/photo-1504609774667-316110515123?w=640&h=360&fit=crop',
  
  'Basic Computer Skills & MS Word': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&h=360&fit=crop',
  'Data Entry with MS Excel': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&h=360&fit=crop',
  'Introduction to Python Programming': 'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?w=640&h=360&fit=crop',
  'Internet Basics & Online Safety': 'https://images.unsplash.com/photo-1510511459019-5d019b23ed0e?w=640&h=360&fit=crop',
  'Digital Payment & Banking Basics': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&h=360&fit=crop',
  'Creating Presentations with MS PowerPoint': 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=640&h=360&fit=crop',
  'Advanced MS Excel for Small Businesses': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=360&fit=crop',
  'Web Development Basics (HTML & CSS)': 'https://images.unsplash.com/photo-1627398240309-0837143d10f2?w=640&h=360&fit=crop',
  'Graphic Design Basics using Canva': 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=640&h=360&fit=crop',
  'Smartphone Troubleshooting & Maintenance': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=640&h=360&fit=crop',
  
  'Marketing Tribal Handicrafts': 'https://images.unsplash.com/photo-1432888117246-f659253b055c?w=640&h=360&fit=crop',
  'Pricing Your Products': 'https://images.unsplash.com/photo-1507679622114-f3df5f558c13?w=640&h=360&fit=crop',
  'Basic Accounting for Artisans': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=640&h=360&fit=crop',
  'Starting a Cooperative': 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=640&h=360&fit=crop',
  'E-commerce for Rural Business': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&h=360&fit=crop',
  'Negotiation Skills': 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=640&h=360&fit=crop',
  'Packaging and Branding': 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=640&h=360&fit=crop',
  'Managing Inventory': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&h=360&fit=crop',
  'Accessing Government Loans': 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=640&h=360&fit=crop',
  'Customer Service Basics': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=640&h=360&fit=crop',
  
  'First Aid in the Forest': 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=640&h=360&fit=crop',
  'Maternal Health and Nutrition': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=640&h=360&fit=crop',
  'Identifying Medicinal Plants': 'https://images.unsplash.com/photo-1505751172876-fa143ce425aa?w=640&h=360&fit=crop',
  'Clean Water and Hygiene': 'https://images.unsplash.com/photo-1538300342682-ffa5bfc5222e?w=640&h=360&fit=crop',
  'Child Immunization Awareness': 'https://images.unsplash.com/photo-1584308666744-247e89d98e87?w=640&h=360&fit=crop',
  'Managing Common Fevers': 'https://images.unsplash.com/photo-1584308666744-247e89d98e87?w=640&h=360&fit=crop',
  'Traditional Herbal Remedies': 'https://images.unsplash.com/photo-1505751172876-fa143ce425aa?w=640&h=360&fit=crop',
  'Mental Health in Communities': 'https://images.unsplash.com/photo-1544367567056-c69e2357d310?w=640&h=360&fit=crop',
  'Snakebite Prevention and Care': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=640&h=360&fit=crop',
  'Healthy Cooking Practices': 'https://images.unsplash.com/photo-1490645935980-d41d1637511d?w=640&h=360&fit=crop'
};

const file = 'src/data/mockCourses.ts';
let content = fs.readFileSync(file, 'utf8');

let lines = content.split('\n');
let currentTitle = '';

for (let i = 0; i < lines.length; i++) {
  const titleMatch = lines[i].match(/title:\s*'([^']+)'/);
  if (titleMatch) {
    currentTitle = titleMatch[1];
  }

  if (lines[i].includes('thumbnailUrl:')) {
    if (exactMap[currentTitle]) {
      lines[i] = "    thumbnailUrl: '" + exactMap[currentTitle] + "',";
    }
  }
}

fs.writeFileSync(file, lines.join('\n'));
console.log('Images updated with exact mapping successfully!');
