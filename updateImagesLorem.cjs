const fs = require('fs');
const path = require('path');

const mockCoursesPath = path.join(__dirname, 'src', 'data', 'mockCourses.ts');
let content = fs.readFileSync(mockCoursesPath, 'utf8');

const courses = [
  // Culture
  { title: "Tribal History of Eastern Ghats", keyword: "history,tribal" },
  { title: "Introduction to Kui Language", keyword: "language,learning" },
  { title: "Savara Art and Painting", keyword: "painting,art" },
  { title: "Traditional Festivals of Araku", keyword: "festival,celebration" },
  { title: "Tribal Storytelling and Folklore", keyword: "storytelling,village" },
  { title: "Indigenous Clothing and Attire", keyword: "clothing,traditional" },
  { title: "Traditional Tribal Cuisine", keyword: "cooking,food" },
  { title: "Forest Conservation Traditions", keyword: "forest,nature" },
  { title: "Tribal Wedding Customs", keyword: "wedding,traditional" },
  { title: "Ancient Tribal Architecture", keyword: "architecture,hut" },

  // Skill
  { title: "Advanced Bamboo Crafting", keyword: "bamboo,craft" },
  { title: "Traditional Pottery Making", keyword: "pottery,clay" },
  { title: "Handloom Weaving Techniques", keyword: "weaving,loom" },
  { title: "Organic Farming Basics", keyword: "farming,agriculture" },
  { title: "Forest Honey Collection", keyword: "honey,forest" },
  { title: "Natural Dye Extraction", keyword: "dye,color" },
  { title: "Wood Carving Fundamentals", keyword: "woodcarving,wood" },
  { title: "Tailoring and Stitching", keyword: "tailoring,sewing" },
  { title: "Leaf Plate Making", keyword: "leaves,craft" },
  { title: "Herbal Soap Crafting", keyword: "soap,handmade" },

  // Dance
  { title: "Introduction to Dhimsa Dance", keyword: "dance,tribal" },
  { title: "Advanced Dhimsa Formations", keyword: "dance,group" },
  { title: "Savara Traditional Dance", keyword: "dance,traditional" },
  { title: "Lambadi Dance Basics", keyword: "dance,folk" },
  { title: "Tribal Drumming (Thudumbu)", keyword: "drum,music" },
  { title: "Flute Playing (Venu)", keyword: "flute,music" },
  { title: "Rhythmic Footwork in Tribal Dance", keyword: "feet,dance" },
  { title: "Dance Costumes and Makeup", keyword: "makeup,costume" },
  { title: "Festival Dance Choreography", keyword: "choreography,dance" },
  { title: "Koya Dance Techniques", keyword: "dance,culture" },

  // Technology
  { title: "Basic Computer Skills & MS Word", keyword: "computer,typing" },
  { title: "Data Entry with MS Excel", keyword: "spreadsheet,computer" },
  { title: "Introduction to Python Programming", keyword: "programming,code" },
  { title: "Internet Basics & Online Safety", keyword: "internet,security" },
  { title: "Digital Payment & Banking Basics", keyword: "mobile,payment" },
  { title: "Creating Presentations with MS PowerPoint", keyword: "presentation,screen" },
  { title: "Advanced MS Excel for Small Businesses", keyword: "excel,business" },
  { title: "Web Development Basics (HTML & CSS)", keyword: "web,code" },
  { title: "Graphic Design Basics using Canva", keyword: "design,computer" },
  { title: "Smartphone Troubleshooting & Maintenance", keyword: "smartphone,repair" },

  // Business
  { title: "Marketing Tribal Handicrafts", keyword: "market,handicraft" },
  { title: "Pricing Your Products", keyword: "money,business" },
  { title: "Basic Accounting for Artisans", keyword: "accounting,calculator" },
  { title: "Starting a Cooperative", keyword: "team,business" },
  { title: "E-commerce for Rural Business", keyword: "ecommerce,laptop" },
  { title: "Negotiation Skills", keyword: "handshake,business" },
  { title: "Packaging and Branding", keyword: "packaging,box" },
  { title: "Managing Inventory", keyword: "inventory,warehouse" },
  { title: "Accessing Government Loans", keyword: "bank,document" },
  { title: "Customer Service Basics", keyword: "customer,service" },

  // Health
  { title: "First Aid in the Forest", keyword: "firstaid,forest" },
  { title: "Maternal Health and Nutrition", keyword: "mother,health" },
  { title: "Identifying Medicinal Plants", keyword: "plant,medicine" },
  { title: "Clean Water and Hygiene", keyword: "water,hygiene" },
  { title: "Child Immunization Awareness", keyword: "vaccine,child" },
  { title: "Managing Common Fevers", keyword: "fever,health" },
  { title: "Traditional Herbal Remedies", keyword: "herbal,medicine" },
  { title: "Mental Health in Communities", keyword: "mentalhealth,community" },
  { title: "Snakebite Prevention and Care", keyword: "snake,forest" },
  { title: "Healthy Cooking Practices", keyword: "cooking,healthy" }
];

let lockId = 100;

courses.forEach(course => {
  // Find the block for this course
  const titleRegex = new RegExp("title:\\s*['\"]" + course.title.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&') + "['\"]\\s*,[\\s\\S]*?thumbnailUrl:\\s*['\"]([^'\"]+)['\"]");
  
  const match = content.match(titleRegex);
  if (match) {
    const oldUrl = match[1];
    const newUrl = "https://loremflickr.com/640/360/" + course.keyword + "?lock=" + lockId;
    
    // Replace the URL in this specific block
    const blockStartIndex = match.index;
    const blockEndIndex = blockStartIndex + match[0].length;
    
    const before = content.substring(0, blockStartIndex);
    const block = content.substring(blockStartIndex, blockEndIndex);
    const after = content.substring(blockEndIndex);
    
    const updatedBlock = block.replace(oldUrl, newUrl);
    content = before + updatedBlock + after;
    
    lockId++;
  } else {
    console.log("Could not find:", course.title);
  }
});

fs.writeFileSync(mockCoursesPath, content, 'utf8');
console.log("Updated mockCourses.ts with LoremFlickr URLs!");
