const fs = require('fs');
const file = 'src/pages/Learning.tsx';
let content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');
const newLines = [...lines.slice(0, 8), 'import { MOCK_COURSES } from "../data/mockCourses";', ...lines.slice(354)];
fs.writeFileSync(file, newLines.join('\n'));
