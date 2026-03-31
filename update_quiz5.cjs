const fs = require('fs');

const rawText = `Q1. According to the video, the arrival of the Andhra tribe is clearly described in which ancient Indian epic?
A) Ramayana
B) Mahabharata
C) Bhagavad Gita
D) Upanishads
Answer: B) Mahabharata
Memory Hook: Think of the biggest, most "Maha" (great) war in ancient history.

Q2. During the Mahabharata War, the Andhra tribe arrived at the banks of which famous river?
A) Ganga
B) Godavari
C) Yamuna
D) Saraswati
Answer: C) Yamuna
Memory Hook: "Y" comes near the end of the alphabet, and the Andhras traveled far to the Yamuna.

Q3. In the Mahabharata war, the Andhra tribe made up the infantry for which warrior?
A) Arjuna
B) Satyaki
C) Bhishma
D) Karna
Answer: B) Satyaki
Memory Hook: Both Satyaki and the Andhra infantry fought for the "Satya" (truth).

Q4. For how long did the ancient Andhra tribes live as nomads before settling down?
A) A few decades
B) One century
C) Several centuries
D) A thousand years
Answer: C) Several centuries
Memory Hook: It took them hundreds of years (several centuries) of wandering to finally find their permanent home.

Q5. Around what time did some of the Andhra tribes inhabit the banks of the Yamuna river?
A) 1500 BC
B) 1000 BC
C) 700 BC
D) 300 BC
Answer: C) 700 BC
Memory Hook: Picture the number 7 as a boomerang, showing they eventually migrated back down South around 700 BC.

Q6. When the Andhras migrated to the South, where did one group of them settle?
A) The Eastern Himalayas
B) The west side of the Vindhya mountains
C) The Thar Desert
D) The Malabar Coast
Answer: B) The west side of the Vindhya mountains
Memory Hook: "V" for Vindhya. They moved down to the central "V" dividing North and South India.

Q7. Another tribe crossed which mountain range to reach the Kalinga kingdom?
A) Western Ghats
B) Aravalli Range
C) Eastern Ghats
D) Satpura Range
Answer: C) Eastern Ghats
Memory Hook: Kalinga (modern-day Odisha) is on the East coast, so they naturally had to cross the Eastern Ghats.

Q8. According to ancient texts, what is the relationship between the Andhras and the Kalingas?
A) They were bitter enemies
B) They spoke completely different languages
C) They are two branches of a single tribe
D) They never interacted
Answer: C) They are two branches of a single tribe
Memory Hook: Think of them as two branches growing from the exact same ancient family tree.

Q9. Which Buddhist Jataka tale explains that the Andhras built a settlement called Anuram?
A) The Monkey King Jataka
B) Serivanija Jataka
C) The Golden Goose Jataka
D) The Banyan Deer Jataka
Answer: B) Serivanija Jataka
Memory Hook: "Seri" sounds like series. This tale is part of a series of stories about their early settlements.

Q10. The Andhras built the settlement of Anuram on the banks of which river?
A) Krishna River
B) Tel River
C) Cauvery River
D) Penna River
Answer: B) Tel River
Memory Hook: "Tel" sounds like Telugu! It is easy to connect the Telugu people to the Tel river.

Q11. The Tel river is a sub-river (tributary) of which major river in Odisha?
A) Mahanadi
B) Godavari
C) Brahmaputra
D) Narmada
Answer: A) Mahanadi
Memory Hook: "Maha" means great. The Tel river flows into the "Great River" of Odisha.

Q12. Where can you find the earliest visual descriptions (sculptures) of the people from the present Andhra region?
A) Ajanta Caves
B) Ellora Caves
C) Buddhist sculptures at Amaravati
D) Sanchi Stupa
Answer: C) Buddhist sculptures at Amaravati
Memory Hook: "Amara" means immortal. Their earliest faces are immortally carved in Amaravati.

Q13. In the Amaravati sculptures, how are the local Andhra people symbolically depicted?
A) With wings of eagles
B) With the heads of snakes
C) Riding elephants
D) Holding lotus flowers
Answer: B) With the heads of snakes
Memory Hook: Snakes represent earth and mystery in ancient art.

Q14. Because of this snake symbolism, what was the ancient Andhra region also referred to as?
A) Garuda Desa
B) Naga Desa
C) Surya Desa
D) Vayu Desa
Answer: B) Naga Desa
Memory Hook: "Naga" literally means snake. Naga Desa means the Land of Snakes.

Q15. Who were the ancient kings of Naga Desa commonly referred to as?
A) The Asuras
B) The Devas
C) The Nagas
D) The Cholas
Answer: C) The Nagas
Memory Hook: The kings took the name of their land. Kings of Naga Desa = Nagas.

Q16. The migrating Andhra tribes established relationships with which two tribes already living in the Vindhya mountains?
A) Naga and Yaksha tribes
B) Bhil and Gond tribes
C) Santhal and Munda tribes
D) Koli and Mina tribes
Answer: A) Naga and Yaksha tribes
Memory Hook: Picture a snake (Naga) and a nature spirit (Yaksha) welcoming the Andhras to the mountains.

Q17. Which ancient Vedic text states that the Andhras left Northern India from the Yamuna to migrate south?
A) Mundaka Upanishad
B) Aitareya Brahmana
C) Samaveda
D) Atharvaveda
Answer: B) Aitareya Brahmana
Memory Hook: "A" for Aitareya and "A" for Andhras.

Q18. The Aitareya Brahmana is a part of which major Veda?
A) Rigveda
B) Samaveda
C) Yajurveda
D) Atharvaveda
Answer: A) Rigveda
Memory Hook: Rigveda is the oldest Veda, fitting for the oldest recorded history of the tribe.

Q19. In historical records, the earliest mention of the specific word for the region was found in a novel by which Jain monk?
A) Mahavira
B) Bhadrabahu
C) Udyotana Suri
D) Hemachandra
Answer: C) Udyotana Suri
Memory Hook: Think of the sun rising. "Uday" means sunrise, similar to Udyotana shedding light on the name.

Q20. In what year of the Common Era (CE) was the Jain monk Udyotana Suri's novel composed?
A) 300 CE
B) 550 CE
C) 779 CE
D) 1000 CE
Answer: C) 779 CE`;

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
    
    const q = {
        text,
        options,
        correctAnswerIndex: correctAnswerIndex === -1 ? 0 : correctAnswerIndex
    };
    if (explanation) {
        q.explanation = explanation;
    }
    return q;
});

const fileContent = fs.readFileSync('src/data/mockCourses.ts', 'utf8');

// Find the start and end of the quiz array for cul5
const cul5Start = fileContent.indexOf("id: 'cul5'");
const quizStart = fileContent.indexOf("quiz: { questions: [", cul5Start);
const quizEnd = fileContent.indexOf("] }", quizStart);

const before = fileContent.substring(0, quizStart + "quiz: { questions: ".length);
const after = fileContent.substring(quizEnd);

const questionsJson = JSON.stringify(questions, null, 6);

let newContent = before + '\n' + questionsJson + '\n' + after;

// Also update the videoUrl
const oldVideoUrl = "https://www.youtube.com/embed/YGpINhghJVE";
const newVideoUrl = "https://www.youtube.com/embed/0J8RLVZu38s";

// Only replace the one in cul5
const cul5Section = newContent.substring(cul5Start, quizStart);
const updatedCul5Section = cul5Section.replace(oldVideoUrl, newVideoUrl);
newContent = newContent.substring(0, cul5Start) + updatedCul5Section + newContent.substring(quizStart);

fs.writeFileSync('src/data/mockCourses.ts', newContent);
console.log("Updated mockCourses.ts");
