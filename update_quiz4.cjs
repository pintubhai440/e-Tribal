const fs = require('fs');

const rawText = `Q1. Which tribal community's festival is featured in this video?
A) Gond Tribe
B) Kuvi Tribe
C) Chenchu Tribe
D) Savara Tribe
Answer: B) Kuvi Tribe
Memory Hook: Remember the channel name mentions AP Tribal Culture, and the focus here is the "Kuvi" (sounds like 'Kavi' or poet) tribe of Araku.

Q2. On which specific day of the week is the "Dasara Roggo" festival celebrated?
A) Sunday
B) Monday
C) Tuesday
D) Friday
Answer: C) Tuesday
Memory Hook: 'T' for Tribal, 'T' for Tuesday.

Q3. Which deities or natural entities are primarily worshipped during this festival?
A) Sun God and Moon God
B) Lord Shiva and Parvati
C) Nature, Mother Earth (Bhumatha), and Jakari Devatha
D) Only the Village River
Answer: C) Nature, Mother Earth (Bhumatha), and Jakari Devatha
Memory Hook: Tribals have the deepest connection with what surrounds them—Nature and Mother Earth.

Q4. Which specific leaves are mentioned as being used in their traditional pooja?
A) Mango leaves
B) Neem leaves
C) Neredu (Jamun) leaves
D) Banana leaves
Answer: C) Neredu (Jamun) leaves
Memory Hook: Unlike regular city poojas that use mango leaves, they use leaves from the forest's fruit tree—Neredu.

Q5. What ritual is performed with the rice collected from every household to ward off the evil eye (Dishti)?
A) It is cooked into a massive feast
B) It is thrown into a sacred fire
C) It is scattered outside the village boundaries
D) It is fed to the village cattle
Answer: C) It is scattered outside the village boundaries
Memory Hook: To keep the "evil" outside, you throw the enchanted rice "outside" the village.

Q6. How does the village elder (Ooru Pedda) determine the exact date and time for the festival?
A) By consulting a printed Hindu calendar
B) By looking at the stars in the sky
C) By tracking the phases of the moon
D) By observing the blooming of specific flowers
Answer: B) By looking at the stars in the sky
Memory Hook: They don't need printed calendars; the sky is their natural calendar.

Q7. What is a strict rule that all villagers must follow on the day of the festival?
A) Everyone must fast completely
B) No one should leave the village or do regular work
C) Only the elders are allowed to speak
D) Everyone must wear only green clothes
Answer: B) No one should leave the village or do regular work
Memory Hook: It's a day of total village unity—nobody goes out, nobody works.

Q8. What is the main reason for celebrating the Dasara Roggo festival?
A) To celebrate the birth of an ancient king
B) To mark the beginning of a new year
C) For the well-being of the village, a good harvest, and the health of the cattle
D) To prepare for hunting season
Answer: C) For the well-being of the village, a good harvest, and the health of the cattle
Memory Hook: It is a Thanksgiving festival for the three most important things for survival: Village safety, Food (crops), and Wealth (cattle).

Q9. In which language do the tribal priests chant their prayers during the pooja?
A) Sanskrit
B) Pure Telugu
C) Hindi
D) Their own native tribal language
Answer: D) Their own native tribal language
Memory Hook: The deities of the tribe understand the language of the tribe!

Q10. What does the word "Roggo" literally mean in their native language?
A) A special type of traditional drum
B) A traditional dance form
C) Pooja or a traditional sacred celebration/thanksgiving
D) The village elder
Answer: C) Pooja or a traditional sacred celebration/thanksgiving
Memory Hook: Roggo = Pooja`;

const blocks = rawText.trim().split('\n\n');
const questions = blocks.map(block => {
    const lines = block.split('\n').map(l => l.trim()).filter(l => l);
    const text = lines[0].replace(/^Q\d+\.\s*/, '');
    const options = lines.slice(1, 5).map(l => l.replace(/^[A-D]\)\s*/, ''));
    const answerLine = lines.find(l => l.startsWith('Answer:'));
    const correctAnswerText = answerLine ? answerLine.replace(/^Answer:\s*[A-D]\)\s*/, '') : options[0];
    const correctAnswerIndex = options.findIndex(o => o === correctAnswerText);
    const explanationLine = lines.find(l => l.startsWith('Memory Hook:'));
    const explanation = explanationLine ? explanationLine.replace(/^Memory Hook:\s*/, '') : '';
    
    return {
        text,
        options,
        correctAnswerIndex: correctAnswerIndex === -1 ? 0 : correctAnswerIndex,
        explanation
    };
});

const fileContent = fs.readFileSync('src/data/mockCourses.ts', 'utf8');

// Find the start and end of the quiz array for cul4
const cul4Start = fileContent.indexOf("id: 'cul4'");
const quizStart = fileContent.indexOf("quiz: { questions: [", cul4Start);
const quizEnd = fileContent.indexOf("] }", quizStart);

const before = fileContent.substring(0, quizStart + "quiz: { questions: ".length);
const after = fileContent.substring(quizEnd);

const questionsJson = JSON.stringify(questions, null, 6);

let newContent = before + '\n' + questionsJson + '\n' + after;

// Also update the videoUrl
const oldVideoUrl = "https://www.youtube.com/embed/cXP9r3LVxWk";
const newVideoUrl = "https://www.youtube.com/embed/FUO_a1_7KhE";

// Only replace the one in cul4
const cul4Section = newContent.substring(cul4Start, quizStart);
const updatedCul4Section = cul4Section.replace(oldVideoUrl, newVideoUrl);
newContent = newContent.substring(0, cul4Start) + updatedCul4Section + newContent.substring(quizStart);

fs.writeFileSync('src/data/mockCourses.ts', newContent);
console.log("Updated mockCourses.ts");
