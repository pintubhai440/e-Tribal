const fs = require('fs');

const file = 'src/pages/Learning.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Replace the MOCK_COURSES array with import
const startIdx = content.indexOf('// Mock Data for Courses');
const endIdx = content.indexOf('];\n\ntype ViewState') + 2;

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + "import { MOCK_COURSES } from '../data/mockCourses';\n" + content.substring(endIdx);
}

// 2. Add selectedCategory state
const stateInsertIdx = content.indexOf('const [courses, setCourses] = useState<any[]>(MOCK_COURSES);');
if (stateInsertIdx !== -1) {
  content = content.substring(0, stateInsertIdx) + "const [selectedCategory, setSelectedCategory] = useState<string>('All');\n  " + content.substring(stateInsertIdx);
}

// 3. Update filtering logic in useEffect
const filterLogicStart = content.indexOf("if (village !== 'All') {");
const filterLogicEnd = content.indexOf('setCourses(fetchedCourses);');
if (filterLogicStart !== -1 && filterLogicEnd !== -1) {
  const newFilterLogic = `
        if (village !== 'All') {
          fetchedCourses = fetchedCourses.filter(c => c.village === village);
        }
        if (selectedCategory !== 'All') {
          fetchedCourses = fetchedCourses.filter(c => c.category === selectedCategory);
        }
        `;
  content = content.substring(0, filterLogicStart) + newFilterLogic + content.substring(filterLogicEnd);
}

// Do the same for fallback
const fallbackFilterStart = content.indexOf("if (village !== 'All') {", filterLogicEnd);
const fallbackFilterEnd = content.indexOf('setCourses(fallbackCourses);');
if (fallbackFilterStart !== -1 && fallbackFilterEnd !== -1) {
  const newFallbackFilter = `
        if (village !== 'All') {
          fallbackCourses = fallbackCourses.filter(c => c.village === village);
        }
        if (selectedCategory !== 'All') {
          fallbackCourses = fallbackCourses.filter(c => c.category === selectedCategory);
        }
        `;
  content = content.substring(0, fallbackFilterStart) + newFallbackFilter + content.substring(fallbackFilterEnd);
}

// 4. Add useEffect dependency for selectedCategory
content = content.replace('}, [village]);', '}, [village, selectedCategory]);');

// 5. Add filter UI
const listHeaderIdx = content.indexOf('<div className="flex items-center justify-between">');
if (listHeaderIdx !== -1) {
  const filterUI = `
      <div className="flex overflow-x-auto gap-2 pb-2 mb-6 scrollbar-hide">
        {['All', 'Culture', 'Skill', 'Dance', 'Technology', 'Business', 'Health'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={\`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors \${
              selectedCategory === cat
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
            }\`}
          >
            {cat}
          </button>
        ))}
      </div>
      `;
  
  const insertPoint = content.indexOf('</div>', content.indexOf('</div>', listHeaderIdx) + 6) + 6;
  content = content.substring(0, insertPoint) + filterUI + content.substring(insertPoint);
}

fs.writeFileSync(file, content);
console.log('Done');
