const fs = require('fs');

const rawText = `Q1. Which language's basics are being taught in this video?
A) Santhali
B) Kui
C) Bodo
D) Maithili
Answer: B) Kui

Q2. What is the main topic of the video?
A) Consonants (Vyanjan Varna)
B) Vowels (Swarabarna)
C) Numbers
D) Sentences
Answer: B) Vowels (Swarabarna)

Q3. According to the video, how many main vowels (Swarabarna) are used in the Kui language?
A) 3
B) 5
C) 7
D) 10
Answer: B) 5

Q4. Based on pronunciation time, into how many main categories are the vowels divided?
A) 2 (Short/Hrasva and Long/Dirgha)
B) 3 (Hrasva, Dirgha, Pluta)
C) 4
D) None of the above
Answer: A) 2 (Short/Hrasva and Long/Dirgha)

Q5. How much time does it take to pronounce a "Short Vowel" (Hrasva Swar)?
A) 2 seconds
B) The time it takes to blink an eye
C) 5 seconds
D) A long time
Answer: B) The time it takes to blink an eye

Q6. How is a "Long Vowel" (Dirgha Swar) pronounced?
A) Very quickly
B) With a suppressed voice
C) Stretched out / elongated
D) Without making a sound
Answer: C) Stretched out / elongated

Q7. In the Kui language, what happens if a short vowel is mistakenly pronounced as a long vowel?
A) Nothing happens
B) The meaning of the word changes completely
C) The language sounds better
D) The listener cannot understand at all
Answer: B) The meaning of the word changes completely

Q8. Which word example is used in the video to explain the difference between a short and a long vowel?
A) Konda / Kooda
B) Adda / Aadda
C) Penu / Peenu
D) Basa / Baasa
Answer: B) Adda / Aadda

Q9. While writing, which symbol is mentioned to indicate that a vowel is long (Dirgha)?
A) Question mark (?)
B) Full stop (.)
C) A mark like an English hyphen (-)
D) Comma (,)
Answer: C) A mark like an English hyphen (-)

Q10. Which is the first vowel written on the board by the teacher?
A) I
B) U
C) A
D) E
Answer: C) A

Q11. Which is the second vowel written on the board?
A) Aa
B) E
C) O
D) U
Answer: A) Aa

Q12. Which is the third vowel written on the board?
A) E
B) I
C) A
D) U
Answer: B) I

Q13. Which is the fourth vowel written on the board?
A) Aa
B) I
C) E
D) U
Answer: D) U

Q14. Which of these is mentioned as the last (fifth) vowel in the list of main vowels?
A) A
B) I
C) E
D) U
Answer: C) E

Q15. If a word is written as "A-dda" (with a hyphen), how will the 'A' be pronounced?
A) Short (Hrasva)
B) Long (Dirgha)
C) Silent
D) Rapidly
Answer: B) Long (Dirgha)

Q16. If a word is written as "Adda" (without a hyphen), how will the first vowel be pronounced?
A) Long (Dirgha)
B) With pauses
C) Short / Quick (Hrasva)
D) Very long
Answer: C) Short / Quick (Hrasva)

Q17. Towards the end of the video, which vowel is mentioned as not being needed as much separately in Kui?
A) O / Au
B) I
C) A
D) E
Answer: A) O / Au

Q18. According to the teacher, the 'meaning' of a word heavily depends on what?
A) Writing speed
B) The duration of the vowel pronunciation (Short vs. Long)
C) The color of the pen
D) The volume of the reader's voice
Answer: B) The duration of the vowel pronunciation (Short vs. Long)

Q19. Which part of the "Kui Learning" series is this video?
A) Part 05
B) Part 10
C) Part 01
D) Part 02
Answer: C) Part 01

Q20. When reading, what should one understand upon seeing the hyphen (-) type symbol?
A) To stop there
B) To stretch the sound of that vowel like a rubber band
C) To skip to the next word
D) To shorten the sound
Answer: B) To stretch the sound of that vowel like a rubber band`;

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

// Find the start and end of the quiz array for cul2
const cul2Start = fileContent.indexOf("id: 'cul2'");
const quizStart = fileContent.indexOf("quiz: { questions: [", cul2Start);
const quizEnd = fileContent.indexOf("] }", quizStart);

const before = fileContent.substring(0, quizStart + "quiz: { questions: ".length);
const after = fileContent.substring(quizEnd);

const questionsJson = JSON.stringify(questions, null, 6);

let newContent = before + questionsJson + after;

// Also update the videoUrl
const oldVideoUrl = "https://www.youtube.com/embed/7Q5-B3X7_8g";
const newVideoUrl = "https://www.youtube.com/embed/jvYYBRjoFhc";

// Only replace the one in cul2
const cul2Section = newContent.substring(cul2Start, quizStart);
const updatedCul2Section = cul2Section.replace(oldVideoUrl, newVideoUrl);
newContent = newContent.substring(0, cul2Start) + updatedCul2Section + newContent.substring(quizStart);

fs.writeFileSync('src/data/mockCourses.ts', newContent);
console.log("Updated mockCourses.ts");
