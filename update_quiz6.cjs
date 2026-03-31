const fs = require('fs');

const rawText = `Q1. Where is Andhra Pradesh located in India?
A) Northwestern coastal region
B) Southeastern coastal region
C) Central region
D) Northeastern hill region
Answer: B) Southeastern coastal region
Memory Hook: Remember the map of India—AP hugs the Bay of Bengal on the lower right (Southeast).

Q2. What is the primary traditional wear for women in Andhra Pradesh and Telangana?
A) Salwar Kameez
B) Lehenga Choli
C) Saree (specifically original handloom)
D) Anarkali Suit
Answer: C) Saree (specifically original handloom)
Memory Hook: South India is world-renowned for its rich, traditional handloom sarees.

Q3. How are most of the famous saree varieties in Andhra Pradesh and Telangana named?
A) After the weaver who designed them
B) After the kings who ruled the region
C) After the district or town they are made in
D) After the type of thread used
Answer: C) After the district or town they are made in
Memory Hook: Just like Kanjeevaram comes from Kanchipuram, these sarees carry their hometown's name!

Q4. The famous "Uppada Jamdani" saree belongs to which district of Andhra Pradesh?
A) Anantapur
B) Chittoor
C) East Godavari
D) Visakhapatnam
Answer: C) East Godavari
Memory Hook: "Uppada" is a coastal village in the prosperous East Godavari district.

Q5. What is the unique specialty of the Uppada Jamdani saree?
A) It is completely waterproof
B) The design looks exactly the same on both sides
C) It is made of pure gold threads
D) It changes color in the sunlight
Answer: B) The design looks exactly the same on both sides
Memory Hook: Uppada sarees are like a mirror—no "wrong side" to the design!

Q6. Pochampally Art Sarees are made in Bhoodan Pochampally, which is located in which state?
A) Andhra Pradesh
B) Karnataka
C) Telangana
D) Tamil Nadu
Answer: C) Telangana
Memory Hook: Pochampally is close to Hyderabad, placing it right in the heart of Telangana.

Q7. What kind of traditional patterns are Pochampally sarees most famous for?
A) Floral embroidery
B) Geometric patterns
C) Animal prints
D) Plain solid colors
Answer: B) Geometric patterns
Memory Hook: Think of Pochampally designs as beautiful math—full of sharp angles and geometric shapes.

Q8. Pochampally sarees are well known for which specific style of dyeing?
A) Tie and Dye (Bandhani)
B) Block Printing
C) Ikkat style of dyeing
D) Batik
Answer: C) Ikkat style of dyeing
Memory Hook: Pochampally is synonymous with Ikkat (where threads are dyed before weaving).

Q9. The official cabin crew of which Indian airline wear specially designed Pochampally sarees?
A) IndiGo
B) SpiceJet
C) Air India
D) Vistara
Answer: C) Air India
Memory Hook: Air India, the national carrier, takes the pride of Indian handlooms (Pochampally) to the skies.

Q10. Pochampally sarees are handwoven using which types of fabric?
A) Silk and Cotton
B) Nylon and Polyester
C) Jute and Khadi
D) Wool and Velvet
Answer: A) Silk and Cotton
Memory Hook: The two most classic, natural, and breathable Indian fabrics.

Q11. Gadwal sarees are made in the Jogulamba Gadwal district. Which state is this in?
A) Andhra Pradesh
B) Telangana
C) Kerala
D) Maharashtra
Answer: B) Telangana
Memory Hook: Gadwal is a historic region in modern-day Telangana.

Q12. What are Dharmavaram sarees (from Anantapur district, AP) extremely well known for?
A) Being very lightweight and transparent
B) Gold-plated borders and artwork imprinted on them
C) Using only black and white colors
D) Being woven entirely by machines
Answer: B) Gold-plated borders and artwork imprinted on them
Memory Hook: "Dharma" means righteousness/duty, and gold is the most "righteous" and pure metal for borders.

Q13. Dharmavaram sarees are mostly used by dancers of which classical dance forms?
A) Kathak and Odissi
B) Bharatanatyam and Kuchipudi
C) Manipuri and Sattriya
D) Mohiniyattam and Kathakali
Answer: B) Bharatanatyam and Kuchipudi
Memory Hook: Kuchipudi is AP's native dance, and Bharatanatyam is from neighboring TN—both use rich Dharmavaram silks!

Q14. If someone is looking for a heavy silk saree with golden zari for a function, which saree does the video recommend?
A) Uppada Jamdani
B) Pochampally Cotton
C) Dharmavaram Saree
D) Plain Chiffon Saree
Answer: C) Dharmavaram Saree
Memory Hook: Heavy silk + Golden Zari = The royal Dharmavaram look.

Q15. Which of the following is a famous Andhra-style saree draping method mentioned in the video?
A) Nivi style
B) Gujarati drape
C) Bengali style
D) Maharashtrian Nauvari
Answer: A) Nivi style
Memory Hook: The "Nivi" drape is the modern, universally popular way to wear a saree, and its roots are tied to Andhra!

Q16. Besides the Nivi style, which of the following is another traditional saree draping style in this region?
A) Seedha Pallu
B) Gochi kattu (or Gochi Kattu style)
C) Mekhela Chador
D) Pheran
Answer: B) Gochi kattu (or Gochi Kattu style)
Memory Hook: "Kattu" means "to tie" in Telugu.

Q17. What do young, unmarried girls in Andhra Pradesh traditionally wear?
A) Saree
B) Salwar suit
C) Half saree
D) Jeans and Kurti
Answer: C) Half saree
Memory Hook: A beautiful transition dress—halfway between a skirt-blouse and a full saree.

Q18. What is the traditional lower garment for men in Andhra Pradesh and Telangana?
A) Jeans
B) Dhoti or Pancha
C) Trousers
D) Lungi exclusively
Answer: B) Dhoti or Pancha
Memory Hook: "Pancha" is the traditional Telugu word for the elegant white Dhoti.

Q19. What do men typically wear as an upper garment along with the Dhoti/Pancha?
A) T-shirt
B) Kurta
C) Blazer
D) Sweater
Answer: B) Kurta
Memory Hook: The classic Indian combination—Kurta on top, Pancha on the bottom.

Q20. According to the video, what underlying role do these traditional clothes play in society?
A) They divide people based on wealth
B) They bind communities together and show respect to roots
C) They are only meant to be sold to foreigners
D) They are completely outdated and no longer worn
Answer: B) They bind communities together and show respect to roots`;

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

// Find the start and end of the quiz array for cul6
const cul6Start = fileContent.indexOf("id: 'cul6'");
const quizStart = fileContent.indexOf("quiz: { questions: [", cul6Start);
const quizEnd = fileContent.indexOf("] }", quizStart);

const before = fileContent.substring(0, quizStart + "quiz: { questions: ".length);
const after = fileContent.substring(quizEnd);

const questionsJson = JSON.stringify(questions, null, 6);

let newContent = before + '\n' + questionsJson + '\n' + after;

// Also update the videoUrl
const oldVideoUrl = "https://www.youtube.com/embed/7Q5-B3X7_8g";
const newVideoUrl = "https://www.youtube.com/embed/vcN0khsFvyg";

// Only replace the one in cul6
const cul6Section = newContent.substring(cul6Start, quizStart);
const updatedCul6Section = cul6Section.replace(oldVideoUrl, newVideoUrl);
newContent = newContent.substring(0, cul6Start) + updatedCul6Section + newContent.substring(quizStart);

fs.writeFileSync('src/data/mockCourses.ts', newContent);
console.log("Updated mockCourses.ts");
