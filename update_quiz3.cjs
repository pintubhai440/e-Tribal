const fs = require('fs');

const rawText = `Q1. Which tribal community does the art form shown in the video belong to?
A) Gond Tribe
B) Santhal Tribe
C) Savara Tribe
D) Bhil Tribe
Answer: C) Savara Tribe

Q2. In ancient times, what material did the tribal people use to coat their walls before painting on them?
A) White chalk
B) Charcoal paste
C) Yellow clay
D) Red mud (Ochre/Jeguru)
Answer: D) Red mud (Ochre/Jeguru)

Q3. How was the traditional white paint prepared for these tribal paintings?
A) By crushing sea shells
B) By grinding rice grains into flour and mixing it with water
C) By mixing limestone and milk
D) By extracting white sap from trees
Answer: B) By grinding rice grains into flour and mixing it with water

Q4. Since modern paintbrushes were not available in the remote hilly areas, what did the tribes use to paint?
A) Animal hair tied to bones
B) Carved stones
C) Twigs and small sticks
D) Cotton swabs
Answer: C) Twigs and small sticks

Q5. What is the primary theme or subject matter depicted in traditional Savara paintings?
A) Portraits of ancient kings
B) Abstract geometric patterns
C) Modern machinery and vehicles
D) Their daily lifestyle, customs, festivals, and dances
Answer: D) Their daily lifestyle, customs, festivals, and dances`;

const blocks = rawText.trim().split('\n\n');
const questions = blocks.map(block => {
    const lines = block.split('\n').map(l => l.trim()).filter(l => l);
    const text = lines[0].replace(/^Q\d+\.\s*/, '');
    const options = lines.slice(1, 5).map(l => l.replace(/^[A-D]\)\s*/, ''));
    const answerLine = lines.find(l => l.startsWith('Answer:'));
    const correctAnswerText = answerLine ? answerLine.replace(/^Answer:\s*[A-D]\)\s*/, '') : options[0];
    const correctAnswerIndex = options.findIndex(o => o === correctAnswerText);
    
    return {
        text,
        options,
        correctAnswerIndex: correctAnswerIndex === -1 ? 0 : correctAnswerIndex
    };
});

const fileContent = fs.readFileSync('src/data/mockCourses.ts', 'utf8');

// Find the start and end of the quiz array for cul3
const cul3Start = fileContent.indexOf("id: 'cul3'");
const quizStart = fileContent.indexOf("quiz: { questions: [", cul3Start);
const quizEnd = fileContent.indexOf("] }", quizStart);

const before = fileContent.substring(0, quizStart + "quiz: { questions: ".length);
const after = fileContent.substring(quizEnd);

const questionsJson = JSON.stringify(questions, null, 6);

let newContent = before + questionsJson + after;

// Also update the videoUrl
const oldVideoUrl = "https://www.youtube.com/embed/43auLLVHNnk";
const newVideoUrl = "https://www.youtube.com/embed/GURPmSFJNKs";

// Only replace the one in cul3
const cul3Section = newContent.substring(cul3Start, quizStart);
const updatedCul3Section = cul3Section.replace(oldVideoUrl, newVideoUrl);
newContent = newContent.substring(0, cul3Start) + updatedCul3Section + newContent.substring(quizStart);

fs.writeFileSync('src/data/mockCourses.ts', newContent);
console.log("Updated mockCourses.ts");
