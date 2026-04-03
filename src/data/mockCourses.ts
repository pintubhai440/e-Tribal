export const MOCK_COURSES = [
  // --- CULTURE (10) ---
  {
    id: 'cul1', title: 'Tribal History of Eastern Ghats', category: 'Culture',
    description: 'Explore the ancient roots and history of the indigenous tribes of the Eastern Ghats.',
    thumbnailUrl: 'https://d35xcwcl37xo08.cloudfront.net/current-affairs-wp-uploads/2025/12/Eastern-Ghats.webp',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Origins and Migration', videoUrl: 'https://www.youtube.com/embed/ICVXHkOy-tQ', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "According to the Geological Survey of India (GSI), approximately when were the Eastern Ghats formed?",
            "options": [
                  "170 Million years ago",
                  "520 Million years ago",
                  "2 Billion years ago",
                  "2.5 Billion years ago"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Aravalli is the oldest (2.5B), Eastern Ghats is second (2B), and Western Ghats are the \"youngest\" kids here (only 170M)."
      },
      {
            "text": "Which mountain range is considered the oldest in India, formed around 2.5 billion years ago?",
            "options": [
                  "Western Ghats",
                  "Eastern Ghats",
                  "Himalayas",
                  "Aravalli Mountain Ranges"
            ],
            "correctAnswerIndex": 3,
            "explanation": "\"A\" for Aravalli, \"A\" for Ancient (the very first)."
      },
      {
            "text": "How old are the Western Ghats according to geological estimates?",
            "options": [
                  "170 Million years ago",
                  "520 Million years ago",
                  "2 Billion years ago",
                  "2.5 Billion years ago"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Compared to the billions of years of the Eastern Ghats, the Western Ghats are just a few \"Million\" years old."
      },
      {
            "text": "What is the geographical extent of the Eastern Ghats?",
            "options": [
                  "Narmada River to Kerala",
                  "Mahanadi River Valley to Tamil Nadu",
                  "Ganga River to Karnataka",
                  "Godavari River to Kanyakumari"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Starts from Odisha's biggest river (Mahanadi) and goes down to the southern state (Tamil Nadu). \"M to T\"."
      },
      {
            "text": "What geographical feature is located to the immediate east of the Eastern Ghats?",
            "options": [
                  "Deccan Plateau",
                  "Thar Desert",
                  "Fertile Eastern Coastal Plains",
                  "Arabian Sea"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Between the mountains and the Bay of Bengal lies the flat, fertile coast."
      },
      {
            "text": "What is located to the western side of the Eastern Ghats?",
            "options": [
                  "Eastern Coastal Plains",
                  "Deccan Plateau",
                  "Himalayas",
                  "Bay of Bengal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "The massive central tableland of South India sits right behind (west of) the Eastern Ghats."
      },
      {
            "text": "Why are the Eastern Ghats a discontinuous mountain chain compared to the Western Ghats?",
            "options": [
                  "Earthquakes shifted the mountains",
                  "They are older, leading to more erosion and weathering by rivers",
                  "Volcanic eruptions broke them apart",
                  "Lack of rainfall caused them to shrink"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Older things get worn out and broken over time by the continuous flow of water."
      },
      {
            "text": "In which direction does the Indian Peninsula naturally slope?",
            "options": [
                  "East to West",
                  "North to South",
                  "South to North",
                  "West to East"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Think of the water flow—most major southern rivers start near the Arabian Sea (West) but drain into the Bay of Bengal (East)."
      },
      {
            "text": "Which of the following groups of rivers cut through the Eastern Ghats to form gaps?",
            "options": [
                  "Narmada and Tapti",
                  "Indus and Sutlej",
                  "Godavari, Mahanadi, Krishna, and Cauvery",
                  "Ganga and Yamuna"
            ],
            "correctAnswerIndex": 2,
            "explanation": "The \"Big 4\" East-flowing rivers of Peninsular India."
      },
      {
            "text": "What is the name of the highest peak in the entire Eastern Ghats?",
            "options": [
                  "Mahendragiri",
                  "Anamudi",
                  "Doddabetta",
                  "Jindhagada Peak"
            ],
            "correctAnswerIndex": 3,
            "explanation": "The peak is standing tall and \"Zinda\" (Alive) above all others."
      },
      {
            "text": "What is the approximate height of the Jindhagada Peak?",
            "options": [
                  "1500 meters",
                  "1700 meters",
                  "2695 meters",
                  "8848 meters"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Just remember the number 17. (1500 is for the second highest, Mahendragiri)."
      },
      {
            "text": "In which Indian state is the Jindhagada Peak located?",
            "options": [
                  "Odisha",
                  "Tamil Nadu",
                  "Andhra Pradesh",
                  "Karnataka"
            ],
            "correctAnswerIndex": 2,
            "explanation": "AP is right in the middle of the Eastern Ghats' stretch."
      },
      {
            "text": "Which peak in the Maliya Range was previously considered the highest peak of the Eastern Ghats?",
            "options": [
                  "Anamudi",
                  "Mahendragiri",
                  "Doddabetta",
                  "Jindhagada"
            ],
            "correctAnswerIndex": 1,
            "explanation": "\"Maha\" means great, so people used to think it was the greatest (highest) until Jindhagada was accurately measured."
      },
      {
            "text": "The Jindhagada Peak is specifically located in which hill range?",
            "options": [
                  "Maliya Range",
                  "Madugula Konda Range",
                  "Velikonda Range",
                  "Seshachalam Hills"
            ],
            "correctAnswerIndex": 1,
            "explanation": "\"Madugula\" sounds massive, fitting for the highest peak."
      },
      {
            "text": "Which river flows through the Velikonda Range in Andhra Pradesh?",
            "options": [
                  "Palar River",
                  "Penneru River",
                  "Cauvery River",
                  "Mahanadi River"
            ],
            "correctAnswerIndex": 1,
            "explanation": "\"Pen\" in Penneru matches with Velikonda."
      },
      {
            "text": "The Nallamala Hills are one of India's oldest. They were formed during the Cambrian age, which was approximately how long ago?",
            "options": [
                  "170 Million years ago",
                  "520 Million years ago",
                  "1 Billion years ago",
                  "2 Billion years ago"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Half a billion years roughly equals 520 Million."
      },
      {
            "text": "The famous religious site, Tirupati Temple, is located in which hill range of the Eastern Ghats?",
            "options": [
                  "Palkonda Hills",
                  "Ramalla Hills",
                  "Seshachalam Hills",
                  "Javadhi Hills"
            ],
            "correctAnswerIndex": 2,
            "explanation": "\"Sesha\" refers to the divine serpent, closely linked to the deity at Tirupati."
      },
      {
            "text": "Which hill range's name literally translates to \"Milk Hill\" in the local language?",
            "options": [
                  "Palkonda Hills",
                  "Shevaroy Hills",
                  "Melagiri Hills",
                  "Pachamalai Hills"
            ],
            "correctAnswerIndex": 0,
            "explanation": "\"Pal\" means milk in Tamil/Telugu."
      },
      {
            "text": "Which upland region is located to the west of the Palkonda Hills?",
            "options": [
                  "Deccan Plateau",
                  "Rayalaseema Upland",
                  "Malwa Plateau",
                  "Chota Nagpur Plateau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Rayalaseema is a famous inland region of Andhra Pradesh, sitting just west of the coastal hills."
      },
      {
            "text": "Which river flows through the Javadhi Hills in northern Tamil Nadu?",
            "options": [
                  "Cauvery River",
                  "Krishna River",
                  "Palar River",
                  "Penneru River"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Javadhi and Palar go together in Northern Tamil Nadu."
      },
      {
            "text": "Which hills in Tamil Nadu are particularly popular for their rich mineral reserves and coffee plantations?",
            "options": [
                  "Javadhi Hills",
                  "Shevaroy Hills",
                  "Pachamalai Hills",
                  "Melagiri Hills"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sip your \"Coffee\" at Shevaroy."
      },
      {
            "text": "The Cauvery river flows along the southern side of which hill range, resulting in dense vegetation?",
            "options": [
                  "Shevaroy Hills",
                  "Javadhi Hills",
                  "Pachamalai Hills",
                  "Biligiriranga Hills"
            ],
            "correctAnswerIndex": 2,
            "explanation": "\"Pacha\" means green in Tamil. Cauvery water makes it green and dense."
      },
      {
            "text": "Which hill range acts as an Elephant Reserve, has two elephant corridors, and houses the Bannerghatta National Park?",
            "options": [
                  "Melagiri Hills",
                  "Ramalla Hills",
                  "Nallamala Hills",
                  "Seshachalam Hills"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elephants \"Mela\" (gather) at Melagiri."
      },
      {
            "text": "Which hill range is located just south of the Melagiri Hills and is famous for its lofty peaks?",
            "options": [
                  "Javadhi Hills",
                  "Biligiriranga Hills",
                  "Palkonda Hills",
                  "Velikonda Range"
            ],
            "correctAnswerIndex": 1,
            "explanation": "BR Hills (Biligiriranga) are the stepping stones as we move further south towards the convergence point."
      },
      {
            "text": "Where do the Eastern Ghats and Western Ghats finally converge, creating a region of extremely rich biodiversity?",
            "options": [
                  "Annamalai Hills",
                  "Cardamom Hills",
                  "Nilgiri Mountains",
                  "Shevaroy Hills"
            ],
            "correctAnswerIndex": 2,
            "explanation": ""
      }
] }
  },
  {
    id: 'cul2', title: 'Introduction to Kui Language', category: 'Culture',
    description: 'Learn the basics of the Kui language spoken by the Kondh tribe.',
    thumbnailUrl: 'https://i.ytimg.com/vi/qroGiugdUF4/maxresdefault.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Basic Greetings', videoUrl: 'https://www.youtube.com/embed/jvYYBRjoFhc', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "Which language's basics are being taught in this video?",
            "options": [
                  "Santhali",
                  "Kui",
                  "Bodo",
                  "Maithili"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "What is the main topic of the video?",
            "options": [
                  "Consonants (Vyanjan Varna)",
                  "Vowels (Swarabarna)",
                  "Numbers",
                  "Sentences"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "According to the video, how many main vowels (Swarabarna) are used in the Kui language?",
            "options": [
                  "3",
                  "5",
                  "7",
                  "10"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Based on pronunciation time, into how many main categories are the vowels divided?",
            "options": [
                  "2 (Short/Hrasva and Long/Dirgha)",
                  "3 (Hrasva, Dirgha, Pluta)",
                  "4",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "How much time does it take to pronounce a \"Short Vowel\" (Hrasva Swar)?",
            "options": [
                  "2 seconds",
                  "The time it takes to blink an eye",
                  "5 seconds",
                  "A long time"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "How is a \"Long Vowel\" (Dirgha Swar) pronounced?",
            "options": [
                  "Very quickly",
                  "With a suppressed voice",
                  "Stretched out / elongated",
                  "Without making a sound"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "In the Kui language, what happens if a short vowel is mistakenly pronounced as a long vowel?",
            "options": [
                  "Nothing happens",
                  "The meaning of the word changes completely",
                  "The language sounds better",
                  "The listener cannot understand at all"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Which word example is used in the video to explain the difference between a short and a long vowel?",
            "options": [
                  "Konda / Kooda",
                  "Adda / Aadda",
                  "Penu / Peenu",
                  "Basa / Baasa"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "While writing, which symbol is mentioned to indicate that a vowel is long (Dirgha)?",
            "options": [
                  "Question mark (?)",
                  "Full stop (.)",
                  "A mark like an English hyphen (-)",
                  "Comma (,)"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Which is the first vowel written on the board by the teacher?",
            "options": [
                  "I",
                  "U",
                  "A",
                  "E"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Which is the second vowel written on the board?",
            "options": [
                  "Aa",
                  "E",
                  "O",
                  "U"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Which is the third vowel written on the board?",
            "options": [
                  "E",
                  "I",
                  "A",
                  "U"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Which is the fourth vowel written on the board?",
            "options": [
                  "Aa",
                  "I",
                  "E",
                  "U"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which of these is mentioned as the last (fifth) vowel in the list of main vowels?",
            "options": [
                  "A",
                  "I",
                  "E",
                  "U"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "If a word is written as \"A-dda\" (with a hyphen), how will the 'A' be pronounced?",
            "options": [
                  "Short (Hrasva)",
                  "Long (Dirgha)",
                  "Silent",
                  "Rapidly"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "If a word is written as \"Adda\" (without a hyphen), how will the first vowel be pronounced?",
            "options": [
                  "Long (Dirgha)",
                  "With pauses",
                  "Short / Quick (Hrasva)",
                  "Very long"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Towards the end of the video, which vowel is mentioned as not being needed as much separately in Kui?",
            "options": [
                  "O / Au",
                  "I",
                  "A",
                  "E"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "According to the teacher, the 'meaning' of a word heavily depends on what?",
            "options": [
                  "Writing speed",
                  "The duration of the vowel pronunciation (Short vs. Long)",
                  "The color of the pen",
                  "The volume of the reader's voice"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Which part of the \"Kui Learning\" series is this video?",
            "options": [
                  "Part 05",
                  "Part 10",
                  "Part 01",
                  "Part 02"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "When reading, what should one understand upon seeing the hyphen (-) type symbol?",
            "options": [
                  "To stop there",
                  "To stretch the sound of that vowel like a rubber band",
                  "To skip to the next word",
                  "To shorten the sound"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'cul3', title: 'Savara Art and Painting', category: 'Culture',
    description: 'Master the ancient Savara wall painting techniques using natural colors.',
    thumbnailUrl: 'https://www.deccanchronicle.com/h-upload/2024/10/27/1856807-savaratribalart2.webp',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Preparing Natural Colors', videoUrl: 'https://www.youtube.com/embed/GURPmSFJNKs', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "Which tribal community does the art form shown in the video belong to?",
            "options": [
                  "Gond Tribe",
                  "Santhal Tribe",
                  "Savara Tribe",
                  "Bhil Tribe"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "In ancient times, what material did the tribal people use to coat their walls before painting on them?",
            "options": [
                  "White chalk",
                  "Charcoal paste",
                  "Yellow clay",
                  "Red mud (Ochre/Jeguru)"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "How was the traditional white paint prepared for these tribal paintings?",
            "options": [
                  "By crushing sea shells",
                  "By grinding rice grains into flour and mixing it with water",
                  "By mixing limestone and milk",
                  "By extracting white sap from trees"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Since modern paintbrushes were not available in the remote hilly areas, what did the tribes use to paint?",
            "options": [
                  "Animal hair tied to bones",
                  "Carved stones",
                  "Twigs and small sticks",
                  "Cotton swabs"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "What is the primary theme or subject matter depicted in traditional Savara paintings?",
            "options": [
                  "Portraits of ancient kings",
                  "Abstract geometric patterns",
                  "Modern machinery and vehicles",
                  "Their daily lifestyle, customs, festivals, and dances"
            ],
            "correctAnswerIndex": 3
      }
] }
  },
  {
    id: 'cul4', title: 'Traditional Festivals of Araku', category: 'Culture',
    description: 'Understand the significance and rituals of major tribal festivals in the Araku valley.',
    thumbnailUrl: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/05/02122151/Tribal-Dance.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Tribal Festival', videoUrl: 'https://www.youtube.com/embed/FUO_a1_7KhE', duration: '1:30:00' }],
    quiz: { questions: 
[
      {
            "text": "Which tribal community's festival is featured in this video?",
            "options": [
                  "Gond Tribe",
                  "Kuvi Tribe",
                  "Chenchu Tribe",
                  "Savara Tribe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Remember the channel name mentions AP Tribal Culture, and the focus here is the \"Kuvi\" (sounds like 'Kavi' or poet) tribe of Araku."
      },
      {
            "text": "On which specific day of the week is the \"Dasara Roggo\" festival celebrated?",
            "options": [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Friday"
            ],
            "correctAnswerIndex": 2,
            "explanation": "'T' for Tribal, 'T' for Tuesday."
      },
      {
            "text": "Which deities or natural entities are primarily worshipped during this festival?",
            "options": [
                  "Sun God and Moon God",
                  "Lord Shiva and Parvati",
                  "Nature, Mother Earth (Bhumatha), and Jakari Devatha",
                  "Only the Village River"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Tribals have the deepest connection with what surrounds them—Nature and Mother Earth."
      },
      {
            "text": "Which specific leaves are mentioned as being used in their traditional pooja?",
            "options": [
                  "Mango leaves",
                  "Neem leaves",
                  "Neredu (Jamun) leaves",
                  "Banana leaves"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Unlike regular city poojas that use mango leaves, they use leaves from the forest's fruit tree—Neredu."
      },
      {
            "text": "What ritual is performed with the rice collected from every household to ward off the evil eye (Dishti)?",
            "options": [
                  "It is cooked into a massive feast",
                  "It is thrown into a sacred fire",
                  "It is scattered outside the village boundaries",
                  "It is fed to the village cattle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "To keep the \"evil\" outside, you throw the enchanted rice \"outside\" the village."
      },
      {
            "text": "How does the village elder (Ooru Pedda) determine the exact date and time for the festival?",
            "options": [
                  "By consulting a printed Hindu calendar",
                  "By looking at the stars in the sky",
                  "By tracking the phases of the moon",
                  "By observing the blooming of specific flowers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "They don't need printed calendars; the sky is their natural calendar."
      },
      {
            "text": "What is a strict rule that all villagers must follow on the day of the festival?",
            "options": [
                  "Everyone must fast completely",
                  "No one should leave the village or do regular work",
                  "Only the elders are allowed to speak",
                  "Everyone must wear only green clothes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "It's a day of total village unity—nobody goes out, nobody works."
      },
      {
            "text": "What is the main reason for celebrating the Dasara Roggo festival?",
            "options": [
                  "To celebrate the birth of an ancient king",
                  "To mark the beginning of a new year",
                  "For the well-being of the village, a good harvest, and the health of the cattle",
                  "To prepare for hunting season"
            ],
            "correctAnswerIndex": 2,
            "explanation": "It is a Thanksgiving festival for the three most important things for survival: Village safety, Food (crops), and Wealth (cattle)."
      },
      {
            "text": "In which language do the tribal priests chant their prayers during the pooja?",
            "options": [
                  "Sanskrit",
                  "Pure Telugu",
                  "Hindi",
                  "Their own native tribal language"
            ],
            "correctAnswerIndex": 3,
            "explanation": "The deities of the tribe understand the language of the tribe!"
      },
      {
            "text": "What does the word \"Roggo\" literally mean in their native language?",
            "options": [
                  "A special type of traditional drum",
                  "A traditional dance form",
                  "Pooja or a traditional sacred celebration/thanksgiving",
                  "The village elder"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Roggo = Pooja"
      }
] }
  },
  {
    id: 'cul5', title: 'Tribal Storytelling and Folklore', category: 'Culture',
    description: 'Dive into the rich oral traditions, myths, and legends passed down through generations.',
    thumbnailUrl: 'https://tehelka.com/media/2023/06/Deepanwita-oral-1-1024x682.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'The Art of Oral Tradition', videoUrl: 'https://www.youtube.com/embed/0J8RLVZu38s', duration: '1:30:00' }],
    quiz: { questions: 
[
      {
            "text": "According to the video, the arrival of the Andhra tribe is clearly described in which ancient Indian epic?",
            "options": [
                  "Ramayana",
                  "Mahabharata",
                  "Bhagavad Gita",
                  "Upanishads"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Think of the biggest, most \"Maha\" (great) war in ancient history."
      },
      {
            "text": "During the Mahabharata War, the Andhra tribe arrived at the banks of which famous river?",
            "options": [
                  "Ganga",
                  "Godavari",
                  "Yamuna",
                  "Saraswati"
            ],
            "correctAnswerIndex": 2,
            "explanation": "\"Y\" comes near the end of the alphabet, and the Andhras traveled far to the Yamuna."
      },
      {
            "text": "In the Mahabharata war, the Andhra tribe made up the infantry for which warrior?",
            "options": [
                  "Arjuna",
                  "Satyaki",
                  "Bhishma",
                  "Karna"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Both Satyaki and the Andhra infantry fought for the \"Satya\" (truth)."
      },
      {
            "text": "For how long did the ancient Andhra tribes live as nomads before settling down?",
            "options": [
                  "A few decades",
                  "One century",
                  "Several centuries",
                  "A thousand years"
            ],
            "correctAnswerIndex": 2,
            "explanation": "It took them hundreds of years (several centuries) of wandering to finally find their permanent home."
      },
      {
            "text": "Around what time did some of the Andhra tribes inhabit the banks of the Yamuna river?",
            "options": [
                  "1500 BC",
                  "1000 BC",
                  "700 BC",
                  "300 BC"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Picture the number 7 as a boomerang, showing they eventually migrated back down South around 700 BC."
      },
      {
            "text": "When the Andhras migrated to the South, where did one group of them settle?",
            "options": [
                  "The Eastern Himalayas",
                  "The west side of the Vindhya mountains",
                  "The Thar Desert",
                  "The Malabar Coast"
            ],
            "correctAnswerIndex": 1,
            "explanation": "\"V\" for Vindhya. They moved down to the central \"V\" dividing North and South India."
      },
      {
            "text": "Another tribe crossed which mountain range to reach the Kalinga kingdom?",
            "options": [
                  "Western Ghats",
                  "Aravalli Range",
                  "Eastern Ghats",
                  "Satpura Range"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Kalinga (modern-day Odisha) is on the East coast, so they naturally had to cross the Eastern Ghats."
      },
      {
            "text": "According to ancient texts, what is the relationship between the Andhras and the Kalingas?",
            "options": [
                  "They were bitter enemies",
                  "They spoke completely different languages",
                  "They are two branches of a single tribe",
                  "They never interacted"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Think of them as two branches growing from the exact same ancient family tree."
      },
      {
            "text": "Which Buddhist Jataka tale explains that the Andhras built a settlement called Anuram?",
            "options": [
                  "The Monkey King Jataka",
                  "Serivanija Jataka",
                  "The Golden Goose Jataka",
                  "The Banyan Deer Jataka"
            ],
            "correctAnswerIndex": 1,
            "explanation": "\"Seri\" sounds like series. This tale is part of a series of stories about their early settlements."
      },
      {
            "text": "The Andhras built the settlement of Anuram on the banks of which river?",
            "options": [
                  "Krishna River",
                  "Tel River",
                  "Cauvery River",
                  "Penna River"
            ],
            "correctAnswerIndex": 1,
            "explanation": "\"Tel\" sounds like Telugu! It is easy to connect the Telugu people to the Tel river."
      },
      {
            "text": "The Tel river is a sub-river (tributary) of which major river in Odisha?",
            "options": [
                  "Mahanadi",
                  "Godavari",
                  "Brahmaputra",
                  "Narmada"
            ],
            "correctAnswerIndex": 0,
            "explanation": "\"Maha\" means great. The Tel river flows into the \"Great River\" of Odisha."
      },
      {
            "text": "Where can you find the earliest visual descriptions (sculptures) of the people from the present Andhra region?",
            "options": [
                  "Ajanta Caves",
                  "Ellora Caves",
                  "Buddhist sculptures at Amaravati",
                  "Sanchi Stupa"
            ],
            "correctAnswerIndex": 2,
            "explanation": "\"Amara\" means immortal. Their earliest faces are immortally carved in Amaravati."
      },
      {
            "text": "In the Amaravati sculptures, how are the local Andhra people symbolically depicted?",
            "options": [
                  "With wings of eagles",
                  "With the heads of snakes",
                  "Riding elephants",
                  "Holding lotus flowers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Snakes represent earth and mystery in ancient art."
      },
      {
            "text": "Because of this snake symbolism, what was the ancient Andhra region also referred to as?",
            "options": [
                  "Garuda Desa",
                  "Naga Desa",
                  "Surya Desa",
                  "Vayu Desa"
            ],
            "correctAnswerIndex": 1,
            "explanation": "\"Naga\" literally means snake. Naga Desa means the Land of Snakes."
      },
      {
            "text": "Who were the ancient kings of Naga Desa commonly referred to as?",
            "options": [
                  "The Asuras",
                  "The Devas",
                  "The Nagas",
                  "The Cholas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "The kings took the name of their land. Kings of Naga Desa = Nagas."
      },
      {
            "text": "The migrating Andhra tribes established relationships with which two tribes already living in the Vindhya mountains?",
            "options": [
                  "Naga and Yaksha tribes",
                  "Bhil and Gond tribes",
                  "Santhal and Munda tribes",
                  "Koli and Mina tribes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Picture a snake (Naga) and a nature spirit (Yaksha) welcoming the Andhras to the mountains."
      },
      {
            "text": "Which ancient Vedic text states that the Andhras left Northern India from the Yamuna to migrate south?",
            "options": [
                  "Mundaka Upanishad",
                  "Aitareya Brahmana",
                  "Samaveda",
                  "Atharvaveda"
            ],
            "correctAnswerIndex": 1,
            "explanation": "\"A\" for Aitareya and \"A\" for Andhras."
      },
      {
            "text": "The Aitareya Brahmana is a part of which major Veda?",
            "options": [
                  "Rigveda",
                  "Samaveda",
                  "Yajurveda",
                  "Atharvaveda"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Rigveda is the oldest Veda, fitting for the oldest recorded history of the tribe."
      },
      {
            "text": "In historical records, the earliest mention of the specific word for the region was found in a novel by which Jain monk?",
            "options": [
                  "Mahavira",
                  "Bhadrabahu",
                  "Udyotana Suri",
                  "Hemachandra"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Think of the sun rising. \"Uday\" means sunrise, similar to Udyotana shedding light on the name."
      },
      {
            "text": "In what year of the Common Era (CE) was the Jain monk Udyotana Suri's novel composed?",
            "options": [
                  "300 CE",
                  "550 CE",
                  "779 CE",
                  "1000 CE"
            ],
            "correctAnswerIndex": 2
      }
] }
  },
  {
    id: 'cul6', title: 'Indigenous Clothing and Attire', category: 'Culture',
    description: 'Learn about the traditional garments, weaving patterns, and their cultural meanings.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Dancers_wearing_traditional_dress_of_the_Banjara_Lamadi_or_Lambani_tribe_in_Andhra_Pradesh_DSCF7370_%286%29.JPG',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Significance of Colors', videoUrl: 'https://www.youtube.com/embed/vcN0khsFvyg', duration: '1:30:00' }],
    quiz: { questions: 
[
      {
            "text": "Where is Andhra Pradesh located in India?",
            "options": [
                  "Northwestern coastal region",
                  "Southeastern coastal region",
                  "Central region",
                  "Northeastern hill region"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Remember the map of India—AP hugs the Bay of Bengal on the lower right (Southeast)."
      },
      {
            "text": "What is the primary traditional wear for women in Andhra Pradesh and Telangana?",
            "options": [
                  "Salwar Kameez",
                  "Lehenga Choli",
                  "Saree (specifically original handloom)",
                  "Anarkali Suit"
            ],
            "correctAnswerIndex": 2,
            "explanation": "South India is world-renowned for its rich, traditional handloom sarees."
      },
      {
            "text": "How are most of the famous saree varieties in Andhra Pradesh and Telangana named?",
            "options": [
                  "After the weaver who designed them",
                  "After the kings who ruled the region",
                  "After the district or town they are made in",
                  "After the type of thread used"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Just like Kanjeevaram comes from Kanchipuram, these sarees carry their hometown's name!"
      },
      {
            "text": "The famous \"Uppada Jamdani\" saree belongs to which district of Andhra Pradesh?",
            "options": [
                  "Anantapur",
                  "Chittoor",
                  "East Godavari",
                  "Visakhapatnam"
            ],
            "correctAnswerIndex": 2,
            "explanation": "\"Uppada\" is a coastal village in the prosperous East Godavari district."
      },
      {
            "text": "What is the unique specialty of the Uppada Jamdani saree?",
            "options": [
                  "It is completely waterproof",
                  "The design looks exactly the same on both sides",
                  "It is made of pure gold threads",
                  "It changes color in the sunlight"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Uppada sarees are like a mirror—no \"wrong side\" to the design!"
      },
      {
            "text": "Pochampally Art Sarees are made in Bhoodan Pochampally, which is located in which state?",
            "options": [
                  "Andhra Pradesh",
                  "Karnataka",
                  "Telangana",
                  "Tamil Nadu"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pochampally is close to Hyderabad, placing it right in the heart of Telangana."
      },
      {
            "text": "What kind of traditional patterns are Pochampally sarees most famous for?",
            "options": [
                  "Floral embroidery",
                  "Geometric patterns",
                  "Animal prints",
                  "Plain solid colors"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Think of Pochampally designs as beautiful math—full of sharp angles and geometric shapes."
      },
      {
            "text": "Pochampally sarees are well known for which specific style of dyeing?",
            "options": [
                  "Tie and Dye (Bandhani)",
                  "Block Printing",
                  "Ikkat style of dyeing",
                  "Batik"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pochampally is synonymous with Ikkat (where threads are dyed before weaving)."
      },
      {
            "text": "The official cabin crew of which Indian airline wear specially designed Pochampally sarees?",
            "options": [
                  "IndiGo",
                  "SpiceJet",
                  "Air India",
                  "Vistara"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Air India, the national carrier, takes the pride of Indian handlooms (Pochampally) to the skies."
      },
      {
            "text": "Pochampally sarees are handwoven using which types of fabric?",
            "options": [
                  "Silk and Cotton",
                  "Nylon and Polyester",
                  "Jute and Khadi",
                  "Wool and Velvet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "The two most classic, natural, and breathable Indian fabrics."
      },
      {
            "text": "Gadwal sarees are made in the Jogulamba Gadwal district. Which state is this in?",
            "options": [
                  "Andhra Pradesh",
                  "Telangana",
                  "Kerala",
                  "Maharashtra"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Gadwal is a historic region in modern-day Telangana."
      },
      {
            "text": "What are Dharmavaram sarees (from Anantapur district, AP) extremely well known for?",
            "options": [
                  "Being very lightweight and transparent",
                  "Gold-plated borders and artwork imprinted on them",
                  "Using only black and white colors",
                  "Being woven entirely by machines"
            ],
            "correctAnswerIndex": 1,
            "explanation": "\"Dharma\" means righteousness/duty, and gold is the most \"righteous\" and pure metal for borders."
      },
      {
            "text": "Dharmavaram sarees are mostly used by dancers of which classical dance forms?",
            "options": [
                  "Kathak and Odissi",
                  "Bharatanatyam and Kuchipudi",
                  "Manipuri and Sattriya",
                  "Mohiniyattam and Kathakali"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Kuchipudi is AP's native dance, and Bharatanatyam is from neighboring TN—both use rich Dharmavaram silks!"
      },
      {
            "text": "If someone is looking for a heavy silk saree with golden zari for a function, which saree does the video recommend?",
            "options": [
                  "Uppada Jamdani",
                  "Pochampally Cotton",
                  "Dharmavaram Saree",
                  "Plain Chiffon Saree"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Heavy silk + Golden Zari = The royal Dharmavaram look."
      },
      {
            "text": "Which of the following is a famous Andhra-style saree draping method mentioned in the video?",
            "options": [
                  "Nivi style",
                  "Gujarati drape",
                  "Bengali style",
                  "Maharashtrian Nauvari"
            ],
            "correctAnswerIndex": 0,
            "explanation": "The \"Nivi\" drape is the modern, universally popular way to wear a saree, and its roots are tied to Andhra!"
      },
      {
            "text": "Besides the Nivi style, which of the following is another traditional saree draping style in this region?",
            "options": [
                  "Seedha Pallu",
                  "Gochi kattu (or Gochi Kattu style)",
                  "Mekhela Chador",
                  "Pheran"
            ],
            "correctAnswerIndex": 1,
            "explanation": "\"Kattu\" means \"to tie\" in Telugu."
      },
      {
            "text": "What do young, unmarried girls in Andhra Pradesh traditionally wear?",
            "options": [
                  "Saree",
                  "Salwar suit",
                  "Half saree",
                  "Jeans and Kurti"
            ],
            "correctAnswerIndex": 2,
            "explanation": "A beautiful transition dress—halfway between a skirt-blouse and a full saree."
      },
      {
            "text": "What is the traditional lower garment for men in Andhra Pradesh and Telangana?",
            "options": [
                  "Jeans",
                  "Dhoti or Pancha",
                  "Trousers",
                  "Lungi exclusively"
            ],
            "correctAnswerIndex": 1,
            "explanation": "\"Pancha\" is the traditional Telugu word for the elegant white Dhoti."
      },
      {
            "text": "What do men typically wear as an upper garment along with the Dhoti/Pancha?",
            "options": [
                  "T-shirt",
                  "Kurta",
                  "Blazer",
                  "Sweater"
            ],
            "correctAnswerIndex": 1,
            "explanation": "The classic Indian combination—Kurta on top, Pancha on the bottom."
      },
      {
            "text": "According to the video, what underlying role do these traditional clothes play in society?",
            "options": [
                  "They divide people based on wealth",
                  "They bind communities together and show respect to roots",
                  "They are only meant to be sold to foreigners",
                  "They are completely outdated and no longer worn"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'cul7', title: 'Traditional Tribal Cuisine', category: 'Culture',
    description: 'Discover the unique recipes, cooking methods, and ingredients of tribal food.',
    thumbnailUrl: 'https://assets.vogue.in/photos/6034b5d10cd1a7ee5dc515e0/4:3/w_2664,h_1998,c_limit/Tribal%20Andhra%20Recipes.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Traditional Bamboo Chicken', videoUrl: 'https://www.youtube.com/embed/SWqfWz_9syE', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the very first step in preparing the traditional Bamboo Chicken as shown in the video?",
            "options": [
                  "Roasting the empty bamboo",
                  "Cutting the chicken into pieces",
                  "Plucking the leaves for sealing",
                  "Washing the bamboo sticks"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You always have to prepare the star of the show (the chicken) before you can dress it up with spices."
      },
      {
            "text": "According to the chef, which ingredients are mixed with the chicken pieces during marination?",
            "options": [
                  "Soy sauce and vinegar",
                  "Coconut milk and sugar",
                  "Ginger paste and various masala items",
                  "Tomato puree and butter"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Think of classic Indian flavors. Ginger and dry masalas are the absolute heartbeat of the marinade."
      },
      {
            "text": "What item serves as the main cooking vessel for this traditional tribal dish?",
            "options": [
                  "A large iron skillet",
                  "Empty bamboo stems",
                  "A clay pot",
                  "Wrapped banana leaves"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The name of the dish gives the secret away instantly. You cannot make Bamboo Chicken without bamboo!"
      },
      {
            "text": "After filling the bamboo completely with the marinated chicken, how is the open end sealed?",
            "options": [
                  "With a wooden cork",
                  "By closing it tightly with leaves",
                  "With wet mud clay",
                  "By tying a cotton cloth around it"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Nature provides the pot (the bamboo) and nature provides the lid (the leaves)."
      },
      {
            "text": "How is the stuffed bamboo actually cooked in this traditional method?",
            "options": [
                  "It is boiled in a large pot of water",
                  "It is baked inside a closed oven",
                  "It is deep-fried in hot oil",
                  "It is roasted directly over an open fire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: It is roasted directly over an open fire."
      }
    ] }
  },
  {
    id: 'cul8', title: 'Forest Conservation Traditions', category: 'Culture',
    description: 'Explore how tribal communities have protected the forests through sacred groves and beliefs.',
    thumbnailUrl: 'https://static.scientificamerican.com/sciam/cache/file/D255D452-1E9D-485C-9DF6CC06420E4E3F_source.jpg?w=1200',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Sacred Groves', videoUrl: 'https://www.youtube.com/embed/tI4_wOlFtQk', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "According to the video, why do farmers leave their tools and produce at the farm without fear of theft?",
            "options": [
                  "The local police patrol the area constantly",
                  "They believe a forest deity protects their farmlands",
                  "They have hidden cameras installed",
                  "The farms are surrounded by high electric fences"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The ultimate, invisible security guard is their faith."
      },
      {
            "text": "What do the locals believe will happen if they stay back at the farm to guard their produce after dusk?",
            "options": [
                  "Wild animals will attack them",
                  "They will be arrested for trespassing",
                  "The gods will get annoyed and scare them away",
                  "The crops will magically wither"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The night shift belongs exclusively to the gods."
      },
      {
            "text": "Because the forest is considered the deity's home, what self-imposed rule do the communities follow?",
            "options": [
                  "They never enter the forest without shoes",
                  "They strictly ban the felling of trees or even collecting dead wood",
                  "They only cut trees during full moon nights",
                  "They burn a small patch of forest every year"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: If it is God's house, you do not even take a broken twig from the furniture."
      },
      {
            "text": "According to local belief, what specific comfort do the forest trees provide to the Gods?",
            "options": [
                  "Fruit to eat",
                  "Flowers for decoration",
                  "Shade",
                  "Music from the rustling leaves"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Just like humans need a roof, the deities need the green shade of the canopy."
      },
      {
            "text": "Which country holds the record for having the highest number of sacred groves in the world?",
            "options": [
                  "Brazil",
                  "Indonesia",
                  "India",
                  "Japan"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: India's deep roots in nature worship give it the global number one spot here."
      },
      {
            "text": "The researcher in the video travels to which specific location in Karnataka to study these groves?",
            "options": [
                  "Bengaluru",
                  "Siddapur",
                  "Mysuru",
                  "Hampi"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"Siddapur\" sounds like a place of \"Siddhas\" (enlightened beings), fitting for sacred forests."
      },
      {
            "text": "How is the landscape of Siddapur described in the documentary?",
            "options": [
                  "A barren desert with isolated oases",
                  "A pure, unbroken dense jungle",
                  "A heterogeneous mosaic landscape of villages, farmlands, forests, and spice gardens",
                  "A massive industrial concrete zone"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Mosaic\" means a mix of different colorful tiles. Siddapur is a mix of different land types."
      },
      {
            "text": "What crucial ecosystem service do the grove trees perform regarding rainfall?",
            "options": [
                  "They block rain from flooding the farms",
                  "They collect monsoon rains and gradually release water in the summer",
                  "They completely absorb all water, leaving the farms dry",
                  "They purify acid rain"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Think of the forest as a giant natural water tank that fills up in the monsoon and leaks slowly in the summer."
      },
      {
            "text": "Aside from water, what important creatures find a safe home inside these sacred groves?",
            "options": [
                  "Dangerous invasive pests",
                  "Crop pollinators",
                  "Deep sea birds",
                  "Domestic cattle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Without the forest bees and butterflies, the nearby farmlands would fail to grow food."
      },
      {
            "text": "Sacred groves act as essential \"banks\" for what specific biological material?",
            "options": [
                  "Fossil fuels",
                  "Medicinal animal venom",
                  "Seeds for the enrichment of degraded secondary forests",
                  "Rare types of soil"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: When the outside forest gets destroyed, the sacred grove is the \"seed bank\" used to replant it."
      },
      {
            "text": "How do the local communities describe the temperature of the sacred grove during the hot season?",
            "options": [
                  "It is dangerously humid",
                  "It is prone to intense forest fires",
                  "It is the only cool place in summer",
                  "It traps heat like a greenhouse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Pure, dense tree cover acts as nature's absolute best air conditioner."
      },
      {
            "text": "The documentary reveals a worrying trend about the cultural values protecting these groves. What is it?",
            "options": [
                  "The beliefs are becoming too extreme",
                  "The beliefs are weakening across generations",
                  "The beliefs are spreading to big cities",
                  "The beliefs have remained exactly the same for millennia"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: As modern times roll in, the younger generation's faith in the old forest gods is slowly fading."
      },
      {
            "text": "What is one of the modern threats causing the disappearance of sacred groves in India?",
            "options": [
                  "Ambiguous property rights and market forces",
                  "Overpopulation of wild tigers",
                  "Excessive rainfall causing root rot",
                  "Strict new government protection laws"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: When it is unclear who legally owns the land, greedy market forces sweep in to clear it."
      },
      {
            "text": "What is the economic reality of the people who protect these natural sacred groves?",
            "options": [
                  "They are wealthy plantation owners",
                  "They are highly paid government rangers",
                  "They are economically weak daily wage workers or subsistence farmers",
                  "They are rich corporate investors"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The greatest wealth of nature is protected by people with the least amount of money."
      },
      {
            "text": "Despite preserving rich ecosystems, what basic amenities do these protector villages currently lack?",
            "options": [
                  "Movie theaters and malls",
                  "Adequate health facilities and connectivity",
                  "Fast food chains",
                  "International airports"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: They save the environment, but struggle to find a basic doctor or a paved road for themselves."
      },
      {
            "text": "To sustain their conservation efforts, what economic solution does the video suggest exploring?",
            "options": [
                  "Heavily taxing the villagers",
                  "Valuation and payment of ecosystem services",
                  "Selling the timber to the highest bidder",
                  "Turning the groves into luxury resorts"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: We must literally \"pay\" them for the invisible services (water, air, pollinators) their forest provides to the world."
      },
      {
            "text": "Beyond just economic support, what is considered quintessential for these protectors?",
            "options": [
                  "Giving them modern weapons",
                  "Moving them to urban cities",
                  "Basic recognition and appreciation of their cultural values",
                  "Forcing them to adopt mainstream religions"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Money helps, but genuine respect for their ancient traditions is the true key to success."
      },
      {
            "text": "What combination does the documentary propose as a sustainable model for nature protection?",
            "options": [
                  "Total corporate takeover",
                  "Complete abandonment of the land",
                  "Formal means coupled with informal community-led protection",
                  "Replacing natural forests with artificial parks"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Teamwork wins. Mix official government support with the powerful traditional faith of the locals."
      },
      {
            "text": "At the beginning of the video, what specific ratio of farmland to forest is mentioned as an example?",
            "options": [
                  "100 hectares of farm to 50 hectares of forest",
                  "20 hectares of farmland with 2 hectares of pristine natural forest at the center",
                  "5 hectares of farm to 10 hectares of forest",
                  "1000 hectares of farm to 1 hectare of forest"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Just a tiny 2-hectare heart of forest is enough to pump life into 20 hectares of farmland."
      },
      {
            "text": "The video concludes by stating that the \"essence of India\" is found in what?",
            "options": [
                  "Rapid industrial growth",
                  "Its massive software industry",
                  "Diversity in flora, fauna, and culture",
                  "Its unified, single language system"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The beauty of India lies in its rich mixture of nature, animals, and diverse tribal traditions."
      }
    ] }
  },
 {
    id: 'cul9', title: 'Tribal Wedding Customs', category: 'Culture',
    description: 'A detailed look into the unique marriage rituals and celebrations in tribal societies.',
    thumbnailUrl: 'https://images.hindustantimes.com/img/2022/02/16/1600x900/40d4ab48-8f47-11ec-8f85-f61ca7726687_1645036400968.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Tribal Wedding Customs', videoUrl: 'https://www.youtube.com/embed/sb46Ml7YkKI', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What specific type of traditional wedding is showcased in this documentary?",
            "options": [
                  "Court marriage",
                  "Love marriage",
                  "Daari Pelli (Path Wedding)",
                  "Arranged marriage"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: 'Daari' means 'Path/Way' in Telugu. It is a unique symbolic wedding tradition of the tribes."
      },
      {
            "text": "What are the ages of the children participating in this symbolic tribal wedding?",
            "options": [
                  "15-year-old boy and 15-year-old girl",
                  "25-year-old boy and 20-year-old girl",
                  "20-year-old boy and 18-year-old girl",
                  "10-year-old boy and 5-year-old girl"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Remember the narrator's opening line stating the wedding is between a 10-year-old \"babu\" and a 5-year-old \"papa.\""
      },
      {
            "text": "In which district of Andhra Pradesh is this tribal village located?",
            "options": [
                  "Visakhapatnam",
                  "Alluri Sitarama Raju (ASR) district",
                  "East Godavari",
                  "Srikakulam"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: ASR! This tribal district is named after the legendary freedom fighter Alluri Sitarama Raju."
      },
      {
            "text": "What is the core concept and purpose behind the \"Daari Pelli\" (Path Wedding)?",
            "options": [
                  "To forcefully unite two enemy tribes",
                  "To receive financial aid from the government",
                  "To tie a knot of permanent friendship between two families so they can support each other during hardships",
                  "To avoid paying a dowry"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: By matching their stars, two families form a 'Sneham' (Friendship) bond to act as a lifelong support system for each other."
      },
      {
            "text": "Instead of sacrificing animals or breaking coconuts, what vow (mokku) do these tribes make when their wishes come true?",
            "options": [
                  "To donate gold and silver",
                  "To bathe in a holy river",
                  "To sacrifice goats and chickens",
                  "To perform a 'Daari Pelli' (Path Wedding) for their children"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: While outsiders might offer physical sacrifices to gods, these tribes offer to create a beautiful bond of friendship (Daari Pelli) between two children."
      },
      {
            "text": "What is the title of the spiritual person who guides the village in marriages, festivals, and medicine?",
            "options": [
                  "Gurumaya",
                  "Sarpanch",
                  "Collector",
                  "Village Doctor"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: 'Guru' (teacher/guide) + 'Maya' (magic/spirit). They are the spiritual guides for all major village events."
      },
      {
            "text": "How do the Gurumayas find out the exact auspicious time for the wedding?",
            "options": [
                  "By searching the internet",
                  "By sitting with some women and performing a puja until they go into a spiritual trance (possessed by deities)",
                  "By checking a printed calendar",
                  "By asking the village elders to vote"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: They rely entirely on spiritual connection. The deities themselves announce the time when the women enter a trance (poonakalu)."
      },
      {
            "text": "Which three types of saplings are planted in the hole dug at the center of the wedding pandal?",
            "options": [
                  "Neem, Tulsi, and Rose",
                  "Banyan, Peepal, and Ashoka",
                  "Banana, Mango, and Neredu (Jamun)",
                  "Coconut, Papaya, and Guava"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Think of sweet, forest-grown fruits! Banana, Mango, and Jamun saplings are brought straight from the hills."
      },
      {
            "text": "According to the documentary, what is the biggest infrastructure problem these three villages have faced for the last 10 years?",
            "options": [
                  "Lack of mobile network",
                  "There is no bridge over the river, forcing them to walk through dangerous waters",
                  "Lack of electricity",
                  "Lack of a shopping mall"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The bridge was destroyed in a cyclone 10 years ago, leaving them dangerously disconnected during medical emergencies and monsoons."
      },
      {
            "text": "Where are the children of this village currently studying?",
            "options": [
                  "In a neighboring city's boarding school",
                  "Sitting on the mud near their broken school, surrounded by a makeshift wall of tin sheets and leaves",
                  "Online via smartphones",
                  "Inside a large concrete government building"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A storm destroyed their school building, so the villagers built a small, fragile temporary shelter for the kids to sit on the mud and study."
      },
      {
            "text": "What is the main source of drinking water for these villagers?",
            "options": [
                  "Bottled mineral water",
                  "Regular municipal water tankers",
                  "Deep borewells with electric pumps",
                  "Natural spring water flowing down from the hills (Oota neeru)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: They have a water tank, but it doesn't work. They survive on the natural, raw water trickling down from the mountains."
      },
      {
            "text": "When the Gurumaya and the women go into a midnight trance, what do they hold in their hands while dancing?",
            "options": [
                  "Flowers",
                  "Swords/Knives (Kattelu)",
                  "Bamboo sticks",
                  "Oil lamps"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The spiritual possession is intense and fierce. They dance energetically with sharp swords to the beat of the traditional drums (Dappu)."
      },
      {
            "text": "In one of the villages shown, everyone moved away except for how many families?",
            "options": [
                  "Only 1 family",
                  "10 families",
                  "5 families",
                  "Half the village"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Because their old houses were destroyed by storms, the government gave them new houses elsewhere. However, exactly one family did not get a new house and lives completely alone in the abandoned village."
      },
      {
            "text": "What is the main highlight on the second day of the wedding involving the Gurumayas?",
            "options": [
                  "Riding a decorated horse",
                  "Swinging on a swing made out of sharp thorns (Mullulatho kattina uyyala)",
                  "Swimming across the river",
                  "Driving a car through the village"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: To demonstrate the power of the deities possessing them, they comfortably sit and swing on a seat made entirely of piercing thorns."
      },
      {
            "text": "What ritual marks the end of the Daari Pelli ceremony?",
            "options": [
                  "Cutting a wedding cake",
                  "Lighting a large bonfire",
                  "Bursting firecrackers",
                  "The villagers collectively pouring water from pots over the children"
            ],
            "correctAnswerIndex": 3
      }
    ] }
  },
  {
    id: 'cul10', title: 'Ancient Tribal Architecture', category: 'Culture',
    description: 'Learn about the sustainable and climate-resilient housing designs of the tribes.',
    thumbnailUrl: 'https://kaarwan.s3.amazonaws.com/public/blog/media/640px-todahut.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Tribal Housing Designs', videoUrl: 'https://www.youtube.com/embed/HHRUUP5770o', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "Which tribal community's traditional house is featured in this video?",
            "options": [
                  "Gond",
                  "Jatapu",
                  "Santhal",
                  "Chenchu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The video's title and entire focus is on the Jatapu tribe."
      },
      {
            "text": "What is the local name given to the traditional house of the Jatapu tribe?",
            "options": [
                  "Kutir",
                  "Purilu",
                  "Bhunga",
                  "Machan"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Imagine a \"Puri\" (the food) shaped like a small hut. \"Purilu\" is their traditional house."
      },
      {
            "text": "The Jatapu tribe primarily lives in the north coastal region of which Indian state?",
            "options": [
                  "Odisha",
                  "Kerala",
                  "Andhra Pradesh",
                  "Tamil Nadu"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Dr. Shankar Rao explicitly mentions they are from the Vizianagaram district of Andhra Pradesh."
      },
      {
            "text": "What language do the Jatapu people speak when they are in the hills?",
            "options": [
                  "Kui / Kuvi language",
                  "Pure Telugu",
                  "Hindi",
                  "Tamil"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: In the plains, they speak Telugu to communicate with others, but in the hills (their core area), they speak their native Dravidian language, Kuvi."
      },
      {
            "text": "What are the principal, locally available materials used to construct a \"Purilu\"?",
            "options": [
                  "Cement, iron rods, and glass",
                  "Mud bricks, bamboo wattle, wooden poles, and grass",
                  "Burned clay tiles and limestone",
                  "Corrugated tin sheets and plastic"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Tribal architecture relies purely on nature. Mud, bamboo, wood, and grass are the foundation of a traditional eco-friendly home."
      },
      {
            "text": "What specific type of locally available grass is considered highly important for roofing the Jatapu house?",
            "options": [
                  "Elephant grass",
                  "Bamboo leaves",
                  "Dharba Gaddi (Dharmagadhi)",
                  "Palm leaves"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Dharma\" means duty/religion. This grass does its \"duty\" of protecting the house from weather."
      },
      {
            "text": "According to Jatapu belief, what is the main benefit of using Dharba grass for the roof?",
            "options": [
                  "It is fireproof",
                  "It gives a good, healthy environment (warm in winter, cool in summer)",
                  "It keeps wild animals away",
                  "It changes color every season"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Nature's air conditioner! It insulates the house perfectly."
      },
      {
            "text": "The traditional Jatapu house is mainly divided into how many portions?",
            "options": [
                  "Two",
                  "Three",
                  "Four",
                  "Five"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Think of a basic timeline: Past, Present, Future. The house has three main parts: Front (leisure), Center (main living/agreements), and Back (cooking)."
      },
      {
            "text": "What is the front portion of the house called, which is mainly used for leisure activities and sitting after work?",
            "options": [
                  "Gadapa",
                  "Vantagadhi",
                  "Aynilu",
                  "Veranda"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: \"Gadapa\" in Telugu means threshold or doorstep. It's the front entrance area where people sit."
      },
      {
            "text": "What is the central, most prominent room of the house called?",
            "options": [
                  "Gadapa",
                  "Vantagadhi",
                  "Aynilu (Inlaw)",
                  "Kitchen"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Think of it as the \"Eye\" (Ayn) of the house. It is the center of all major family and social events."
      },
      {
            "text": "Inside the central room (Aynilu), there is a grinding hole (Royal gunta). What is its major social significance?",
            "options": [
                  "It is only used to grind expensive spices",
                  "All strict social agreements, promises, and money exchanges are finalized in its presence",
                  "It is a secret hiding place for gold",
                  "It is a place to worship rain gods"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The grinding stone is the ultimate \"witness.\" If a promise is made near the grinding hole, a Jatapu will never break it."
      },
      {
            "text": "What is the back portion of the house called, which is meant for cooking food?",
            "options": [
                  "Gadapa",
                  "Aynilu",
                  "Vantagadhi",
                  "Royal gunta"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Vanta\" means cooking in Telugu, and \"Gadhi\" means room. So, Vantagadhi = Cooking room."
      },
      {
            "text": "How often does the wild Dharba grass (used for the roof) grow in the forest, acting as a sign of a healthy ecosystem?",
            "options": [
                  "Every month",
                  "Once in 2 years",
                  "Once in 10 years",
                  "Twice a year"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It's rare! It takes two full years for a healthy forest to produce this special grass."
      },
      {
            "text": "How often do the Jatapu people replace and retouch the grass roof of their house?",
            "options": [
                  "Every 1 year",
                  "Every 5 years",
                  "Every 10 years",
                  "Never, it lasts forever"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Just like the government has a 5-year plan, the Jatapu have a 5-year roof replacement plan!"
      },
      {
            "text": "As the children grow up and get married, how does the Jatapu house expand?",
            "options": [
                  "They build extra floors on top (vertically)",
                  "They build a completely separate house in another village",
                  "It gradually expands linearly from both sides (left and right) of the main house",
                  "They build underground rooms"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: They value family bonding. Instead of moving away, the sons build rooms attached to the left and right of the parents' house, creating a long line (linear expansion)."
      },
      {
            "text": "Why is the roof of the Purilu designed with a \"slant\" (slope)?",
            "options": [
                  "Because it looks modern",
                  "To prevent the house from being damaged by frequent high winds in the coastal, cyclone-prone area",
                  "Because flat roofs are too expensive",
                  "So that monkeys can slide off"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A slanted roof acts like an aerodynamic shield against heavy coastal storms."
      },
      {
            "text": "What do the Jatapu people use every day to clean their house floors and walls, keeping it ecologically friendly?",
            "options": [
                  "Chemical bleach",
                  "Cow dung",
                  "Synthetic paint",
                  "Saltwater"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Cow dung has natural antiseptic properties and is the traditional Indian way to purify a mud house."
      },
      {
            "text": "What do the Jatapu people do with all their collected bio-waste and cattle dung?",
            "options": [
                  "They throw it in the river",
                  "They burn it immediately",
                  "They dump it in a compost pit 20-25 meters away and use it as organic manure for agriculture",
                  "They sell it to factories"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Zero waste! Today's \"modern\" composting has been a traditional practice for them for centuries."
      },
      {
            "text": "Why do the Jatapu people NOT treat their house purely as a \"property\" or real estate?",
            "options": [
                  "Because the government owns it",
                  "Because it is a collective community effort where relatives bring wood and grass to build it together",
                  "Because they only live in it for a few months",
                  "Because it has no monetary value"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A house built by the love and labor of the community belongs to the community, not just a single owner."
      },
      {
            "text": "In the front portion of the house (outside), what do the Jatapu people usually plant due to their aesthetic sense?",
            "options": [
                  "Poisonous thorny bushes",
                  "Large timber trees",
                  "Flowering species like roses and marigolds",
                  "Only medicinal herbs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: They love beauty! While they grow vegetables and jackfruit in the back, the front is reserved for beautiful, welcoming flowers."
      }
    ] }
  },
  // --- SKILL (10) ---
 {
    id: 'sk1', title: 'Advanced Bamboo Crafting', category: 'Skill',
    description: 'Learn to create intricate baskets, furniture, and decorative items using bamboo.',
    thumbnailUrl: 'https://static.gltjp.com/glt/data/article/21000/20894/20250104_003542_9b2f8592_w1920.webp',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Bamboo Preparation', videoUrl: 'https://www.youtube.com/embed/RdWBiiIgX0M', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary natural material used by the tribals to make the handicrafts and furniture shown in the video?",
            "options": [
                  "Teak wood",
                  "Bamboo",
                  "Plastic",
                  "Iron"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The video title and the core focus of the program is all about transforming simple bamboo grass into valuable art."
      },
      {
            "text": "According to the video title, what is the impressive investment-to-return ratio for this bamboo handicraft skill?",
            "options": [
                  "Rs 100 investment for a Rs 1,000 return",
                  "Rs 500 investment for a Rs 2,000 return",
                  "Rs 200 investment for a Rs 4,000 return",
                  "Rs 1,000 investment for a Rs 5,000 return"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Just remember \"2 to 40\" (200 turns into 4000). It is a highly profitable skill with very low capital cost."
      },
      {
            "text": "Which specific region or mandal in Andhra Pradesh is highlighted in the video for these tribal agricultural and handicraft activities?",
            "options": [
                  "Araku",
                  "Seethampeta",
                  "Paderu",
                  "Lambasingi"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The news tickers at the bottom of the video repeatedly flash \"Seethampeta\" as the center of these tribal development activities."
      },
      {
            "text": "Which organization is mentioned as spreading awareness and providing training to the tribals on nurseries, orchards, and vegetable cultivation?",
            "options": [
                  "WHO",
                  "UNESCO",
                  "ARTS Organization",
                  "Green Peace"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: They are teaching the \"art\" of farming and handicrafts, so the organization is suitably named ARTS."
      },
      {
            "text": "Why is bamboo highly recommended for modern lifestyle furniture?",
            "options": [
                  "It is extremely heavy and hard to move",
                  "It is a natural, eco-friendly, and sustainable alternative to plastic",
                  "It melts easily in the sun",
                  "It is more expensive than gold"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Bamboo grows fast and leaves zero carbon footprint, making it the perfect \"green\" choice for modern homes."
      },
      {
            "text": "What type of farming are the tribal farmers of Seethampeta primarily practicing, as shown in the video captions?",
            "options": [
                  "Heavy chemical farming",
                  "Corporate hydroponics",
                  "Comprehensive natural farming (Samagra Prakruthi Vyavasayam)",
                  "Genetically modified farming"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Tribals stay close to nature, so they rely entirely on natural, chemical-free agricultural methods."
      },
      {
            "text": "Which of the following forest fruits do the tribals naturally collect from the hills to sell?",
            "options": [
                  "Apples",
                  "Strawberries",
                  "Custard apples (Seethaphalalu)",
                  "Pineapples"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Connect the name of the place \"Seethampeta\" with the fruit \"Seethaphalalu\" (Custard apples)."
      },
      {
            "text": "Which of the following rare spices is specifically mentioned as being grown and sold by these tribal farmers?",
            "options": [
                  "Saffron",
                  "Black Turmeric (Nalla Pasupu)",
                  "Green Cardamom",
                  "White Pepper"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Regular turmeric is yellow, but they grow a special, highly medicinal variety called Black Turmeric."
      },
      {
            "text": "According to the experts in the video, how does bamboo furniture benefit the human body?",
            "options": [
                  "It causes radiation",
                  "It increases physical stress",
                  "It is human-friendly, supports the backbone, and provides relaxation",
                  "It causes allergic reactions"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Bamboo naturally flexes and breathes, offering excellent ergonomic support and cooling for the back."
      },
      {
            "text": "What is the ultimate goal of teaching these inherent bamboo skills to the tribal communities?",
            "options": [
                  "To make them leave the forest and move to cities",
                  "To encourage entrepreneurship and improve their financial livelihood",
                  "To force them to work in factories",
                  "To stop them from doing any farming"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The ultimate goal is to encourage entrepreneurship and improve their financial livelihood."
      }
    ] }
  },
  {
    id: 'sk2', title: 'Traditional Pottery Making', category: 'Skill',
    description: 'Master the art of shaping clay into beautiful and functional pots and vessels.',
    thumbnailUrl: 'https://img.freepik.com/premium-photo/traditional-pottery-making-close-up-potter-s-hands-shaping-bowl_390194-2706.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Pottery Basics', videoUrl: 'https://www.youtube.com/embed/YXva7re5YkQ', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary natural material being used to make the pot in the video?",
            "options": [
                  "Plaster of Paris",
                  "Clay",
                  "Glass",
                  "Metal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The video title literally says \"Making a Clay Pot.\" Clay is the universal natural earth material used for traditional pottery."
      },
      {
            "text": "What is the traditional spinning tool used by the artisan to shape the pot?",
            "options": [
                  "Handloom",
                  "Pottery Wheel",
                  "Grinding Stone",
                  "Sewing Machine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A wheel spins round and round, allowing the potter to create perfectly round shapes!"
      },
      {
            "text": "In which famous tourist and tribal region of Andhra Pradesh is this video shot?",
            "options": [
                  "Araku Valley",
                  "Spiti Valley",
                  "Lambasingi",
                  "Tirupati"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The title highlights #Araku Valley, a place very famous for its rich tribal culture and traditional crafts."
      },
      {
            "text": "What is the primary motion of the pottery wheel that helps in shaping the clay?",
            "options": [
                  "Bouncing up and down",
                  "Moving side to side",
                  "Spinning continuously in a circular motion",
                  "Vibrating slowly"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Centrifugal force! The continuous circular spin is what pulls the clay upwards and outwards to form a hollow pot."
      },
      {
            "text": "What does the artisan primarily use to mold and shape the wet clay while it is spinning on the wheel?",
            "options": [
                  "A sharp metal knife",
                  "A wooden hammer",
                  "Their bare hands and fingers",
                  "A hot iron rod"
            ],
            "correctAnswerIndex": 2
      }
    ] }
  },
  {
    id: 'sk3', title: 'Handloom Weaving Techniques', category: 'Skill',
    description: 'Learn the traditional methods of weaving fabrics using a handloom.',
    thumbnailUrl: 'https://loremflickr.com/640/360/weaving,fabric?lock=112',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Handloom Basics', videoUrl: 'https://www.youtube.com/embed/c8xyBWyDA6U', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "Which town in Andhra Pradesh is famously known across India for its unique, highly specialized Khadi weaving?",
            "options": [
                  "Mangalagiri",
                  "Dharmavaram",
                  "Ponduru",
                  "Pochampally"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The video title and the big green signboards at the beginning clearly welcome you to \"Ponduru.\""
      },
      {
            "text": "Ponduru is located in which district of Andhra Pradesh?",
            "options": [
                  "Visakhapatnam",
                  "Srikakulam",
                  "East Godavari",
                  "Chittoor"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Srikakulam is the northernmost coastal district of AP, the proud home of this historic craft."
      },
      {
            "text": "Which iconic Indian freedom fighter historically preferred wearing Khadi specifically made in Ponduru?",
            "options": [
                  "Jawaharlal Nehru",
                  "Subhas Chandra Bose",
                  "Mahatma Gandhi",
                  "Sardar Vallabhbhai Patel"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: There is a prominent statue of Mahatma Gandhi right inside the weaving society's campus because he famously loved Ponduru Khadi."
      },
      {
            "text": "What is the name of the main Khadi association/society in Ponduru shown on the entry boards?",
            "options": [
                  "National Handloom Society",
                  "A.F.K.K. Sangham (Andhra Fine Khadi Karmikabhivruddhi Sangham)",
                  "Srikakulam Weavers Union",
                  "Gandhi Textile Group"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A.F.K.K. stands for \"Andhra Fine Khadi.\" They make the finest khadi in the state!"
      },
      {
            "text": "According to the welcome board shown at the A.F.K.K. Sangham, which prominent Indian Union Minister visited this facility?",
            "options": [
                  "Smt. Nirmala Sitharaman",
                  "Smt. Smriti Irani",
                  "Shri Amit Shah",
                  "Shri Nitin Gadkari"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The big welcome banner explicitly bears the name of Finance Minister Nirmala Sitharamanjee."
      },
      {
            "text": "What is the primary raw material used to weave Ponduru Khadi?",
            "options": [
                  "Synthetic Nylon",
                  "Raw Punasa Cotton",
                  "Silk worms",
                  "Jute fiber"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Khadi is always made from pure, natural cotton. In this region, short-staple hill cotton is often used."
      },
      {
            "text": "In the traditional Ponduru process, what unique natural tool do the women use to comb and clean the raw cotton?",
            "options": [
                  "A plastic brush",
                  "An iron comb",
                  "The jawbone of the Valuga fish",
                  "A wooden spatula"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: This is the most unique fact about Ponduru! The sharp, natural teeth of the Valuga fish jawbone clean the cotton without breaking the delicate fibers."
      },
      {
            "text": "What hand-cranked wooden device is used by the women to separate the seeds from the raw cotton?",
            "options": [
                  "A Power loom",
                  "A Ginning roller (Charkha mechanism)",
                  "A Sewing machine",
                  "A Grinding stone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The small wooden rollers squeeze the cotton, popping the hard seeds out while letting the soft cotton pass through."
      },
      {
            "text": "What tool is used by the women sitting in the village to spin the fluffy cotton into fine yarn?",
            "options": [
                  "The traditional Charkha (Spinning Wheel)",
                  "An electric motor spindle",
                  "A drop spindle",
                  "A hand drill"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The Charkha is the ultimate symbol of Khadi and the Swadeshi movement."
      },
      {
            "text": "In the middle of the documentary, where are the men seen washing and treating the long bundles of cotton yarn?",
            "options": [
                  "Inside modern washing machines",
                  "In a local natural pond/water body",
                  "In chemical acid tanks",
                  "In boiling oil"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The yarn is treated naturally by soaking and washing it in village ponds, keeping the process 100% eco-friendly."
      },
      {
            "text": "What type of looms do the artisans of Ponduru use to weave the final cloth?",
            "options": [
                  "Automated Power Looms",
                  "Traditional wooden handlooms (Pit looms)",
                  "Solar-powered looms",
                  "3D Printing looms"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: To be authentic Khadi, the weaving must be done entirely by human hands and feet on a handloom."
      },
      {
            "text": "What makes Ponduru Khadi entirely unique compared to regular factory-made cotton clothes?",
            "options": [
                  "It is 100% hand-spun and hand-woven",
                  "It is entirely waterproof",
                  "It is made of plastic threads",
                  "It only comes in black color"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: From cleaning to spinning to weaving, no electricity or modern machinery is used."
      },
      {
            "text": "What is the name of the official retail showroom shown in the video where the finished clothes are sold?",
            "options": [
                  "Reliance Trends",
                  "Gandhi Khadi Vastralayam",
                  "Ponduru Silks",
                  "Srikakulam Cottons"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"Vastralayam\" means clothing store. It honors Gandhi, the biggest ambassador of Khadi."
      },
      {
            "text": "How is the skill of Ponduru Khadi weaving primarily kept alive today?",
            "options": [
                  "Through large corporate training centers",
                  "By foreign universities",
                  "It is passed down from generation to generation within the weaver families",
                  "Through online internet courses"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It is a heritage family craft. Elders teach the children right inside their homes."
      },
      {
            "text": "Which of the following garments is a staple product made by the Ponduru weavers?",
            "options": [
                  "Leather jackets",
                  "Woolen sweaters",
                  "Fine cotton sarees and dhotis",
                  "Nylon tracksuits"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The video beautifully showcases the finished cotton sarees with colorful borders alongside traditional white dhotis."
      },
      {
            "text": "What physical characteristic makes wearing Ponduru Khadi highly desirable in the Indian climate?",
            "options": [
                  "It traps heat and makes you sweat",
                  "It is highly breathable, keeping you cool in summer and warm in winter",
                  "It is heavier than denim",
                  "It reflects sunlight like a mirror"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Hand-spun fabric has natural air pockets, making it the perfect climate-control clothing."
      },
      {
            "text": "What is the main objective of the A.F.K.K. Sangham in Ponduru?",
            "options": [
                  "To export fish",
                  "To protect traditional weavers, provide employment, and preserve authentic Khadi",
                  "To build IT parks",
                  "To manufacture chemical dyes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"Sangham\" means society/union. They exist to protect the rights and livelihoods of the local artisans."
      },
      {
            "text": "The Ponduru Khadi process is a perfect example of which historical Indian movement?",
            "options": [
                  "The Green Revolution",
                  "The Swadeshi Movement (Self-reliance)",
                  "The White Revolution",
                  "The Industrial Revolution"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Making your own cloth using local cotton and a Charkha is the very definition of Swadeshi."
      },
      {
            "text": "At what stage of the process is the raw cotton transformed into yarn?",
            "options": [
                  "Ginning",
                  "Weaving",
                  "Spinning",
                  "Dyeing"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The Charkha \"spins\" the loose cotton fibers into a strong, continuous thread (yarn)."
      },
      {
            "text": "Why do the women repeatedly roll the cotton into small cylindrical shapes before spinning?",
            "options": [
                  "To change its color",
                  "To make \"Punis\" (cotton slivers) which are easier to feed into the spinning wheel",
                  "To extract oil from the cotton",
                  "To weigh the cotton accurately"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: To make \"Punis\" (cotton slivers) which are easier to feed into the spinning wheel."
      }
    ] }
  },
  {
    id: 'sk4', title: 'Organic Farming Basics', category: 'Skill',
    description: 'Understand the principles of growing crops without synthetic chemicals.',
    thumbnailUrl: 'https://imgs.mongabay.com/wp-content/uploads/sites/30/2023/07/31114045/Agriculture-field-work.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Composting and Soil Health', videoUrl: 'https://www.youtube.com/embed/T73AwHfJeUM', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the name of the farmer sharing his natural farming experience in the video?",
            "options": [
                  "Subhash Palekar",
                  "Srinivasa Reddy",
                  "Ramana Naidu",
                  "Venkata Rao"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The video starts with the interviewer asking for his details, and he introduces himself as Srinivasa Reddy."
      },
      {
            "text": "What type of farming does the farmer practice and advocate for?",
            "options": [
                  "Hydroponic farming",
                  "Heavy chemical farming",
                  "Prakruthi Vyavasayam (Natural/Chemical-free farming)",
                  "Genetically Modified (GM) farming"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Prakruthi\" means Nature. He is farming exactly as nature intended, without artificial chemicals."
      },
      {
            "text": "What is the main crop cultivated by the farmer in his field?",
            "options": [
                  "Wheat",
                  "Paddy / Rice",
                  "Sugarcane",
                  "Cotton"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You can clearly see the lush green and black paddy (rice) fields swaying behind him during the interview."
      },
      {
            "text": "Who inspired the farmer to follow these chemical-free methods?",
            "options": [
                  "Modern chemical scientists",
                  "Foreign agricultural universities",
                  "The traditional methods of his ancestors (Taatalu)",
                  "Corporate pesticide companies"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Before chemicals were invented, our ancestors successfully farmed for thousands of years using pure natural science."
      },
      {
            "text": "Which of the following does the farmer use to enrich the soil instead of chemical Urea?",
            "options": [
                  "Plastic waste",
                  "Synthetic ammonia",
                  "Cow dung, Neem cake, and Groundnut cake",
                  "Bleaching powder"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: He uses natural organic waste like \"Aavu peda\" (cow dung) and natural oil cakes (Chekka) which safely release nutrients into the soil."
      },
      {
            "text": "What are the main ingredients used to make \"Ghana Jivamrutham\" (a natural solid fertilizer)?",
            "options": [
                  "Factory waste and soil",
                  "Cow dung, cow urine, jaggery, and pulse flour",
                  "Salt and limestone",
                  "Artificial enzymes and water"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Jaggery and pulse flour act as sweet food for the good bacteria present in the cow dung and urine!"
      },
      {
            "text": "According to the farmer, what happens to the soil when chemical fertilizers are continuously applied?",
            "options": [
                  "It becomes highly fertile forever",
                  "It forms a hard, cement-like layer on the top",
                  "It smells like fresh rain",
                  "It turns into pure beach sand"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Chemicals destroy the soil's natural structure, baking it into a dead, hard \"cement\" crust where roots struggle to breathe."
      },
      {
            "text": "How do natural farming methods physically transform the soil over a few years?",
            "options": [
                  "The soil becomes highly acidic",
                  "The soil catches fire easily",
                  "The soil gradually heals and becomes naturally soft, loose, and fertile",
                  "The soil turns completely white"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: When you stop poisoning the soil, earthworms and good bacteria return to naturally loosen and soften the earth."
      },
      {
            "text": "What severe warning does the farmer give regarding the local drinking water near chemical farms?",
            "options": [
                  "It becomes naturally purified",
                  "The chemicals seep deep into the ground, turning the groundwater toxic",
                  "The water tastes like honey",
                  "It evaporates completely"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: What you spray on the ground eventually washes down into the wells and borewells that people drink from."
      },
      {
            "text": "What kind of seeds does the farmer strictly recommend for natural farming?",
            "options": [
                  "Expensive imported seeds",
                  "Genetically modified laboratory seeds",
                  "Native/Desi seeds (Naatu vitthanum)",
                  "Artificial hybrid seeds"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Naatu\" means local/native. These ancient seeds have naturally adapted to the Indian climate and soil."
      },
      {
            "text": "What is a major natural advantage of using Native (Naatu) seeds?",
            "options": [
                  "They require heavy chemical fertilizers to survive",
                  "They are naturally highly resistant to pests and diseases",
                  "They produce blue-colored rice",
                  "They die within a week of planting"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Native seeds are the tough survivors of nature. They don't fall sick easily!"
      },
      {
            "text": "How tall do the native paddy plants typically grow according to the farmer?",
            "options": [
                  "1 to 2 feet",
                  "3 to 4 feet",
                  "6 to 7 feet",
                  "Over 10 feet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Native paddy plants grow incredibly tall (almost taller than a human) compared to the short, chemically dependent modern varieties."
      },
      {
            "text": "How does the farmer handle weed control without using chemical weed-killers (Kalupu Mandu)?",
            "options": [
                  "He sets the weeds on fire",
                  "He uses acid sprays",
                  "He removes them manually with human labor",
                  "He covers the field with thick plastic sheets"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: No shortcuts! He completely avoids toxic weedicides and relies on traditional manual labor to clear the unwanted grass."
      },
      {
            "text": "What does the farmer spray to control pests and insects on his crops?",
            "options": [
                  "Chemical insecticides",
                  "Natural decoctions/Kashayams (e.g., garlic, green chilli, and neem extracts)",
                  "Diesel and petrol",
                  "Soapy water"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The strong, spicy, and bitter natural smells of garlic and neem drive the pests away without poisoning the food."
      },
      {
            "text": "What typically happens to the crop yield (number of bags) in the first 2-3 years of shifting from chemical to natural farming?",
            "options": [
                  "It instantly doubles",
                  "It is slightly lower initially but gradually increases as the dead soil heals",
                  "The crop completely fails every time",
                  "It produces 100 bags per acre instantly"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It's like a detox! The soil needs 2-3 years to recover from the chemical addiction before it can give high yields again."
      },
      {
            "text": "How does the farmer maximize his financial profit despite getting slightly fewer bags of paddy?",
            "options": [
                  "By demanding government subsidies",
                  "By milling the paddy himself and selling the premium, chemical-free rice directly to the public",
                  "By mixing it with cheap chemical rice",
                  "By selling his farm land"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: He cuts out the middlemen. Direct-to-consumer sales of healthy organic rice bring in much higher profits!"
      },
      {
            "text": "What is the approximate shelf-life of naturally grown food/fruits compared to chemically grown ones?",
            "options": [
                  "They rot within 2 hours",
                  "They stay fresh for many days even outside the fridge (e.g., 10 days)",
                  "They melt in the sun",
                  "They turn black instantly"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Real food has real strength. Because it isn't pumped with artificial water-weight and chemicals, it lasts much longer without spoiling."
      },
      {
            "text": "What resources did the farmer use to learn and improve his natural farming techniques?",
            "options": [
                  "Science fiction movies",
                  "Books by Subhash Palekar and YouTube videos on organic farming",
                  "Chemical factory manuals",
                  "Only local gossip"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Subhash Palekar is known as the father of \"Zero Budget Natural Farming\" in India."
      },
      {
            "text": "Why does chemical farming often result in a lower net income per acre compared to the farmer's direct-selling natural method?",
            "options": [
                  "Because the government bans chemical farming",
                  "Because chemical farmers don't work hard",
                  "Because the massive cost of buying chemical fertilizers and pesticides eats away almost all the profit",
                  "Because chemical rice is given away for free"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Chemical farming has high \"Input Costs\". Natural farming uses free/cheap local resources (like cow dung), meaning the farmer keeps all the money he makes!"
      },
      {
            "text": "According to the video, what is the ultimate benefit of Chemical-Free Natural Farming?",
            "options": [
                  "It makes the farmer lazy",
                  "It ruins the environment for future generations",
                  "It provides healthy, tasty food, protects the environment, and keeps groundwater clean",
                  "It forces people to migrate to cities"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It provides healthy, tasty food, protects the environment, and keeps groundwater clean"
      }
    ] }
  },
  {
    id: 'sk5', title: 'Forest Honey Collection', category: 'Skill',
    description: 'Learn the safe and sustainable methods of collecting wild honey from the forest.',
    thumbnailUrl: 'https://i.ytimg.com/vi/EkV7VPB18_Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA9bQSBTbAHiHZkkhofRCfag0p6UQ',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Identifying Beehives safely', videoUrl: 'https://www.youtube.com/embed/EkV7VPB18_Q', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "Where does the wild honey hunting shown in this documentary take place?",
            "options": [
                  "Western Ghats",
                  "Nallamala Forest, Andhra Pradesh",
                  "Sundarbans, West Bengal",
                  "Araku Valley"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The video title and the introduction specifically mention the tribal honey hunters of the Nallamala Forest."
      },
      {
            "text": "Who are the people primarily engaged in extracting this wild honey?",
            "options": [
                  "Commercial factory workers",
                  "Local village farmers",
                  "Forest Tribals (like Mallanna and Venkatesh)",
                  "Government forest rangers"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The host introduces two local tribal experts, Mallanna and Venkatesh, who have traditional knowledge of honey hunting."
      },
      {
            "text": "According to the tribals, what happens if you throw a small stone to disturb a beehive?",
            "options": [
                  "The bees fly away permanently",
                  "The bees die instantly",
                  "The bees will immediately attack you",
                  "The bees drop the honey"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Bees are highly protective of their hives. A sudden physical disturbance like a stone triggers their defense mechanism to attack."
      },
      {
            "text": "What is the preferred time for the tribals to extract honey, especially when dealing with multiple hives?",
            "options": [
                  "Early morning",
                  "Mid-day",
                  "Night time",
                  "Late afternoon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Bees are generally less active and less aggressive in the dark, making night time the safest for the honey hunters."
      },
      {
            "text": "What traditional method do the tribals use to protect themselves from bee attacks while climbing the tree?",
            "options": [
                  "Wearing modern plastic bee suits",
                  "Using chemical bug spray",
                  "Creating thick smoke (Poga) using dry twigs and green leaves",
                  "Playing loud music"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Smoke is a natural bee repellent. It masks their alarm pheromones and makes them docile."
      },
      {
            "text": "Why are green leaves (Pachi aakulu) specifically added to the fire bundle?",
            "options": [
                  "To make the fire burn hotter",
                  "To produce a thick, dense smoke",
                  "To create a sweet smell",
                  "To cool down the honey"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Dry wood creates flames, but adding fresh green leaves creates the heavy, thick white smoke needed to drive the bees away."
      },
      {
            "text": "What tool do the tribals carry up the tree to cut the honeycomb?",
            "options": [
                  "A pair of scissors",
                  "A chainsaw",
                  "A traditional knife (Katthi)",
                  "A metal spoon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: They use a simple, sharp traditional knife to precisely slice the comb off the branch."
      },
      {
            "text": "How does the honey hunter lower the cut honeycomb safely to the ground?",
            "options": [
                  "He throws it down to his partner",
                  "He climbs down holding it in his mouth",
                  "He places it in a basket attached to a rope and lowers it down",
                  "He drops it into a net on the ground"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: To keep the delicate honeycomb intact and save the honey, it is slowly lowered using a long rope."
      },
      {
            "text": "When the host and his crew are waiting on the ground, what safety measure do they take?",
            "options": [
                  "They hide inside a car",
                  "They light their own smoke fire covered with green leaves",
                  "They wear thick helmets",
                  "They stand in a river"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The angry bees will fly down, so the crew on the ground also needs a \"smoke shield\" to avoid getting stung."
      },
      {
            "text": "How long did it take the tribal expert to cut the honeycomb once he reached it?",
            "options": [
                  "30 minutes",
                  "1 hour",
                  "Just 2 minutes",
                  "15 minutes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Because of the danger of bee attacks, the tribal works with lightning speed, finishing the cut in just two minutes."
      },
      {
            "text": "What kind of bees are shown in the video?",
            "options": [
                  "Very small, harmless bees",
                  "Large, wild forest bees that give a severe sting",
                  "Stingless bees",
                  "Domesticated farm bees"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The host specifically points out how large the bees are, noting that a single sting can make a person sick and bedridden for four days."
      },
      {
            "text": "What was lowered in the basket first, which did NOT contain honey?",
            "options": [
                  "Dry leaves",
                  "The \"Pala Ketta\" (the pollen/brood part of the comb with no honey)",
                  "Dead bees",
                  "Tree bark"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The hive has different sections. \"Pala ketta\" literally translates to the milk/brood section, which doesn't contain the sweet honey."
      },
      {
            "text": "How is the wild honey extracted from the comb once it is brought down?",
            "options": [
                  "By boiling the comb in water",
                  "By crushing and squeezing (squeezing/pindutaru) it with bare hands",
                  "Using an electric centrifuge",
                  "By leaving it in the sun to melt"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It is a completely raw, manual process. They simply squeeze the rich honey directly out of the wax comb."
      },
      {
            "text": "How does the host describe the taste of the freshly extracted raw honey?",
            "options": [
                  "Very bitter",
                  "Sour and watery",
                  "Excellent and incredibly sweet",
                  "Tasteless"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Nothing beats the taste of pure, unadulterated nature. He loved it so much he ate nearly 100ml right there!"
      },
      {
            "text": "According to the tribal expert, how can you identify duplicate (adulterated) honey when heated?",
            "options": [
                  "It evaporates completely",
                  "It turns green",
                  "It forms solid lumps/crystallizes heavily (Gadda kattaddi)",
                  "It smells like plastic"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Sugar syrup or adulterated honey thickens and forms hard lumps when heated, unlike pure wild honey."
      },
      {
            "text": "What happens to pure, original honey when it is heated (kaagabettithe)?",
            "options": [
                  "It forms hard lumps",
                  "It does not form lumps, but forms a froth/foam (nuruga) on top",
                  "It explodes",
                  "It turns completely black"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Original honey will just produce a layer of froth that can be skimmed off, but it will never turn into hard sugar lumps."
      },
      {
            "text": "What is the tribals' advice regarding heating pure honey?",
            "options": [
                  "You must boil it for an hour before eating",
                  "It is better NOT to heat it, as heating destroys its natural power/quality",
                  "It should be microwaved daily",
                  "It must be mixed with hot milk immediately"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Raw honey contains natural enzymes. Heating it kills the \"power\" and reduces its medicinal quality."
      },
      {
            "text": "What is the best type of container to store pure wild honey for a long time?",
            "options": [
                  "Plastic bottles",
                  "Iron jugs",
                  "Glass jars/bottles (Gaaju seesalu)",
                  "Clay pots"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Glass is non-reactive. Pure honey can stay unspoiled for years in a glass jar."
      },
      {
            "text": "What happens if you store pure honey in a plastic container for a very long time?",
            "options": [
                  "The honey becomes sweeter",
                  "The honey spoils/goes bad (Bhangam aipotundi)",
                  "The plastic turns into glass",
                  "The honey increases in volume"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Plastic can react with the natural acids in the honey over time, ruining its quality."
      },
      {
            "text": "Why is this specific wild honey highly valued compared to store-bought honey?",
            "options": [
                  "It is cheaper",
                  "It is available everywhere",
                  "It is completely raw, pure, and free from any adulteration or factory processing",
                  "It comes in artificial flavors"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It is completely raw, pure, and free from any adulteration or factory processing."
      }
    ] }
  },
  {
    id: 'sk6', title: 'Natural Dye Extraction', category: 'Skill',
    description: 'Extract vibrant colors from plants, roots, and flowers for dyeing fabrics.',
    thumbnailUrl: 'https://www.muezart.com/cdn/shop/articles/Natural-dyes-the-color-of-nature-Muezart-Meghalaya.jpg?v=1555344877',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Extracting Indigo', videoUrl: 'https://www.youtube.com/embed/394EBhnO1UQ', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the literal meaning of the word \"Kalamkari\"?",
            "options": [
                  "Color and Fabric",
                  "Pen worker / Pen work",
                  "Temple art",
                  "Hand weaving"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"Kalam\" translates directly to pen. The entire art relies on a bamboo pen."
      },
      {
            "text": "Which of the following is considered the Hindu version of Kalamkari that revolves around temples and epics?",
            "options": [
                  "Masulipatnam style",
                  "Dharmavaram style",
                  "Sri Kalahasti style",
                  "Pochampally style"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Sri Kalahasti is a famous temple town, making it the perfect hub for temple-based epic storytelling."
      },
      {
            "text": "The Masulipatnam style of Kalamkari is heavily influenced by which culture?",
            "options": [
                  "Persian",
                  "Roman",
                  "Chinese",
                  "Greek"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Masulipatnam was an ancient port city with heavy trade ties to the Persian empire."
      },
      {
            "text": "The town of Sri Kalahasti got its name from the devotees of Lord Shiva. Which three creatures do these represent?",
            "options": [
                  "Lion, Tiger, Bear",
                  "Spider, Snake, Elephant",
                  "Eagle, Fish, Dog",
                  "Cow, Monkey, Peacock"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Sri (Spider) + Kala (Snake) + Hasti (Elephant)."
      },
      {
            "text": "What was the original, ancient name of this craft before it was called Kalamkari?",
            "options": [
                  "Vratapani",
                  "Chitrakala",
                  "Rangoli",
                  "Pattachitra"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: \"Vrata\" means writing and \"Panee\" means work. It literally means the work of writing."
      },
      {
            "text": "Which 13th-century nomadic group of singers and painters originally started depicting Hindu epics on large cloths?",
            "options": [
                  "Banjaras",
                  "Chitrakatis",
                  "Gonds",
                  "Bhils"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"Chitra\" means picture/painting. They were the original picture-storytellers."
      },
      {
            "text": "What mixture is fermented for 20 days to create the black outline color?",
            "options": [
                  "Charcoal and oil",
                  "Jaggery, iron filings, and water",
                  "Crushed black rocks and milk",
                  "Squid ink and salt"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Iron gives the dark black rust, and jaggery acts as the natural fermenting agent to lock it in."
      },
      {
            "text": "Why is the cloth soaked evenly in milk during the preparation stage?",
            "options": [
                  "To make the cloth smell good",
                  "To turn the cloth pure white",
                  "The fat content acts as wax and prevents the colors from spreading",
                  "To make the cloth completely fireproof"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Think of milk fat like a natural boundary wall that traps the liquid dyes in their place."
      },
      {
            "text": "Approximately how much milk is required to treat a single Kalamkari saree at one time?",
            "options": [
                  "Half a liter",
                  "One liter",
                  "Two and a half liters",
                  "Five liters"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: A saree is 6 yards long; it drinks up exactly 2.5 liters of milk to get fully coated!"
      },
      {
            "text": "Which colorless solution is painted onto the areas meant to be colored Red?",
            "options": [
                  "Alum solution",
                  "Salt water",
                  "Baking soda",
                  "Vinegar"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Alum acts as a \"mordant\"—a chemical magnet that permanently binds the red dye to the fabric during boiling."
      },
      {
            "text": "Because the alum solution is colorless, what is added to it so the artist can see where they are painting?",
            "options": [
                  "White chalk",
                  "A fugitive (temporary) red color",
                  "Black charcoal dust",
                  "Green leaf juice"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"Fugitive\" means it runs away. It is a temporary color that washes off once the real red is boiled in."
      },
      {
            "text": "What temperature is required when boiling the cloth with red coloring material to permanently fix the dye?",
            "options": [
                  "20 to 30 degrees Celsius",
                  "40 to 50 degrees Celsius",
                  "80 to 100 degrees Celsius",
                  "Over 200 degrees Celsius"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It requires a near-boiling or fully boiling temperature (100 degrees) to force the color into the fabric fibers."
      },
      {
            "text": "How is the green color obtained in traditional Kalamkari?",
            "options": [
                  "By crushing green grass",
                  "By applying yellow over blue",
                  "By mixing black and white",
                  "By boiling neem leaves"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Basic art class rules apply! Yellow + Blue always makes Green."
      },
      {
            "text": "What is the specialty of the colors used in this natural art form?",
            "options": [
                  "They glow in the dark",
                  "They wash away completely after one use",
                  "The colors change according to the temperature of water and climatic conditions",
                  "They are highly toxic"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Since the dyes are 100% natural, they react to the weather like living plants!"
      },
      {
            "text": "How many specific stages are involved in the traditional, tedious process of making a Kalamkari piece?",
            "options": [
                  "5 stages",
                  "10 stages",
                  "17 stages",
                  "25 stages"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It is a prime number. 17 complex stages of washing, treating, and painting."
      },
      {
            "text": "How many days does it take to complete the entire Kalamkari process for a piece?",
            "options": [
                  "7 days",
                  "15 days",
                  "30 days",
                  "45 days"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: It takes exactly a month and a half (45 days) of patience to create one masterpiece."
      },
      {
            "text": "Which global event in the 18th century caused a massive decline in the export of Indian Kalamkari to Europe?",
            "options": [
                  "World War I",
                  "The Industrial Revolution in London",
                  "The French Revolution",
                  "The discovery of America"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Machines in London started mass-producing cheap, printed cloth, heavily damaging the slow, hand-painted Indian craft market."
      },
      {
            "text": "According to the video, what natural fibers are used as the canvas for these paintings?",
            "options": [
                  "Only pure Silk",
                  "Tussar silk, Malabari silk, cotton, and jute",
                  "Polyester and Nylon",
                  "Wool and Velvet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Natural dyes only bond with natural plant or animal fibers. Synthetic plastic fibers (like nylon) reject them."
      },
      {
            "text": "In 1991, what was set up in Sri Kalahasti to help support and organize the artists?",
            "options": [
                  "A giant mechanized factory",
                  "A cooperative known as the Sri Kalahasti Kalamkari Kalarula Sangam",
                  "A completely foreign-owned company",
                  "A modern digital printing press"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"Sangam\" means union. The artists united to protect their 3,000-year-old legacy."
      },
      {
            "text": "Why is the cloth heavily washed in water and dried before the very first step of preparation begins?",
            "options": [
                  "To make it shrink",
                  "To remove starch from the fabric",
                  "To make it smell like the river",
                  "To change its base color"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: To remove starch from the fabric."
      }
    ] }
  },
  {
    id: 'sk7', title: 'Wood Carving Fundamentals', category: 'Skill',
    description: 'Learn how to carve intricate designs and figures out of locally sourced wood.',
    thumbnailUrl: 'https://i.ytimg.com/vi/axiGtO48_KE/maxresdefault.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Carving Tools and Techniques', videoUrl: 'https://www.youtube.com/embed/CQ9L4rNYcSg', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What type of transfer paper does the creator prefer to use because it is much easier to erase?",
            "options": [
                  "Carbon paper",
                  "Graphite paper",
                  "Wax paper",
                  "Tracing paper"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "What specific carving tool is used for the entirety of this tutorial?",
            "options": [
                  "A standard V chisel",
                  "A U-gouge",
                  "A straight flat chisel",
                  "A spoon gouge"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Why does the creator advise beginners to avoid carving into construction-grade pine?",
            "options": [
                  "It is too expensive and hard to find.",
                  "It has loose grain and tends to splinter, making smooth lines difficult.",
                  "It dulls the edge of the chisel much faster than other woods.",
                  "It contains saps that ruin the finish."
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Which type of wood does the creator highly recommend for beginner carving due to its ease of use?",
            "options": [
                  "Oak",
                  "Cedar",
                  "Lindenwood (Basswood)",
                  "Mahogany"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "How does the video explain the concept of \"tight grain\" in carving wood?",
            "options": [
                  "The wood has a high moisture content.",
                  "The tree grew very quickly, leaving wide gaps.",
                  "The tree rings are closer together, resulting in fewer voids and a denser material.",
                  "The wood is filled with natural knots that hold it together tightly."
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "What is the shared theme of the free carving templates provided by the creator?",
            "options": [
                  "North American birds",
                  "Mythical creatures",
                  "Tropical plants",
                  "British animals"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "What technique is recommended for better control when pushing a chisel without a mallet?",
            "options": [
                  "Hold the chisel with two hands and rest the hand closest to the blade on the wood or workbench.",
                  "Hold the chisel with one hand and keep the other hand entirely off the wood.",
                  "Grip the chisel solely by the very back of the handle and push from the shoulder.",
                  "Swing the chisel quickly to let momentum do the work."
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "At what age did the creator first develop a serious interest in woodworking?",
            "options": [
                  "15",
                  "21",
                  "27",
                  "35"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "What specific project initially sparked the creator's intense interest in woodworking?",
            "options": [
                  "Whittling a wooden spoon for his father.",
                  "Building a gap and an arch in a hedge for an elderly neighbor.",
                  "Making a fold-up carving bench for his workshop.",
                  "Turning a wooden bowl on his grandfather's lathe."
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "What major beginner mistake did the creator admit to making when he first started trying to use a hand plane?",
            "options": [
                  "He tried to plane wood that was still soaking wet.",
                  "He pushed the plane backward across the wood.",
                  "He only used the plane on metal surfaces.",
                  "He never bothered to learn how to properly sharpen or adjust the blade."
            ],
            "correctAnswerIndex": 3
      }
    ] }
  },
  {
    id: 'sk8', title: 'Tailoring and Stitching', category: 'Skill',
    description: 'Master the basics of measuring, cutting, and stitching garments.',
    thumbnailUrl: 'https://www.seamwork.com/media/articles/2145/c9049dad.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Measurements and Cutting', videoUrl: 'https://www.youtube.com/embed/ljkY54A_arQ', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the name of the YouTube channel hosting these tailoring classes?",
            "options": [
                  "Keshava Tailors",
                  "Rishi Tailors",
                  "Master Tailors",
                  "Telugu Tailoring Hub"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Think of a \"Rishi\" (sage) meditating on a sewing machine!"
      },
      {
            "text": "What is the name of the host/instructor of the video?",
            "options": [
                  "Rishi",
                  "Keshava",
                  "Krishna",
                  "Ram"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: He introduces himself right at the beginning: \"Nenu mee Keshava\" (I am your Keshava)."
      },
      {
            "text": "On which date of the month are the new online tailoring batches starting?",
            "options": [
                  "1st",
                  "5th",
                  "10th",
                  "15th"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: A perfect \"10/10\" date to start learning a new skill!"
      },
      {
            "text": "How are the Ladies and Gents courses structured in this new batch?",
            "options": [
                  "They are taught mixed together in one class",
                  "Only the Ladies course is available online",
                  "They are started as separate, individual batches",
                  "Only the Gents course is available this month"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Men's and women's fashion are totally different, so they get their own separate VIP rooms (batches)."
      },
      {
            "text": "Which of the following blouse cutting models is taught in the Ladies course?",
            "options": [
                  "Princess cut",
                  "Boat neck",
                  "High neck",
                  "All of the above"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: From classic (Princess) to trendy (Boat/High neck), the course covers the entire wardrobe."
      },
      {
            "text": "What measurement techniques will the instructor use to teach cutting?",
            "options": [
                  "Only direct body measurements",
                  "Only old blouse/dress measurements",
                  "Both direct body measurements and old clothes measurements",
                  "Standard ready-made size charts only"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: A true master knows how to use a tape measure on a person AND how to copy a favorite old dress perfectly."
      },
      {
            "text": "Which of the following garments is included in the Gents tailoring course?",
            "options": [
                  "Safari suits and Kurta Pajamas",
                  "Men's Sherwani",
                  "Suits and Tuxedos",
                  "Men's Undergarments"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Think of the classic Indian gentleman's wardrobe: Pants, shirts, safaris, and kurtas."
      },
      {
            "text": "Which highly advanced dresses are intentionally EXCLUDED from the standard syllabus because they are rarely needed?",
            "options": [
                  "Wedding gowns",
                  "Bharatanatyam and Dancing dresses",
                  "Redline blouses",
                  "Frocks"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Dance dresses are for the stage, not the daily shop! (But he will teach them if specifically requested)."
      },
      {
            "text": "If someone does not want to learn cutting but just wants to stitch their own clothes, what service does the host offer?",
            "options": [
                  "Ready-made clothes delivery",
                  "Free sewing machines",
                  "Custom Paper Cutting Patterns",
                  "Home tailoring service"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: He does the hard math (cutting the paper) so you just have to trace and stitch!"
      },
      {
            "text": "What is a strict prerequisite for ordering these paper cutting patterns?",
            "options": [
                  "You must buy his sewing machine",
                  "You must have a minimum/basic knowledge of stitching",
                  "You must own a tailoring shop",
                  "You must live in Hyderabad"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A paper pattern is useless if you don't know how to operate a sewing machine."
      },
      {
            "text": "Why does the host insist that students joining the online classes must already know basic stitching?",
            "options": [
                  "Because he hates teaching beginners",
                  "Because stitching is a practical skill that is very hard to correct online, while cutting theory is easier to teach via video",
                  "Because the course is only 5 days long",
                  "Because stitching requires expensive machines"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Cutting is math and drawing (easy to show on camera). Stitching is muscle memory (hard to fix through a screen)."
      },
      {
            "text": "How are these online classes delivered?",
            "options": [
                  "Through a printed textbook",
                  "Through pre-recorded videos sent on WhatsApp",
                  "Through Live online classes",
                  "Through an automated app"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: He emphasizes that these are \"Live\" classes, giving you the feel of a real classroom."
      },
      {
            "text": "According to the instructor, what is the ultimate career goal for a student completing this course?",
            "options": [
                  "To become a fashion model",
                  "To become a professional Cutting Master and run their own shop",
                  "To become a fabric merchant",
                  "To work in a textile mill"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: He is training you to be the \"Master\" who runs the shop, not just a helper."
      },
      {
            "text": "What warning does the host give about achieving success after watching the classes?",
            "options": [
                  "You will instantly become a master just by watching",
                  "Watching is not enough; rigorous practical practice is mandatory",
                  "You must buy his brand of scissors",
                  "You need a degree in fashion design"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Theory without practice is like reading a recipe but never cooking the food. You have to practice!"
      },
      {
            "text": "What is the total fee for this advanced tailoring course?",
            "options": [
                  "₹2,000",
                  "₹5,000",
                  "₹10,000",
                  "₹15,000"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Give a 5-star rating for ₹5,000!"
      },
      {
            "text": "What is the total duration of the course?",
            "options": [
                  "1 week",
                  "1 month",
                  "3 months",
                  "6 months"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Just 30 days to change your career."
      },
      {
            "text": "How many individual classes are included in this 1-month course?",
            "options": [
                  "10 classes",
                  "15 classes",
                  "20 classes",
                  "30 classes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: 1 month = 30 days = 30 power-packed classes."
      },
      {
            "text": "Where has the host provided his contact number for interested students?",
            "options": [
                  "Only at the end of the video",
                  "Displayed on the screen and in the video description",
                  "Only on his Facebook page",
                  "He did not provide a number"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A good businessman always makes his number easy to find (on screen + in the text below)."
      },
      {
            "text": "Which two messaging platforms does the host recommend using to contact him?",
            "options": [
                  "WhatsApp or Telegram",
                  "Instagram or Facebook",
                  "Twitter or Snapchat",
                  "SMS or Email"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The two most popular messaging apps in India for sharing documents and videos."
      },
      {
            "text": "What language does the host speak in this tutorial video?",
            "options": [
                  "Hindi",
                  "Tamil",
                  "Telugu",
                  "Kannada"
            ],
            "correctAnswerIndex": 2
      }
    ] }
  },
  {
    id: 'sk9', title: 'Leaf Plate Making', category: 'Skill',
    description: 'Learn to stitch sal or adda leaves together to make eco-friendly plates (vistaraku).',
    thumbnailUrl: 'https://i.ytimg.com/vi/Nj8YCbZz4k8/maxresdefault.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Eco-friendly Plate Stitching', videoUrl: 'https://www.youtube.com/embed/J3_FOENWWws', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary natural material being used to make the plate in the video?",
            "options": [
                  "Palm fronds",
                  "Broad green leaves",
                  "Banana tree bark",
                  "Bamboo wood"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The video explicitly demonstrates assembling a traditional dining plate completely out of natural, broad green leaves."
      },
      {
            "text": "What traditional item is used to pin and stitch the leaves together?",
            "options": [
                  "Metal staples",
                  "Cotton sewing thread",
                  "Small dried twigs/sticks",
                  "Chemical glue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Instead of artificial staples or glue, thin, sharp pieces of dried twigs are used like natural pins."
      },
      {
            "text": "How does the artisan join two leaves together to build the plate?",
            "options": [
                  "By tying them with thick ropes",
                  "By overlapping their edges and piercing them with a twig",
                  "By folding them in half",
                  "By pressing them with a hot iron"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Overlapping creates a seamless, leak-proof surface, and the twig acts as a secure natural stitch."
      },
      {
            "text": "What shape does the artisan form by arranging the leaves?",
            "options": [
                  "A square box",
                  "A triangular cone",
                  "A flat, circular plate",
                  "A deep cylindrical cup"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: They are making a traditional dining plate, which is naturally built into a round shape."
      },
      {
            "text": "What is the biggest environmental benefit of using these traditional leaf plates?",
            "options": [
                  "They can be recycled into plastic",
                  "They never break",
                  "They are 100% eco-friendly, biodegradable, and compostable",
                  "They can be washed in a dishwasher"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Nature provides the leaf, and it safely goes back into nature as compost after use—zero waste!"
      },
      {
            "text": "How does the plate-making process generally begin?",
            "options": [
                  "By placing one central leaf and stitching other leaves around it",
                  "By creating the outer border first",
                  "By cutting all the leaves into tiny pieces",
                  "By soaking the leaves in boiling water"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The center leaf acts as the foundation, and the plate expands outwards in a circle as more leaves are added."
      },
      {
            "text": "Why are broad leaves preferred for making these plates instead of small ones?",
            "options": [
                  "Small leaves are poisonous",
                  "Broad leaves change color",
                  "Broad leaves require fewer stitches and create a stronger, wider dining surface",
                  "Small leaves are too heavy"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: A larger surface area means you need fewer leaves to quickly build a sturdy, big plate."
      },
      {
            "text": "How does the artisan prepare the dry twigs to be used as pins?",
            "options": [
                  "By cutting them with an electric cutter",
                  "The artisan snaps and breaks them manually with their fingers",
                  "By hitting them with a heavy hammer",
                  "By sharpening them with a knife"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The dry twigs are thin and brittle enough to be snapped easily by hand as needed."
      },
      {
            "text": "In the traditional Telugu context, what is this handmade leaf plate commonly called?",
            "options": [
                  "Charpai",
                  "Istaraku / Vistaraku",
                  "Matka",
                  "Diya"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The Telugu video title itself mentions \"ఇంట్లో ఇస్తారు\" (Istaru/Istaraku), the traditional name for these ceremonial leaf plates."
      },
      {
            "text": "Why is making leaf plates considered a highly sustainable rural skill?",
            "options": [
                  "It requires expensive machinery to set up",
                  "It depends entirely on imported materials",
                  "It uses free, renewable forest resources and requires zero electricity",
                  "It creates a lot of smoke"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It relies only on human hands, fallen twigs, and fresh leaves—making it the ultimate zero-carbon, sustainable craft."
      }
    ] }
  },
  {
    id: 'sk10', title: 'Herbal Soap Crafting', category: 'Skill',
    description: 'Create natural, skin-friendly soaps using forest herbs and essential oils.',
    thumbnailUrl: 'https://m.media-amazon.com/images/I/81GRcfUUuGL._UF1000,1000_QL80_.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Soap Making Fundamentals', videoUrl: 'https://www.youtube.com/embed/G_fv42Bj-bY', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the main herbal ingredient used to make the soap in this video?",
            "options": [
                  "Tulsi (Basil)",
                  "Neem leaves (Veepaku)",
                  "Mint leaves",
                  "Rose petals"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The video title is literally \"Homemade Neem Soap\"! Neem is the star ingredient known for its medicinal properties."
      },
      {
            "text": "Which commercial soap is used as the transparent base for this homemade recipe?",
            "options": [
                  "Dove",
                  "Lifebuoy",
                  "Pears",
                  "Lux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Pears is the most famous, easily available transparent glycerin soap, making it perfect for melting and using as a base."
      },
      {
            "text": "What fresh plant gel is extracted and added to the neem mixture?",
            "options": [
                  "Aloe Vera gel",
                  "Papaya gel",
                  "Cucumber gel",
                  "Cactus gel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Aloe Vera is nature's best moisturizer. It balances out the strong antibacterial nature of the neem."
      },
      {
            "text": "Which fruit juice is squeezed into the neem and aloe vera mixture before grinding?",
            "options": [
                  "Orange juice",
                  "Apple juice",
                  "Lemon juice",
                  "Grape juice"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Lemon is rich in Vitamin C and acts as a natural cleanser to remove dirt and oil from the skin."
      },
      {
            "text": "What specific capsule is squeezed into the paste for extra skin benefits?",
            "options": [
                  "Vitamin C capsule",
                  "Vitamin E capsule",
                  "Omega-3 capsule",
                  "Vitamin D capsule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"E\" stands for Excellent skin! Vitamin E oil brings a healthy, natural glow to the skin."
      },
      {
            "text": "What equipment is used to blend the neem leaves, aloe vera, and lemon juice together?",
            "options": [
                  "Hand whisk",
                  "Mixer Grinder (Mixi)",
                  "Mortar and pestle",
                  "Juicer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: To get the perfect smooth extract from tough neem leaves, the modern Mixer Grinder is the easiest tool."
      },
      {
            "text": "What should be the consistency of the blended neem mixture?",
            "options": [
                  "Very watery and thin",
                  "Coarse with large leaf pieces",
                  "A fine, smooth, and thick paste",
                  "Dry powder"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: If the paste has large chunks, the soap will feel rough and scratchy. A smooth paste makes a smooth soap!"
      },
      {
            "text": "What is the first crucial step before grinding the freshly plucked neem leaves?",
            "options": [
                  "Roasting them in oil",
                  "Washing them thoroughly to remove dust and dirt",
                  "Boiling them for an hour",
                  "Drying them in the sun for a week"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You are making a soap to clean your body; the ingredients themselves must be 100% clean and hygienic first!"
      },
      {
            "text": "What preparation is done to the Pears soap before melting it?",
            "options": [
                  "It is frozen overnight",
                  "It is burnt on direct fire",
                  "It is cut or grated into small pieces",
                  "It is mixed with cold water"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Just like chopping vegetables helps them cook faster, cutting the soap into tiny pieces helps it melt much faster."
      },
      {
            "text": "What specific melting technique is strictly used to melt the soap base?",
            "options": [
                  "Direct boiling on a high flame",
                  "Double Boiler method",
                  "Microwaving for 10 minutes",
                  "Leaving it in the hot sun"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Never put soap directly on the fire! The Double Boiler gently melts it using steam heat."
      },
      {
            "text": "What exactly is the \"Double Boiler\" method?",
            "options": [
                  "Using two different soaps together",
                  "Melting the soap in a glass/steel bowl placed over another vessel containing boiling water",
                  "Boiling the soap twice in a pressure cooker",
                  "Adding boiling water directly into the soap"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"Double\" means two vessels. The bottom one holds boiling water, and the top one holds the melting soap."
      },
      {
            "text": "Why is the Double Boiler method used instead of direct heating?",
            "options": [
                  "Direct heating will freeze the soap",
                  "Direct heating will burn the soap and destroy its glycerin properties",
                  "It makes the soap harder",
                  "It changes the soap into a liquid permanently"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Soap is delicate. Direct fire will scorch it, making it smell bad and ruining its quality."
      },
      {
            "text": "At what stage is the neem-aloe paste added to the process?",
            "options": [
                  "Before cutting the soap",
                  "After the Pears soap has completely melted into a clear liquid",
                  "While washing the leaves",
                  "After the soap has hardened in the mold"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You can only mix ingredients evenly when the base is completely in liquid form."
      },
      {
            "text": "What is the primary skin benefit of using this homemade Neem soap?",
            "options": [
                  "It dyes the skin green",
                  "It blocks pores",
                  "It acts as a natural antibacterial agent to clear pimples and skin infections",
                  "It removes a sun tan in 5 minutes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Ayurveda has used Neem for thousands of years as the ultimate germ-killer and pimple-fighter."
      },
      {
            "text": "Where is the hot liquid soap mixture poured to give it its final shape?",
            "options": [
                  "Directly onto the floor",
                  "Into plastic or silicone soap molds",
                  "Into a cloth bag",
                  "Into a glass bottle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Molds act like an ice-cube tray, giving the liquid soap that perfect, professional shape."
      },
      {
            "text": "What is the final step after pouring the liquid soap into the molds?",
            "options": [
                  "Baking it in an oven",
                  "Stirring it continuously for an hour",
                  "Letting it rest and set/freeze until it hardens completely",
                  "Washing it with cold water immediately"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Patience is key! As the liquid cools down, it solidifies back into a usable bar of soap."
      },
      {
            "text": "Why do we avoid adding a lot of water while grinding the neem and aloe vera?",
            "options": [
                  "Water is too expensive",
                  "Because Aloe Vera and Lemon already provide enough natural liquid, and extra water will ruin the soap's setting process",
                  "Water turns the neem leaves red",
                  "Water causes the mixer to break"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: If the paste is too watery, your final soap will be mushy and won't freeze properly!"
      },
      {
            "text": "Which two ingredients in this recipe are known for their strong hydrating and moisturizing properties?",
            "options": [
                  "Neem and Lemon",
                  "Pears Soap and Neem",
                  "Aloe Vera and Vitamin E",
                  "Lemon and Vitamin E"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: While Neem and Lemon clean the bacteria, Aloe and Vitamin E soothe and hydrate the skin."
      },
      {
            "text": "What is the overall nature of this soap-making process shown in the video?",
            "options": [
                  "It is a highly toxic chemical process",
                  "It requires an expensive factory setup",
                  "It is a low-cost, 100% natural, DIY Ayurvedic method done at home",
                  "It is only meant for washing clothes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The video title says \"Paisa Kharchu Lekunda\" (Without spending money) – it's a brilliant budget-friendly hack!"
      },
      {
            "text": "True or False: You can use regular plastic containers as molds if you don't have professional silicone soap molds.",
            "options": [
                  "True",
                  "False",
                  "Only if they are painted",
                  "Only if they are made of glass"
            ],
            "correctAnswerIndex": 0
      }
    ] }
  },
  // --- DANCE (10) ---
  {
    id: 'dan1', title: 'Introduction to Dhimsa Dance', category: 'Dance',
    description: 'Learn the basic steps and rhythm of the famous Dhimsa dance of the Araku valley.',
    thumbnailUrl: 'https://d35xcwcl37xo08.cloudfront.net/current-affairs-wp-uploads/2025/04/dhimsa_dance.webp',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Basic Footwork', videoUrl: 'https://www.youtube.com/embed/p8laSR1TwNQ', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the name of the traditional tribal dance featured in the video?",
            "options": [
                  "Kuchipudi",
                  "Dhimsa",
                  "Bharatanatyam",
                  "Kathakali"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The video title explicitly names the \"Dhimsa\" dance, which is the signature folk dance of this region."
      },
      {
            "text": "The Dhimsa dance is a traditional art form originating from which famous valley?",
            "options": [
                  "Araku Valley",
                  "Spiti Valley",
                  "Kangra Valley",
                  "Silent Valley"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Araku is renowned for its lush green hills, coffee plantations, and its vibrant tribal Dhimsa dance."
      },
      {
            "text": "In which Indian state is the Araku Valley located?",
            "options": [
                  "Kerala",
                  "Karnataka",
                  "Andhra Pradesh",
                  "Tamil Nadu"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The wall painting behind the dancers explicitly mentions the Government of Andhra Pradesh."
      },
      {
            "text": "Who primarily performs the actual dancing in the Dhimsa tradition shown in the video?",
            "options": [
                  "Only men",
                  "Tribal women",
                  "Young school children",
                  "Professional classical dancers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The visual center of the dance is always the group of tribal women in matching bright clothing."
      },
      {
            "text": "What is the primary dancing formation of the women during the Dhimsa dance?",
            "options": [
                  "Standing far apart in straight lines",
                  "Sitting on the ground",
                  "Forming a continuous human chain or circle by holding each other",
                  "Dancing solo on a stage"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Holding hands or waists in a circle symbolizes an unbroken chain of friendship and community strength."
      },
      {
            "text": "What color sarees are the tribal women uniformly wearing during this performance?",
            "options": [
                  "Bright Yellow",
                  "Pure White",
                  "Dark Blue",
                  "Crimson Red"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The bright yellow perfectly contrasts with the green forest environment of the Araku hills."
      },
      {
            "text": "Which government agency's name is painted on the background wall to support tribal culture?",
            "options": [
                  "Department of Outer Space",
                  "Ministry of Urban Planning",
                  "Integrated Tribal Development Agency (ITDA)",
                  "National Highway Authority"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The ITDA works specifically to protect and develop the welfare of tribal populations in areas like Paderu and Araku."
      },
      {
            "text": "What natural prop do the women hold in their hands during specific parts of the dance?",
            "options": [
                  "Steel swords",
                  "Lighted candles",
                  "Peacock feathers",
                  "Wooden sticks"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Peacock feathers add a touch of natural forest beauty and grace to their hand movements."
      },
      {
            "text": "To showcase their incredible balance and skill, what do the dancers place on their heads during the performance?",
            "options": [
                  "Heavy stones",
                  "Baskets or earthen pots",
                  "Glass cups",
                  "Books"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Carrying pots of water or harvest baskets is a daily tribal activity transformed into a graceful dance element."
      },
      {
            "text": "How is the rhythmic music generated for the Dhimsa dance?",
            "options": [
                  "By playing a digital track on a laptop",
                  "By women singing without any instruments",
                  "By men playing traditional live acoustic instruments like drums",
                  "By tapping spoons on glass bottles"
            ],
            "correctAnswerIndex": 2
      }
    ] }
  },
  {
    id: 'dan2', title: 'Advanced Dhimsa Formations', category: 'Dance',
    description: 'Master the complex group formations and synchronized movements of Dhimsa.',
    thumbnailUrl: 'https://currentaffairs.chinmayaias.com/wp-content/uploads/2024/01/Dhimsa-Dance.webp',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Complex Group Formations', videoUrl: 'https://www.youtube.com/embed/miVL6TpO8t4', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "Where is Chompi Village located?",
            "options": [
                  "Spiti Valley",
                  "Araku Valley",
                  "Kangra Valley",
                  "Silent Valley"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Araku Valley is the ultimate heartland of the Dhimsa dance. Chompi is a key village nestled right inside it."
      },
      {
            "text": "Which tribal community is featured performing the Dhimsa dance in the video?",
            "options": [
                  "Gond",
                  "Bhil",
                  "Porja (Paroja)",
                  "Santhal"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Porja\" sounds a bit like \"Pooja.\" They perform this sacred and festive dance during important village pujas and weddings!"
      },
      {
            "text": "According to the video, the Dhimsa dance originated from which district in the neighboring state of Odisha?",
            "options": [
                  "Ganjam",
                  "Puri",
                  "Cuttack",
                  "Koraput"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Koraput sits right at the border (the \"core\" part) of Andhra Pradesh and Odisha, letting traditions flow across states."
      },
      {
            "text": "During the Dhimsa dance, what is the role of the male members of the tribe?",
            "options": [
                  "They lead the dance circle",
                  "They play the musical instruments",
                  "They sing the lead vocals",
                  "They perform a separate solo dance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It is a beautiful partnership. The men provide the heavy beats (instruments) while the women bring the fluid grace (dancing)."
      },
      {
            "text": "During which of the following occasions is the Dhimsa dance typically performed?",
            "options": [
                  "Only during the harvest season",
                  "Exclusively during funerals",
                  "Festivities like weddings and pujas",
                  "Only on national holidays"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Dhimsa is a pure celebration of life and joy, making it perfect for the happiest occasions like weddings."
      },
      {
            "text": "Which of the following is mentioned as an instrument used to provide music for the dance?",
            "options": [
                  "Sitar",
                  "Tabla",
                  "Dapu",
                  "Flute"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Dapu\" sounds like \"Tap-Tap,\" mirroring the heavy, rhythmic tapping beats that drive the dance forward."
      },
      {
            "text": "What color sarees do the female dancers wear as they prepare for the performance?",
            "options": [
                  "Deep blue",
                  "Bright pink",
                  "Emerald green",
                  "Pure white"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Bright pink creates a stunning, vibrant contrast against the deep green forests of the Araku hills."
      },
      {
            "text": "Approximately how many women form a circle to perform the Dhimsa dance?",
            "options": [
                  "5 to 10",
                  "15 to 20",
                  "30 to 40",
                  "50 or more"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It takes a solid, medium-sized team of 15 to 20 dancers to make a perfectly sized, unbroken human chain."
      },
      {
            "text": "Why do the women specifically perform this dance at weddings?",
            "options": [
                  "To entertain the village elders",
                  "To welcome the groom's family",
                  "To pray for a peaceful and happy married life",
                  "To show off their traditional jewelry"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The harmonious, unbroken circle they form symbolizes a prayer for an unbroken, peaceful marriage."
      },
      {
            "text": "What specific item does the leading lady of the dance carry in her hand?",
            "options": [
                  "A wooden staff",
                  "An earthen lamp",
                  "A floral garland",
                  "A peacock feather"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: The lead dancer guides the flock holding a peacock feather, adding a touch of natural forest royalty."
      },
      {
            "text": "The quick, animated steps of the Dhimsa dance are said to resemble the darting of which creature?",
            "options": [
                  "A snake",
                  "A centipede",
                  "A butterfly",
                  "A deer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Imagine a line of 20 women moving their feet in rapid sync—it looks exactly like a fast-moving centipede!"
      },
      {
            "text": "What props are used by the women to help form extraordinary geometric patterns during the dance?",
            "options": [
                  "Wooden sticks",
                  "Silk ribbons",
                  "Brightly colored earthen pots",
                  "Brass plates"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Balancing pots while moving in complex patterns shows off their incredible daily survival skills and physical balance."
      },
      {
            "text": "The movements of which two body parts dominate the Dhimsa dance?",
            "options": [
                  "Shoulders and hips",
                  "Head and neck",
                  "Eyes and wrists",
                  "Feet and hands"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Dhimsa is all about grounding and connection. Quick feet keep the rhythm, while holding hands keeps the community together."
      },
      {
            "text": "How many different tribes in Andhra Pradesh are said to perform the Dhimsa dance?",
            "options": [
                  "12",
                  "22",
                  "32",
                  "42"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Think of the number 22 as a pair of twos (2-2), perfectly mirroring the synchronized pairs of dancers in the tribal community."
      },
      {
            "text": "What broader social value does the Dhimsa dance represent within the tribal communities?",
            "options": [
                  "A sense of unity",
                  "Financial prosperity",
                  "Political power",
                  "Military strength"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Holding hands in a tight, cooperative circle is the ultimate universal symbol of social unity."
      },
      {
            "text": "In which district of Andhra Pradesh is the Araku Valley mandal located?",
            "options": [
                  "Srikakulam",
                  "East Godavari",
                  "Visakhapatnam",
                  "Krishna"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Vizag (Visakhapatnam) is the famous coastal city that acts as the gateway to the beautiful Araku hills."
      },
      {
            "text": "How does the musician awaken his comrades at the very beginning of the video?",
            "options": [
                  "By beating a drum",
                  "By blowing a horn",
                  "By ringing a bell",
                  "By chanting a prayer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A loud, echoing horn acts as nature's ultimate alarm clock to wake everyone up and gather them for the dance!"
      },
      {
            "text": "What is the primary purpose of the dance when performed outside of weddings?",
            "options": [
                  "To call for rain",
                  "To prepare for a hunt",
                  "To praise the deity for the welfare of their domestic life",
                  "To celebrate the birth of a child"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: A happy, healthy home requires the blessings of the local deity, so the dance acts as an active, moving prayer."
      },
      {
            "text": "What does the fast pace of the dancers visually compete with?",
            "options": [
                  "The energetic melody of the music",
                  "The setting sun",
                  "The burning of the bonfire",
                  "The chanting of the priests"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: It is a race between sound and motion! The faster the men play the energetic melody, the faster the dancers must move."
      },
      {
            "text": "The Dhimsa dance gives the impression that what type of performance matters most?",
            "options": [
                  "Individual solos",
                  "Competitive duels",
                  "Acrobatic displays",
                  "Collective performance"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: There are absolutely no solo stars in Dhimsa; its true beauty comes from the entire collective moving flawlessly as one."
      }
    ] }
  },
  {
    id: 'dan3', title: 'Savara Traditional Dance', category: 'Dance',
    description: 'Explore the energetic and rhythmic dance forms of the Savara tribe.',
    thumbnailUrl: 'https://img.onmanorama.com/content/dam/mm/en/lifestyle/news/images/2020/4/19/handloom-c.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Savara Dance Forms', videoUrl: 'https://www.youtube.com/embed/XAXLo6prtWo', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "According to the video, what does the word \"Savara\" literally translate to?",
            "options": [
                  "People who live near the ocean",
                  "People who live on mountains",
                  "People who farm wheat",
                  "People who travel constantly"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The Savara tribe has a deep, ancient connection to the high hills and forests, which gave them their name."
      },
      {
            "text": "Historically, the Savara people were forest dwellers (Vanvasis). What major occupation have they primarily adopted in recent times?",
            "options": [
                  "Software engineering",
                  "Deep-sea fishing",
                  "Farming and agriculture",
                  "Mining"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: As forests changed, these traditional forest dwellers naturally transitioned into farming the land to survive."
      },
      {
            "text": "Apart from Andhra Pradesh, in which neighboring Indian state does the Savara (or Saora/Sabara) tribe mostly live?",
            "options": [
                  "Kerala",
                  "Gujarat",
                  "Odisha",
                  "Punjab"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Srikakulam district (where the video is shot) shares a direct border with Odisha, so the tribe spans across both states."
      },
      {
            "text": "What is the traditional dance attire for the men of the Savara tribe?",
            "options": [
                  "Bright red sarees",
                  "Pure white clothes and a turban (Pagdi)",
                  "Heavy metal armor",
                  "Black shirts and jeans"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: While the women wear bright, shiny colors, the men provide a sharp contrast in simple, elegant white clothes and turbans."
      },
      {
            "text": "Which of the following is a traditional musical instrument used during the Savara dance?",
            "options": [
                  "Electric Guitar",
                  "Tudum",
                  "Piano",
                  "Synthesizer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The Tudum and Kating are ancient, acoustic tribal instruments made using local forest materials like coconut shells."
      },
      {
            "text": "Based on the occasion, the Savara traditional dance (Tongsing/Tumse) is divided into how many different forms?",
            "options": [
                  "2 forms",
                  "3 forms",
                  "5 forms",
                  "10 forms"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Think of the 5 fingers on a hand. They have 5 specific dances for different life events."
      },
      {
            "text": "Which specific form of the dance is performed to pray for the peace of a departed soul when someone dies?",
            "options": [
                  "Jambo Tumse",
                  "Abdur Tumse",
                  "Sir Tumse",
                  "Gawar Tumse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Connect \"Jambo\" with a solemn journey of the soul finding peace."
      },
      {
            "text": "The \"Abdur Tumse\" dance form is performed to celebrate which specific occasion?",
            "options": [
                  "The birth of a child",
                  "After harvesting the crops",
                  "Before going to war",
                  "To bring rain"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"Abdur\" celebrates Abundance! It is the joyful dance they do after cutting the fully grown crops."
      },
      {
            "text": "Which form of the dance is performed to honor ancestors during the Agam festival?",
            "options": [
                  "Sir Tumse",
                  "Jambo Tumse",
                  "Gawar Tumse",
                  "Abdur Tumse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Gawar\" is performed to show Gratitude to the ancestors who came before them."
      },
      {
            "text": "Which dance form is performed specifically during marriage ceremonies?",
            "options": [
                  "Sir Tumse",
                  "Jambo Tumse",
                  "Gawar Tumse",
                  "Abdur Tumse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: \"Sir Tumse\" represents the joyful union and celebration of starting a new life together."
      }
    ] }
  },
  {
    id: 'dan4', title: 'Lambadi Dance Basics', category: 'Dance',
    description: 'Learn the graceful movements and hand gestures of the Lambadi (Banjara) dance.',
    thumbnailUrl: 'https://www.auchitya.com/wp-content/uploads/2020/08/lambadi-dance.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Lambadi Dance Techniques', videoUrl: 'https://www.youtube.com/embed/zx47Esgan7I', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the name of the traditional folk dance performed in the video?",
            "options": [
                  "Kuchipudi",
                  "Lambadi Dance",
                  "Bharatanatyam",
                  "Kathak"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The video title explicitly highlights the \"Lambadi Dance\" as the core performance."
      },
      {
            "text": "Which traditional tribal/nomadic community is famous for performing this specific dance?",
            "options": [
                  "Santhal",
                  "Toda",
                  "Banjara",
                  "Bhil"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The Lambadi dance is the signature, vibrant folk dance of the Banjara community."
      },
      {
            "text": "This vibrant folk dance is traditionally associated with which Indian state?",
            "options": [
                  "Kerala",
                  "Punjab",
                  "Assam",
                  "Andhra Pradesh"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: The title and the Telugu folk lyrics clearly identify it as a proud cultural dance of Andhra Pradesh."
      },
      {
            "text": "What is a signature characteristic of the costumes worn by the women performing the Lambadi dance?",
            "options": [
                  "Plain white cotton sarees",
                  "Brightly colored clothes with heavy mirror work and embroidery",
                  "Heavy metal armor",
                  "Simple black robes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Banjara women are famous worldwide for their dazzling, mirror-studded outfits (mentioned in the lyrics as \"Addala\" meaning mirrors) and heavy jewelry."
      },
      {
            "text": "Which dance school is credited with the performance shown in this video?",
            "options": [
                  "Kalakshetra Foundation",
                  "Natya Tarangini",
                  "Spandana Nrutya Keli School of Dance",
                  "Andhra Dance Academy"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The YouTube channel and the title proudly state that this performance is presented by the Spandana Nrutya Keli school."
      }
    ] }
  },
  {
    id: 'dan5', title: 'Tribal Drumming (Thudumbu)', category: 'Dance',
    description: 'Master the beats of the Thudumbu, the traditional drum that drives tribal dances.',
    thumbnailUrl: 'https://th-i.thgim.com/public/society/10hsxv/article28795411.ece/alternates/FREE_1200/02MPMAKINGOFTHUDUMBU3',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Thudumbu Beats and Rhythms', videoUrl: 'https://www.youtube.com/embed/6xwPEDZuN5g', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the name of the primary drum instrument featured in this video?",
            "options": [
                  "Mridangam",
                  "Parai",
                  "Tudumbu",
                  "Udukai"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The title and narration focus entirely on the \"Tudumbu\", a unique regional drum."
      },
      {
            "text": "The Tudumbu is an intrinsic part of which folk art form?",
            "options": [
                  "Tudumbattam",
                  "Bharatanatyam",
                  "Karakattam",
                  "Oyilattam"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The name of the dance/art form (Tudumbattam) literally comes directly from the name of the instrument (Tudumbu)!"
      },
      {
            "text": "In which region of Tamil Nadu is this folk art form most prevalent?",
            "options": [
                  "Villages around Chennai",
                  "Villages around Karamadai near Coimbatore",
                  "Villages in Kanyakumari",
                  "Villages near Madurai"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The narrator specifically mentions the Karamadai region near Coimbatore as the heartland of this folk art."
      },
      {
            "text": "Which of the following is one of the smaller drums played alongside the heavy Tudumbu?",
            "options": [
                  "Thavil",
                  "Chenda",
                  "Uruttu",
                  "Dholak"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Uruttu\" is one of the smaller, high-pitched drums that complements the heavy base of the Tudumbu."
      },
      {
            "text": "Along with the Uruttu, what is the other smaller drum mentioned in the ensemble?",
            "options": [
                  "Tasara",
                  "Ghatam",
                  "Kanjira",
                  "Pambai"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The Tasara works with the Uruttu to create complex, fast-paced rhythms against the heavy Tudumbu."
      }
    ] }
  },
  {
    id: 'dan6', title: 'Flute Playing (Venu)', category: 'Dance',
    description: 'Learn to play the traditional bamboo flute that accompanies many tribal dances.',
    thumbnailUrl: 'https://cdn-jjicb.nitrocdn.com/aIJeLndxfQAwuPmJmtuiQVXbATsjornW/assets/images/optimized/rev-ad93908/soundversemusic.com/wp-content/uploads/2023/07/carnatic_close-1.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Bamboo Flute Basics', videoUrl: 'https://www.youtube.com/embed/gEyEtp9WBtg', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What material is the flute featured in the video primarily made of?",
            "options": [
                  "Silver",
                  "Wood",
                  "Bamboo",
                  "Plastic"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The name \"Venu\" traditionally refers to a bamboo flute. Bamboo is nature's perfect hollow tube for music."
      },
      {
            "text": "How many fingering holes are located on the front of the bamboo flute?",
            "options": [
                  "4",
                  "6",
                  "8",
                  "10"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Most traditional Asian and Indian bamboo flutes have exactly 6 main fingering holes to play the musical notes."
      },
      {
            "text": "What are the two functional holes located near the top end of the bamboo flute?",
            "options": [
                  "The blow hole and the film hole",
                  "The thumb hole and the pinky hole",
                  "The breath hole and the water hole",
                  "The tuning hole and the pitch hole"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: You need a hole to blow air into, and a special film hole (often found in traditional bamboo flutes) to give it a buzzing, vibrant sound."
      },
      {
            "text": "What traditional material does the instructor mention is used as an adhesive to stick the thin film onto the flute?",
            "options": [
                  "Tree sap",
                  "Chemical glue",
                  "Donkey skin (traditional herb/glue)",
                  "Beeswax"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Traditional instrument makers often used natural animal byproducts, like donkey hide glue, because it holds the delicate film perfectly and dissolves with water."
      },
      {
            "text": "What specific playing technique does the instructor mention is used for playing very fast songs?",
            "options": [
                  "Slurring",
                  "Vibrato",
                  "Double tongue",
                  "Flutter tonguing"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: To play fast, your tongue needs to move twice as fast! \"Double tonguing\" uses a rapid \"Tu-Ku\" syllable pattern."
      },
      {
            "text": "Which keys of bamboo flutes are typically selected to play very fast songs?",
            "options": [
                  "C, D, and Big G",
                  "G, A, and F",
                  "E, B flat, and C",
                  "D, E, and F"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Smaller, higher-pitched flutes (like G, A, F) are physically shorter, making it easier for fingers to move quickly for fast-paced songs."
      },
      {
            "text": "Which keys of bamboo flutes are usually chosen to play slower, smoother songs?",
            "options": [
                  "G, A, and F",
                  "C, D, and Big G",
                  "B flat, A, and G",
                  "E, F, and A"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Larger flutes (like C, D) have deeper, resonant, and mellow tones perfectly suited for slow, emotional melodies."
      },
      {
            "text": "According to the instructor, the mouth shape used for the bamboo flute is very similar to playing which other instrument?",
            "options": [
                  "Clarinet",
                  "Saxophone",
                  "Silver flute",
                  "Oboe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Both are \"transverse\" (side-blown) flutes, so the embouchure (mouth shape) required to direct air across the hole is essentially the same."
      },
      {
            "text": "How should the air speed be managed when playing the low notes on the bamboo flute?",
            "options": [
                  "The air speed should be slower",
                  "The air speed should be very fast",
                  "The air speed should stop completely",
                  "The air speed should fluctuate rapidly"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Low notes need gentle, warm, and slow air to resonate deeply without jumping into a higher pitch."
      },
      {
            "text": "What is required of the air speed when transitioning to play high notes?",
            "options": [
                  "It needs to become slower",
                  "It needs to remain exactly the same as middle notes",
                  "It needs to become even faster",
                  "It requires blowing in short, disconnected bursts"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: High pitches require high energy! You must blow a faster, tighter stream of air to hit the higher octaves cleanly."
      }
    ] }
  },
  {
    id: 'dan7', title: 'Rhythmic Footwork in Tribal Dance', category: 'Dance',
    description: 'Focus entirely on the complex and fast-paced footwork required for tribal performances.',
    thumbnailUrl: 'https://www.deccanchronicle.com/h-upload/2024/12/02/1868485-30pnm03.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Advanced Footwork', videoUrl: 'https://www.youtube.com/embed/nkCch_s1kzI', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "Which region in Andhra Pradesh is famous for the Dhimsa dance?",
            "options": [
                  "Thar Desert",
                  "Araku Valley and Paderu",
                  "Backwaters of Kerala",
                  "Himalayan Mountains"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Araku Valley and Paderu are the twin tribal heartlands famous for preserving the Dhimsa culture."
      },
      {
            "text": "Who primarily performs the Dhimsa dance during festivals and weddings?",
            "options": [
                  "Only male elders",
                  "Professional theater artists",
                  "Mostly women of the tribe",
                  "Only young children"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Women take center stage, forming beautiful circles and holding hands in unity."
      },
      {
            "text": "Roughly how many types of movements are involved in the Dhimsa dance?",
            "options": [
                  "2 to 5",
                  "15 to 20",
                  "40 to 50",
                  "Over 100"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Think of a 15-20 minute performance where they showcase 15 to 20 unique step patterns!"
      },
      {
            "text": "What does the Dhimsa dance primarily symbolize for the community?",
            "options": [
                  "Unity and joy",
                  "War and victory",
                  "Wealth and trade",
                  "Sorrow and mourning"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Dancing in an unbroken circle hand-in-hand is the ultimate symbol of community unity and happiness."
      },
      {
            "text": "Which of the following is a traditional instrument used to provide rhythm for the Dhimsa dance?",
            "options": [
                  "Piano",
                  "Guitar",
                  "Saxophone",
                  "Dappu"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: The strong, heartbeat-like thump of the 'Dappu' drum sets the fast pace for their footwork."
      }
    ] }
  },
  {
    id: 'dan8', title: 'Dance Costumes and Makeup', category: 'Dance',
    description: 'Learn how to prepare the traditional attire, jewelry, and natural makeup for a performance.',
    thumbnailUrl: 'https://i.ytimg.com/vi/yVSbyueKkpY/sddefault.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'DIY Tribal Jewelry', videoUrl: 'https://www.youtube.com/embed/t46fY9Sgins', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary base material used to create the shape of the jewelry in the video?",
            "options": [
                  "Cardboard",
                  "Newspaper",
                  "Plastic bottles",
                  "Fabric"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Newspaper is the cheapest, most accessible paper to roll up and build a solid base for DIY crafts."
      },
      {
            "text": "What material is inserted inside the rolled paper to give the jewelry structure and flexibility?",
            "options": [
                  "Wooden sticks",
                  "Rubber bands",
                  "Jewelry wire",
                  "Plastic string"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Paper is soft, so a wire acts as the \"skeleton\" to help the jewelry hold its bent shape."
      },
      {
            "text": "Which material is wrapped around the base to give the jewelry a shiny, metallic silver finish?",
            "options": [
                  "Silver paint",
                  "Aluminum foil",
                  "Glitter glue",
                  "Silver fabric"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Aluminum foil instantly transforms dull paper into shining, authentic-looking silver metal."
      },
      {
            "text": "What tool is used to bend and cut the jewelry wire during the crafting process?",
            "options": [
                  "Scissors",
                  "Hammer",
                  "Tweezers",
                  "Nose pliers"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Nose pliers are the standard tool to grip, bend, and snip tough jewelry wire safely."
      },
      {
            "text": "How are the ends of the rolled newspaper secured together to form circular shapes like bangles?",
            "options": [
                  "With hot glue",
                  "With a stapler",
                  "With cello tape",
                  "By tying a knot"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Cello tape tightly wraps the ends together without adding bulky bumps like glue or staples would."
      },
      {
            "text": "What specific style of jewelry is the creator making in this tutorial?",
            "options": [
                  "Modern minimalist jewelry",
                  "Tribal and folk dance jewelry",
                  "Fine diamond jewelry",
                  "Floral resin jewelry"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The rustic, heavy silver look created by the foil perfectly matches traditional tribal ornaments."
      },
      {
            "text": "Which of the following items is NOT used as a material or tool in this DIY project?",
            "options": [
                  "Hot glue gun",
                  "Aluminum foil",
                  "Scissors",
                  "Cello tape"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: This is a completely heat-free, kid-friendly craft using just paper, wire, tape, and foil."
      },
      {
            "text": "What is the first step the creator takes with the newspaper to begin making the jewelry?",
            "options": [
                  "Folding it into an origami shape",
                  "Tearing it into strips and rolling it",
                  "Painting it black",
                  "Gluing it to a piece of cardboard"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You have to make the basic \"building blocks\" first by rolling strips of paper into tight tubes."
      },
      {
            "text": "Why does the creator use aluminum foil in this craft?",
            "options": [
                  "To make the jewelry waterproof",
                  "To add weight to the bangles",
                  "To mimic the look of traditional silver tribal jewelry",
                  "To make the base easier to paint"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Authentic tribal jewelry is heavily made of oxidized silver, and foil gives that exact metallic illusion."
      },
      {
            "text": "What is the overall benefit of this DIY jewelry method as shown in the video?",
            "options": [
                  "It uses expensive materials for a premium look",
                  "It requires advanced metalworking skills",
                  "It is a fast, easy, and inexpensive way to make tribal-style jewelry",
                  "It creates jewelry that requires a kiln to set"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The best part of DIY is looking stunning on stage without spending any real money!"
      }
    ] }
  },
  {
    id: 'dan9', title: 'Festival Dance Choreography', category: 'Dance',
    description: 'Learn how to choreograph a full dance sequence for village festivals and celebrations.',
    thumbnailUrl: 'https://i.ytimg.com/vi/YMKGBqBaP4w/hqdefault.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Structuring a Performance', videoUrl: 'https://www.youtube.com/embed/p8laSR1TwNQ', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Festival Dance Choreography\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Dance, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Festival Dance Choreography?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Festival Dance Choreography: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Dance",
                  "Concept B related to Dance",
                  "Concept C related to Dance",
                  "Concept D related to Dance"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'dan10', title: 'Koya Dance Techniques', category: 'Dance',
    description: 'Discover the unique Permakok (Bison Horn) dance of the Koya tribe.',
    thumbnailUrl: 'https://l450v.alamy.com/450v/ay782p/koya-tribal-women-performing-laya-dance-andhra-pradesh-ay782p.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Kommu Koya Performance', videoUrl: 'https://www.youtube.com/embed/PoVeRbKLv6E', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "Which Indian state is the Kommu Koya dance primarily associated with?",
            "options": [
                  "Kerala",
                  "Andhra Pradesh",
                  "Rajasthan",
                  "Gujarat"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Koya tribes heavily populate the Godavari river regions of Andhra Pradesh."
      },
      {
            "text": "In which district is the Tummala village, famous for the Kommu Koya dance, located?",
            "options": [
                  "East Godavari",
                  "Kurnool",
                  "Chittoor",
                  "Anantapur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: East Godavari is a major hub for tribal culture in AP, including the famous Tummala village."
      },
      {
            "text": "What does the Telugu word \"Kommu\" mean in the context of this dance?",
            "options": [
                  "Feather",
                  "Drum",
                  "Horn",
                  "Crown"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Kommu\" literally translates to animal horn in Telugu, which is the main prop worn on their heads."
      },
      {
            "text": "What does the word \"Koya\" translate to?",
            "options": [
                  "Farmer",
                  "Tribe",
                  "Dancer",
                  "Hunter"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"Koya\" simply means a hill-dweller or tribe in their native tongue."
      },
      {
            "text": "During which festival is the Kommu Koya dance traditionally performed?",
            "options": [
                  "Diwali",
                  "Pongal",
                  "Bhumi Panduga",
                  "Holi"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Bhumi\" means Earth and \"Panduga\" means festival. They dance to celebrate the Earth!"
      },
      {
            "text": "What is the primary purpose of performing the dance during the Bhumi Panduga festival?",
            "options": [
                  "To celebrate a marriage",
                  "To pray for rain and a good harvest",
                  "To prepare for war",
                  "To welcome the spring season"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Since it's an Earth festival (Bhumi Panduga), the main prayer is naturally for rain and successful farming."
      },
      {
            "text": "Which three languages are primarily spoken by the Koya tribe?",
            "options": [
                  "Hindi, English, and Tamil",
                  "Koya, Telugu, and Odia",
                  "Kannada, Malayalam, and Telugu",
                  "Marathi, Gujarati, and Hindi"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: They live near the border of AP (Telugu) and Odisha (Odia), while maintaining their native Koya language."
      },
      {
            "text": "How old is the art of the Kommu Koya dance believed to be?",
            "options": [
                  "100 years old",
                  "500 years old",
                  "Over 1,000 years old",
                  "2,000 years old"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: This isn't a modern dance; it's an ancient tribal tradition passed down for over a millennium."
      },
      {
            "text": "What is the current primary occupation of the Koya tribe?",
            "options": [
                  "Fishing",
                  "Mining",
                  "Agriculture and farming",
                  "Textile weaving"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Like most settled forest tribes today, they rely on farming the land to survive."
      },
      {
            "text": "What unique item do the male dancers wear on their heads like a crown?",
            "options": [
                  "Gold helmets",
                  "Real animal horns",
                  "Bamboo hats",
                  "Flower garlands"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The dance is literally called \"Kommu\" (Horn) Koya because of the massive bison/bull horns they wear!"
      },
      {
            "text": "The movements in the Kommu Koya dance often mimic the behavior of which animal?",
            "options": [
                  "Tigers",
                  "Elephants",
                  "Bulls fighting",
                  "Snakes striking"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Wearing bull horns on their heads, the men naturally mimic the powerful clashing and fighting of wild bulls."
      },
      {
            "text": "Besides animal horns, what type of feathers do the men typically wear on their heads?",
            "options": [
                  "Eagle feathers",
                  "Peacock feathers",
                  "Crow feathers",
                  "Parrot feathers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The tall, majestic peacock feathers add height and vibrant color to the heavy horns."
      },
      {
            "text": "What type of feathers do the women typically use to decorate their attire?",
            "options": [
                  "Peacock feathers",
                  "Chicken or rooster feathers",
                  "Ostrich feathers",
                  "Swan feathers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: While men wear the grand peacock feathers, women traditionally use easily accessible domestic bird feathers."
      },
      {
            "text": "What are the traditional drums used in the dance made from?",
            "options": [
                  "Plastic",
                  "Metal sheets",
                  "Cowhide",
                  "Synthetic rubber"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Ancient tribal instruments rely on nature. They use stretched cowhide (leather) to get that deep, booming drum sound."
      },
      {
            "text": "What is the approximate size of the traditional drums used by the Koya men?",
            "options": [
                  "1 meter long and 1 foot wide",
                  "2 meters long and 2 feet wide",
                  "1 foot long and 1 foot wide",
                  "3 meters long and 1 meter wide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: It's a long, cylindrical drum—about the length of a guitar (1 meter) but narrow enough to hold."
      }
    ] }
  },

  // --- TECHNOLOGY (10) ---
 {
    id: 'tech1', title: 'Basic Computer Skills & MS Word (Full Course)', category: 'Technology',
    description: 'A comprehensive full course on Microsoft Word. Learn everything from basic typing to advanced formatting.',
    thumbnailUrl: 'https://i.ytimg.com/vi/2MCmnr2L50o/maxresdefault.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'MS Word Full Course', videoUrl: 'https://www.youtube.com/embed/gTEemDl04Zw', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the maximum zoom percentage available in Microsoft Word?",
            "options": [
                  "100%",
                  "200%",
                  "400%",
                  "500%"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Think of your 5 fingers! The maximum zoom limit in Word is 500%."
      },
      {
            "text": "What is the minimum zoom level possible in Microsoft Word?",
            "options": [
                  "0%",
                  "1%",
                  "10%",
                  "25%"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You can't go down to zero, the lowest possible view to still see the page is 10%."
      },
      {
            "text": "Which shortcut key is used to Undo an action in MS Word?",
            "options": [
                  "Ctrl + Z",
                  "Ctrl + U",
                  "Ctrl + X",
                  "Ctrl + Y"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: 'Z' is the last letter of the alphabet, taking you back to your last action."
      },
      {
            "text": "Which keyboard shortcut is used to Redo an action?",
            "options": [
                  "Ctrl + Z",
                  "Ctrl + Y",
                  "Ctrl + R",
                  "Ctrl + Shift + Z"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 'Y' comes right before 'Z', so it moves you forward after you Undo (Z)."
      },
      {
            "text": "Which shortcut key combination is used to Justify text alignment?",
            "options": [
                  "Ctrl + L",
                  "Ctrl + E",
                  "Ctrl + J",
                  "Ctrl + R"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: 'J' stands for Justify! It aligns the text perfectly on both sides."
      },
      {
            "text": "What is the keyboard shortcut for the Find function in MS Word?",
            "options": [
                  "Ctrl + S",
                  "Ctrl + F",
                  "Ctrl + H",
                  "Ctrl + D"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 'F' stands for Find."
      },
      {
            "text": "Which shortcut key is used to open the Find and Replace dialog box?",
            "options": [
                  "Ctrl + F",
                  "Ctrl + R",
                  "Ctrl + Shift + F",
                  "Ctrl + H"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Think of 'H' for Hunt and Replace! It opens the box to hunt down words and change them."
      },
      {
            "text": "In which tab can you find the Watermark option in MS Word?",
            "options": [
                  "Home tab",
                  "Design tab",
                  "Insert tab",
                  "Layout tab"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A watermark is part of how the page is styled, so it lives in the Design tab."
      },
      {
            "text": "What feature allows you to copy only the formatting of a text and apply it to another text?",
            "options": [
                  "Copy Paste",
                  "Style Copier",
                  "Format Painter",
                  "Text Highlighter"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You use a \"brush\" icon to \"paint\" the format onto new text."
      },
      {
            "text": "Which keyboard shortcut is used to select all content in a document?",
            "options": [
                  "Ctrl + A",
                  "Ctrl + S",
                  "Ctrl + C",
                  "Ctrl + All"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: 'A' stands for All!"
      },
      {
            "text": "In which tab is the Header and Footer option located?",
            "options": [
                  "Home tab",
                  "Design tab",
                  "Insert tab",
                  "View tab"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You want to \"Insert\" something into the top (header) or bottom (footer) of the page."
      },
      {
            "text": "What formula is used to generate random practice paragraphs in MS Word?",
            "options": [
                  "=rand()",
                  "=text()",
                  "=practice()",
                  "=generate()"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: \"rand\" is simply short for random."
      },
      {
            "text": "Which shortcut key opens the 'Save As' dialog box directly?",
            "options": [
                  "F5",
                  "F10",
                  "F12",
                  "F7"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: F12 is the highest function key, used for the ultimate final step: saving the file."
      },
      {
            "text": "What is the default file extension for a modern Microsoft Word document?",
            "options": [
                  ".doc",
                  ".docx",
                  ".txt",
                  ".pdf"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The extra 'x' stands for XML, which is the modern standard for Word files."
      },
      {
            "text": "Which text wrapping option allows you to move an image freely over the text without disrupting the layout?",
            "options": [
                  "In Front of Text",
                  "Square",
                  "Tight",
                  "Behind Text"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Putting it \"In Front of Text\" ignores all the rules and lets you drag the image anywhere."
      },
      {
            "text": "How can you quickly jump between open documents or programs using the keyboard?",
            "options": [
                  "Shift + Enter",
                  "Ctrl + Tab",
                  "Windows + D",
                  "Alt + Tab"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Alt + Tab is the universal Windows shortcut to jump between active windows."
      },
      {
            "text": "In which tab will you find the option to change the Page Orientation (Portrait or Landscape)?",
            "options": [
                  "Home tab",
                  "Layout tab",
                  "Insert tab",
                  "View tab"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Orientation changes the physical \"Layout\" of the paper."
      },
      {
            "text": "Which keyboard shortcut is used to align text to the center?",
            "options": [
                  "Ctrl + C",
                  "Ctrl + L",
                  "Ctrl + E",
                  "Ctrl + M"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: 'C' is already taken by Copy, so Word uses the next strong letter in cEnter: 'E'."
      },
      {
            "text": "When using the \"Narrow\" margin setting, what is the space left on all sides of the page?",
            "options": [
                  "0.5 inches",
                  "1.0 inches",
                  "1.5 inches",
                  "0 inches"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Normal margins are 1 inch. \"Narrow\" cuts that exactly in half to 0.5 inches."
      },
      {
            "text": "When you select a picture, which new tab automatically appears to help you adjust it?",
            "options": [
                  "Image Editor tab",
                  "Draw tab",
                  "Design tab",
                  "Picture Format tab"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: The tab literally tells you its job: to \"Format\" the \"Picture\"."
      },
      {
            "text": "Which keyboard shortcut is used to cut selected text?",
            "options": [
                  "Ctrl + C",
                  "Ctrl + X",
                  "Ctrl + V",
                  "Ctrl + Z"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The letter 'X' looks exactly like an open pair of scissors!"
      },
      {
            "text": "How do you ensure you draw a perfectly straight line or a perfect circle using the shapes tool?",
            "options": [
                  "Hold the Ctrl key while drawing",
                  "Hold the Shift key while drawing",
                  "Hold the Alt key while drawing",
                  "Draw very slowly with the mouse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The \"Shift\" key shifts the shape into perfect, locked proportions."
      },
      {
            "text": "Which option allows you to add background text like \"Confidential\" to a document?",
            "options": [
                  "Page Color",
                  "WordArt",
                  "Watermark",
                  "Text Box"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Like a faint mark left by water on paper, it stays quietly in the background."
      },
      {
            "text": "Which keyboard shortcut is used to align text to the right?",
            "options": [
                  "Ctrl + L",
                  "Ctrl + E",
                  "Ctrl + R",
                  "Ctrl + J"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: 'R' stands for Right!"
      },
      {
            "text": "How can you protect a Word document with a password during the \"Save As\" process?",
            "options": [
                  "By selecting General Options under Tools",
                  "By clicking the Security tab",
                  "By typing the password in the File Name box",
                  "By selecting Lock Document under the View tab"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Adding a password is a \"General Option\" you can apply right inside the save window tools."
      }
    ] }
  }, 
  {
    id: 'tech2', title: 'Data Entry with MS Excel (Full Course)', category: 'Technology',
    description: 'Master Microsoft Excel from basics to advanced formulas and data analysis.',
    thumbnailUrl: 'https://i.ytimg.com/vi/kyXr-IzxZgM/maxresdefault.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'MS Excel Full Course', videoUrl: 'https://www.youtube.com/embed/16fZZXexZuE', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "Who first announced the Microsoft Office package?",
            "options": [
                  "Steve Jobs",
                  "Mark Zuckerberg",
                  "Bill Gates",
                  "Elon Musk"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Bill Gates is the famous founder of Microsoft, so naturally, he announced their biggest software package."
      },
      {
            "text": "In what year was Microsoft Office initially announced?",
            "options": [
                  "1985",
                  "1988",
                  "1995",
                  "2001"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Think of the double 8s in 1988, representing the two main powerhouse programs: Word and Excel."
      },
      {
            "text": "Where did the initial announcement of Microsoft Office take place?",
            "options": [
                  "New York",
                  "Las Vegas",
                  "Silicon Valley",
                  "Seattle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Las Vegas is the city of big reveals and casinos, a flashy place to announce a game-changing software."
      },
      {
            "text": "What is the primary function of Microsoft Excel?",
            "options": [
                  "Editing high-resolution videos",
                  "Creating animated graphics",
                  "Organizing numbers and data",
                  "Writing long text documents"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Excel is essentially a giant digital calculator and filing cabinet for numbers and data."
      },
      {
            "text": "As of September 2019, approximately how many active users did Office 365 have?",
            "options": [
                  "1 Million",
                  "50 Million",
                  "100 Million",
                  "Over 200 Million (20 Crore)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: It is used globally! 200 million is a massive number reflecting its worldwide dominance in offices."
      },
      {
            "text": "Which formula is highlighted in the course syllabus for making logical decisions?",
            "options": [
                  "SUM",
                  "IF",
                  "VLOOKUP",
                  "AVERAGE"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"IF\" this happens, then do that. It is the universal word for logic and conditions."
      },
      {
            "text": "What Excel tool is specifically designed to visually summarize massive amounts of data?",
            "options": [
                  "WordArt",
                  "Pivot Chart",
                  "Spell Check",
                  "Format Painter"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A \"Pivot\" lets you turn and look at data from different visual angles easily."
      },
      {
            "text": "Which of the following is NOT a tool included in the Microsoft Office suite?",
            "options": [
                  "PowerPoint",
                  "Photoshop",
                  "Outlook",
                  "Excel"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Photoshop is purely for editing photos and belongs to a different company called Adobe."
      },
      {
            "text": "Which Microsoft application is widely used for professional presentations?",
            "options": [
                  "Teams",
                  "Word",
                  "PowerPoint",
                  "Skype"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You use it to make a strong \"Point\" using \"Power\"ful slides!"
      },
      {
            "text": "What feature allows you to change the visual look of a cell automatically based on its value?",
            "options": [
                  "Page Layout",
                  "Conditional Formatting",
                  "Data Entry",
                  "Timelines"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It formats the cell's color only when a specific \"condition\" (like a number being too low) is met."
      },
      {
            "text": "According to the video, which group of people can benefit from learning MS Excel?",
            "options": [
                  "Only IT professionals",
                  "Only corporate accountants",
                  "Students, teachers, and business owners",
                  "Only marketing executives"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Everyone deals with data, from student grades to daily business sales, making Excel a universal tool."
      },
      {
            "text": "Which Microsoft application is known for business communication and team collaboration?",
            "options": [
                  "OneDrive",
                  "Forms",
                  "Teams",
                  "Access"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The name says it all! It is built specifically for \"Teams\" of people to chat and work together."
      },
      {
            "text": "On what exact date was Microsoft Office announced in 1988?",
            "options": [
                  "January 1",
                  "August 1",
                  "October 31",
                  "December 25"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 8/1/88. A date full of 1s and 8s for a historic announcement."
      },
      {
            "text": "What is Microsoft's primary cloud storage service called?",
            "options": [
                  "iCloud",
                  "Google Drive",
                  "Dropbox",
                  "OneDrive"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: It is the \"One\" place (Drive) where you can store and access all your files from the cloud."
      },
      {
            "text": "What is the overarching category for Microsoft Corporation?",
            "options": [
                  "American Multinational Technology Company",
                  "European Hardware Manufacturer",
                  "Asian Retail Enterprise",
                  "Global Shipping Conglomerate"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: It was founded in America and operates globally (multinational) selling technology."
      },
      {
            "text": "What is the basic building block of an Excel worksheet where a row and column meet?",
            "options": [
                  "A grid",
                  "A cell",
                  "A table",
                  "A pivot"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Just like microscopic biological cells build a body, grid \"cells\" build an entire Excel sheet."
      },
      {
            "text": "Which feature is highly recommended for managing and sorting structured data easily?",
            "options": [
                  "Tables",
                  "Fonts",
                  "Colors",
                  "Margins"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: A Table cleanly boxes your data, giving you instant sorting and filtering arrows at the top."
      },
      {
            "text": "If you want to prepare your document to look perfect on a physical piece of paper, which tab would you use?",
            "options": [
                  "Formulas",
                  "Page Layout",
                  "Data",
                  "Review"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You adjust the \"Layout\" of the \"Page\" before you print it out."
      },
      {
            "text": "What is the fundamental process of manually putting information into Excel called?",
            "options": [
                  "Data Mining",
                  "Data Scraping",
                  "Data Entry",
                  "Data Deletion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You are literally \"entering\" the \"data\" manually through your keyboard."
      },
      {
            "text": "Which email service is part of the Microsoft Office ecosystem?",
            "options": [
                  "Gmail",
                  "Yahoo Mail",
                  "ProtonMail",
                  "Outlook"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: You \"look out\" for new emails using Microsoft Outlook."
      },
      {
            "text": "What is a key advantage of using mathematical formulas in Excel?",
            "options": [
                  "They draw pictures for you",
                  "They automate complex calculations instantly",
                  "They translate languages",
                  "They write emails to clients"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Instead of manually adding 1000 numbers on a calculator, a formula does it in one millisecond."
      },
      {
            "text": "Why is Excel highly valued in the corporate world?",
            "options": [
                  "It plays background music in the office",
                  "It increases productivity and saves massive amounts of time",
                  "It replaces the need for a web browser",
                  "It manages social media accounts automatically"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Time is money in business, and Excel automates hours of manual work into seconds."
      },
      {
            "text": "Which tool in the Excel syllabus is best used for filtering dates visually?",
            "options": [
                  "Timeline",
                  "Calendar Maker",
                  "Date Tracker",
                  "Time Keeper"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: A timeline is literally a visual line of time (dates) you can slide through."
      },
      {
            "text": "How does MS Excel assist specifically in Business Analysis?",
            "options": [
                  "By writing marketing copy",
                  "By organizing and analyzing complex numerical data",
                  "By tracking employee locations via GPS",
                  "By designing business logos"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Business analysis requires crunching numbers to find trends, which is Excel's exact superpower."
      },
      {
            "text": "What is required to successfully implement an IF formula in Excel?",
            "options": [
                  "A creative color scheme",
                  "A logical condition to test",
                  "A fast internet connection",
                  "A 3D printer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You need to ask a question (a logical test) like \"Is A greater than B?\" to get a Yes/No answer."
      }
    ] }
  },
  {
    id: 'tech3', title: 'Python Programming (Full Course)', category: 'Technology',
    description: 'Learn Python programming from scratch. Covers basics, data structures, and algorithms.',
    thumbnailUrl: 'https://quantumzeitgeist.com/wp-content/uploads/python.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Python Basics', videoUrl: 'https://www.youtube.com/embed/lGnZPKJ8zfM', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What happens if you assign x = 4 and then x = \"Sally\" on the very next line?",
            "options": [
                  "Python throws a critical error.",
                  "x becomes the string \"Sally\", completely overwriting the 4.",
                  "x becomes a list containing both 4 and \"Sally\".",
                  "The variable name changes to Sally."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Variables in Python are flexible; the latest assignment always overwrites the previous one completely."
      },
      {
            "text": "Which function will tell you exactly how many characters are inside a string?",
            "options": [
                  "count()",
                  "size()",
                  "len()",
                  "length()"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Think of 'len' as the quick abbreviation for 'length'."
      },
      {
            "text": "What is the result of casting a float like 2.8 into an integer using int(2.8)?",
            "options": [
                  "2.8",
                  "3",
                  "2",
                  "An error occurs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Casting to an int simply chops off the decimal part, it doesn't round up. 2.8 becomes 2."
      },
      {
            "text": "What does the type() function return if you check the value True?",
            "options": [
                  "string",
                  "boolean (bool)",
                  "integer",
                  "logical"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: True and False are always Boolean values (known as 'bool' for short in Python)."
      },
      {
            "text": "What type of number is 1j in Python?",
            "options": [
                  "Integer",
                  "Float",
                  "Complex",
                  "String"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: In Python math, 'j' stands for the imaginary part of a Complex number."
      },
      {
            "text": "Which logical operator returns True if at least ONE of the given conditions is true?",
            "options": [
                  "and",
                  "not",
                  "or",
                  "xor"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Like ordering at a restaurant: 'Coffee OR Tea' means you are happy if you get at least one of them."
      },
      {
            "text": "How will Python evaluate an empty string bool(\"\")?",
            "options": [
                  "True",
                  "False",
                  "0",
                  "None"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Empty things (like empty strings, 0, or empty lists) are considered False in Python."
      },
      {
            "text": "What happens if you forget the colon : at the end of an if statement line?",
            "options": [
                  "Python automatically fixes it.",
                  "The code runs but skips the if block.",
                  "It creates a syntax error and stops running.",
                  "It creates an infinite loop."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The colon is like a gatekeeper; without it, Python doesn't know a new block is starting, causing a Syntax Error."
      },
      {
            "text": "Which comparison operator is used to check if two values are exactly equal to each other?",
            "options": [
                  "=",
                  "==",
                  "!=",
                  ">="
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A single '=' assigns a value, but double '==' asks a question: 'Are these equal?'"
      },
      {
            "text": "What is the starting index number for an item in a Python List?",
            "options": [
                  "1",
                  "0",
                  "-1",
                  "It depends on the length of the list"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Computers start counting from 0, not 1. The first item is always at index 0."
      },
      {
            "text": "What does the not in operator do when checking a string?",
            "options": [
                  "Returns True if a specific word is missing from the string.",
                  "Returns False if the string is empty.",
                  "Deletes a word from the string.",
                  "Reverses the entire string."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: It literally reads like English: it returns True if the word is 'not in' the target string."
      },
      {
            "text": "In a Dictionary, how is the data organized?",
            "options": [
                  "By numerical order",
                  "By alphabetical order",
                  "By Key:Value pairs",
                  "By positive and negative integers"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Just like a real dictionary has a Word (Key) and its Definition (Value)."
      },
      {
            "text": "Which collection type specifically uses round brackets ()?",
            "options": [
                  "List",
                  "Set",
                  "Tuple",
                  "Dictionary"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Tuples use round brackets (), Lists use square brackets [], and Sets/Dicts use curly brackets {}."
      },
      {
            "text": "Which collection type uses curly brackets {} but does NOT use Key:Value pairs?",
            "options": [
                  "Tuple",
                  "Dictionary",
                  "Set",
                  "List"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Sets use {} like Dictionaries, but they only hold individual items, not paired items."
      },
      {
            "text": "What will be the boolean evaluation of a non-empty string, such as bool(\"Hello\")?",
            "options": [
                  "False",
                  "True",
                  "Null",
                  "Error"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Any string with content (even just a space) has 'substance', so Python considers it True."
      },
      {
            "text": "Why is indentation absolutely critical in a while loop?",
            "options": [
                  "It makes the code run faster.",
                  "It defines exactly which block of code gets repeated.",
                  "It changes the variables into integers.",
                  "It connects the loop to the internet."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Python doesn't use brackets to group code; it relies purely on visual indentation (spaces) to know what's inside a loop."
      },
      {
            "text": "What does the break statement do when placed inside a loop?",
            "options": [
                  "It pauses the loop for 5 seconds.",
                  "It restarts the loop from the beginning.",
                  "It skips the current item and moves to the next one.",
                  "It forces the loop to exit entirely immediately."
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Hitting 'break' is like pulling the emergency brake—it stops and exits the loop immediately."
      },
      {
            "text": "What does \"implicit data type declaration\" mean in Python?",
            "options": [
                  "You must specifically type out \"integer\" before every number.",
                  "Python automatically figures out the data type based on the value you assign.",
                  "All data is forced to become a string.",
                  "The user is prompted to guess the data type."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Implicit means implied; Python is smart enough to guess the type without you having to announce it."
      },
      {
            "text": "How do you correctly output the phrase \"Hello World\" to the screen in Python?",
            "options": [
                  "echo(\"Hello World\")",
                  "print(\"Hello World\")",
                  "display(\"Hello World\")",
                  "console.log(\"Hello World\")"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You want to 'print' ink onto the console screen."
      },
      {
            "text": "Can a Python List contain duplicate values?",
            "options": [
                  "Yes, it allows identical items.",
                  "No, it automatically deletes duplicates.",
                  "Only if they are numbers.",
                  "Only if the list contains exactly two items."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Lists are just ordered collections of items, so they have no problem storing the exact same item multiple times."
      },
      {
            "text": "If a = 33 and b = 200, how would you test if b is greater than a?",
            "options": [
                  "if b > a:",
                  "if b >= a",
                  "if a > b:",
                  "if b = a:"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: It reads exactly like standard math and English combined, ending with the required colon."
      },
      {
            "text": "Why might a programmer use an elif statement?",
            "options": [
                  "To close the program entirely.",
                  "To check a brand new condition only if the first if condition was false.",
                  "To repeat an action 10 times.",
                  "To assign a variable to a dictionary."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 'elif' is short for 'else if'. It gives Python a backup condition to check if the first one fails."
      },
      {
            "text": "What does the shorthand assignment operator x -= 3 actually mean?",
            "options": [
                  "x equals 3 minus x",
                  "x equals x minus 3",
                  "x is a negative 3",
                  "x is less than or equal to 3"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It's a shortcut. 'Take my current value, subtract 3, and save it back into me.'"
      },
      {
            "text": "Which data structure is best described as an unordered VIP guest list with no duplicates?",
            "options": [
                  "Set",
                  "Tuple",
                  "Dictionary",
                  "List"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: A Set is like a VIP club—everyone inside is unique (no duplicates), but they mingle randomly (unordered)."
      },
      {
            "text": "If you execute a loop on a string like for x in \"apple\":, what does the loop do?",
            "options": [
                  "It prints the word \"apple\" an infinite number of times.",
                  "It counts how many letters are in the word.",
                  "It reads and processes each individual letter ('a', 'p', 'p', 'l', 'e') one at a time.",
                  "It crashes because \"apple\" is not a List."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: A string is simply a list of characters. A 'for' loop naturally walks through them one by one."
      }
    ] }
  },
  {
    id: 'tech4', title: 'Internet Basics & Online Safety', category: 'Technology',
    description: 'Learn how to browse the web safely, use search engines, and protect your personal information online.',
    thumbnailUrl: 'https://i.ytimg.com/vi/qtJNRxMRuPE/maxresdefault.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Web Browsing and Safety', videoUrl: 'https://www.youtube.com/embed/SIl6HflZ0uI', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary purpose of HTTPS on a website?",
            "options": [
                  "To make the website load faster",
                  "To encrypt the connection and prevent others from reading the data",
                  "To block all pop-up advertisements",
                  "To scan the user's computer for viruses"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The 'S' in HTTPS stands for Secure. It scrambles (encrypts) your data so hackers can't read it."
      },
      {
            "text": "Where should you look in your browser to quickly check if a site is using HTTPS and has a valid certificate?",
            "options": [
                  "The bottom right corner of the screen",
                  "The bookmark bar",
                  "The lock icon next to the URL address bar",
                  "The history menu"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Look for the padlock! A closed lock icon means your connection is locked and secure."
      },
      {
            "text": "What does it mean if a website uses HTTP without the \"S\"?",
            "options": [
                  "It is perfectly safe for banking",
                  "Communications are sent like an open postcard and can be intercepted",
                  "The website is hosted by the government",
                  "The website is currently updating"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Without the 'S', there is no envelope. Anyone on the network can read your data like an open postcard."
      },
      {
            "text": "Why do cybercriminals purchase domains that look very similar to popular websites?",
            "options": [
                  "To help the popular websites handle excess traffic",
                  "To trick users into visiting their fake site instead of the official one",
                  "To legally buy out the competition",
                  "To practice their web design skills"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Typosquatting relies on you typing fast and missing a letter, landing you straight into their trap."
      },
      {
            "text": "If you receive an email from your bank asking you to click a link to update your password, what is the safest action to take?",
            "options": [
                  "Click the link and enter your details immediately",
                  "Forward the email to your friends to see if they got it too",
                  "Ignore the link, open a browser, and search for the official bank site yourself",
                  "Reply to the email asking if it is real"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Never trust the messenger! Always verify by going directly to the source yourself."
      },
      {
            "text": "Look at this URL: https://paypal.com.secure-login.com. Who actually owns this domain?",
            "options": [
                  "paypal.com",
                  "https://www.google.com/search?q=secure-login.com",
                  "The government",
                  "Google"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: In web addresses, the true owner is always the last word right before the .com or .org. Here, it is secure-login.com, not Paypal!"
      },
      {
            "text": "Which two psychological tactics are most commonly used in social engineering attacks?",
            "options": [
                  "Sadness and anger",
                  "Urgency and reward",
                  "Boredom and curiosity",
                  "Confusion and logic"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Scammers manipulate you by making you panic (Urgency: \"Your account is blocked!\") or get greedy (Reward: \"You won an iPhone!\")."
      },
      {
            "text": "Which scenario is a classic example of a social engineering \"reward\" tactic?",
            "options": [
                  "A message claiming your account will be deleted in 24 hours",
                  "An email stating a long-lost relative won the lottery on your behalf",
                  "A notification that your computer needs a routine update",
                  "A receipt for a coffee you just bought"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Free money is the ultimate fake reward used to blind people's judgment."
      },
      {
            "text": "When downloading a new piece of software, where is the safest place to get it?",
            "options": [
                  "A third-party mass download site",
                  "A peer-to-peer torrent network",
                  "The software creator's official website",
                  "A link found in a YouTube comment section"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Go straight to the chef, not the middleman. Official sites don't bundle viruses with their own software."
      },
      {
            "text": "What is a common risk of downloading software from mass download sites rather than the official source?",
            "options": [
                  "The download will be too fast",
                  "It may be secretly packaged with adware, malware, or spyware",
                  "The software will automatically delete your hard drive",
                  "You will have to pay double the price"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Free download sites make money by hiding junk programs (adware/malware) inside your download."
      },
      {
            "text": "Why does the video suggest avoiding online banking on a shared family computer?",
            "options": [
                  "Family computers are usually too slow for banking sites",
                  "Banks do not allow multiple accounts on one IP address",
                  "Free games and apps downloaded by kids often contain targeted malware",
                  "The keyboard will get sticky"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Kids click anything. Their free games often bring in malware that can steal your banking passwords."
      },
      {
            "text": "If you must share a PC with children who download games, what is recommended as a safer alternative for your online banking?",
            "options": [
                  "Do your online banking on the shared PC, but only late at night",
                  "Do your online banking using your smartphone instead",
                  "Print out your bank statements at the library",
                  "Only use ATMs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Smartphones have stricter app stores and sandboxing, making them generally harder to infect than a shared Windows PC."
      },
      {
            "text": "Why is it crucial to keep your browser and operating system up to date?",
            "options": [
                  "Updates provide essential security patches to keep you safe from new threats",
                  "Updates change the color scheme of your computer",
                  "Older versions of browsers are illegal to use",
                  "Updates automatically pay your bills"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Software updates are like vaccines for your computer—they protect it against newly discovered viruses."
      },
      {
            "text": "If a website gives a warning that its security certificate is NOT valid, what should you do?",
            "options": [
                  "Click \"Proceed anyway\" and enter your credit card info",
                  "Assume the website is just undergoing maintenance and log in",
                  "Be highly cautious and avoid sharing any sensitive information",
                  "Refresh the page until the warning goes away"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: If the browser acts like an alarm, don't ignore it. Never type passwords on an invalid certificate page."
      },
      {
            "text": "What feature allows modern web browsers to keep you safe without you having to click anything?",
            "options": [
                  "Silent updates in the background",
                  "Automatic password sharing",
                  "Predictive text algorithms",
                  "Ad blockers"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Modern browsers (like Chrome) update themselves silently while you sleep, constantly patching security holes."
      },
      {
            "text": "Which of the following is a technique used by cybercriminals to make a bad link look legitimate?",
            "options": [
                  "Using all capital letters",
                  "Using subdomains (e.g., placing the real brand name at the beginning of a fake URL)",
                  "Making the link text very large",
                  "Sending the link through the postal service"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: People read left-to-right. Scammers put the trusted name first (e.g., netflix.scam-site.com) to fool your eyes."
      },
      {
            "text": "If you are visiting a brand-new online store for the first time, what should you do to check its legitimacy?",
            "options": [
                  "Buy a small item to see if it arrives",
                  "Look up the site on review platforms like Trustpilot",
                  "Ask the website's customer service bot if they are real",
                  "Assume it is safe if they accept credit cards"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Trust the crowd. If an online store is a scam, angry customers will have likely already reported it on Trustpilot."
      },
      {
            "text": "How difficult and expensive is it for a cybercriminal to register a fake, similar-looking domain name (like tcmsec.com)?",
            "options": [
                  "It is illegal and impossible to do",
                  "It requires a government license",
                  "It costs thousands of dollars",
                  "It is extremely easy and very cheap (sometimes even free for the first year)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Anyone with a few dollars and 5 minutes can buy a domain. There are no background checks."
      },
      {
            "text": "True or False: If a website has HTTPS, it is 100% guaranteed that the website is not run by a scammer.",
            "options": [
                  "True, hackers cannot get HTTPS certificates.",
                  "False, scammers can use HTTPS on their fake websites too; it only means the connection is encrypted."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: HTTPS just means the pipe is secure, but a scammer could easily be standing on the other end of that pipe!"
      },
      {
            "text": "What is the overarching rule when dealing with unsolicited links sent to your email or social media?",
            "options": [
                  "Always click them to see what they are",
                  "Forward them to a cybersecurity expert",
                  "Trust them if they come from a friend's compromised account",
                  "Don't click them; navigate directly to the site yourself"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: If you didn't ask for it, don't click it! Navigate manually."
      }
    ] }
  },
  {
    id: 'tech5', title: 'Digital Payment & Banking Basics', category: 'Technology',
    description: 'Understand how to use UPI, mobile banking apps, and digital wallets securely for everyday transactions.',
    thumbnailUrl: 'https://biznext.in/blog/wp-content/uploads/2024/09/Digital-Payments-Methods-1024x536.webp',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'UPI and Mobile Banking', videoUrl: 'https://www.youtube.com/embed/nypvOdE4LQg', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What does digital banking primarily rely on to conduct transactions?",
            "options": [
                  "Physical branch visits",
                  "Online and electronic platforms",
                  "Paper cheques",
                  "Postal services"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Digital means electronic! It relies on the internet and electronic devices instead of physical buildings."
      },
      {
            "text": "Which technology allows you to transfer money within a fraction of a second using apps like PhonePe or Amazon Pay?",
            "options": [
                  "UPI (Unified Payment Interface)",
                  "ATM",
                  "Postal order",
                  "Passbook"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: UPI changed India! It unifies your bank accounts into one fast interface."
      },
      {
            "text": "What is the name of the official digital banking application launched by the State Bank of India (SBI)?",
            "options": [
                  "SBI Pay",
                  "SBI Digital",
                  "YONO",
                  "SBI Wallet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: YONO stands for \"You Only Need One\" - SBI's all-in-one banking app."
      },
      {
            "text": "Which of the following is a key advantage of digital banking mentioned in the video?",
            "options": [
                  "24/7 availability",
                  "Free physical cash deliveries",
                  "Mandatory bank visits for every transaction",
                  "Slower processing times"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The internet never sleeps. Digital banks are open 24 hours a day, 7 days a week."
      },
      {
            "text": "When applying for a loan virtually through digital banking, what is the approval primarily based on?",
            "options": [
                  "Your physical appearance",
                  "Your CIBIL or credit score",
                  "Your social media followers",
                  "The number of bank branches you visit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Since the bank can't see you, they trust your financial \"report card\", which is the CIBIL score."
      },
      {
            "text": "What is a \"Loyalty Program\" in the context of digital wallets like Google Pay?",
            "options": [
                  "A penalty for late payments",
                  "A tax applied to transactions",
                  "Rewards and scratch cards given to attract and retain customers",
                  "A physical membership card you carry"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Companies buy your \"loyalty\" by giving you free scratch cards and cashbacks."
      },
      {
            "text": "Which of the following services can be accessed WITHOUT an internet connection?",
            "options": [
                  "Applying for a home loan",
                  "Checking your account balance via a missed call",
                  "Transferring large funds via UPI",
                  "Opening a new fixed deposit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Missed calls use the basic cellular mobile network, not the internet."
      },
      {
            "text": "What happens when you give a missed call to your bank's toll-free number from your registered mobile?",
            "options": [
                  "A bank manager calls you back",
                  "Your account is blocked immediately",
                  "The bank sends an SMS message with your account balance and recent transactions",
                  "Your internet connection is activated"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The missed call triggers an automated computer to instantly text your balance back to you."
      },
      {
            "text": "According to the video, what is a major disadvantage of digital banking?",
            "options": [
                  "It is too fast",
                  "You cannot deposit physical cash virtually",
                  "It requires too much paperwork",
                  "It only works on weekdays"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You can't push paper money through a smartphone screen! You still need an ATM or branch for cash."
      },
      {
            "text": "What feature allows a digital banking app to remind you to pay your electricity or mobile recharge bill next month?",
            "options": [
                  "Automatic payment of bills and reminders",
                  "Cashless deposit",
                  "Phone banking without internet",
                  "Missed call alert"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: You can set \"autopay\" or reminders so the app acts as your personal digital assistant."
      },
      {
            "text": "Which of the following is considered an \"Extra Service\" provided by digital banking applications?",
            "options": [
                  "Checking your balance",
                  "Changing your password",
                  "Investing in mutual funds, stocks, and debentures",
                  "Logging out of the app"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Basic banking is just money in and out. Investing in the stock market is a massive \"Extra\"."
      },
      {
            "text": "How do customers track their account history through digital banking?",
            "options": [
                  "By requesting a physical ledger from the manager",
                  "By waiting for an annual letter",
                  "By downloading bank statements for the past 6 months to 1 year in PDF format",
                  "By guessing their balance"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Apps let you instantly download a PDF statement (e-statement) instead of printing a passbook."
      },
      {
            "text": "Which of the following is considered a primary risk or disadvantage of digital banking?",
            "options": [
                  "Earning too many reward points",
                  "Internet scams and hacking",
                  "Having too many banking apps",
                  "Getting too many SMS alerts"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Where there is digital money, there are digital thieves (hackers and scammers)."
      },
      {
            "text": "Before digital banking, what was a common requirement to pay an electric or water bill?",
            "options": [
                  "Sending a text message",
                  "Standing in a queue at the specific office",
                  "Using a smart TV",
                  "Making a phone call"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: We all remember the long, tiring queues outside the electricity board office!"
      },
      {
            "text": "What does the term \"virtual deposit\" refer to in the video?",
            "options": [
                  "Mailing cash to the bank",
                  "Creating fixed deposits or investing money online without visiting the bank",
                  "Handing cash to a bank agent at your door",
                  "Printing money at home"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Virtual means online. You take money from your digital savings and \"deposit\" it into a digital Fixed Deposit."
      },
      {
            "text": "What kind of alert does a bank send immediately after an amount is debited or credited to your account?",
            "options": [
                  "A physical letter",
                  "An email only",
                  "A message or SMS alert to the registered mobile number",
                  "A phone call from the manager"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: A quick SMS is the fastest way to alert you so you can catch fraud instantly."
      },
      {
            "text": "Which systems are credited with significantly increasing the volume of virtual transactions?",
            "options": [
                  "Paper ledgers and typewriters",
                  "IMPS, RTGS, NEFT, and UPI",
                  "ATMs and passbooks",
                  "Physical drafts and cheques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: These four (IMPS, RTGS, NEFT, UPI) are the main digital highways that carry money across India."
      },
      {
            "text": "What is necessary to access the vast majority of digital banking services?",
            "options": [
                  "A landline phone",
                  "A physical chequebook",
                  "Internet access",
                  "A physical visit to the bank every 30 days"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Digital\" mostly lives on the \"Internet\". Without data or Wi-Fi, apps won't load."
      },
      {
            "text": "In the context of personal finance solutions offered by digital banking, what tool helps customers calculate loan payments?",
            "options": [
                  "Scientific calculator",
                  "EMI calculator",
                  "Abacus",
                  "Tax ledger"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: EMI (Equated Monthly Installment) calculators help you figure out exactly how much you'll pay every month."
      },
      {
            "text": "What is an example of a \"Digital Wallet\" mentioned in the tutorial?",
            "options": [
                  "A physical leather wallet",
                  "Amazon Pay",
                  "A bank's strongroom",
                  "A safety deposit box"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Amazon Pay holds your money digitally, just like a leather wallet holds physical cash."
      },
      {
            "text": "What action replaces carrying physical cash in the modern digital banking era?",
            "options": [
                  "Carrying gold coins",
                  "Using digital cash via cell phone applications",
                  "Carrying a chequebook everywhere",
                  "Bartering goods"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Your smartphone is your new wallet."
      },
      {
            "text": "Besides checking balances and transferring funds, what other banking product order can you place online?",
            "options": [
                  "Ordering new furniture for the branch",
                  "Placing orders for bank drafts",
                  "Ordering cash to be printed",
                  "Buying the bank's computers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You can request official bank documents like Demand Drafts (DDs) and Chequebooks right from the app."
      },
      {
            "text": "Which demographic is currently using digital banking according to the video?",
            "options": [
                  "Only teenagers",
                  "Only corporate professionals",
                  "Everyone from small children to the elderly",
                  "Only IT professionals"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: UPI has become so simple that everyone from a street vendor to an elderly grandparent uses it daily."
      },
      {
            "text": "How does a bank try to attract and retain customers through digital platforms?",
            "options": [
                  "By shutting down internet access",
                  "By charging high fees for opening the app",
                  "By offering loyalty programs and scratch cards",
                  "By deleting transaction histories"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Freebies! Scratch cards and rewards make users want to use that specific app more often."
      },
      {
            "text": "What must a customer be careful of while making digital transactions?",
            "options": [
                  "Earning too much interest",
                  "Keeping their phone fully charged at all times",
                  "Internet scams and following legal security procedures",
                  "Overusing the missed call service"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The biggest danger online is being tricked by a scammer into giving away your PIN or OTP."
      }
    ] }
  },
  {
    id: 'tech6', title: 'Creating Presentations with MS PowerPoint', category: 'Technology',
    description: 'Learn how to design engaging slides and deliver effective presentations using Microsoft PowerPoint.',
    thumbnailUrl: 'https://i.ytimg.com/vi/XF34-Wu6qWU/maxresdefault.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'PowerPoint Basics', videoUrl: 'https://www.youtube.com/embed/fACEzzmXelY', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is a highly recommended action to take immediately after opening a new PowerPoint file?",
            "options": [
                  "Add 10 blank slides",
                  "Save the presentation to avoid losing your work",
                  "Insert a video",
                  "Start the slideshow"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Always 'Save' first to 'Save' yourself from losing hard work!"
      },
      {
            "text": "How can you make PowerPoint easier to open in the future without searching for it every time?",
            "options": [
                  "Make it your desktop wallpaper",
                  "Email the app to yourself",
                  "Right-click the icon and choose \"Pin to taskbar\"",
                  "Leave the program running forever"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: 'Pin' it to your taskbar so it stays exactly where you need it, just like pinning a sticky note to a board."
      },
      {
            "text": "What is the large panel in the middle of the screen where you actually build your presentation called?",
            "options": [
                  "The Thumbnail area",
                  "The Status bar",
                  "The Slide area",
                  "The Ribbon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The 'Slide' area is the main stage where your slide actually lives and breathes."
      },
      {
            "text": "What is the panel on the left side of the screen that shows miniature versions of all your slides called?",
            "options": [
                  "The Ribbon",
                  "The Thumbnail area",
                  "The Status bar",
                  "The Slide area"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A 'Thumbnail' is a tiny picture, just like the tiny versions of your slides lined up on the left."
      },
      {
            "text": "In PowerPoint, what is the collection of tools grouped together at the very top of the screen called?",
            "options": [
                  "The Ribbon",
                  "The Status bar",
                  "The Taskbar",
                  "The Thumbnail area"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Like a ribbon tying a gift together, this top bar holds all your important tools together."
      },
      {
            "text": "Within the Ribbon, tools related to a specific task are clubbed together into a:",
            "options": [
                  "Folder",
                  "Tab",
                  "Group",
                  "File"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Related tools hang out together in a 'Group', just like a group of friends."
      },
      {
            "text": "Which tab should you click on to quickly change the overall look, color, and fonts of your entire presentation?",
            "options": [
                  "Home",
                  "Design",
                  "Animations",
                  "Insert"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Want to change how it looks? You are changing its 'Design'."
      },
      {
            "text": "Once you select a Design Theme, what are the different color options for that specific theme called?",
            "options": [
                  "Variants",
                  "SmartArts",
                  "Transitions",
                  "Animations"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Variants give you a 'variety' of color options for the exact same design."
      },
      {
            "text": "What does the small downward-pointing arrow next to a tool icon indicate?",
            "options": [
                  "The tool is currently broken",
                  "Clicking it will delete the slide",
                  "There is a drop-down menu with more layout or style options available",
                  "It moves the tool to the bottom of the screen"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The arrow points down to show that more options will 'drop down' when you click it."
      },
      {
            "text": "Which feature allows you to instantly convert a boring list of bullet points into a visual diagram?",
            "options": [
                  "Format Painter",
                  "SmartArt",
                  "Transitions",
                  "WordArt"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It makes your text look 'Smart' by turning it into 'Art'."
      },
      {
            "text": "If you right-click on a blank area of a slide and select \"Layout\", what are you doing?",
            "options": [
                  "Changing how the placeholders (like title and content boxes) are arranged",
                  "Deleting the slide",
                  "Printing the slide",
                  "Adding a new animation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: 'Layout' literally means how things are laid out on the page."
      },
      {
            "text": "Which tab do you use to add a picture to your slide?",
            "options": [
                  "Design",
                  "Home",
                  "Insert",
                  "Transitions"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: If you want to put something inside the slide, you 'Insert' it."
      },
      {
            "text": "When resizing a picture, what key should you hold down while dragging the corner to ensure the image does not stretch or warp?",
            "options": [
                  "Control (Ctrl)",
                  "Alt",
                  "Spacebar",
                  "Shift"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: 'Shift' keeps the shape from shifting out of its original proportion."
      },
      {
            "text": "If you want to add a typed label underneath a picture, which tool from the Insert tab should you use?",
            "options": [
                  "SmartArt",
                  "Text Box",
                  "WordArt",
                  "Table"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It is literally a 'Box' that holds your 'Text'."
      },
      {
            "text": "What does clicking the icon with a \"larger capital A\" in the font settings do?",
            "options": [
                  "Changes the font color to red",
                  "Makes the text bold",
                  "Increases the font size",
                  "Changes the text to all capital letters"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: A larger 'A' means larger text. It's a visual shortcut for sizing up."
      },
      {
            "text": "Which view shows you all the slides in your presentation at a single glance like a grid?",
            "options": [
                  "Normal view",
                  "Slide Sorter view",
                  "Reading view",
                  "Slideshow view"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You use this zoomed-out view to easily 'sort' and rearrange all your slides."
      },
      {
            "text": "Which view do you use when you are actually presenting your slides to an audience?",
            "options": [
                  "Normal view",
                  "Slide Sorter view",
                  "Slideshow view",
                  "Thumbnail view"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It's time for the 'Show'!"
      },
      {
            "text": "During a slideshow, which of the following actions will advance you to the NEXT slide?",
            "options": [
                  "Hitting the Escape key",
                  "Hitting the Enter key",
                  "Hitting Page Up",
                  "Hitting the Shift key"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 'Enter' tells the computer to move forward into the next slide."
      },
      {
            "text": "During a slideshow, which key can you press to go BACK to the previous slide?",
            "options": [
                  "Page Down",
                  "Enter",
                  "Spacebar",
                  "Page Up"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: 'Page Up' moves your presentation UP the list to the previous slide."
      },
      {
            "text": "How do you completely exit the slideshow mode and return to editing your slides?",
            "options": [
                  "Press the Escape key",
                  "Press the Spacebar",
                  "Double-click the screen",
                  "Turn off the computer"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: You want to 'Escape' from the full-screen show and go back to normal mode."
      },
      {
            "text": "What is the fundamental difference between Animations and Transitions?",
            "options": [
                  "Animations move the whole slide; Transitions move objects inside the slide.",
                  "Animations move objects inside the slide; Transitions move the whole slide.",
                  "Animations are only for text; Transitions are only for pictures.",
                  "There is no difference; they are the same thing."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A 'Transition' is a journey from one place to another (slide to slide). 'Animation' brings a single drawing (object) to life."
      },
      {
            "text": "If you want a picture to appear on your slide only after you click the mouse, which tab do you use?",
            "options": [
                  "Design",
                  "Transitions",
                  "Animations",
                  "Insert"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Making a picture appear or bounce is animating that specific object."
      },
      {
            "text": "According to the video, what is the best animation style for a beginner to use to keep things professional?",
            "options": [
                  "Bounce",
                  "Swivel",
                  "Fade",
                  "Zoom"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: 'Fade' is smooth and natural. It avoids making the audience dizzy with bouncing or spinning text."
      },
      {
            "text": "Which tab controls the visual effect that happens when you move from slide 1 to slide 2?",
            "options": [
                  "Transitions",
                  "Animations",
                  "Design",
                  "Home"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Moving from slide 1 to 2 is 'transitioning' between scenes in your presentation."
      },
      {
            "text": "In the Transitions tab, which button ensures that every slide moves to the next slide using the exact same visual effect?",
            "options": [
                  "Duplicate Slide",
                  "Apply to All",
                  "Match Format",
                  "Copy Effect"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The name tells you exactly what it does: it applies the transition effect to ALL slides instantly."
      }
    ] }
  },
  {
    id: 'tech7', title: 'Advanced MS Excel for Small Businesses', category: 'Technology',
    description: 'Take your Excel skills to the next level with formulas, pivot tables, and data analysis for business.',
    thumbnailUrl: 'https://d2ds8yldqp7gxv.cloudfront.net/Blog+Images/1303.webp',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Advanced Data Management', videoUrl: 'https://www.youtube.com/embed/WCuqPcvmLPo', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "According to the video, approximately what proportion of small businesses in the USA use Microsoft Excel to manage their data?",
            "options": [
                  "One out of ten",
                  "Half of all businesses",
                  "Two out of three",
                  "Nine out of ten"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Excel is the absolute backbone of small businesses—a massive 2/3 (over 66%) rely on it daily!"
      },
      {
            "text": "What is the keyboard shortcut used to instantly turn a selected range of data into a structured Table?",
            "options": [
                  "Ctrl + S",
                  "Ctrl + T",
                  "Ctrl + P",
                  "Ctrl + Shift + L"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 'T' stands for Table! It is the fastest way to organize raw data."
      },
      {
            "text": "When Monica wanted to restrict Joy to only answering \"Yes\" or \"No\" in her cookie checklist, which Excel feature did she use?",
            "options": [
                  "Pivot Tables",
                  "Macros",
                  "Data Validation",
                  "Conditional Formatting"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You are \"Validating\" the data to ensure only the right specific answers are allowed in the cell."
      },
      {
            "text": "What happens automatically when you add a new column directly next to an existing Excel Table?",
            "options": [
                  "The file is deleted",
                  "Excel throws an error message",
                  "Excel automatically extends the table formatting to include the new column",
                  "The column turns black"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Tables are dynamic! They instantly grow and stretch to include new data you type next to them."
      },
      {
            "text": "In newer versions of Excel (Office 365 beta), where can you find the new visual \"Checkbox\" feature?",
            "options": [
                  "The Data ribbon",
                  "The Insert ribbon",
                  "The Formulas ribbon",
                  "The View ribbon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You want to put a brand new visual element into your cell, so you \"Insert\" it."
      },
      {
            "text": "If you want to create a professional invoice without designing it from scratch, what should you do?",
            "options": [
                  "Go to File > New and search for a template",
                  "Write a complex VBA script",
                  "Draw the invoice using the Shapes tool",
                  "Use a Pivot Table"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Templates do 90% of the heavy lifting. Why reinvent the wheel when Microsoft gives it to you for free?"
      },
      {
            "text": "How can you save your customized invoice so you can easily reuse the layout later without overwriting it?",
            "options": [
                  "Save it as a PDF",
                  "Save it as an Excel Template file",
                  "Save it as a JPEG image",
                  "Save it to your desktop as a standard workbook"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Saving as a .xltx (Template) creates a master copy that you can open over and over without destroying the original."
      },
      {
            "text": "Where will your custom saved Excel templates appear the next time you want to use them?",
            "options": [
                  "In the \"Deleted Items\" folder",
                  "Under File > New, in the \"Personal\" tab",
                  "Under the Insert tab",
                  "On your computer's desktop"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Microsoft keeps its own templates in the 'Office' tab, but your customized ones go to your 'Personal' tab."
      },
      {
            "text": "What is the keyboard shortcut to quickly apply Filters to your data headers?",
            "options": [
                  "Ctrl + T",
                  "Ctrl + C",
                  "Ctrl + Shift + L",
                  "Alt + F4"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: 'L' stands for List! It turns your headers into a filterable List instantly."
      },
      {
            "text": "Bob the Builder wanted to see bookings specifically for the \"next quarter\". Which feature makes this easy?",
            "options": [
                  "WordArt",
                  "Date Filters on a date column",
                  "VLOOKUP formula",
                  "Page Layout"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Excel is smart enough to understand time. Date Filters let you easily pick \"next week\", \"last month\", or \"next quarter\"."
      },
      {
            "text": "Which simple formula should you use to count all the items (both text and numbers) in a specific column, like total total bookings?",
            "options": [
                  "=SUM()",
                  "=COUNTA()",
                  "=AVERAGE()",
                  "=MAX()"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Standard =COUNT() only counts numbers. =COUNTA() counts \"All\" non-empty cells, including text."
      },
      {
            "text": "If you only want to count bookings that have the status \"Booked\" (ignoring \"Cancelled\" ones), which formula is best?",
            "options": [
                  "=COUNT()",
                  "=SUM()",
                  "=COUNTIFS()",
                  "=VLOOKUP()"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The \"IFS\" adds conditions. Count it IF the status says \"Booked\"."
      },
      {
            "text": "What is the primary purpose of a Pivot Table in Excel?",
            "options": [
                  "To create a blank checklist",
                  "To quickly summarize and analyze large amounts of data without writing formulas",
                  "To download new fonts",
                  "To change the color of your spreadsheet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You \"pivot\" or turn the data around to instantly see summaries and reports without typing a single complex formula."
      },
      {
            "text": "In Dwight's gym example, where did he drag the \"Members\" field to list their names down the left side of the Pivot Table?",
            "options": [
                  "The Values area",
                  "The Columns area",
                  "The Rows area",
                  "The Filters area"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Rows go top to bottom. Dragging a name to 'Rows' lists everyone neatly down the left-hand side."
      },
      {
            "text": "When Dwight first dragged the \"Weight\" field into the Values area of the Pivot Table, what math did Excel automatically do by default?",
            "options": [
                  "It Averaged the weights",
                  "It Summed (added) all the weights together",
                  "It Multiplied the weights",
                  "It Counted the number of weigh-ins"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Excel is a calculator first! Its default behavior for any number in the Values box is to Sum (add) it all up."
      },
      {
            "text": "How did Dwight change the Pivot Table to show the average weight instead of the sum of the weights?",
            "options": [
                  "He wrote an =AVERAGE() formula next to the table",
                  "He right-clicked the numbers and changed the summary option from Sum to Average",
                  "He restarted Excel",
                  "He deleted the data and typed it manually"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Right-click is your best friend in Pivot Tables! It gives you instant access to change how the data is summarized."
      },
      {
            "text": "What is a key benefit of putting data into an Excel \"Table\" before adding new rows of information at the bottom?",
            "options": [
                  "The file size becomes zero",
                  "Data validation rules (like yes/no dropdowns) automatically extend to the new row",
                  "The computer runs faster",
                  "It converts the data to a Word document"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Tables save you time! Any rule, color, or formula you applied to the top rows automatically copies down to new ones."
      },
      {
            "text": "What employee management app sponsored the video?",
            "options": [
                  "Slack",
                  "Microsoft Teams",
                  "Connecteam",
                  "Zoom"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The app is designed to 'Connect' your 'Team'."
      },
      {
            "text": "When using the Data Validation list feature, what punctuation mark should you use to separate options (e.g., separating \"Yes\" and \"No\")?",
            "options": [
                  "A period (.)",
                  "A hyphen (-)",
                  "A comma (,)",
                  "A slash (/)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: A comma is the universal separator in Excel formulas and lists."
      },
      {
            "text": "When formatting numbers in a Pivot Table, how did Dwight make the average weights look cleaner?",
            "options": [
                  "He changed the font to Wingdings",
                  "He right-clicked, chose Number Format, and restricted it to one decimal point",
                  "He deleted the decimal points completely using the backspace key",
                  "He highlighted them in bright yellow"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 'Number Format' changes how clean the number looks (like rounding decimals) without deleting the real underlying data."
      }
    ] }
  },
  {
    id: 'tech8', title: 'Web Development Basics (HTML & CSS)', category: 'Technology',
    description: 'Learn the building blocks of the web. Create your first webpage using HTML and style it with CSS.',
    thumbnailUrl: 'https://images.surferseo.art/9602bc4b-cfc4-410e-b291-611d478c9d6a.png',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'HTML & CSS Basics', videoUrl: 'https://www.youtube.com/embed/Rek0NWPCNOc', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What does HTML stand for?",
            "options": [
                  "Hyper Transfer Markup Language",
                  "HyperText Markup Language",
                  "HighText Machine Language",
                  "Hyperlink and Text Markup Language"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 'HyperText' links pages together across the web, and 'Markup' formats the text structure."
      },
      {
            "text": "Which HTML element serves as the root container for the entire webpage?",
            "options": [
                  "<head>",
                  "<body>",
                  "<html>",
                  "<title>"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Everything on an HTML page must live inside the main <html> house."
      },
      {
            "text": "What is the correct syntax for adding a comment in HTML?",
            "options": [
                  "// This is a comment",
                  "/* This is a comment */",
                  "",
                  "<! This is a comment !>"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: HTML comments look like an arrow pointing to a hidden secret note: ."
      },
      {
            "text": "Which of the following HTML tags does NOT require a closing tag?",
            "options": [
                  "<p>",
                  "<h1>",
                  "<img>",
                  "<title>"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: An image stands alone; you don't put text inside it, so it doesn't need a closing tag."
      },
      {
            "text": "What is the primary purpose of the \"id\" attribute in HTML?",
            "options": [
                  "To group multiple elements together",
                  "To uniquely identify a single specific element on the page",
                  "To link to an external CSS stylesheet",
                  "To declare the version of HTML being used"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Just like your personal ID card, an HTML 'id' must be 100% unique on the page."
      },
      {
            "text": "Which attribute should you use if you want to apply the same styling to multiple different elements?",
            "options": [
                  "id",
                  "style",
                  "type",
                  "class"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: A 'class' is a group of students sharing the same rules. In HTML, a class shares the same style rules."
      },
      {
            "text": "What is the purpose of the <!DOCTYPE html> declaration at the top of a file?",
            "options": [
                  "It links a CSS file to the HTML",
                  "It tells the web browser that the document is written in HTML5",
                  "It creates the visible body of the webpage",
                  "It encrypts the code for security"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It is the \"Document Type\" declaration that formally introduces the file to the browser."
      },
      {
            "text": "Which tag is used to contain metadata, the page title, and other information that is NOT directly displayed on the webpage?",
            "options": [
                  "<body>",
                  "<footer>",
                  "<head>",
                  "<script>"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Just like human thoughts stay hidden inside the head, webpage metadata stays hidden in the <head>."
      },
      {
            "text": "Which HTML heading tag displays the largest and most important text by default?",
            "options": [
                  "<h6>",
                  "<h3>",
                  "<h1>",
                  "<header>"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: #1 means the top priority, so <h1> is the biggest and most important heading."
      },
      {
            "text": "How do you correctly create a line break without starting a completely new paragraph?",
            "options": [
                  "<lb>",
                  "<br>",
                  "<hr>",
                  "<break>"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 'br' simply stands for Break."
      },
      {
            "text": "Which HTML tag is used to draw a thematic horizontal line across the webpage?",
            "options": [
                  "<line>",
                  "<hr>",
                  "<br>",
                  "<tr>"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 'hr' stands for Horizontal Rule (a straight horizontal line)."
      },
      {
            "text": "Why do developers use HTML Entities like &lt; and &gt;?",
            "options": [
                  "To make the website load significantly faster",
                  "To encrypt sensitive text",
                  "To display reserved characters (like < and >) without the browser confusing them for actual HTML tags",
                  "To add background colors to the text"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: 'lt' means Less Than (<) and 'gt' means Greater Than (>). Entities stop the browser from getting confused."
      },
      {
            "text": "Which tag is used to display text as superscript (e.g., the power of 2 in x²)?",
            "options": [
                  "<sub>",
                  "<sup>",
                  "<small>",
                  "<strong>"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Superman flies UP in the sky! 'sup' pushes the text UP."
      },
      {
            "text": "How do you create an Unordered (bulleted) list in HTML?",
            "options": [
                  "<ol>",
                  "<ul>",
                  "<list>",
                  "<li>"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 'ul' literally stands for Unordered List."
      },
      {
            "text": "Which tag is used to define an individual item inside either an ordered or unordered list?",
            "options": [
                  "<item>",
                  "<li>",
                  "<ul>",
                  "<ol>"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 'li' stands for List Item."
      },
      {
            "text": "If you want an ordered list to use uppercase Roman numerals (I, II, III), which attribute should you add to the <ol> tag?",
            "options": [
                  "style=\"roman\"",
                  "format=\"I\"",
                  "type=\"I\"",
                  "order=\"roman\""
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You are telling the browser exactly what \"type\" of characters to use for counting."
      },
      {
            "text": "What does the <em> tag do to the enclosed text?",
            "options": [
                  "It renders the text in bold",
                  "It strikes a line through the text",
                  "It renders the text in italics to emphasize it",
                  "It highlights the text with a yellow background"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: 'em' is short for EMphasis, which visually tilts the text (italics) to make it stand out."
      },
      {
            "text": "Which structural tag contains all the visible content (text, images, links) that the user interacts with on a webpage?",
            "options": [
                  "<title>",
                  "<head>",
                  "<body>",
                  "<html>"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The 'body' is the physical, visible part of the webpage that users actually look at."
      },
      {
            "text": "Which HTML formatting tag is used to make text slightly smaller than the surrounding regular text?",
            "options": [
                  "<sub>",
                  "<small>",
                  "<tiny>",
                  "<min>"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The tag name does exactly what it says—it makes text small!"
      },
      {
            "text": "In the video, which text editor is primarily recommended for writing HTML code efficiently?",
            "options": [
                  "Notepad",
                  "Microsoft Word",
                  "TextEdit",
                  "Visual Studio Code (VS Code)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: VS Code is currently the undisputed king of code editors for web developers worldwide."
      }
    ] }
  },
  {
    id: 'tech9', title: 'Graphic Design Basics using Canva', category: 'Technology',
    description: 'Create stunning posters, social media posts, and flyers easily using the Canva design tool.',
    thumbnailUrl: 'https://i.ytimg.com/vi/7VMhwlCnMbg/maxresdefault.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Canva Design Fundamentals', videoUrl: 'https://www.youtube.com/embed/6IrqN2diTmY', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary purpose of Canva as discussed in the tutorial?",
            "options": [
                  "To write complex backend code for websites",
                  "To create social media posts and reels without needing professional design skills",
                  "To strictly manage digital marketing ad budgets",
                  "To permanently store large server databases"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Canva is specifically built for non-designers to easily drag and drop elements for quick visual content."
      },
      {
            "text": "Which website is recommended in the video to find updated sizes for various social media platforms?",
            "options": [
                  "socialsizes.io",
                  "facebook.com",
                  "canvapro.com",
                  "googleanalytics.com"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The name literally says exactly what it does: gives you \"social sizes\"."
      },
      {
            "text": "What pixel size is highly recommended for creating vertical content like Instagram Reels and YouTube Shorts?",
            "options": [
                  "1080 x 1080",
                  "1920 x 1080",
                  "1080 x 1920",
                  "851 x 315"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Standard horizontal HD is 1920x1080. Vertical flips it around to 1080x1920, just like holding your phone upright."
      },
      {
            "text": "Which pixel size is considered a versatile \"square\" that works well across Instagram, Facebook, and LinkedIn?",
            "options": [
                  "1080 x 1920",
                  "1920 x 1080",
                  "500 x 500",
                  "1080 x 1080"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: A square has equal sides, so the width and height numbers must match exactly (1080 by 1080)."
      },
      {
            "text": "What does a small \"Crown\" icon next to a template or element indicate in Canva?",
            "options": [
                  "It is the most popular item of the day",
                  "It is a premium feature available only to Canva Pro (paid) users",
                  "It is an older feature that will be removed soon",
                  "It is a template made specifically for jewelry brands"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A crown symbolizes royalty or premium status, meaning you have to pay to wear it!"
      },
      {
            "text": "How can you quickly fit an uploaded image perfectly into a specific shape, like a circle?",
            "options": [
                  "By manually cropping the edges with the eraser tool",
                  "By changing the background color to white",
                  "By dragging and dropping the image into a \"Frame\" element",
                  "By downloading it as a PDF"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Just like you put a printed photo into a physical wooden \"frame\", you drop digital images into Canva frames."
      },
      {
            "text": "What happens when you double-tap an image that has been placed inside a frame?",
            "options": [
                  "The image is permanently deleted",
                  "It allows you to slide, reposition, or crop the image within the frame",
                  "It automatically changes the image to black and white",
                  "It duplicates the frame onto a new page"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Double-tapping unlocks the image from its frozen state, letting you slide it around to find the perfect crop."
      },
      {
            "text": "Which Canva feature uses AI to help you rewrite text, fix spelling, or continue writing?",
            "options": [
                  "Auto Spell",
                  "Text Wizard",
                  "Magic Write",
                  "Font Fixer"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It works like \"Magic\" to \"Write\" the rest of your text for you using AI."
      },
      {
            "text": "How much cloud storage capacity is mentioned for uploading your personal files to Canva?",
            "options": [
                  "100 MB (Megabytes)",
                  "5 GB (Gigabytes)",
                  "1 TB (Terabyte)",
                  "Unlimited"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: 1 TB (Terabyte) is massive—enough to hold thousands of high-quality designs and videos in the cloud."
      },
      {
            "text": "When downloading an animated reel or video, which file format must you select?",
            "options": [
                  "JPEG",
                  "PNG",
                  "MP4 Video",
                  "PDF Document"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: MP4 is the universal standard format for video files across all modern devices and platforms."
      },
      {
            "text": "How can you easily find pre-made templates that match your brand's specific color scheme?",
            "options": [
                  "You must manually change every color box one by one",
                  "By asking the Canva support team to email them to you",
                  "By uploading a picture of a rainbow",
                  "By using the color filter option in the template search bar"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Why search manually when the color filter does the hunting for you in seconds?"
      },
      {
            "text": "What is the restriction on uploading your own custom fonts to Canva?",
            "options": [
                  "It is completely free for all users",
                  "You can only upload fonts that start with the letter A",
                  "Canva does not support custom fonts under any circumstances",
                  "It is only available for Canva Pro (paid) users"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Canva gives thousands of free fonts, but adding your own custom brand font is an exclusive premium feature."
      },
      {
            "text": "If you want to add a completely blank canvas to your current design project, what button should you click?",
            "options": [
                  "Duplicate",
                  "Add Page",
                  "Magic Write",
                  "Upload File"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You are simply adding a brand new, empty \"page\" to your design book."
      },
      {
            "text": "How do you safely remove an unwanted image from a template while keeping its placeholder frame intact?",
            "options": [
                  "Change the picture's transparency to zero",
                  "Use the crop tool to cut the whole image away",
                  "Select the image and press delete, leaving the empty frame behind",
                  "It is impossible; you must delete the entire frame"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Deleting just the image leaves the empty container (frame) ready for you to drop your own picture inside."
      },
      {
            "text": "How can you add a custom voiceover or a specific song to a Canva reel?",
            "options": [
                  "By typing the lyrics into a text box and letting Canva sing them",
                  "By using the \"Uploads\" section to add your own audio file or selecting from the \"Audio\" tab",
                  "By changing the background color to 'Audio Mode'",
                  "Audio cannot be added to Canva designs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: If Canva doesn't have the song, you simply \"Upload\" your own audio file to the library."
      },
      {
            "text": "Which tool allows you to add background colors, shadows, or outlines specifically to your text?",
            "options": [
                  "The Crop tool",
                  "The Magic Write tool",
                  "The Animate button",
                  "The Effects option on the text toolbar"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Shadows and outlines are special visual \"Effects\" applied to make flat text pop out."
      },
      {
            "text": "What keyboard shortcut is mentioned as a quick way to undo a mistake while designing?",
            "options": [
                  "Ctrl + C",
                  "Ctrl + V",
                  "Ctrl + Z",
                  "Ctrl + X"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The letter 'Z' is at the end of the alphabet, and it helps you go back to what you did at the end."
      },
      {
            "text": "What is the recommended first step for absolute beginners trying to learn Canva?",
            "options": [
                  "Start with a completely blank white page and guess",
                  "Start by modifying pre-made templates to understand spacing and layout",
                  "Immediately buy the Pro version before trying anything",
                  "Learn to code in HTML and CSS first"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Don't reinvent the wheel! Learn from professional templates to see how the pros balance space and text."
      },
      {
            "text": "If you want to add a colored border line around a shape, which setting should you adjust?",
            "options": [
                  "The Font Size",
                  "The Transparency slider",
                  "The Alignment tool",
                  "The Stroke/Border setting"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: In design terminology, drawing a line around the edge of a shape is called a \"Stroke\" or \"Border\"."
      },
      {
            "text": "Why is it so important to know the exact dimensions of a social media post before designing?",
            "options": [
                  "Because Canva deletes files that are the wrong size",
                  "Because smaller sizes cost less money to download",
                  "To prevent your text and images from being awkwardly cropped or cut off when uploaded",
                  "It actually does not matter; all social media sites auto-fix your images perfectly"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: If your design is too wide, Instagram will violently chop off the edges, ruining your beautiful work!"
      }
    ] }
  },
  {
    id: 'tech10', title: 'Smartphone Troubleshooting & Maintenance', category: 'Technology',
    description: 'Learn how to fix common smartphone issues, manage storage, and keep your device running smoothly.',
    thumbnailUrl: 'https://www.cellsmartpos.com/hubfs/Blog%20Featured%20Images/CellSmart%20POS%20Blog/phone-repair-tools.webp',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Mobile Repair Basics', videoUrl: 'https://www.youtube.com/embed/PdJxBX2EAHo', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the first thing to check if a mobile phone is completely dead and not switching on?",
            "options": [
                  "The screen connection",
                  "Shorting at the battery connector",
                  "The camera module",
                  "The speaker resistors"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: If the phone is completely dead, check its life source first—the battery connector for any shorts!"
      },
      {
            "text": "If the positive and negative terminals of the battery connector are connected, what does this indicate?",
            "options": [
                  "The phone is fully charged",
                  "The battery is missing",
                  "The phone is fully shorted",
                  "The network IC is working perfectly"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Positive and negative touching directly means a direct short circuit (full short)."
      },
      {
            "text": "Which section of the PCB is primarily responsible if the phone is fully shorting directly from the battery connector?",
            "options": [
                  "The camera section",
                  "The sound section",
                  "The power section",
                  "The display section"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The battery powers the whole board, so a direct short points straight to the Power section."
      },
      {
            "text": "What is the main function of the power section on a mobile PCB?",
            "options": [
                  "To generate sound for the speakers",
                  "To connect to Wi-Fi and Bluetooth",
                  "To take voltage from the battery/charging port and distribute it to other parts",
                  "To store user data and photos"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It acts as the heart of the phone, pumping power (voltage) to all the other organs (components)."
      },
      {
            "text": "Why should you be careful before removing capacitors near the CPU that appear to be shorted?",
            "options": [
                  "They are glued down permanently",
                  "They naturally have low resistance and are meant to test that way",
                  "They control the phone's display",
                  "They contain toxic chemicals"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: CPUs require huge amounts of current at very low voltage, so their capacitors naturally show low resistance (which can mimic a short)."
      },
      {
            "text": "Where are CPU capacitors often mounted if they are not immediately visible next to the CPU?",
            "options": [
                  "Inside the charging port",
                  "On the speaker module",
                  "Clustered together on the opposite side of the motherboard",
                  "Inside the battery"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: To save space, engineers often pack these capacitors directly underneath the CPU on the flip side of the board."
      },
      {
            "text": "What tool is recommended in the video to force a fully shorted component to heat up so you can identify it?",
            "options": [
                  "A magnifying glass",
                  "A short killer",
                  "A soldering iron",
                  "A pair of tweezers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A \"short killer\" injects safe current, making the bad (shorted) component heat up and expose itself."
      },
      {
            "text": "If you do not have a \"short killer,\" what standard tool can you use to test and find shorted components one by one?",
            "options": [
                  "A multimeter",
                  "A screwdriver",
                  "A microscope",
                  "A heat gun"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: A multimeter measures electrical resistance, letting you manually hunt down the short."
      },
      {
            "text": "Which of the following problems falls under the \"wireless connection\" section?",
            "options": [
                  "The screen goes black",
                  "The phone does not charge",
                  "Wi-Fi, Bluetooth, or Network is not turning on",
                  "The speaker has no sound"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Wireless\" literally means without wires—like Wi-Fi, Bluetooth, and mobile networks."
      },
      {
            "text": "What is the name of the common main Network IC mentioned in the tutorial?",
            "options": [
                  "CPU",
                  "WTR",
                  "eMMC",
                  "USB"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: WTR (Wireless Transceiver) is a very famous Qualcomm chip used for network signals."
      },
      {
            "text": "True or False: Bluetooth and Wi-Fi are always integrated inside the exact same IC as the main cellular network.",
            "options": [
                  "True, they are never separate",
                  "False, some phones have a separate IC for Bluetooth and Wi-Fi",
                  "True, but only on older phones",
                  "False, Bluetooth doesn't use an IC"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: While sometimes bundled, many phones dedicate a separate chip just for Wi-Fi and Bluetooth to handle the load."
      },
      {
            "text": "If a phone is fully shorted but the power section components seem fine, where else should you check?",
            "options": [
                  "The plastic casing of the phone",
                  "Components receiving high input voltage in other sections (like the network section)",
                  "The volume buttons",
                  "The microphone hole"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: High voltage lines travel across the board (like to the network PA), so a short there can kill the whole phone."
      },
      {
            "text": "Why might a large capacitor in the network section cause the entire PCB to short out?",
            "options": [
                  "Because it is made of metal",
                  "Because it deals with a high amount of input voltage coming directly from the power line",
                  "Because it blocks the Wi-Fi signal",
                  "Because it is connected to the camera"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The network amplifier needs raw battery power. If its main capacitor blows, the entire battery line shorts to ground."
      },
      {
            "text": "The charging IC is generally considered a part of which major PCB section?",
            "options": [
                  "The power section",
                  "The audio section",
                  "The network section",
                  "The logic section"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Charging deals entirely with managing electricity, which is the core job of the power section."
      },
      {
            "text": "Aside from distributing voltage to the battery, what is another crucial job of the charging IC?",
            "options": [
                  "Playing ringtones",
                  "Sending charging signals to the CPU",
                  "Taking photographs",
                  "Connecting to Bluetooth headphones"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The charging IC must talk to the CPU to display the charging percentage and battery icon on the screen."
      },
      {
            "text": "Which IC is responsible for actually generating the audio you hear from the phone?",
            "options": [
                  "The CPU",
                  "The charging IC",
                  "The sound IC",
                  "The network IC"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Audio = Sound. The Sound IC (or Audio Codec) handles all ringtones and voice processing."
      },
      {
            "text": "In the sound section, which components are often the very last ones to send the audio signal directly to the speaker?",
            "options": [
                  "Two large capacitors",
                  "Two resistors",
                  "The Wi-Fi antenna",
                  "The charging port pins"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: There are usually two small, parallel resistors right before the speaker pads that act as fuses for the audio signal."
      },
      {
            "text": "What will happen if you remove all the CPU capacitors because you mistakenly think they are causing a short?",
            "options": [
                  "The phone will work perfectly",
                  "The area will still test as shorted because of the CPU's naturally low resistance",
                  "The phone will charge faster",
                  "The display will get brighter"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The \"short\" wasn't a short, it was just the CPU's normal low resistance! Removing capacitors ruins the CPU power delivery."
      },
      {
            "text": "Full PCB shorting is almost always caused by components that deal with what?",
            "options": [
                  "High or direct voltage from the battery connector",
                  "Low audio frequencies",
                  "LED light signals",
                  "Touchscreen inputs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Only the main power lines (VPH or VBAT) have enough direct connection to short out the entire board."
      },
      {
            "text": "According to the video, what makes repairing the sound section complicated for many technicians?",
            "options": [
                  "The sound IC is usually hidden inside the battery",
                  "They fail to trace the sound pathway from the sound IC through the final resistors to the speaker",
                  "Sound components are illegal to replace",
                  "The speaker is directly connected to the camera"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It's all about tracing the path. If you lose track of the line between the IC and the speaker, you can't fix the sound."
      }
    ] }
  },
  // --- BUSINESS (10) ---
  {
    id: 'bus1', title: 'Marketing Tribal Handicrafts', category: 'Business',
    description: 'Learn how to effectively market and sell your handmade products to a wider audience.',
    thumbnailUrl: 'https://www.shutterstock.com/image-photo/pa-brazil-november-8-2025-260nw-2700192947.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Identifying Your Target Market', videoUrl: 'https://www.youtube.com/embed/Rp6Sn1coaKk', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What type of handmade bag was suggested as a business idea?",
            "options": [
                  "Plastic Bags",
                  "Crochet Handbags",
                  "Paper Bags",
                  "Aluminum Bags"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Crochet is a classic handmade skill using yarn to make beautiful, trendy bags."
      },
      {
            "text": "Which of the following is a home decor business idea mentioned in the video?",
            "options": [
                  "Wooden Signs",
                  "Metal Roofing",
                  "Cement Blocks",
                  "Plastic Siding"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Rustic wooden signs with painted quotes are wildly popular for home and farmhouse decor."
      },
      {
            "text": "What type of handmade jewelry was suggested as a product to sell?",
            "options": [
                  "Gold Watches",
                  "Diamond Rings",
                  "Clay Earrings",
                  "Platinum Bands"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Polymer clay is incredibly versatile, cheap, and easy to mold for shaping custom earrings."
      },
      {
            "text": "Which item was suggested for pet owners to make and sell?",
            "options": [
                  "Dog Houses",
                  "Leather Collars",
                  "Metal Chains",
                  "Pets Toys"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Pet owners love spoiling their pets with safe, handmade toys."
      },
      {
            "text": "What type of handmade bath product was mentioned as a DIY business idea?",
            "options": [
                  "Bath Bombs",
                  "Plastic Sponges",
                  "Electronic Massagers",
                  "Rubber Ducks"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Bath bombs are fun DIY chemical reactions that people love buying for self-care."
      },
      {
            "text": "Which customizable item for holding keys was listed in the video?",
            "options": [
                  "Lanyards",
                  "Leather Wallets",
                  "Personalized Keychains",
                  "Smart Locks"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Everyone has keys, and putting a name on a keychain makes it a perfect, affordable gift."
      },
      {
            "text": "What handmade painting style was highlighted as a DIY craft to sell?",
            "options": [
                  "Digital Painting",
                  "Resign Paintings",
                  "Fresco Painting",
                  "Oil Pastels"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Resin (epoxy) creates a glossy, 3D glass-like finish that makes paintings and art pop."
      },
      {
            "text": "Which clothing item was suggested to be customized with designs like \"eat sleep code repeat\"?",
            "options": [
                  "Leather Jackets",
                  "Denim Pants",
                  "Graphic T-Shirts",
                  "Wool Sweaters"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Custom text and quotes are most easily printed on basic cotton graphic tees."
      },
      {
            "text": "What type of event paper goods were recommended to make and sell?",
            "options": [
                  "Parking Tickets",
                  "Wedding Invitations",
                  "Restaurant Menus",
                  "Tax Forms"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Weddings are huge, expensive events where people happily pay for beautiful, custom paper goods."
      },
      {
            "text": "Which handmade scent product was featured for creating a relaxing atmosphere at home?",
            "options": [
                  "Industrial Air Fresheners",
                  "Car Exhaust Spray",
                  "Plastic Flowers",
                  "Incenses"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Incense sticks burn slowly to release relaxing, aromatic smoke in the house."
      },
      {
            "text": "What type of craft made from yarn was suggested for keeping warm?",
            "options": [
                  "Silk Ties",
                  "Knitted Hats",
                  "Cotton T-Shirts",
                  "Nylon Jackets"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Knitting yarn is the traditional and warmest way to make cozy winter hats/beanies."
      },
      {
            "text": "Which of the following was suggested as an idea to help organize and plan life goals?",
            "options": [
                  "GPS Trackers",
                  "Electronic Tablets",
                  "Manifestation Planners",
                  "Wall Clocks"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Planners help you \"manifest\" (bring into reality) your life goals by writing them down."
      },
      {
            "text": "What handmade or customized item was recommended to hold coffee or tea?",
            "options": [
                  "Plastic Bottles",
                  "Coffee Mugs",
                  "Paper Cups",
                  "Aluminum Cans"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Customized mugs are the ultimate personalized holder for your morning coffee."
      },
      {
            "text": "Which craft involving melting and molding was suggested as a skincare or body product?",
            "options": [
                  "Plastic Containers",
                  "Rubber Bands",
                  "Handmade Soap",
                  "Metal Tins"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Melting bases, mixing scents, and molding is the classic handmade soap-making process."
      },
      {
            "text": "What trendy DIY item was featured that is popular with kids for stretching and playing?",
            "options": [
                  "Wooden Blocks",
                  "Metal Cars",
                  "Glass Marbles",
                  "Slime"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Slime is the gooey, stretchy, colorful trend that kids go absolutely crazy over."
      }
    ] }
  },
  {
    id: 'bus2', title: 'Pricing Your Products', category: 'Business',
    description: 'Understand how to calculate costs and set a fair and profitable price for your goods.',
    thumbnailUrl: 'https://cdn.betterproposals.io/blog/2022/11/price-vs-value-1-1024x704.png',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Cost Calculation', videoUrl: 'https://www.youtube.com/embed/E84R362yfHE', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What college degree did the speaker (Mei) earn, which she says helps her with the \"science\" of pricing?",
            "options": [
                  "Fine Arts",
                  "Actuarial Science (Math)",
                  "Business Administration",
                  "Marketing"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Actuaries deal strictly with deep math, statistics, and risk—perfect skills for crunching business numbers!"
      },
      {
            "text": "When it comes to material costs, what major pricing mistake do many new handmade business owners make?",
            "options": [
                  "Buying materials at wholesale prices",
                  "Forgetting to buy materials in bulk",
                  "Buying materials at retail prices (like from craft stores or Amazon)",
                  "Making all their own materials from scratch"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Buying retail means you're paying the consumer markup. You need wholesale supplier prices to make a real profit."
      },
      {
            "text": "How does the supply chain generally work for craft materials?",
            "options": [
                  "Manufacturer -> Consumer",
                  "Retail Store -> Manufacturer -> Wholesaler",
                  "Wholesaler -> Manufacturer -> Consumer",
                  "Manufacturer -> Distributor/Wholesaler -> Retailer -> Consumer"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: The product flows naturally from the factory (maker), to the bulk buyer (distributor), to the shop (retailer), and finally to you."
      },
      {
            "text": "What is a common requirement when buying craft materials directly from a wholesaler?",
            "options": [
                  "You must have a physical retail storefront",
                  "You must meet a minimum order requirement (e.g., $100 or more)",
                  "You have to buy at least one item every single month",
                  "You have to pay a monthly subscription fee"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Wholesalers give you cheap prices ONLY because they force you to buy a lot of volume at once (Minimum Order)."
      },
      {
            "text": "Which of the following best describes the \"value of a product to the customer\"?",
            "options": [
                  "The exact cost of the materials used",
                  "The minimum wage multiplied by the hours worked",
                  "The emotional, practical, or fashion significance the item holds for the buyer",
                  "The shipping and handling cost of the product"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Value isn't just the raw material cost; it's how much the customer *loves*, needs, or feels connected to the item."
      },
      {
            "text": "What example did the speaker use to demonstrate that a product can be invaluable to a specific customer?",
            "options": [
                  "A handmade leather handbag",
                  "An engagement ring shaped like a chocolate donut",
                  "A custom painting of a childhood pet",
                  "A hand-knitted winter scarf"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A donut ring seems weird to most, but it was absolutely priceless to the specific couple who asked for it!"
      },
      {
            "text": "According to the speaker, how should you view your time spent making a handmade product?",
            "options": [
                  "Your time is free if you enjoy the craft",
                  "Your time should be billed at exactly $5 an hour to stay competitive",
                  "Your time is valuable and must be factored into the product cost as labor",
                  "Your time is only counted if the customer asks for a custom order"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You are the primary employee of your own business. You must pay yourself an hourly wage for your labor!"
      },
      {
            "text": "What is the basic pricing formula recommended in the video?",
            "options": [
                  "(Material Costs + Labor) x 4 = Retail Price",
                  "Material Costs x 2 = Retail Price",
                  "(Material Costs + Labor) x 2 = Retail Price",
                  "Material Costs + Labor + Shipping = Retail Price"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The 4x multiplier ensures you cover your base costs, leave room for wholesale margins, and secure a retail profit."
      },
      {
            "text": "When using the recommended pricing formula, the speaker says you actually get paid \"twice.\" What are these two ways?",
            "options": [
                  "You get paid for materials and shipping",
                  "You get paid a deposit upfront and the rest upon delivery",
                  "You get paid for your labor as a maker AND you earn a profit as a business owner",
                  "You get paid by the customer and by the wholesaler"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You wear two hats: you get an hourly wage as the worker who builds it, and a profit cut as the boss who owns the business."
      },
      {
            "text": "What is a common misconception handmade sellers have about lowering their prices?",
            "options": [
                  "Lowering prices will increase their shipping costs",
                  "Lowering prices will attract high-end boutiques",
                  "Lowering prices will make their brand look premium",
                  "Lowering prices will automatically result in more sales"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Cheap prices often backfire. Buyers might suspect cheap quality, hurting sales instead of boosting them."
      },
      {
            "text": "Based on the speaker's experience, what type of customers do lower prices tend to attract?",
            "options": [
                  "Customers who are extremely loyal to the brand",
                  "Customers who value the art and craftsmanship highly",
                  "Customers who only shop at lower prices and may not value the products as much",
                  "Customers who leave the best feedback and reviews"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Bargain hunters care about getting a cheap deal, not about appreciating the art and effort of your craft."
      },
      {
            "text": "How does the speaker add perceived value and convenience for her specific jewelry customers?",
            "options": [
                  "By offering free overnight shipping",
                  "By individually gift-wrapping each necklace",
                  "By including a free pair of earrings with every order",
                  "By sending a personalized video message"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Beautiful gift-wrapping saves the customer time and makes opening the item feel like a premium, expensive experience."
      },
      {
            "text": "What is the fifth fact to consider when pricing your handmade products?",
            "options": [
                  "Your prices dictate what shipping materials you can use",
                  "Your prices determine if you have to pay quarterly taxes",
                  "Your prices tell a story about where you stand amongst your competitors",
                  "Your prices should always fluctuate based on the season"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Prices tell a story: High prices scream \"luxury and quality,\" while low prices whisper \"budget and cheap.\""
      },
      {
            "text": "If your products are priced lower than all your competitors, but your website looks unprofessional and lacks contact info, what will potential buyers likely think?",
            "options": [
                  "They will buy immediately because it's a great deal",
                  "They will assume you are a wholesaler",
                  "They will not trust your business and might assume something is wrong",
                  "They will email you to ask for an even bigger discount"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Too good to be true\" prices combined with a bad website trigger immediate scam alerts in a buyer's mind."
      },
      {
            "text": "How does the speaker justify having some of the highest prices in her specific niche (food-scented jewelry)?",
            "options": [
                  "She uses solid gold for all her jewelry findings",
                  "She pays for expensive celebrity endorsements",
                  "She forces customers to buy a minimum of 3 items at a time",
                  "She provides social proof, excellent customer service, generous policies, and a unique product feature"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: People happily pay extra for peace of mind, strong guarantees, and top-tier customer service."
      }
    ] }
  },
  {
    id: 'bus3', title: 'Basic Accounting for Artisans', category: 'Business',
    description: 'Keep track of your income, expenses, and profits using simple accounting methods.',
    thumbnailUrl: 'https://www.accountsjunction.com/BlogImg/bookkeepingforartistsother_1764842474.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Accounting Fundamentals', videoUrl: 'https://www.youtube.com/embed/vO09q2V8TGQ', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "Accounting is often referred to as the \"Language of Business\" because:",
            "options": [
                  "It is only used by top executives",
                  "It communicates financial information to help users make informed decisions",
                  "It is a complex mathematical formula",
                  "It is only used for filing taxes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Like learning French to speak in France, you learn Accounting to speak and understand Business."
      },
      {
            "text": "Which of the following is considered an \"external user\" of accounting information?",
            "options": [
                  "Store Manager",
                  "Employee",
                  "Investor",
                  "CEO"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Employees and managers are inside the company; investors are outside looking in before giving their money."
      },
      {
            "text": "What does GAAP stand for in the United States?",
            "options": [
                  "General Accounting and Auditing Practices",
                  "Global Accounting and Assessment Principles",
                  "Generally Accepted Accounting Principles",
                  "Government Approved Accounting Procedures"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: GAAP stands for the General rules that everyone Accepts and follows."
      },
      {
            "text": "Which accounting assumption states that a business is treated as completely separate from its owners?",
            "options": [
                  "Time period assumption",
                  "Monetary unit assumption",
                  "Going concern assumption",
                  "Economic entity assumption"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: You and your business are two completely separate \"entities\" with different wallets."
      },
      {
            "text": "Recording revenues when they are earned and expenses when they are incurred, regardless of when cash changes hands, is known as the:",
            "options": [
                  "Accrual basis assumption",
                  "Cash basis assumption",
                  "Historical cost principle",
                  "Conservatism principle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Accrual tracks the action, not the cash. You record the sale the moment the work is done."
      },
      {
            "text": "The principle that requires a company to record its assets at their original purchase price rather than their current market value is the:",
            "options": [
                  "Matching principle",
                  "Historical cost principle",
                  "Objectivity principle",
                  "Materiality principle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It goes in the books for the \"historic\" price you actually paid on that specific day in the past."
      },
      {
            "text": "What is the fundamental Accounting Equation?",
            "options": [
                  "Assets = Liabilities - Equity",
                  "Assets + Liabilities = Equity",
                  "Assets = Liabilities + Equity",
                  "Assets = Revenues - Expenses"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: What you own (Assets) = What you owe the bank (Liab) + What belongs to you (Eq)."
      },
      {
            "text": "Resources owned by a business, such as cash, equipment, and inventory, are classified as:",
            "options": [
                  "Liabilities",
                  "Equity",
                  "Assets",
                  "Expenses"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Assets are the valuable tools and cash that 'assist' your business in making money."
      },
      {
            "text": "In accounting, what do the terms \"Debit\" and \"Credit\" simply refer to?",
            "options": [
                  "Good and Bad",
                  "Increase and Decrease",
                  "Left side and Right side of an account",
                  "Profit and Loss"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Don't overthink it. Debit is just a fancy Latin word for Left, Credit is for Right."
      },
      {
            "text": "Which types of accounts normally increase with a Debit?",
            "options": [
                  "Assets and Expenses",
                  "Liabilities and Equity",
                  "Revenues and Liabilities",
                  "Equity and Expenses"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Think 'AE'. Assets and Expenses increase on the left side (Debit)."
      },
      {
            "text": "What is the first stage in the recording process where transactions are entered in chronological order?",
            "options": [
                  "The Ledger",
                  "The Trial Balance",
                  "The Journal",
                  "The Balance Sheet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Just like a personal diary, a Journal records events day by day as they happen."
      },
      {
            "text": "The \"filing cabinet\" of accounting, where journal entries are reorganized by individual accounts (like Cash or Accounts Payable), is called the:",
            "options": [
                  "Income Statement",
                  "Ledger",
                  "Trial Balance",
                  "Adjusting Entry"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A Ledger takes the messy daily journal and sorts it cleanly into individual folders."
      },
      {
            "text": "A list of all accounts and their ending balances, used to prove that total debits equal total credits, is the:",
            "options": [
                  "Trial Balance",
                  "Balance Sheet",
                  "Journal",
                  "Statement of Cash Flows"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: You put your math on 'trial' to prove that your left and right columns perfectly 'balance'."
      },
      {
            "text": "If a company pays $6,000 upfront for 6 months of rent, how should this be initially recorded?",
            "options": [
                  "As a $6,000 Rent Expense",
                  "As a Liability called Unearned Rent",
                  "As an Asset called Prepaid Rent",
                  "It is not recorded until the 6 months are over"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You haven't used the space yet, so it's a 'prepaid' asset you get to use in the future."
      },
      {
            "text": "What is the purpose of recording Depreciation?",
            "options": [
                  "To show the exact market value of an asset",
                  "To save money on buying new equipment",
                  "To spread the cost of a long-term asset over its useful life",
                  "To record the daily repair costs of machinery"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Depreciation slowly \"depreciates\" or spreads the massive cost of a machine over the many years you use it."
      },
      {
            "text": "Which of the following is considered a \"Temporary Account\" that must be closed at the end of the accounting period?",
            "options": [
                  "Cash",
                  "Accounts Payable",
                  "Retained Earnings",
                  "Revenue"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Revenues and expenses reset to zero every single year to start fresh, so they are temporary."
      },
      {
            "text": "During the closing process, revenue and expense accounts are first closed into which temporary account?",
            "options": [
                  "Retained Earnings",
                  "Income Summary",
                  "Dividends",
                  "Common Stock"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It 'summarizes' your total income before transferring the final profit to your permanent retained earnings."
      },
      {
            "text": "Which financial statement reports a company's revenues and expenses over a period of time to show net income or net loss?",
            "options": [
                  "Balance Sheet",
                  "Statement of Cash Flows",
                  "Income Statement",
                  "Statement of Retained Earnings"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It literally \"states\" your \"income\" (Revenue minus Expenses)."
      },
      {
            "text": "Which financial statement acts as a \"snapshot\" of the company's financial position at a single point in time?",
            "options": [
                  "Income Statement",
                  "Balance Sheet",
                  "Statement of Cash Flows",
                  "Trial Balance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It takes a freeze-frame snapshot of your exact balances on one specific day."
      },
      {
            "text": "What is the formula for calculating ending Retained Earnings?",
            "options": [
                  "Beginning Retained Earnings + Net Income - Dividends",
                  "Beginning Retained Earnings + Assets - Liabilities",
                  "Revenues - Expenses - Dividends",
                  "Net Income + Cash Flow - Liabilities"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Old money + New money made - Money given away = Ending money kept."
      },
      {
            "text": "On the Statement of Cash Flows, buying or selling long-term assets like equipment is classified under:",
            "options": [
                  "Operating activities",
                  "Financing activities",
                  "Investing activities",
                  "Non-cash activities"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Buying a 10-year machine isn't a daily operation, it is an \"investment\" in the company's future."
      },
      {
            "text": "In a merchandising company, what formula is used to calculate the Cost of Goods Sold (COGS)?",
            "options": [
                  "Sales Revenue - Operating Expenses",
                  "Beginning Inventory + Purchases - Ending Inventory",
                  "Current Assets - Current Liabilities",
                  "Net Income / Average Equity"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: What you started with + what you bought - what's left = what you actually sold."
      },
      {
            "text": "Which liquidity ratio is calculated by dividing Current Assets by Current Liabilities?",
            "options": [
                  "Debt-to-Equity Ratio",
                  "Return on Equity (ROE)",
                  "Gross Profit Margin",
                  "Current Ratio"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Current divided by Current equals the Current Ratio."
      },
      {
            "text": "What does a high Debt-to-Equity ratio indicate about a business?",
            "options": [
                  "It relies heavily on borrowed money (debt) compared to the owner's invested money",
                  "It has no liabilities",
                  "It has very high current assets",
                  "It is generating a very high return for its owners"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: High Debt-to-Equity means the Debt number is much bigger than the Equity number."
      },
      {
            "text": "Return on Equity (ROE) is a measure of profitability calculated by dividing:",
            "options": [
                  "Current Assets by Current Liabilities",
                  "Total Liabilities by Total Equity",
                  "Net Income by Average Equity",
                  "Gross Profit by Net Sales"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Return (Net Income) ON Equity (divided by Average Equity)."
      }
    ] }
  },
  {
    id: 'bus4', title: 'Starting a Cooperative', category: 'Business',
    description: 'Learn the benefits and steps to form a cooperative society with fellow villagers.',
    thumbnailUrl: 'https://fitsmallbusiness.com/wp-content/uploads/2025/04/cooperative-steps.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Cooperative Framework', videoUrl: 'https://www.youtube.com/embed/BltIkYrjXig', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary objective of forming a cooperative society?",
            "options": [
                  "Earning maximum profit",
                  "Mutual help and serving its members",
                  "Establishing a monopoly in the market",
                  "Competing with multinational corporations"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"Co-operate\" means to work together. The main goal is mutual help, not greedy profits."
      },
      {
            "text": "Which principle does a cooperative society primarily work on?",
            "options": [
                  "Survival of the fittest",
                  "Maximum profit for the owner",
                  "Each for all and all for each",
                  "Divide and rule"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: This is the ultimate teamwork motto—everyone supports everyone."
      },
      {
            "text": "Under which act must a cooperative society be registered in India?",
            "options": [
                  "Companies Act, 2013",
                  "Partnership Act, 1932",
                  "Cooperative Societies Act, 1912",
                  "Societies Registration Act, 1860"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: 1912 is the historic year India formalized cooperative laws to help farmers and workers."
      },
      {
            "text": "What is the minimum number of adult persons required to form a cooperative society?",
            "options": [
                  "2",
                  "7",
                  "10",
                  "20"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It takes a solid group to cooperate. A perfect 10 people are needed to officially start a group."
      },
      {
            "text": "What is the minimum age requirement for a person to join a cooperative society?",
            "options": [
                  "16 years",
                  "18 years",
                  "21 years",
                  "25 years"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You must be a legal adult (18+) to sign legally binding cooperative contracts."
      },
      {
            "text": "Which of the following is true regarding the transferability of shares in a cooperative society?",
            "options": [
                  "Members can easily sell their shares in the stock market",
                  "Members can transfer their shares to any other person",
                  "Members can withdraw their capital but cannot transfer their shares",
                  "Shares are permanently locked and cannot be withdrawn"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You can take your money and leave, but you can't sell your spot to a stranger who doesn't share the group's goals."
      },
      {
            "text": "What kind of legal status does a cooperative society acquire after registration?",
            "options": [
                  "It is considered the same as its individual members",
                  "It becomes a distinct legal body independent of its members",
                  "It becomes a government-owned entity",
                  "It becomes a sole proprietorship"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Registration gives it a separate legal identity, acting like a protective shield for its members."
      },
      {
            "text": "What is the nature of liability for members of a cooperative society?",
            "options": [
                  "Unlimited liability",
                  "No liability at all",
                  "Limited to the extent of shares subscribed or capital contributed by them",
                  "Joint and several liability"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Your personal house is safe. You only lose what you directly invested in the society."
      },
      {
            "text": "How are voting rights determined in a cooperative society?",
            "options": [
                  "One vote per share held",
                  "One man, one vote (equal voting rights)",
                  "Voting power is based on the capital invested",
                  "Only the managing committee can vote"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Pure democracy. It doesn't matter if you are rich or poor, everyone gets exactly one vote."
      },
      {
            "text": "What portion of the cooperative society's surplus profit is strictly transferred to the general reserve?",
            "options": [
                  "One-half",
                  "One-third",
                  "One-fourth",
                  "One-fifth"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: By law, 25% (1/4th) of profits must be saved for the society's rainy days."
      },
      {
            "text": "Which type of cooperative society purchases goods directly from manufacturers and wholesalers to eliminate middlemen?",
            "options": [
                  "Producers' Cooperative Society",
                  "Marketing Cooperative Society",
                  "Consumers' Cooperative Society",
                  "Credit Cooperative Society"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Everyday \"consumers\" band together to buy direct and cut out the retail middleman's profit."
      },
      {
            "text": "The Indian Coffee House (ICH) is a classic example of which type of cooperative society?",
            "options": [
                  "Workers' Cooperative Society",
                  "Consumers' Cooperative Society",
                  "Housing Cooperative Society",
                  "Farmers' Cooperative Society"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The famous coffee house is completely owned, managed, and run by the waiters and \"workers\" themselves."
      },
      {
            "text": "Which type of cooperative society is formed by small producers to sell their output at remunerative prices via a centralized agency?",
            "options": [
                  "Credit Cooperative Society",
                  "Marketing Cooperative Society",
                  "Consumers' Cooperative Society",
                  "Housing Cooperative Society"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Small producers team up to collectively 'market' and sell their goods at better prices."
      },
      {
            "text": "Amul is a well-known example of which type of cooperative society?",
            "options": [
                  "Workers' Cooperative Society",
                  "Marketing Cooperative Society",
                  "Housing Cooperative Society",
                  "Credit Cooperative Society"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Amul collects milk from millions of tiny farmers and 'markets' it nationwide under one brand."
      },
      {
            "text": "What is the main purpose of a Farmers' Cooperative Society?",
            "options": [
                  "To build houses in urban areas",
                  "To gain economies of scale in large-scale farming and supply quality inputs",
                  "To eliminate wholesalers from the retail market",
                  "To provide jobs to unemployed urban youth"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Farmers combine their buying power to get cheap seeds, tractors, and fertilizers (economies of scale)."
      },
      {
            "text": "Which cooperative society is set up to provide financial aid at nominal rates and protect members from exploitation by moneylenders?",
            "options": [
                  "Housing Cooperative Society",
                  "Marketing Cooperative Society",
                  "Credit Cooperative Society",
                  "Producers' Cooperative Society"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: They provide 'credit' (cheap loans) so poor members can escape greedy moneylenders."
      },
      {
            "text": "What are the \"bylaws\" of a cooperative society?",
            "options": [
                  "The legal penalties for breaking the law",
                  "The government taxes imposed on the society",
                  "The rules and regulations that govern its functioning",
                  "The financial statements submitted to the bank"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"By-laws\" are simply the rulebook BY which the society functions."
      },
      {
            "text": "To whom must the application be submitted to get a cooperative society registered?",
            "options": [
                  "The Prime Minister",
                  "The Registrar of Cooperative Societies of the state",
                  "The local Police Station",
                  "The Reserve Bank of India"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Every state has a specific \"Registrar\" official whose only job is to handle these societies."
      },
      {
            "text": "Who holds the power to take decisions and manage the cooperative society?",
            "options": [
                  "The wealthiest member of the society",
                  "The government-appointed officer",
                  "An elected managing committee",
                  "The original founder only"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Members vote for a committee to handle the day-to-day operations and management."
      },
      {
            "text": "How are the members of the managing committee appointed?",
            "options": [
                  "Through direct voting by the members at the Annual General Meeting",
                  "They are appointed by the Registrar",
                  "They are selected based on the number of shares they own",
                  "They are randomly selected every year"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Democracy in action—members vote them into power at the Annual General Meeting (AGM)."
      }
    ] }
  },
  {
    id: 'bus5', title: 'E-commerce for Rural Business', category: 'Business',
    description: 'Step-by-step guide to listing and selling your products online.',
    thumbnailUrl: 'https://www.yo-kart.com/blog/wp-content/uploads/2016/12/Ecommerce-in-rural-india.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Getting Started Online', videoUrl: 'https://www.youtube.com/embed/X2HbdiKm_Xc', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "According to the video, what are the two main ways to start an e-commerce business?",
            "options": [
                  "Opening a physical shop and running social media ads",
                  "Selling on marketplaces like Amazon/Flipkart/Meesho or creating your own e-commerce website",
                  "Selling door-to-door or making YouTube videos",
                  "Doing wholesale business or retail business exclusively"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You can either rent a stall in a big online mall (Amazon) or build your own separate store (Website)."
      },
      {
            "text": "What is a major disadvantage mentioned about creating your own e-commerce website from scratch?",
            "options": [
                  "It requires buying domain, hosting, creating the website, and spending heavily on marketing and promotion.",
                  "Amazon and Flipkart will block your brand.",
                  "You can only sell digital products.",
                  "You are not allowed to run ads."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Building a website is like building a shop in a desert; you have to pay a lot for ads just to bring people there."
      },
      {
            "text": "Why does the speaker recommend starting by listing products on Amazon and Flipkart?",
            "options": [
                  "Because they give you free inventory to sell",
                  "Because you will get organic orders gradually, which you can scale later with ads",
                  "Because you don't need any documents to sell on them",
                  "Because they do not charge any commission"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Amazon already has millions of visitors, so you get free \"organic\" traffic just by being listed."
      },
      {
            "text": "If you do not have a shop or an existing product, what is the very first step you must take?",
            "options": [
                  "Create an Instagram account",
                  "Open a current bank account",
                  "Do market research and product research to find a good product",
                  "Register your brand name"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Before you sell, you need to research what people actually want to buy!"
      },
      {
            "text": "How many primary documents/requirements are strictly needed to sell on online marketplaces?",
            "options": [
                  "2",
                  "3",
                  "5",
                  "7"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Just 3 main things: GST, PAN, and a Bank Account."
      },
      {
            "text": "Which of the following is the FIRST mandatory document required to start selling on platforms like Amazon or Flipkart?",
            "options": [
                  "Passport",
                  "GST Certificate",
                  "Driving License",
                  "Ration Card"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The government needs to track your sales tax (Goods and Services Tax) before letting you sell."
      },
      {
            "text": "According to the speaker, what is the estimated normal fee a professional might charge to help you create a GST account?",
            "options": [
                  "Around 10,000 to 15,000 Rupees",
                  "Free of cost",
                  "Around 400 to 500 Rupees",
                  "Around 5,000 Rupees"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It's a simple online process, so agents only charge a small 400-500 rupee processing fee."
      },
      {
            "text": "What is the SECOND mandatory document you need to start an online e-commerce business?",
            "options": [
                  "PAN Card",
                  "Aadhar Card",
                  "Electricity Bill",
                  "Voter ID"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: PAN tracks your income tax, which is mandatory for running a business in India."
      },
      {
            "text": "What type of bank account is required to receive payments from e-commerce marketplaces?",
            "options": [
                  "Savings Account",
                  "Current Account",
                  "Fixed Deposit Account",
                  "Salary Account"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 'Savings' is for personal hoarding; 'Current' is the standard high-flow account for businesses."
      },
      {
            "text": "Which marketplace does the speaker recommend keeping as a \"third preference\" in the initial stages?",
            "options": [
                  "Amazon",
                  "Flipkart",
                  "Meesho",
                  "eBay"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Meesho is great, but lower margins and high returns make it better as a 3rd choice initially."
      },
      {
            "text": "Why does the speaker suggest starting with Amazon and Flipkart before moving to Meesho?",
            "options": [
                  "Meesho charges a very high joining fee",
                  "Meesho requires a specialized warehouse",
                  "Meesho tends to have a higher issue with product returns in the initial stage",
                  "Meesho only sells electronics"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Meesho targets a demographic with very high return rates, which can burn a new seller."
      },
      {
            "text": "If you register on Amazon using the specific affiliate link mentioned by the speaker, what is one of the free services you receive regarding product listing?",
            "options": [
                  "Listing support for up to 100 products",
                  "Listing support within 30 days of launch for up to 15 ASINs",
                  "Free professional photo shoot for all products",
                  "Lifetime free listing"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The link gets you an Amazon expert to help list your first 15 products for free within a month."
      },
      {
            "text": "What monetary benefit does the speaker's special Amazon registration link provide to new sellers?",
            "options": [
                  "5,000 Rupees cashback",
                  "2,000 Rupees in free ad credits",
                  "Zero commission for the first year",
                  "Free shipping for a month"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: You get a free 2000 Rs budget to run ads and boost your products to page 1!"
      },
      {
            "text": "What does the \"Easy Ship\" option mean on Amazon?",
            "options": [
                  "The seller uses their own courier partner to ship the product",
                  "The Amazon team picks up the packaged product from the seller and delivers it to the customer",
                  "The customer has to come to the seller's house to pick up the product",
                  "The product is delivered digitally"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It is \"Easy\" because Amazon's delivery boys do all the running around and shipping for you."
      },
      {
            "text": "If you choose the \"Self Ship\" option, what restriction applies to the types of orders you receive?",
            "options": [
                  "You will only receive Cash on Delivery (COD) orders",
                  "You will only receive Prepaid orders (no COD)",
                  "You can only ship within your own city",
                  "You cannot ship items weighing over 100 grams"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Since you aren't using Amazon's cash-collection network, you can only safely accept online prepayments."
      },
      {
            "text": "How are invoices generated for the orders you receive on these platforms?",
            "options": [
                  "You have to manually type them out in Microsoft Word",
                  "You have to hire an accountant to make them",
                  "They are automatically generated by the marketplace portals",
                  "The delivery boy writes them by hand"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The portals do the math and create the legal bill for you automatically upon order."
      },
      {
            "text": "What should you do with the generated invoice before handing the package to the delivery executive?",
            "options": [
                  "Email it to the customer only",
                  "Keep it in your personal file and do not send it",
                  "Attach it to the outside of the polybag/packaging",
                  "Tear it up for security reasons"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The delivery boy needs to scan the barcode on the invoice, so it must be on the outside."
      },
      {
            "text": "Where does the speaker suggest you can easily buy packaging materials like polybags?",
            "options": [
                  "Directly from the Amazon and Flipkart platforms themselves",
                  "Only from local wholesale hardware markets",
                  "From the post office",
                  "You have to manufacture them yourself"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: They sell their own branded packaging materials right on their seller portals for convenience."
      },
      {
            "text": "What is the usual payment cycle (time taken to receive money in your account) when selling on Amazon?",
            "options": [
                  "1 to 2 days",
                  "7 to 10 days",
                  "30 to 45 days",
                  "Once a year"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Amazon holds the money for about a week to ensure the customer doesn't return the item."
      },
      {
            "text": "What is the usual payment cycle when selling on Flipkart?",
            "options": [
                  "Immediate transfer upon order",
                  "2 to 3 days",
                  "10 to 15 days",
                  "60 days"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Flipkart takes slightly longer (about 2 weeks) to process seller payouts."
      }
    ] }
  },
  {
    id: 'bus6', title: 'Negotiation Skills', category: 'Business',
    description: 'Improve your communication skills to negotiate better prices with buyers and suppliers.',
    thumbnailUrl: 'https://kapable.club/blog/wp-content/uploads/2024/04/image-76-1024x575.png',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'The Art of Negotiation', videoUrl: 'https://www.youtube.com/embed/NxsVb08vDmI', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "According to the video, what is the first key negotiation tactic a business owner or sales professional must do?",
            "options": [
                  "Drop the price immediately",
                  "Prepare",
                  "Argue with the customer",
                  "Offer a free trial"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Preparation is the foundation. If you don't know your numbers before you walk in, you've already lost."
      },
      {
            "text": "When does negotiation actually start, according to the speaker?",
            "options": [
                  "After the customer says \"no\"",
                  "When the contract is signed",
                  "Even before the negotiation meeting starts",
                  "When the competitor makes an offer"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The battle is won before it begins. Researching your client and knowing your limits happens long before you sit at the table."
      },
      {
            "text": "What does the speaker compare walking into a negotiation without preparation to?",
            "options": [
                  "Swimming without a life jacket",
                  "Walking into a boxing ring without boxing gloves",
                  "Driving a car without a steering wheel",
                  "Running a marathon without shoes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Business is a fight for margins. Without preparation, you have no gloves to defend yourself from price cuts."
      },
      {
            "text": "During the preparation phase, what specific price point must you establish?",
            "options": [
                  "The boundary price below which you will not take the deal",
                  "The maximum price the customer has ever paid",
                  "The exact price of your cheapest competitor",
                  "The price that guarantees a 100% profit margin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The \"Walk-Away\" price. You must know exactly where you hit rock bottom so you don't accidentally lose money."
      },
      {
            "text": "What is the second negotiation tactic discussed in the video?",
            "options": [
                  "Sell price, not features",
                  "Sell value, not price",
                  "Always match the competitor's price",
                  "Talk only about your company's history"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Value makes price irrelevant. If they understand how much it helps them, they won't fight over a few dollars."
      },
      {
            "text": "What happens if a customer attacks your price and you start defending it?",
            "options": [
                  "You win the negotiation easily",
                  "The customer respects you more",
                  "You are on the defensive and it becomes a lost battle",
                  "The customer will immediately pay the asking price"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Explaining your costs makes you look weak. Never defend the price, shift the focus back to the value you provide."
      },
      {
            "text": "When shifting the orbit of the conversation away from price, what should you focus on selling?",
            "options": [
                  "The discounts you can offer",
                  "The benefits and value of your product or service",
                  "The flaws of your competitor's product",
                  "The raw material costs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: People buy solutions, not products. Focus on the benefit—how your product fixes their specific problem."
      },
      {
            "text": "What is the third negotiation tactic mentioned by the speaker?",
            "options": [
                  "Taking",
                  "Ignoring",
                  "Giving",
                  "Arguing"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Negotiation is a give-and-take. To get what you want, you must be willing to give something up."
      },
      {
            "text": "Why is \"giving\" an important part of a negotiation?",
            "options": [
                  "So you can lose money on the deal",
                  "So the customer feels victorious, happy, and not overpowered",
                  "Because you should always give your product away for free",
                  "So the customer pities you"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Ego is huge in business. Giving them a small victory makes them feel powerful and happy to sign the deal."
      },
      {
            "text": "Which of the following is an example of \"giving\" in a negotiation without necessarily dropping the core price?",
            "options": [
                  "Insulting the customer's budget",
                  "Refusing to speak to the client",
                  "Giving value-added benefits, extended warranties, or free shipping",
                  "Canceling the meeting"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Give extras, not cash. Throwing in free shipping costs you very little but looks like a huge win to the customer."
      },
      {
            "text": "A good negotiation is described by the speaker as one where:",
            "options": [
                  "You get everything you want and the customer gets nothing",
                  "Giving happens on both sides",
                  "The customer dictates all terms",
                  "The price is cut in half immediately"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It's a two-way street. Both sides must bend slightly to reach the middle ground."
      },
      {
            "text": "What is the fourth negotiation tactic that serves as a core principle to communicate to the customer?",
            "options": [
                  "Win-lose or no deal",
                  "Lose-win or no deal",
                  "Win-win or no deal",
                  "Compromise at all costs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: If both sides don't walk away happy (Win-Win), then it's better to just walk away entirely (No Deal)."
      },
      {
            "text": "How does the \"Win-win or no deal\" philosophy help you during a negotiation?",
            "options": [
                  "It allows the customer to force a massive discount",
                  "It acts as an anchor when the customer pushes you beyond your boundary",
                  "It automatically forces the customer to sign the contract",
                  "It ends the relationship permanently if they say no"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It gives you a strong backbone. When they ask for too much, you can safely say, \"If I agree to that, I lose, so no deal.\""
      },
      {
            "text": "What should you do if a deal does not meet the \"Win-win\" criteria?",
            "options": [
                  "Take the loss just to get the client",
                  "Get angry at the customer",
                  "Be willing to walk away but maintain a cordial professional relationship",
                  "Block the customer's phone number"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Never burn bridges. Walk away politely, because they might come back when they realize your value."
      },
      {
            "text": "What is the fifth and final negotiation tactic that protects you from unreasonable negotiation?",
            "options": [
                  "Firing your sales team",
                  "Doing marketing consistently",
                  "Changing your product every month",
                  "Only selling to family members"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Desperation makes you lower your price. Marketing keeps your pipeline full so you are never desperate."
      },
      {
            "text": "How does doing marketing consistently help you in a sales negotiation?",
            "options": [
                  "It confuses the customer",
                  "It generates a pipeline of leads, giving you the confidence to hold your price",
                  "It automatically lowers your boundary price",
                  "It removes the need to ever talk to a customer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Abundance brings confidence. If you know you have 10 other buyers lined up, you won't let this one bully your price."
      },
      {
            "text": "According to the speaker, when you hold your price point with the confidence of having a full pipeline, what usually happens?",
            "options": [
                  "Customers will all leave",
                  "7 out of 10 customers will buy at your offered price and dare not negotiate",
                  "The competitor will lower their price further",
                  "You will have to close your business"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Confidence is infectious. When you don't blink on price, the customer assumes it must be worth it and agrees."
      },
      {
            "text": "What is the overarching goal of the sales processes the speaker designs for entrepreneurs?",
            "options": [
                  "To trick the customer",
                  "To close deals in a win-win-win manner (customer wins, business owner wins, business makes money)",
                  "To make sure the business owner wins and the customer loses",
                  "To sell products at the lowest possible market rate"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Triple Win! The customer gets a solution, you get the sale, and the business stays profitable."
      },
      {
            "text": "What should you have clarity on BEFORE walking into a negotiation?",
            "options": [
                  "What your variables are (what you are willing to give away)",
                  "What the customer had for breakfast",
                  "How to manipulate the contract",
                  "How to ignore the customer's needs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Know your chess pieces. Know exactly what freebies or terms you can throw in to sweeten the deal without losing cash."
      },
      {
            "text": "What is the name of the 4-hour live training program the speaker invites viewers to at the end of the video?",
            "options": [
                  "The Sales Mastery Workshop",
                  "The Marketing Genius Summit",
                  "The Business Breakthrough Seminar",
                  "The Negotiation Tactics Webinar"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It is designed to help business owners \"break through\" their invisible limits."
      }
    ] }
  },
  {
    id: 'bus7', title: 'Packaging and Branding', category: 'Business',
    description: 'Learn how attractive packaging and a strong brand name can increase your sales.',
    thumbnailUrl: 'https://assets.designhill.com/design-blog/wp-content/uploads/2021/09/Brand-Packaging.png',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Power of Branding', videoUrl: 'https://www.youtube.com/embed/_mgThv5cGBk', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary definition of branding?",
            "options": [
                  "Creating an attractive cover for a product",
                  "Creating a unique name, logo, and image to grasp customer attention",
                  "Protecting the product from physical damage",
                  "Transporting the product safely"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Branding gives a product its identity—a face (logo) and a name that people will remember."
      },
      {
            "text": "What is the primary definition of packaging?",
            "options": [
                  "The process of designing a packet or wrapper in which a product is sold",
                  "Spreading awareness about a product through customer service",
                  "Building long-term trust and fondness",
                  "Establishing a unique name and sign"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Packaging is literally the physical box, bag, or wrapper that holds the item."
      },
      {
            "text": "What is the main objective of branding?",
            "options": [
                  "To safeguard the product from getting damaged",
                  "To differentiate a product from other sellers' products",
                  "To design protective covers",
                  "To ensure safe transportation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: If all water bottles look the same, the 'Brand' is what makes you choose Bisleri over Aquafina."
      },
      {
            "text": "What is the main objective of packaging?",
            "options": [
                  "To differentiate the product from competitors",
                  "To build long-term relationships",
                  "To safeguard the product from getting damaged",
                  "To spread awareness about the brand name"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: A glass bottle needs a strong cardboard box (packaging) so it doesn't shatter in the truck."
      },
      {
            "text": "Which of the following is exclusively considered a component of branding?",
            "options": [
                  "Product description",
                  "Protective cover",
                  "Wrapper material",
                  "Name and sign"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: The Nike 'Swoosh' sign and the name 'Nike' are pure branding elements."
      },
      {
            "text": "Which of the following are mentioned as the main components of packaging?",
            "options": [
                  "Color, description, and logo",
                  "Name, sign, and advertising",
                  "Customer service and promotional items",
                  "Name, color, and sign"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The physical box combines attractive Colors, the Brand Logo, and the Description of what is inside."
      },
      {
            "text": "What is a key benefit of branding?",
            "options": [
                  "It physically protects the product",
                  "It creates trust and long-term relationships with customers",
                  "It is the first physical thing a customer encounters",
                  "It helps in transporting the product"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: People trust brands. If you like an Apple iPhone, you automatically trust an Apple laptop."
      },
      {
            "text": "What is a key benefit of packaging?",
            "options": [
                  "It builds long-term relationships",
                  "It sets the brand's long-term expectations",
                  "It attracts the customer's attention immediately",
                  "It provides customer service"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: A bright, shiny wrapper on a shelf catches your eye from across the supermarket aisle."
      },
      {
            "text": "Who is the target audience for both branding and packaging?",
            "options": [
                  "Wholesalers",
                  "Manufacturers",
                  "Customers",
                  "Advertisers"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Everything you do in marketing is ultimately aimed at making the end Customer buy the product."
      },
      {
            "text": "What is the common aim of both branding and packaging policies?",
            "options": [
                  "To reduce manufacturing costs",
                  "To pull customers to buy the product",
                  "To increase the product's weight",
                  "To eliminate the need for advertising"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: They act like magnets. A good brand and a beautiful box pull the customer's wallet out of their pocket."
      },
      {
            "text": "Which departments are typically involved in branding?",
            "options": [
                  "Manufacturing and transport",
                  "Advertising, customer service, and promotional items",
                  "Shipping and handling",
                  "Packaging and wrapping"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Branding is about image. Ads build the image, and customer service maintains the image."
      },
      {
            "text": "What does the creative process of packaging focus on?",
            "options": [
                  "Designing protective and attractive covers",
                  "Managing customer service complaints",
                  "Creating promotional items",
                  "Establishing long-term trust"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The box needs to be strong enough to survive shipping, but beautiful enough to sell on a shelf."
      },
      {
            "text": "The focus of branding is primarily on:",
            "options": [
                  "Ensuring product protection during transport",
                  "Spreading awareness about the product",
                  "Designing a box",
                  "Writing the product description"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: If nobody knows your name, you have no brand. Awareness is everything."
      },
      {
            "text": "The focus of packaging during transportation and handling is:",
            "options": [
                  "Spreading brand awareness",
                  "Ensuring the product is protected",
                  "Building trust",
                  "Differentiating the product from competitors"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Inside a dark delivery truck, nobody cares what the box looks like; it just needs to keep the product safe."
      },
      {
            "text": "What leaves an impression in the customers' minds about what to expect from the company?",
            "options": [
                  "The transport method",
                  "Packaging",
                  "Branding",
                  "The product wrapper"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The \"Brand Promise\" sets expectations. If you buy a Rolex, the brand tells you to expect perfection."
      },
      {
            "text": "What is described as the very first thing that customers physically encounter regarding a product?",
            "options": [
                  "The brand's customer service",
                  "The promotional items",
                  "Packaging",
                  "The brand's long-term relationship"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You can't touch a brand, but you literally hold the package in your hands first."
      },
      {
            "text": "Branding is classified as a:",
            "options": [
                  "Manufacturing process",
                  "Strategic marketing tool used for creating product awareness",
                  "Protective measure for products",
                  "Transportation strategy"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Branding is pure marketing strategy. It lives in the minds of consumers."
      },
      {
            "text": "Packaging is considered an essential part of marketing because it contributes to:",
            "options": [
                  "Product safety and appeal",
                  "Creating a unique brand name",
                  "Customer service efficiency",
                  "Promotional giveaways"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: It acts as a silent salesman—appealing to the eye while keeping the contents safe."
      },
      {
            "text": "Which element is shared between the components of both branding and packaging?",
            "options": [
                  "Sign",
                  "Name",
                  "Description",
                  "Logo"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: The Logo is the heart of the brand, and it is almost always printed right on the front of the package."
      },
      {
            "text": "In terms of business decision-making, what role does packaging play?",
            "options": [
                  "It only helps with immediate sales",
                  "It helps a business in short and long-term decision-making",
                  "It solely determines the price of the product",
                  "It replaces the need for branding"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Good packaging decisions save shipping money (short-term) and build brand recognition (long-term)."
      }
    ] }
  },
  {
    id: 'bus8', title: 'Managing Inventory', category: 'Business',
    description: 'Keep track of your raw materials and finished goods to avoid shortages or overstocking.',
    thumbnailUrl: 'https://effivityblog.blob.core.windows.net/effivitywebsite/images/BlogV2/Blogs%20Image/What%20is%20Inventory%20Management%20System%20and%20its%20Benefits-02.webp',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Inventory Control Basics', videoUrl: 'https://www.youtube.com/embed/0NOER-Lle-0', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary definition of Inventory Management?",
            "options": [
                  "The process of hiring warehouse staff",
                  "The process of tracking, controlling, and managing the stock a business holds",
                  "The method of calculating yearly taxes for a business",
                  "The strategy used to market finished goods to customers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Inventory equals stock. Management equals tracking and controlling. Put them together!"
      },
      {
            "text": "Why is having too much inventory considered a problem for a business?",
            "options": [
                  "It increases the speed of production",
                  "It completely eliminates the risk of stockouts",
                  "It ties up cash and storage space",
                  "It forces the business to lower employee wages"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Boxes sitting in a warehouse are basically stacks of cash doing nothing. You can't use that cash until the boxes sell."
      },
      {
            "text": "What happens when a business experiences a \"stockout\"?",
            "options": [
                  "The business runs out of inventory and cannot fulfill customer orders",
                  "The business receives a surplus of raw materials",
                  "The business sells its warehouse space",
                  "The inventory is moved to a different storage location"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Stock-OUT literally means you are OUT of stock. No stock = angry customers."
      },
      {
            "text": "Which type of inventory includes basic items like wood, nails, and paint used to produce furniture?",
            "options": [
                  "Finished Goods",
                  "MRO Items",
                  "Work in Progress (WIP)",
                  "Raw Materials"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: \"Raw\" means untouched and unprocessed. Wood and nails are the raw ingredients of furniture."
      },
      {
            "text": "What does MRO stand for in inventory management?",
            "options": [
                  "Management, Resources, and Operations",
                  "Maintenance, Repair, and Operations",
                  "Manufacturing, Revenue, and Output",
                  "Material Requirements and Organization"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Think of the janitor's closet or the mechanic's toolbox—it holds supplies for Maintenance, Repair, and Operations."
      },
      {
            "text": "What is the purpose of \"Safety Stock\"?",
            "options": [
                  "To replace all raw materials",
                  "To keep extra stock on hand as a buffer against unexpected demand or supply chain disruptions",
                  "To immediately sell to competitors",
                  "To record outdated items that are no longer in demand"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It is your emergency backup pile to keep you \"safe\" if a delivery truck breaks down or a product goes viral."
      },
      {
            "text": "What is the first step in the inventory management process?",
            "options": [
                  "Inventory Auditing",
                  "Receiving and Storing",
                  "Demand Forecasting",
                  "Managing Dead Stock"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Before you can order anything, you have to \"forecast\" or guess how much the customers will actually demand."
      },
      {
            "text": "Which formula helps businesses find the ideal order size to minimize both holding and ordering costs?",
            "options": [
                  "Return on Investment (ROI)",
                  "Economic Order Quantity (EOQ)",
                  "Just-In-Time (JIT)",
                  "First-In, First-Out (FIFO)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: EOQ stands for Economic Order Quantity. It answers the question: \"What is the most economic (cheapest) quantity to order?\""
      },
      {
            "text": "What term is used for unsold inventory that is no longer in demand and drains resources?",
            "options": [
                  "Safety Stock",
                  "Dead Stock",
                  "Work in Progress",
                  "A-Items"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: If it hasn't moved in years and nobody wants to buy it, that stock is \"dead\" to the business."
      },
      {
            "text": "The \"Just-In-Time\" (JIT) technique is famous for being used by which major automotive company to minimize waste?",
            "options": [
                  "Ford",
                  "General Motors",
                  "Toyota",
                  "Honda"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Toyota practically invented modern JIT manufacturing to save space in small Japanese factories."
      },
      {
            "text": "Which inventory technique ensures that the oldest inventory is sold first, commonly used for perishable goods?",
            "options": [
                  "FIFO (First-In, First-Out)",
                  "JIT (Just-In-Time)",
                  "EOQ (Economic Order Quantity)",
                  "MRO Analysis"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Think of milk at the grocery store. The First milk put IN the fridge should be the First milk taken OUT so it doesn't expire."
      },
      {
            "text": "In ABC Analysis, how are \"A items\" categorized?",
            "options": [
                  "Low-value items that are sold frequently",
                  "Moderate-value and moderate-sales items",
                  "High-value items that make up a small portion of inventory but a large portion of value",
                  "Items that are completely obsolete"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: 'A' stands for Alpha or Top-Tier. These are the few expensive items (like diamond rings) that bring in the most money."
      },
      {
            "text": "Which technologies are commonly used by modern inventory management software to track items through the supply chain?",
            "options": [
                  "GPS and Sonar",
                  "RFID and Barcoding",
                  "Bluetooth and NFC",
                  "Wi-Fi and Infrared"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Supermarkets use Barcodes (lasers), and warehouses use RFID (radio tags) to instantly scan boxes without opening them."
      },
      {
            "text": "What is \"inventory shrinkage\"?",
            "options": [
                  "The physical shrinking of perishable goods due to temperature",
                  "The loss of inventory due to theft, damage, or administrative errors",
                  "The process of reducing warehouse size",
                  "A deliberate strategy to hold less stock"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: When your computer says you have 100 shirts, but you count 95, your inventory has \"shrunk\" due to theft or loss."
      },
      {
            "text": "How does overstocking primarily impact a business?",
            "options": [
                  "It increases cash flow and flexibility",
                  "It ties up capital and increases storage costs",
                  "It completely eliminates supply chain disruptions",
                  "It makes demand forecasting perfectly accurate"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Too much stock means your capital (money) is trapped in boxes, and you are paying extra rent to store those boxes."
      }
    ] }
  },
  {
    id: 'bus9', title: 'Accessing Government Loans', category: 'Business',
    description: 'Understand the various government schemes and loans available for rural entrepreneurs.',
    thumbnailUrl: 'https://flexiloans.com/blog/wp-content/uploads/2025/06/Government-Subsidy-Loan-for-Business.png',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'PMEGP Scheme Guide', videoUrl: 'https://www.youtube.com/embed/nTTqwV6_yxY', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the full form of PMEGP?",
            "options": [
                  "Prime Minister's Education Generation Programme",
                  "Prime Minister's Employment Generation Programme",
                  "Prime Minister's Economic Growth Plan",
                  "Prime Minister's Enterprise Generation Project"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The government gives loans so you can start a business and generate \"Employment\" (jobs) for others."
      },
      {
            "text": "Which ministry is responsible for managing the PMEGP loan scheme?",
            "options": [
                  "Ministry of Finance",
                  "Ministry of Agriculture",
                  "Ministry of MSME (Micro, Small and Medium Enterprises)",
                  "Ministry of Rural Development"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Since the loan is for small businesses, it naturally falls under MSME (Micro, Small and Medium Enterprises)."
      },
      {
            "text": "What is the minimum age required to apply for the PMEGP loan scheme?",
            "options": [
                  "16 years",
                  "18 years",
                  "21 years",
                  "25 years"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 18 is the legal age to sign a financial contract or take a bank loan in India."
      },
      {
            "text": "What is the maximum government subsidy provided under the PMEGP scheme for special categories (like Women, SC/ST, OBC)?",
            "options": [
                  "15%",
                  "25%",
                  "35%",
                  "50%"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Special categories in rural areas get a massive 35% of their loan completely forgiven (subsidy) by the government."
      },
      {
            "text": "What is the minimum educational qualification required for a project costing more than Rs. 10 lakhs?",
            "options": [
                  "5th Pass",
                  "8th Pass",
                  "10th Pass",
                  "No educational qualification required"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: For bigger loans (over 10L), they just want basic literacy, which is passing the 8th standard."
      },
      {
            "text": "What is the minimum percentage of the project cost that a special category applicant needs to invest from their own pocket?",
            "options": [
                  "5%",
                  "10%",
                  "15%",
                  "20%"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The government makes it incredibly easy; you only need to bring 5 rupees for every 100 rupees you borrow."
      },
      {
            "text": "Which of the following business types is NOT eligible for a loan under the PMEGP scheme?",
            "options": [
                  "Food processing units",
                  "Beauty parlors",
                  "Tobacco, alcohol, or meat businesses",
                  "Mobile repair centers"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Government employment schemes will never fund items harmful to public health or restricted goods like tobacco and alcohol."
      },
      {
            "text": "What mandatory training is provided to the applicant after the project is approved and before the bank releases the loan?",
            "options": [
                  "Skill India Certification",
                  "EDP (Entrepreneurship Development Programme)",
                  "Digital Marketing Training",
                  "Advanced Accounting Training"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: EDP trains you to be an \"Entrepreneur\" so you don't accidentally waste the loan money."
      },
      {
            "text": "Which organization implements the PMEGP scheme at the national level?",
            "options": [
                  "RBI (Reserve Bank of India)",
                  "KVIC (Khadi and Village Industries Commission)",
                  "NABARD",
                  "LIC (Life Insurance Corporation)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: KVIC focuses on village industries and handles the scheme from the very top."
      },
      {
            "text": "Is collateral (security) required to get a loan under the PMEGP scheme?",
            "options": [
                  "Yes, 100% collateral is required",
                  "Yes, 50% collateral is required",
                  "No, the loan is provided without collateral (collateral-free)",
                  "Yes, only property documents are accepted"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The whole point of the scheme is to help people with no money! It is strictly collateral-free (up to a certain limit)."
      }
    ] }
  },
  {
    id: 'bus10', title: 'Customer Service Basics', category: 'Business',
    description: 'Learn how to treat customers well to build loyalty and get repeat business.',
    thumbnailUrl: 'https://business.feefo.com/hubfs/Imported_Blog_Media/image-May-10-2024-09-57-39-5590-AM.png',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Customer Relationship Management', videoUrl: 'https://www.youtube.com/embed/SsNfAOTZNZY', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "According to the video, what does a dissatisfied customer typically do?",
            "options": [
                  "They complain to the manager and ask for a refund",
                  "They never speak about the company again",
                  "They will tell 10 other people about their negative experience",
                  "They will only leave a bad review online"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Bad news travels fast! An angry customer acts like a loudspeaker, warning at least 10 friends to avoid your shop."
      },
      {
            "text": "What does the acronym \"CRM\" stand for in customer service?",
            "options": [
                  "Customer Response Model",
                  "Customer Review Management",
                  "Customer Retention Method",
                  "Customer Relationship Management"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Business is all about \"Relationships.\" CRM helps you \"Manage\" your \"Relationship\" with the \"Customer.\""
      },
      {
            "text": "Why is customer retention considered cheaper than customer acquisition?",
            "options": [
                  "Retaining customers means you don't have to hire more staff",
                  "Retaining customers saves the business a lot of money in advertising to find new customers",
                  "Retained customers always buy the cheapest items",
                  "Retained customers do not require any customer service"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Buying ads to find a brand new stranger costs a fortune. Treating an old customer nicely costs nothing."
      },
      {
            "text": "What is one proven financial benefit of delivering outstanding customer service?",
            "options": [
                  "Customers will stop asking questions",
                  "Happy customers will pay more for a product or service",
                  "The business can stop paying taxes",
                  "The business can eliminate its marketing department"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: People happily pay a premium at luxury hotels just for the polite service. Good service justifies higher prices."
      },
      {
            "text": "What is the FIRST essential element of great customer service mentioned in the video?",
            "options": [
                  "Always be welcoming, friendly, and respectful",
                  "Having excellent product knowledge",
                  "Asking the customer for feedback",
                  "Responding to emails within 48 hours"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: A smile costs nothing but sets the tone for everything else. Welcome them like a guest in your home."
      },
      {
            "text": "According to the trainer, how quickly must all customer emails be responded to?",
            "options": [
                  "Within 12 hours",
                  "Within 48 hours",
                  "Within 24 hours without exception",
                  "As soon as time permits"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: 24 hours is the golden rule. Any longer, and the customer assumes you don't care about them."
      },
      {
            "text": "Why is it essential to ask the customer specific questions?",
            "options": [
                  "To confuse the customer so they buy more",
                  "To waste time while waiting for a manager",
                  "To empower yourself to determine and deliver exactly what the customer needs",
                  "To avoid having to answer their questions"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You can't hit a target blindfolded. Asking questions reveals exactly what the customer is hunting for."
      },
      {
            "text": "If a customer asks a question about a product and you do NOT know the answer, what should you say?",
            "options": [
                  "\"I don't know the answer to that question.\"",
                  "\"That's not my department.\"",
                  "\"That's a great question, I will go away and find out the answer for you.\"",
                  "\"I'm sorry, you misheard me.\""
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Never say a dead-end \"I don't know.\" Always promise to take action and find the answer for them."
      },
      {
            "text": "What should you do with all customer feedback, whether it is good or bad?",
            "options": [
                  "Throw away the bad feedback and keep the good",
                  "Write it down and share it with your team and your manager",
                  "Only share the good feedback with the manager",
                  "Ignore it if it doesn't apply to your department"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Feedback is free data. Sharing it with the team ensures everyone learns from mistakes and celebrates wins."
      },
      {
            "text": "Which of the following is a phrase you must NEVER say to a customer?",
            "options": [
                  "\"Thank you for bringing this matter to our attention.\"",
                  "\"Is there anything else I can help you with today?\"",
                  "\"I'm sorry you feel that way.\"",
                  "\"I'd love to understand more about your needs.\""
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It shifts the blame onto the customer's \"feelings\" instead of apologizing for the actual mistake."
      },
      {
            "text": "Why is the phrase \"I'm sorry you feel that way\" considered negative in customer service?",
            "options": [
                  "It takes too long to say",
                  "It is considered rather condescending",
                  "It means the company is accepting legal liability",
                  "It sounds too friendly"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It is a non-apology. It sounds like you are saying, \"I'm not wrong, you're just overly emotional.\""
      },
      {
            "text": "What is a highly recommended and powerful phrase to use when a customer complains, to help diffuse the situation?",
            "options": [
                  "\"I can understand how you feel; I'd feel the same as you if I were in this situation.\"",
                  "\"As I've already told you...\"",
                  "\"That's not my job.\"",
                  "\"You must have misheard me.\""
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Empathy disarms anger. By putting yourself in their shoes, you stop being the enemy and become an ally."
      },
      {
            "text": "What is the very first step in the 7-step process for dealing with customer complaints?",
            "options": [
                  "Show empathy and apologize",
                  "Ask the customer questions",
                  "Listen to the customer and give them time to speak",
                  "Follow up with the customer"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Angry people need to vent. Let them spill everything out before you try to fix it."
      },
      {
            "text": "What does the acronym \"L.A.S.T.\" stand for when dealing with customer complaints?",
            "options": [
                  "Look, Ask, Solve, Talk",
                  "Listen, Apologize, Solve, Thank",
                  "Listen, Act, Speak, Terminate",
                  "Learn, Assess, Simplify, Thank"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Make the customer's anger the LAST thing on their mind: Listen to them, Apologize, Solve it, then Thank them."
      },
      {
            "text": "Which of the following is NOT a component of good telephone etiquette in customer service?",
            "options": [
                  "Answering promptly",
                  "Speaking clearly and politely",
                  "Listening actively",
                  "Putting the caller on hold indefinitely"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Being trapped on hold with elevator music is the number one way to infuriate a customer over the phone."
      },
      {
            "text": "What is the ultimate aim or primary focus of good customer service?",
            "options": [
                  "Reducing the company's costs",
                  "Ignoring negative feedback",
                  "Building strong relationships with customers",
                  "Making sure the shift ends on time"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It's all about making friends out of buyers. Strong relationships equal repeat business."
      },
      {
            "text": "What does \"active listening\" look like in practice during a customer complaint?",
            "options": [
                  "Interrupting to solve the problem faster",
                  "Looking away while they speak",
                  "Nodding and saying things like \"uh-huh,\" \"yes,\" and \"I understand\"",
                  "Typing an email while they are talking"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You have to prove you are listening by making verbal eye contact (\"uh-huh\", \"I see\")."
      },
      {
            "text": "In a customer service interview, what is a crucial thing to remember when answering \"Tell me about yourself\"?",
            "options": [
                  "Talk about your childhood in great detail",
                  "Talk about your skills, qualities, experience, and passion for working in customer service",
                  "Complain about your previous boss",
                  "Ask the interviewer about their life"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: They don't want your life story. They want the \"movie trailer\" of why you are perfect for this specific job."
      },
      {
            "text": "Which of the following is a positive reason to give when asked, \"Why do you want to work in customer service?\"",
            "options": [
                  "Because it is easy work and requires no effort",
                  "Because you enjoy the job satisfaction of solving problems and making a positive difference to customers",
                  "Because you don't like working with computers",
                  "Because you want to argue with people"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Employers want people who get joy from helping others. Problem-solving should be your passion."
      },
      {
            "text": "Which of the following is NOT an outcome of positive online customer reviews?",
            "options": [
                  "Increased search engine rankings",
                  "Improved trust with potential customers",
                  "Less traffic to the company's website",
                  "Increased sales conversions"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Good reviews always bring MORE traffic, never less. A 5-star rating acts like a giant magnet."
      }
    ] }
  },

  // --- HEALTH (10) ---
  {
    id: 'hlt1', title: 'First Aid in the Forest', category: 'Health',
    description: 'Essential first aid skills for treating minor injuries, cuts, and sprains in remote areas.',
    thumbnailUrl: 'https://ncoae.org/wp-content/uploads/2025/10/7_Wilderness_Medicine_Skills-1024x558.png',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Cleaning and Bandaging Wounds', videoUrl: 'https://www.youtube.com/embed/nnUQHKZqnkw', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "According to Ted, what are the most common types of wilderness medicine issues encountered in the backcountry?",
            "options": [
                  "Allergic reactions and rashes",
                  "Trauma-related (musculoskeletal and soft tissue injuries)",
                  "Gastrointestinal illnesses",
                  "Altitude sickness and heat exhaustion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Hiking over rough rocks and roots naturally leads to trips, falls, and trauma to bones and skin."
      },
      {
            "text": "Which of the following is NOT given as an example of a common trauma-related backcountry injury?",
            "options": [
                  "Burns",
                  "Sprains",
                  "Lacerations",
                  "Toothaches"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: You don't usually stub your tooth on a hiking trail! Toothaches are dental issues, not physical trauma."
      },
      {
            "text": "What common piece of clothing does Ted use to easily create a makeshift sling for an arm injury?",
            "options": [
                  "A belt",
                  "A jacket",
                  "A pair of socks",
                  "A bandana"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A jacket has long, strong sleeves, making it the perfect shape to tie around the neck as a sling."
      },
      {
            "text": "When making a jacket sling, what position should the injured arm be placed in before rolling the jacket up?",
            "options": [
                  "Straight down at the side",
                  "Extended straight out in front",
                  "Across the chest",
                  "Elevated above the head"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The chest acts as a natural, stable resting shelf for an injured arm to reduce pain."
      },
      {
            "text": "What material is suggested to wrap around the jacket sling to tie it in place and provide extra support?",
            "options": [
                  "Parachute cord (P-cord)",
                  "A shoelace",
                  "Duct tape",
                  "Dental floss"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: P-cord is the ultimate survival multi-tool string—strong enough to hold an arm tight against the body."
      },
      {
            "text": "When splinting lower leg breaks and sprains, what specific areas must you remember to stabilize?",
            "options": [
                  "Only the injured bone itself",
                  "Both the joint above and the joint below the injury",
                  "The entire lower body",
                  "Only the ankle joint"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: To stop a broken bone from shifting, you must completely lock the hinges (joints) on both sides of it."
      },
      {
            "text": "What two components are essential when properly splinting an injury?",
            "options": [
                  "Heat and ice",
                  "Elevation and compression",
                  "Structure and padding",
                  "Water and soap"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Structure (like sticks) keeps the limb straight, while padding (like clothes) prevents it from hurting."
      },
      {
            "text": "If you use sticks from the woods to provide structure for a splint, what must you use for padding?",
            "options": [
                  "Dry leaves",
                  "Dirt and mud",
                  "Clothing",
                  "Pine needles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Always use your softest available gear, which is your extra clothing, to cushion the hard sticks."
      },
      {
            "text": "Which piece of hiking gear works similarly to sticks for splinting, but can also help prevent injuries in the first place?",
            "options": [
                  "Tent stakes",
                  "Trekking poles",
                  "Water bottles",
                  "A camp shovel"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Trekking poles act like extra legs while walking, and like strong artificial bones when splinting."
      },
      {
            "text": "What piece of backpack gear does Ted recommend as a splint because it provides both structure and padding all in one?",
            "options": [
                  "A rolled-up tent",
                  "An empty frame pad",
                  "A sleeping bag",
                  "A hydration bladder"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A backpack frame pad is already stiff (for structure) and coated in foam (for padding)."
      },
      {
            "text": "Where does Ted suggest storing duct tape so that it doesn't take up any extra room in your backpack?",
            "options": [
                  "Wrapped around a water bottle",
                  "Folded inside your wallet",
                  "Stuck to the bottom of your boots",
                  "Taped to the outside of your jacket"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Rolling it tightly around a water bottle saves you from carrying the bulky cardboard roll it comes on."
      },
      {
            "text": "In addition to covering wounds in a sticky situation, what common hiking problem can duct tape be used to treat (acting similarly to moleskin)?",
            "options": [
                  "Dehydration",
                  "Blisters",
                  "Sunburn",
                  "Tick bites"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Duct tape reduces friction immediately, stopping your boots from rubbing your heels raw."
      },
      {
            "text": "What chemical substance does Ted mention works quickly and efficiently to seal up a wound, though it isn't his absolute favorite method?",
            "options": [
                  "Iodine",
                  "Hydrogen peroxide",
                  "Hand sanitizer",
                  "Superglue"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Superglue was actually used during wartime to quickly seal up battlefield wounds!"
      },
      {
            "text": "What specific item does Ted consider the \"best,\" super light, and easy-to-use solution for closing a laceration?",
            "options": [
                  "Duct tape",
                  "Zip Stitch",
                  "Standard band-aids",
                  "Liquid bandage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It literally \"zips\" the \"stitch\" together, closing the wound without needing painful needles."
      },
      {
            "text": "How does a Zip Stitch essentially function to close a wound?",
            "options": [
                  "Like a staple gun for the skin",
                  "Like a heavy-duty tourniquet",
                  "Like a butterfly bandage with little zip ties",
                  "Like a thermal heat patch"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It acts like miniature zip-ties attached to stickers that pull the skin perfectly closed."
      },
      {
            "text": "What does a Zip Stitch come packaged with so you can prep the area before applying it?",
            "options": [
                  "An alcohol pad",
                  "Antibacterial ointment",
                  "A sterile needle",
                  "Saline solution"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The skin must be completely clean and oil-free, or the adhesive pads won't stick at all."
      },
      {
            "text": "After applying the Zip Stitch over the wound and pulling the zip tabs tight, what is the final step?",
            "options": [
                  "Tape the tabs down",
                  "Cut off the excess zip tabs",
                  "Tie the tabs in a knot",
                  "Fold them over the wound"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Once pulled tight, snip the long plastic tails off so they don't snag on clothing."
      },
      {
            "text": "What does Ted use to tightly fasten the empty frame pad around the injured leg?",
            "options": [
                  "Safety pins",
                  "Zip ties",
                  "Parachute cord (P-cord)",
                  "Elastic bands"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: P-cord is strong enough to wrap around the pad and lock the makeshift splint securely in place."
      },
      {
            "text": "Which of the following is given as an example of a \"soft tissue\" injury in the video?",
            "options": [
                  "A fractured tibia",
                  "Altitude sickness",
                  "Hypothermia",
                  "A laceration"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: \"Soft tissue\" means your skin and muscles. A laceration is a deep cut into that soft tissue."
      },
      {
            "text": "What is the ultimate goal of utilizing these improvised wilderness first-aid tricks?",
            "options": [
                  "To perform complex surgery while in the woods",
                  "To completely heal the injury so you can keep hiking",
                  "To make do with what is at your disposal until you can get to definitive medical care later",
                  "To avoid ever having to pay for a real doctor"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Wilderness first aid isn't a permanent cure; it's a temporary bridge to get you safely to a real hospital."
      }
    ] }
  },
  {
    id: 'hlt2', title: 'Maternal Health and Nutrition', category: 'Health',
    description: 'Important dietary and health guidelines for pregnant women and new mothers.',
    thumbnailUrl: 'https://www.invitra.com/en/wp-content/uploads/2022/01/breastfeeding-diet.png',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Healthy Diet During Pregnancy', videoUrl: 'https://www.youtube.com/embed/0BrxCY89_uQ', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary topic discussed in the video?",
            "options": [
                  "Exercise routines during pregnancy",
                  "Nutrition and healthy eating during pregnancy",
                  "How to start a food business",
                  "The benefits of taking medicine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Nutrition fuels both the mother's energy and the growing baby's development."
      },
      {
            "text": "According to the health worker, what are common symptoms a woman might experience during her first trimester?",
            "options": [
                  "Hair loss and blurry vision",
                  "High fever and chills",
                  "Nausea, vomiting, and new food cravings",
                  "Extreme muscle growth"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The classic first trimester signs: feeling \"morning sickness\" and craving weird foods!"
      },
      {
            "text": "What specific food dish was the pregnant woman struggling to cook because the smell made her sick?",
            "options": [
                  "Chicken soup",
                  "Mincemeat fat cook",
                  "Fried fish",
                  "Boiled eggs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The heavy, greasy smell of cooking fat and mincemeat often triggers extreme pregnancy nausea."
      },
      {
            "text": "What was the only food the pregnant woman mentioned she could sometimes stomach?",
            "options": [
                  "Plain chips",
                  "Carrots",
                  "Lentils",
                  "Bread"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Plain, bland, and salty carbs (like chips) are often the only things that stay down during bad nausea."
      },
      {
            "text": "Why does the health worker advise against eating only plain chips?",
            "options": [
                  "They are too expensive",
                  "They cause dehydration",
                  "They don't have the many nutrients needed for the baby to grow",
                  "They are too hard to chew"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Plain chips are just empty calories; the baby needs actual building blocks (vitamins and proteins)."
      },
      {
            "text": "Where does a baby get all its nutrition from during pregnancy and breastfeeding?",
            "options": [
                  "From sunlight",
                  "From the mother's diet",
                  "From the clinic's vaccines",
                  "From drinking cow's milk"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The baby literally eats what the mother eats through the umbilical cord."
      },
      {
            "text": "What eating habit does the health worker suggest to help prevent nausea?",
            "options": [
                  "Eating only one large meal a day",
                  "Fasting for 12 hours",
                  "Drinking milk before every meal",
                  "Eating smaller meals throughout the day"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: An empty stomach makes nausea worse. Small, frequent bites keep the stomach settled."
      },
      {
            "text": "What is the minimum recommended food intake per day for a pregnant woman according to the video?",
            "options": [
                  "Two meals and no snacks",
                  "At least three meals a day plus a snack",
                  "Five full meals a day",
                  "Only liquids throughout the day"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 3 main meals plus a snack ensures a steady, constant stream of energy for the baby."
      },
      {
            "text": "Why do health workers regularly check a pregnant woman's weight?",
            "options": [
                  "To make sure she is maintaining a healthy weight and eating enough nutritious food",
                  "To prescribe weight-loss medication",
                  "To see if she is exercising enough",
                  "To record it for government statistics"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: A mother's healthy weight gain is a visible sign that the baby is growing properly inside."
      },
      {
            "text": "What is the health worker's advice regarding drinking water during pregnancy?",
            "options": [
                  "Only drink water with meals",
                  "Drink water whenever you are thirsty",
                  "Avoid drinking water to prevent vomiting",
                  "Drink exactly one glass of water a day"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Listen to your body! Thirst means you need hydration to maintain amniotic fluid."
      },
      {
            "text": "Which of the following is an example of colorful fruits and vegetables mentioned in the video?",
            "options": [
                  "Apples and grapes",
                  "Bananas and broccoli",
                  "Mango, melon, carrots, pumpkin, and spinach",
                  "Potatoes and onions"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Bright oranges, yellows, and deep greens are packed with the most essential vitamins."
      },
      {
            "text": "What primary benefit do colorful fruits and vegetables provide to a pregnant mother and her baby?",
            "options": [
                  "They are high in unhealthy fats",
                  "They contain important vitamins",
                  "They have zero calories",
                  "They stop all food cravings"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Vitamins are the microscopic workers that build the baby's immune system and organs."
      },
      {
            "text": "Which foods are given as examples of \"starchy foods\"?",
            "options": [
                  "Rice, pasta, bread, and mealie meal",
                  "Spinach and melon",
                  "Meat and chicken",
                  "Eggs and beans"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Starch equals energy. Rice, bread, and pasta are heavy energy foods that fuel the body."
      },
      {
            "text": "Which of the following foods are recommended as good sources of protein?",
            "options": [
                  "Carrots and pumpkin",
                  "Rice and pasta",
                  "Plain chips and sweets",
                  "Eggs, meat, chicken, beans, soya, or lentils"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Protein builds muscle. Think of animal products and heavy legumes like beans and lentils."
      },
      {
            "text": "What types of foods does the health worker specifically say to avoid because they lack necessary nutrients?",
            "options": [
                  "Boiled and steamed foods",
                  "Fatty, fried, and salty foods",
                  "Fresh fruits and vegetables",
                  "Protein-rich foods"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Deep-fried and overly salty foods provide no real nutrition, just bad cholesterol and bloating."
      },
      {
            "text": "Why is it necessary to take supplements from the clinic even if the mother is eating healthy foods?",
            "options": [
                  "Because the supplements replace all meals",
                  "Because the mother's body is working extra hard to grow the baby",
                  "Because the clinic forces all patients to take them",
                  "Because they cure nausea instantly"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Growing a human takes so much iron and folic acid that normal food alone isn't always enough."
      },
      {
            "text": "What is the first food safety step the pregnant woman should take before preparing her food?",
            "options": [
                  "Chop the vegetables",
                  "Boil the water",
                  "Wash her hands with soap and clean water",
                  "Turn on the stove"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Clean hands prevent dangerous outside bacteria from ever entering the food."
      },
      {
            "text": "What must be done to raw fruits and vegetables before eating them?",
            "options": [
                  "They must be soaked in vinegar",
                  "They must be washed in clean water",
                  "They must be peeled and boiled",
                  "They must be left in the sun to dry"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Washing removes dirt, pesticides, and harmful bugs from raw skins before you eat them."
      },
      {
            "text": "How should meat, eggs, and fish be cooked to ensure safety during pregnancy?",
            "options": [
                  "Served raw or rare",
                  "Cooked medium-rare",
                  "Cooked until they are well done",
                  "Lightly seared"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Well-done means the heat has fully penetrated the center and killed all dangerous germs."
      },
      {
            "text": "Why is it so important to cook meat, eggs, and fish thoroughly during pregnancy?",
            "options": [
                  "To make them taste better",
                  "To remove all the fat",
                  "To make them easier to chew",
                  "To prevent sickness from bacteria or worms that steal nutrients"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Raw meats can carry severe parasites (like worms or Salmonella) that can dangerously harm the baby."
      }
    ] }
  },
  {
    id: 'hlt3', title: 'Identifying Medicinal Plants', category: 'Health',
    description: 'Learn to identify and use common medicinal plants.',
    thumbnailUrl: 'https://i.ytimg.com/vi/VvG4jr0HskE/hqdefault.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Healing Plants Guide', videoUrl: 'https://www.youtube.com/embed/yp58geKmdYE', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "Which medicinal plant is widely known to help soothe burns and skin irritations, improve digestion, and support immune function?",
            "options": [
                  "Arnica",
                  "Aloe Vera",
                  "Basil",
                  "Bay Leaves"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Aloe is the classic, cooling green jelly plant used worldwide for sunburns and cuts."
      },
      {
            "text": "Which plant helps boost testosterone and fertility in men, reduces stress, and enhances brain function?",
            "options": [
                  "Ashwagandha",
                  "Alfalfa",
                  "Astragalus",
                  "Burdock"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Ashwagandha translates to \"smell of the horse,\" representing strength, endurance, and male vitality."
      },
      {
            "text": "Which of the following plants is known to relieve premenstrual syndrome (PMS) symptoms and support healthy hormone balance?",
            "options": [
                  "Catnip",
                  "Chamomile",
                  "Chasteberry",
                  "Calendula"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Chasteberry has been historically associated with balancing female reproductive health and cycles."
      },
      {
            "text": "Cranberry is most famously used to help prevent what type of health issue?",
            "options": [
                  "Headaches",
                  "Muscle cramps",
                  "Urinary tract infections",
                  "Skin irritations"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Cranberry juice makes the urinary tract acidic, stopping harmful bacteria from sticking to the walls."
      },
      {
            "text": "Which medicinal plant helps lower blood pressure, improves cholesterol levels, and may act as an anti-inflammatory?",
            "options": [
                  "Garlic",
                  "Echinacea",
                  "Elderberry",
                  "Eucalyptus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Garlic keeps vampires away, and it keeps bad cholesterol away too!"
      },
      {
            "text": "Which plant is commonly used to relieve nausea and vomiting, as well as improve digestion?",
            "options": [
                  "Ginkgo",
                  "Ginger",
                  "Goldenseal",
                  "Green tea"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Ginger ale and ginger tea are the most famous remedies for an upset stomach or motion sickness."
      },
      {
            "text": "Ginkgo (Ginkgo biloba) is primarily known for helping to improve which bodily function?",
            "options": [
                  "Muscle strength",
                  "Lung capacity",
                  "Memory and cognitive function",
                  "Joint flexibility"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Ginkgo leaves look a bit like two halves of a brain, fitting perfectly for a memory booster."
      },
      {
            "text": "Which plant acts as a natural antimicrobial agent, may help treat acne, and has anti-inflammatory properties?",
            "options": [
                  "Stevia",
                  "Tea tree oil",
                  "Tarragon",
                  "St. John’s Wort"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Tea tree is a powerful natural antiseptic often dabbed directly onto acne spots to dry them out."
      },
      {
            "text": "St. John’s Wort is often used to help relieve which of the following conditions?",
            "options": [
                  "Mild to moderate depression",
                  "Sunburns",
                  "Severe bone fractures",
                  "High cholesterol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: St. John's Wort brings the \"sunshine\" back for people struggling with mild depression."
      },
      {
            "text": "Which spice helps improve insulin sensitivity, lower blood sugar levels, and may have anti-inflammatory properties?",
            "options": [
                  "Coriander",
                  "Cinnamon",
                  "Clove",
                  "Cumin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Cinnamon is a sweet spice that actually helps balance out blood sugar spikes after meals."
      },
      {
            "text": "Feverfew is a medicinal plant primarily known for relieving which specific ailment?",
            "options": [
                  "Migraine headaches",
                  "Toothaches",
                  "Broken bones",
                  "Hair loss"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: \"Feverfew\" naturally reduces inflammation in blood vessels, easing heavy, pounding migraines."
      },
      {
            "text": "Which plant supports healthy prostate and urinary function in men?",
            "options": [
                  "Saw Palmetto",
                  "Rosemary",
                  "Sage",
                  "Reishi"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Saw Palmetto is the most famous herbal supplement recommended for aging men's prostate health."
      },
      {
            "text": "Which medicinal root helps promote relaxation, relieves anxiety, and improves sleep quality, often acting as a natural sleep aid?",
            "options": [
                  "Velvet bean",
                  "Valerian",
                  "Vanilla",
                  "Wild yam"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Valerian root smells very earthy but acts as a powerful natural sedative to knock you out for a good sleep."
      },
      {
            "text": "Which plant helps support liver function, may lower cholesterol levels, and has anti-inflammatory properties?",
            "options": [
                  "Milk thistle",
                  "Maca",
                  "Moringa",
                  "Mullen"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The active ingredient (silymarin) in Milk Thistle acts like a shield and detoxifier for the liver."
      },
      {
            "text": "Which plant can be used as a natural insecticide, relieves stress, and has a calming effect?",
            "options": [
                  "Vetiver",
                  "Vervain",
                  "Vanilla",
                  "Witch hazel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Known as the \"oil of tranquility\" for stress, its earthy roots are also used to repel insects."
      },
      {
            "text": "Which plant, frequently used as a flavoring agent in beer, helps promote relaxation and relieve anxiety?",
            "options": [
                  "Hyssop",
                  "Horsetail",
                  "Hops",
                  "Holy Basil"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Hops make beer bitter, but when used as a tea or supplement, they are a powerful, sleepy relaxant."
      },
      {
            "text": "Which flowering plant helps relieve allergy symptoms, supports healthy kidneys, and may have anti-inflammatory properties?",
            "options": [
                  "Nettle",
                  "Neem",
                  "Mustard",
                  "Maca"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Stinging nettle hurts to touch, but drinking it blocks histamine (allergy) reactions."
      },
      {
            "text": "Which plant is used to soothe coughs and sore throats, support respiratory health, and has mild pain-relieving properties?",
            "options": [
                  "Maca",
                  "Mullen",
                  "Milk thistle",
                  "Moringa"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Mullein leaves are soft and fuzzy, just like how it coats and soothes a scratchy, dry throat."
      },
      {
            "text": "Which plant is traditionally used to relieve cold and flu symptoms and support healthy digestion?",
            "options": [
                  "Ylang-Ylang",
                  "Yarrow",
                  "Wild yam",
                  "Witch hazel"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Legend says Achilles used Yarrow to treat his soldiers' wounds and break their fevers."
      },
      {
            "text": "Which golden spice is known to relieve inflammation, support healthy brain function, and may have anti-cancer properties?",
            "options": [
                  "Thyme",
                  "Turmeric",
                  "Tarragon",
                  "Tea tree oil"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Turmeric contains curcumin, which is nature's strongest bright yellow anti-inflammatory."
      }
    ] }
  },
  {
    id: 'hlt4', title: 'Clean Water and Hygiene', category: 'Health',
    description: 'Methods for purifying drinking water and maintaining personal and community hygiene.',
    thumbnailUrl: 'https://ars.els-cdn.com/content/image/3-s2.0-B9780323998758000215-f07-03-9780323998758.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'WASH Principles', videoUrl: 'https://www.youtube.com/embed/JbuSTlyNgGM', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What does the acronym WASH stand for?",
            "options": [
                  "Water, Analysis, Safety, and Health",
                  "Water, Sanitation, and Hygiene",
                  "Waste, Sanitation, and Habitat",
                  "Wellness, Action, and Hygiene"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: WASH is the global standard term for clean water initiatives: WAter, Sanitation, Hygiene."
      },
      {
            "text": "According to the video, approximately how many people worldwide lack easy access to clean water?",
            "options": [
                  "500 million",
                  "1 billion",
                  "More than 2 billion",
                  "4 billion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It is a staggering number—over a quarter of the global population struggles to find safe water!"
      },
      {
            "text": "Fecally contaminated water primarily causes which of the following illnesses mentioned in the video?",
            "options": [
                  "Respiratory infections",
                  "Diarrheal disease",
                  "Malaria",
                  "Heart disease"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Bad bacteria in dirty water attacks the stomach and intestines immediately, causing severe diarrhea."
      },
      {
            "text": "How many deaths per year worldwide are estimated to be caused by waterborne diarrheal diseases?",
            "options": [
                  "100,000",
                  "500,000",
                  "1 million",
                  "5 million"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: 1 million. It's a massive, tragic number for a completely preventable disease."
      },
      {
            "text": "What is a common, but often flawed, assumption made when trying to change WASH behaviors?",
            "options": [
                  "That changing behavior requires billions of dollars",
                  "That knowing the facts and health risks is enough to change behavior",
                  "That adults cannot learn new behaviors",
                  "That people naturally prefer drinking boiled water"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: People know smoking is bad, but they still smoke. Facts alone don't change daily habits."
      },
      {
            "text": "The science of behavior analysis studies how behavior is influenced by its:",
            "options": [
                  "Genetic makeup",
                  "Context and conditions",
                  "Historical origins",
                  "Geographical location"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Behavior doesn't happen in a vacuum; it is shaped by the environment and conditions around you."
      },
      {
            "text": "In behavior analysis, what are the events that precede (happen before) a behavior called?",
            "options": [
                  "Consequences",
                  "Reinforcers",
                  "Antecedents",
                  "Outcomes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Ante\" means before (like a poker ante). Antecedents are the triggers that happen before the action."
      },
      {
            "text": "What are the events that follow a behavior called?",
            "options": [
                  "Antecedents",
                  "Prompts",
                  "Triggers",
                  "Consequences"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: A consequence is simply the result that happens *after* an action is taken."
      },
      {
            "text": "The antecedent-behavior-consequence relationship is also known as the:",
            "options": [
                  "Three-term contingency",
                  "WASH protocol",
                  "Behavior triangle",
                  "Safety algorithm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: A -> B -> C (Antecedent, Behavior, Consequence). Three terms connected together."
      },
      {
            "text": "Which of the following is an example of an \"antecedent\" that increases the chances of unsafe behavior?",
            "options": [
                  "Getting sick from bad water",
                  "Seeing other people drink untreated water",
                  "Receiving praise for washing hands",
                  "Boiling water to kill germs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"Monkey see, monkey do.\" Seeing others do it acts as a visual trigger (antecedent) to copy them."
      },
      {
            "text": "What is the process of breaking down complex behaviors step-by-step to identify where problems occur called?",
            "options": [
                  "Risk assessment",
                  "System evaluation",
                  "Task analysis",
                  "Consequence mapping"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You are analyzing a big task by breaking it down into tiny, measurable steps."
      },
      {
            "text": "Consequences that make any behavior more likely to reoccur in the future are called:",
            "options": [
                  "Deterrents",
                  "Reinforcers",
                  "Punishments",
                  "Antecedents"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: They \"reinforce\" or strengthen the habit so you are motivated to do it again."
      },
      {
            "text": "Why are unsafe practices, like drinking untreated water, often strongly reinforced?",
            "options": [
                  "They are endorsed by local governments",
                  "They have short-term positive consequences like quenching thirst and saving time",
                  "They require expensive equipment",
                  "They are the only legal option"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Humans prioritize instant gratification (saving time and fixing thirst) over long-term hidden risks."
      },
      {
            "text": "Why do delayed consequences, such as illness, often fail to stop unsafe water practices?",
            "options": [
                  "Because people enjoy being sick",
                  "Because the delay makes them have very little immediate effect on behavior",
                  "Because illnesses from water are generally mild",
                  "Because the illnesses happen before the water is consumed"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: If the punishment (sickness) doesn't happen immediately, the brain ignores the connection."
      },
      {
            "text": "What makes the beneficial consequences of healthy WASH behaviors difficult to see?",
            "options": [
                  "The consequence is often just the avoidance of invisible dangers like viruses",
                  "The healthy behaviors take too long to perform",
                  "The consequences happen too quickly to notice",
                  "Healthy behaviors always cause physical pain"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: You can't \"see\" that you didn't get sick today, so there is no immediate visible reward for boiling water."
      },
      {
            "text": "How can desired healthy behaviors be quickly strengthened?",
            "options": [
                  "By delivering additional reinforcers such as feedback or attention",
                  "By threatening severe punishment",
                  "By hiding the safe water supply",
                  "By ignoring the behavior completely"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Positive feedback and attention give people immediate satisfaction for doing the right thing."
      },
      {
            "text": "What is one way people can be encouraged to keep up good habits and identify risky situations?",
            "options": [
                  "By avoiding all social contact",
                  "By learning to collect and visualize data about their own behavior",
                  "By drinking only rainwater",
                  "By stopping all handwashing"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Seeing a streak on a chart (like a fitness app) makes people want to keep the good habit going."
      },
      {
            "text": "To make using WASH devices more reinforcing, how should they ideally be designed?",
            "options": [
                  "To be as heavy as possible",
                  "Creatively, in a funny or useful way",
                  "To be invisible",
                  "To require a complex manual to operate"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: If washing hands is fun or uses a clever gadget, people will actually want to do it."
      },
      {
            "text": "What is the ultimate long-term goal for maintaining healthy WASH behaviors?",
            "options": [
                  "To constantly pay people to wash their hands",
                  "For behaviors to be maintained through naturally occurring reinforcers like staying healthy",
                  "To have field workers monitor people forever",
                  "To rely entirely on artificial flavors in water"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The habit must eventually survive on its own without artificial rewards or monitors."
      },
      {
            "text": "What role can local WASH groups play in sustaining positive behavior?",
            "options": [
                  "They can enforce strict penalties for unsafe behavior",
                  "They can provide fun and social reinforcement",
                  "They can build massive water treatment plants",
                  "They can eliminate the need for clean water entirely"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Positive peer pressure and community fun keep the momentum going."
      }
    ] }
  },
  {
    id: 'hlt5', title: 'Child Immunization Awareness', category: 'Health',
    description: 'Understand the importance of vaccines in protecting children from deadly diseases.',
    thumbnailUrl: 'https://www.reanfoundation.org/wp-content/uploads/2023/04/Child-Needs-Vaccines.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Vaccines and Immunity', videoUrl: 'https://www.youtube.com/embed/uh6nhzUIw38', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "According to Dr. Ankit, what are vaccines primarily made of?",
            "options": [
                  "Chemical syrups that reduce fever",
                  "Biologically active compounds containing a bacteria, virus, or part of an organism",
                  "Pure vitamins and minerals for growth",
                  "Antibiotics that kill existing stomach bugs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Vaccines use a safe, dead or weakened piece of the actual germ to train your body."
      },
      {
            "text": "What is the main purpose of introducing a vaccine into a child's body?",
            "options": [
                  "To cure an ongoing infection immediately",
                  "To help the child gain weight",
                  "To help the child develop immunity against certain diseases without actually falling sick",
                  "To permanently change the child's DNA"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It acts like a harmless training simulator for your immune system so you don't get the real disease."
      },
      {
            "text": "On what principle do vaccines work inside the human body?",
            "options": [
                  "The principle of immune memory",
                  "The principle of blood dilution",
                  "The principle of rapid cell division",
                  "The principle of thermal regulation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The immune system \"remembers\" the fake germ from the vaccine so it can instantly destroy the real one later."
      },
      {
            "text": "When a vaccine is introduced, what does the body generate to control or kill the \"foreign invader\"?",
            "options": [
                  "Red blood cells",
                  "Antibodies",
                  "Excess sugar",
                  "Lactic acid"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Antibodies are the microscopic soldiers your body specifically creates to fight the invader."
      },
      {
            "text": "Which two main vaccination schedules are generally followed in India, according to the video?",
            "options": [
                  "The WHO schedule and the FDA schedule",
                  "The National Immunization Schedule (NIS) and the Indian Academy of Pediatrics (IAP) schedule",
                  "The Private Hospital Schedule and the State Board Schedule",
                  "The European standard and the Asian standard"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: NIS is the government standard, and IAP is the private pediatrician standard."
      },
      {
            "text": "What is a key characteristic of the National Immunization Schedule (NIS) mentioned by the doctor?",
            "options": [
                  "It contains every possible optional vaccine available in the world",
                  "It is only for adults over 18",
                  "It provides the bare minimum basic vaccines and is generally followed in government hospitals",
                  "It only provides vaccines in an oral form"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: The government focuses on mass survival, providing the absolutely essential, life-saving vaccines for free."
      },
      {
            "text": "How does the Indian Academy of Pediatrics (IAP) schedule differ from the NIS?",
            "options": [
                  "It only offers vaccines for teenagers",
                  "It has a narrower coverage of diseases",
                  "It provides extra and broader coverage, including both mandatory and optional vaccines",
                  "It is completely free in all private clinics"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Private pediatricians (IAP) recommend extra layers of protection against more diseases for those who can afford it."
      },
      {
            "text": "Up to what age are the vaccines in these schedules generally administered to children?",
            "options": [
                  "From birth to 5 years of age",
                  "From birth to 15 years of age",
                  "From 5 years to 18 years of age",
                  "Only during the first year of birth"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The core foundation of immunity is built from the day they are born until their early teens (15 yrs)."
      },
      {
            "text": "Are all vaccines given strictly in the form of an injection?",
            "options": [
                  "Yes, oral vaccines do not exist",
                  "No, some vaccines are available in an oral form",
                  "Yes, but only in government hospitals",
                  "No, vaccines are only given as skin creams"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"Polio drops\" are the most famous example of drinking a vaccine instead of getting a shot."
      },
      {
            "text": "Which of the following is given as an example of an oral vaccine in the video?",
            "options": [
                  "Measles",
                  "Tetanus",
                  "Polio, Cholera, and Rotavirus",
                  "Hepatitis B"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: These diseases target the gut (like cholera and rotavirus), so swallowing the vaccine is highly effective."
      },
      {
            "text": "What should parents do if they miss or delay a scheduled vaccination dose for their child?",
            "options": [
                  "Skip that dose entirely and wait for the next year",
                  "Inform the doctor as soon as they realize and get the missed dose administered to complete the schedule",
                  "Start the entire vaccination schedule from the very beginning",
                  "Double the dose on the next visit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Better late than never! Catch-up schedules exist to get the child back on track."
      },
      {
            "text": "Which of the following are mentioned as common, mild side effects of vaccination?",
            "options": [
                  "Hair loss and blurry vision",
                  "Fever, pain at the injection site, irritability, swelling, or redness",
                  "High blood pressure and weight loss",
                  "Extreme bone pain and coughing"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: These are just normal signs that the immune system is actively practicing and building defenses."
      },
      {
            "text": "According to the doctor, is there a proven link between vaccines and autism?",
            "options": [
                  "Yes, vaccines are a leading cause of autism",
                  "Yes, but only if the vaccine is delayed",
                  "No, research has proven that there is absolutely no relation or association between vaccines and autism",
                  "It is still completely unknown to medical science"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Countless global studies have completely debunked the vaccine-autism myth. They are safe."
      },
      {
            "text": "What is one crucial thing parents must remember to take with them when visiting the pediatrician for a vaccination?",
            "options": [
                  "The child's favorite toy",
                  "The child's medical records, vaccination file, or card",
                  "A month's supply of fever medicine",
                  "The child's birth certificate only"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The card is the child's ultimate health passport. The doctor needs to see exactly what was given and when."
      },
      {
            "text": "Under what condition might a pediatrician advise deferring (postponing) a vaccination?",
            "options": [
                  "If the child is completely healthy and active",
                  "If the child ate a heavy meal before coming",
                  "If the child currently has a fever, infection, or recent onset illness",
                  "If the child is crying because they are scared of the needle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: You don't want to give a vaccine (a training germ) to a body that is already exhausted fighting a real fever."
      }
    ] }
  },
  {
    id: 'hlt6', title: 'Managing Common Fevers', category: 'Health',
    description: 'Learn how to identify symptoms of Malaria, Dengue, and Typhoid, and when to seek a doctor.',
    thumbnailUrl: 'https://www.hcghospitals.in/wp-content/uploads/2025/03/Common-Causes-of-Fever-Pyrexia.png',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Identifying Fevers', videoUrl: 'https://www.youtube.com/embed/YHgNWJgmDI0', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary cause of Typhoid fever?",
            "options": [
                  "A viral infection",
                  "Salmonella Typhi bacteria",
                  "Fungal spores",
                  "A mosquito bite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The name 'Typhoid' comes directly from the bacteria that causes it: Salmonella 'Typhi'."
      },
      {
            "text": "How does Typhoid fever typically spread from person to person?",
            "options": [
                  "Through contaminated food and drinking water",
                  "Through the air when an infected person coughs",
                  "Through direct skin-to-skin contact",
                  "Through sharing clothes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Typhoid is a waterborne and foodborne disease. Bad sanitation allows the bacteria to enter what we consume."
      },
      {
            "text": "Which of the following is a classic early symptom of Typhoid fever?",
            "options": [
                  "Sudden hair loss",
                  "A persistent, high fever that increases gradually",
                  "Complete loss of hearing",
                  "Sharp chest pains"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Unlike a sudden flu, Typhoid fever \"steps up\" slowly over a few days until it becomes dangerously high."
      },
      {
            "text": "What gastrointestinal symptoms are most commonly associated with Typhoid?",
            "options": [
                  "Heartburn and acid reflux",
                  "Stomach pain, along with diarrhea or constipation",
                  "Extreme hunger and weight gain",
                  "Swollen gums"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Because you eat or drink the bacteria, it attacks your digestive system (stomach and intestines) first."
      },
      {
            "text": "Which of the following is a common medical test used to diagnose Typhoid fever?",
            "options": [
                  "Widal test or Blood Culture test",
                  "ECG (Electrocardiogram)",
                  "Lipid profile test",
                  "Vitamin B12 test"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Doctors \"Culture\" your blood to literally see if the Salmonella Typhi bacteria grows in the lab."
      },
      {
            "text": "What skin manifestation is sometimes seen in patients suffering from Typhoid fever?",
            "options": [
                  "Severe acne on the face",
                  "Rose-colored spots on the neck and abdomen",
                  "Large purple bruises on the legs",
                  "Dry, peeling skin on the hands"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A classic (though not always present) sign is a faint pink/rose rash on the belly and chest."
      },
      {
            "text": "What is the standard medical treatment for a confirmed case of Typhoid fever?",
            "options": [
                  "Over-the-counter allergy medicine",
                  "Strict bed rest with no medication",
                  "A prescribed course of antibiotics",
                  "Physical therapy"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Since it is caused by a \"bacteria\", the only way to kill it is with \"antibiotics\"."
      },
      {
            "text": "Which of the following is a key preventive measure against Typhoid fever?",
            "options": [
                  "Eating raw, unwashed vegetables",
                  "Drinking tap water from unknown sources",
                  "Maintaining proper hand hygiene and drinking boiled or purified water",
                  "Avoiding all sunlight"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Boil it, cook it, peel it, or forget it! Clean water and clean hands stop the bacteria from entering your mouth."
      },
      {
            "text": "If left untreated, which part of the body can suffer severe complications, such as bleeding or perforation, due to Typhoid?",
            "options": [
                  "The lungs",
                  "The intestines",
                  "The brain",
                  "The eyes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The bacteria multiply in your gut. Over time, they can eat holes (perforations) straight through your intestines."
      },
      {
            "text": "Is there a vaccine available to help prevent Typhoid fever?",
            "options": [
                  "No, a vaccine has not been invented yet",
                  "Yes, vaccines are available and recommended for people traveling to high-risk areas",
                  "Yes, but the vaccine is only effective for infants",
                  "No, the disease can only be prevented by taking antibiotics daily"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Yes, tourists traveling to developing nations often get a Typhoid shot to stay safe from local water."
      }
    ] }
  },
  {
    id: 'hlt7', title: 'Traditional Herbal Remedies', category: 'Health',
    description: 'A deep dive into preparing decoctions and pastes from local herbs for minor ailments.',
    thumbnailUrl: 'https://images.theconversation.com/files/276758/original/file-20190528-42588-uc0t6z.jpg?ixlib=rb-4.1.0&rect=0%2C353%2C5615%2C2808&q=45&auto=format&w=1356&h=668&fit=crop',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Local Healing Herbs', videoUrl: 'https://www.youtube.com/embed/iha21PvpeNs', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "For approximately how many years have humans been using plants to make medicines?",
            "options": [
                  "10,000 years",
                  "30,000 years",
                  "60,000 years",
                  "100,000 years"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Archaeological evidence shows our ancestors have relied on nature's pharmacy for 60 millennia!"
      },
      {
            "text": "Which of the following herbs is a perennial plant with aromatic leaves that grows well in moist soil and climate?",
            "options": [
                  "Turmeric",
                  "Aloe Vera",
                  "Neem",
                  "Mint"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Mint loves water! It grows rapidly in damp soil and releases a fresh, strong aroma when crushed."
      },
      {
            "text": "What is the primary medicinal use of mint as mentioned in the video?",
            "options": [
                  "Treating cold and cough",
                  "Treating stomach ache",
                  "Improving immunity",
                  "Healing physical wounds"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Mint (like peppermint tea) relaxes the digestive tract muscles and soothes an upset tummy."
      },
      {
            "text": "What is the ideal temperature range for turmeric to grow well?",
            "options": [
                  "0 to 10 degree Celsius",
                  "10 to 20 degree Celsius",
                  "20 to 30 degree Celsius",
                  "30 to 40 degree Celsius"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Turmeric is a tropical plant that loves warm, comfortable weather (20-30°C), not freezing or boiling."
      },
      {
            "text": "Which part of the turmeric plant is boiled, dried, and extensively used in Indian cuisine and Ayurveda?",
            "options": [
                  "Leaves",
                  "Flowers",
                  "Rhizome (underground stem)",
                  "Seeds"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: It looks like ginger! The thick, orange root hidden underground (the rhizome) is what we grind into powder."
      },
      {
            "text": "Which plant is known as a short-stem plant that grows well in tropical and arid climates and is widely used for making skin creams, laxatives, and moisturizers?",
            "options": [
                  "Fenugreek",
                  "Basil",
                  "Aloe Vera",
                  "Neem"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Aloe Vera stores water in its thick, spiky leaves, making it perfect for dry climates and hydrating human skin."
      },
      {
            "text": "Which herb is sometimes referred to as the \"King of the Herbs\" and is considered sacred by Hindus?",
            "options": [
                  "Turmeric",
                  "Mint",
                  "Fenugreek",
                  "Basil (Tulsi)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Tulsi (Holy Basil) is worshipped in Indian courtyards and revered for its massive healing properties."
      },
      {
            "text": "Apart from being used as a remedy to treat colds and coughs, what was Basil historically used to make?",
            "options": [
                  "Royal perfumes",
                  "Moisturizing lotions",
                  "Natural insecticides",
                  "Fabric dyes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The name Basil comes from a Greek word meaning 'royal'. Its sweet, strong scent made it perfect for ancient perfumes."
      },
      {
            "text": "Neem, which has antibacterial and antifungal properties, is also commonly known by what name?",
            "options": [
                  "Indian Lily",
                  "Indian Lilac",
                  "Bitter Basil",
                  "Tropical Mint"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Because of its cluster of small, pale flowers, the British commonly called Neem the \"Indian Lilac\"."
      },
      {
            "text": "Which plant's bitter seeds are used in cooking, help with digestion, and reduce the risk of heart diseases and diabetes?",
            "options": [
                  "Fenugreek (Methi)",
                  "Neem",
                  "Turmeric",
                  "Aloe Vera"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Methi (Fenugreek) seeds are tiny, yellow, and bitter, but they work wonders for balancing blood sugar."
      }
    ] }
  },
  {
    id: 'hlt8', title: 'Mental Health in Communities', category: 'Health',
    description: 'Understanding stress, anxiety, and the importance of community support for mental well-being.',
    thumbnailUrl: 'https://mhcsandiego.com/wp-content/uploads/2024/12/MHC-Dec-2024-5-1024x538.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Stress and Anxiety', videoUrl: 'https://www.youtube.com/embed/tY8NY6CMDFA', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "According to the video, how does a mentally healthy person feel most of the time?",
            "options": [
                  "Scared and worried",
                  "Calm and relaxed",
                  "Angry and upset",
                  "Tired and sleepy"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Mental health brings peace. A healthy mind rests in a baseline state of calm."
      },
      {
            "text": "Which of the following describes our physical health?",
            "options": [
                  "How our brain feels and processes thoughts",
                  "How we deal with difficult emotions",
                  "How our bodies move and allow us to enjoy activities",
                  "How we communicate with our friends"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Physical = Body. It is your muscles, bones, and energy to run and play."
      },
      {
            "text": "What signals does the body usually send when it gets physically sick or injured?",
            "options": [
                  "Pain or fever",
                  "Curiosity and happiness",
                  "Feeling nothing at all",
                  "Taking deep breaths"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Pain is your body's alarm system. A fever is your body turning up the heat to kill germs."
      },
      {
            "text": "What three things make up our mental health?",
            "options": [
                  "Our muscles, bones, and skin",
                  "Our thoughts, emotions, and moods",
                  "Our diet, sleep, and sports",
                  "Our parents, teachers, and friends"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Mental health lives inside the brain. It is how you think, how you feel, and your overall mood."
      },
      {
            "text": "Which of the following is a sign that your brain is doing well?",
            "options": [
                  "You feel angry all the time",
                  "You are unable to sleep well",
                  "You can think clearly, stay curious, and share feelings",
                  "You cannot concentrate on your chores"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: A healthy brain acts like a sponge—it is curious to learn and clear enough to communicate."
      },
      {
            "text": "Is it normal to feel upset, sad, scared, worried, or angry?",
            "options": [
                  "No, a healthy person never feels these emotions",
                  "Yes, but only if you are physically sick",
                  "No, you should always hide these feelings",
                  "Yes, all those feelings are totally fine as long as they don't stay with you for too long"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Emotions are like the weather; storms are normal, as long as they eventually pass."
      },
      {
            "text": "What is one helpful way the video suggests to deal with being upset or overwhelmed?",
            "options": [
                  "Taking deep breaths and counting to ten",
                  "Ignoring the problem completely",
                  "Stopping all communication with friends",
                  "Running away from home"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Breathing slows your racing heart down, and counting gives your stressed brain something simple to focus on."
      },
      {
            "text": "What can happen if unpleasant situations repeat too often?",
            "options": [
                  "Your physical health improves",
                  "You can get stressed and your mental health may be affected",
                  "You will never feel sad again",
                  "Your brain stops sending signals"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A rubber band breaks if you pull it too much. Constant bad situations stretch and stress your mental health."
      },
      {
            "text": "Which of the following is a clear signal of poor mental health?",
            "options": [
                  "Feeling sad for a few minutes after dropping a toy",
                  "Feeling down or worried for a long time without a clear reason",
                  "Being happy while walking the dog in bad weather",
                  "Wanting to read a favorite book"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Sadness with a cause is normal. Long-term sadness *without* a cause is a signal that your brain chemistry needs help."
      },
      {
            "text": "Besides feeling worried, what is another sign of poor mental health mentioned in the video?",
            "options": [
                  "Getting a fever",
                  "Not feeling anything at all and not being able to share joy or sorrow",
                  "Wanting to play sports every day",
                  "Eating too many vegetables"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Apathy (feeling numb/empty) is often a deeper sign of depression than crying."
      },
      {
            "text": "What should you do if you are overwhelmed by unhappy thoughts?",
            "options": [
                  "Keep them a secret",
                  "Talk about it to a trusted adult, like a parent or a kind teacher",
                  "Wait for them to go away on their own",
                  "Stop sleeping and eating"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: A problem shared is a problem halved. Trusted adults have the tools to help you."
      },
      {
            "text": "Why is it so important to know the signs of poor mental health?",
            "options": [
                  "Because they are harder to notice than the signals of physical health issues",
                  "Because they always cause a high fever",
                  "Because it helps you become better at math",
                  "Because physical health is not important"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: A broken bone is obvious. A broken spirit is invisible, so you have to know the subtle warning signs."
      },
      {
            "text": "According to the video, what might a child with autism prefer to do?",
            "options": [
                  "Talk loudly in large crowds all day",
                  "Spend more time alone in quiet places",
                  "Avoid math, science, and arts completely",
                  "Constantly switch activities every two minutes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Autism often involves sensory overload. Quiet, alone time helps them feel safe and regulated."
      },
      {
            "text": "Children with ADHD (Attention Deficit Hyperactivity Disorder) often find it very hard to do what?",
            "options": [
                  "Run and play sports",
                  "Come up with new ideas",
                  "Stay focused on one thing",
                  "Take breaks"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: \"Attention Deficit\" literally means their brain struggles to maintain focus on a single boring task."
      },
      {
            "text": "What is a common strength of kids with ADHD mentioned in the video?",
            "options": [
                  "They are usually very quiet",
                  "They are naturally good at sitting still for hours",
                  "They are usually good at sports and have a lot of ideas",
                  "They never need to take breaks"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Their high energy makes them great athletes, and their fast-moving brains make them incredibly creative."
      }
    ] }
  },
  {
    id: 'hlt9', title: 'Snakebite Prevention and Care', category: 'Health',
    description: 'Crucial information on avoiding snakebites and the correct first aid steps if bitten.',
    thumbnailUrl: 'https://d35xcwcl37xo08.cloudfront.net/current-affairs-wp-uploads/2025/12/Snakebite-Prevention.webp',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'First Aid for Snakebites', videoUrl: 'https://www.youtube.com/embed/lLkw4BXa7pQ', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the very first step you should take when someone is bitten by a snake?",
            "options": [
                  "Try to catch the snake to identify it",
                  "Make sure the area is safe and the snake has moved on",
                  "Wash the bite with warm water and soap",
                  "Give the person pain medication"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Danger first! Never treat a patient if the angry snake is still sitting next to their leg."
      },
      {
            "text": "What should you instruct the casualty to do immediately after securing the area and calling an ambulance?",
            "options": [
                  "Walk slowly to the nearest road or vehicle",
                  "Jump up and down to keep their heart rate up",
                  "Lie down and stay completely still",
                  "Sit up and take deep breaths"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Lie down and play dead. Zero movement is the key to slowing down the venom."
      },
      {
            "text": "According to the video, how does snake venom primarily travel through the body in Australia?",
            "options": [
                  "Through the nervous system",
                  "Through the digestive tract",
                  "Through the bloodstream only",
                  "Through the lymphatic system"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Venom is a heavy fluid. It travels slowly through the lymphatic (fluid drainage) system, not the fast bloodstream."
      },
      {
            "text": "Why is it crucial for the casualty to remain as still as possible?",
            "options": [
                  "Movement lowers the body temperature too quickly",
                  "Movement activates the lymphatic system and spreads the venom faster",
                  "Movement will cause the bite mark to bleed excessively",
                  "Movement prevents the ambulance from finding them"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: The lymphatic system has no heart to pump it; it is pumped by muscle movement. Moving = pumping venom."
      },
      {
            "text": "What personal protective equipment (PPE) should you put on before treating the bite?",
            "options": [
                  "A protective apron",
                  "Safety goggles",
                  "A face mask",
                  "Gloves"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: If they have venom or blood on their skin, you need gloves so it doesn't get into a cut on your own hand."
      },
      {
            "text": "Where should the first compression bandage be applied?",
            "options": [
                  "Around the waist or chest",
                  "At the base of the foot",
                  "Directly over the bite site",
                  "Above the knee joint"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Trap the poison at the source. Bandage directly over the bite mark first."
      },
      {
            "text": "What is the ideal width for the compression bandages used for a snake bite?",
            "options": [
                  "2 to 5 centimeters",
                  "10 to 15 centimeters",
                  "20 to 25 centimeters",
                  "30 centimeters or more"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 10-15 cm is wide enough to cover a large area quickly without cutting off circulation like a thin rope would."
      },
      {
            "text": "Should you remove the casualty's clothing before applying the bandage over the bite site?",
            "options": [
                  "Yes, always cut the clothes off to see the bite clearly",
                  "Yes, roll the pants up as high as possible",
                  "No, leave them on as long as they are movable, as they assist in providing good compression",
                  "Only if the clothes are made of thick denim"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Don't waste time undressing them. Fabric acts as extra padding to help the bandage compress the lymph vessels."
      },
      {
            "text": "Why must you remove the casualty's shoe and socks during treatment?",
            "options": [
                  "To check that you haven't cut off blood circulation to the toes",
                  "To check for additional snake bites on the feet",
                  "To cool the casualty down and prevent overheating",
                  "To make it easier to elevate the foot"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: The goal is to stop lymph fluid, not blood. Bare toes let you pinch the skin to ensure blood is still flowing."
      },
      {
            "text": "When checking circulation by squeezing the tip of the toe, how quickly should the normal color return?",
            "options": [
                  "Within 30 seconds",
                  "Within 10 seconds",
                  "Within 5 seconds",
                  "Within 2 seconds at most"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Capillary refill should be almost instant (under 2 seconds). If it takes longer, the bandage is too tight!"
      },
      {
            "text": "What is a special feature of a snakebite-specific bandage mentioned in the video?",
            "options": [
                  "It contains a neutralizing anti-venom powder",
                  "It changes color if venom is detected on the skin",
                  "It has a pattern of rectangles that form squares to show when you have the correct tension",
                  "It sticks to the skin like a large plaster"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: When you pull the bandage tight, the printed rectangles stretch into perfect squares, showing you the tension is correct."
      },
      {
            "text": "Where should you start wrapping the second compression bandage to immobilize the limb?",
            "options": [
                  "From the hip moving downwards",
                  "From the bite site moving upwards",
                  "From the knee moving downwards",
                  "From the toes/base of the foot moving upwards"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Start from the very bottom (toes) and squeeze all the fluid upward, wrapping the entire leg."
      },
      {
            "text": "How should the bandage loops overlap as you wrap up the leg?",
            "options": [
                  "You should overlap roughly halfway up the previous loop",
                  "You should leave a gap between each loop",
                  "You should completely overlap the previous loop three times",
                  "You should cross them in a figure-eight pattern only"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: A 50% overlap ensures there are no gaps where the skin can bulge out and let venom escape."
      },
      {
            "text": "If you don't have a patterned bandage, how tight should a normal compression bandage be?",
            "options": [
                  "Loose enough to fit your whole hand underneath",
                  "Firm enough that you can only just fit a finger underneath",
                  "As tight as possible so it cuts off all blood flow",
                  "Loose enough that it slides off easily"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: It should feel tight like a sprained ankle wrap. One finger should barely slide under the edge."
      },
      {
            "text": "What should you do with the casualty's legs after bandaging the bitten leg?",
            "options": [
                  "Splint the legs to each other (or use a splint board) to keep them straight and secure",
                  "Elevate the bitten leg far above the heart",
                  "Bend the knees to a 90-degree angle",
                  "Ask the casualty to slowly stretch their legs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Use the good leg as a splint for the bad leg. Tie them together so the patient physically cannot bend their knees."
      },
      {
            "text": "What information should you write directly on the bandage using a pen?",
            "options": [
                  "Your name, phone number, and address",
                  "The casualty's name and age",
                  "The location of the bite site, the time of the bite, and the time the bandage was applied",
                  "A description of the snake's color and size"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Write an X over the bite, the time the snake struck, and the time you locked it down with the bandage."
      },
      {
            "text": "Why is marking the bite site and times important for the hospital staff?",
            "options": [
                  "It is a legal requirement for the paramedics",
                  "It helps them calculate where the venom has likely traveled to and what they should test for",
                  "It proves that you applied the first aid correctly",
                  "It helps them identify the exact species of snake"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Doctors cut a hole right over the \"X\" to swab the venom and figure out exactly which anti-venom to use."
      },
      {
            "text": "What can you use if you do not have a first aid kit or proper bandages?",
            "options": [
                  "Thick mud or clay spread over the leg",
                  "Thin pieces of string or shoelaces tied tightly",
                  "Leaves and vines found nearby",
                  "Ripped up clothing in 10 to 15 centimeter wide strips"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Tear up a t-shirt or towel. Any wide, strong piece of fabric can act as an emergency compression bandage."
      },
      {
            "text": "What should you do if the casualty starts to feel cold while waiting for the ambulance?",
            "options": [
                  "Apply a blanket to keep them nice and warm",
                  "Light a fire right next to them",
                  "Give them a hot cup of coffee or tea",
                  "Rub their legs and arms vigorously"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: Shock makes people freeze. Throw a blanket or jacket over them to preserve their body heat safely."
      },
      {
            "text": "What should you do if the casualty starts to feel queasy or like they are going to vomit?",
            "options": [
                  "Sit them up completely straight",
                  "Roll them sideways into the recovery position",
                  "Give them plenty of water to drink",
                  "Quickly remove the compression bandage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: If they vomit while on their back, they will choke. Roll them like a log onto their side to keep the airway clear."
      }
    ] }
  },
  {
    id: 'hlt10', title: 'Healthy Cooking Practices', category: 'Health',
    description: 'Learn how to cook food in a way that preserves nutrients and prevents foodborne illnesses.',
    thumbnailUrl: 'https://i.ytimg.com/vi/FftqNrjr67Q/maxresdefault.jpg',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Food Safety and Nutrition', videoUrl: 'https://www.youtube.com/embed/nGKv7l3saK4', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "According to the video, approximately how many people die each year because of contaminated food?",
            "options": [
                  "60,000",
                  "100,000",
                  "420,000",
                  "1 million"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: A shocking 420,000 people die globally every year just from eating unsafe, contaminated food."
      },
      {
            "text": "Which of the following is an example of a biological food contaminant?",
            "options": [
                  "Lead",
                  "Bacteria",
                  "Glass",
                  "Pesticides"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: 'Biology' means living things. Bacteria are living microscopic organisms that infect food."
      },
      {
            "text": "What are prions described as in the video?",
            "options": [
                  "Chemical detergents",
                  "Heavy metals",
                  "Protein molecules that have the potential to cause severe neurological disease",
                  "A type of physical contaminant like plastic"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Prions are twisted, rogue proteins (like in Mad Cow Disease) that attack the brain and nervous system."
      },
      {
            "text": "Mercury and arsenic are examples of which type of food contaminant?",
            "options": [
                  "Biological",
                  "Physical",
                  "Chemical",
                  "Pathogenic"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: These are toxic heavy metals found on the periodic table, making them dangerous 'Chemical' contaminants."
      },
      {
            "text": "What is the correct order of the food supply chain as described in the video?",
            "options": [
                  "Processing -> Production -> Distribution -> Preparation",
                  "Production -> Processing -> Distribution -> Preparation",
                  "Preparation -> Distribution -> Processing -> Production",
                  "Distribution -> Production -> Processing -> Preparation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Grow it (Production), clean/box it (Processing), ship it (Distribution), cook it (Preparation)."
      },
      {
            "text": "At which stage of the food supply chain can contamination happen?",
            "options": [
                  "Only during production",
                  "Only during processing",
                  "Only during preparation",
                  "At any of the steps"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: Food is vulnerable everywhere—from dirty water on the farm, to a dirty truck, to a dirty knife in your kitchen."
      },
      {
            "text": "The fraudulent practice where inferior, toxic, or physical compounds are intentionally added to food to improve appearance or reduce cost is called:",
            "options": [
                  "Food sanitation",
                  "Food adulteration",
                  "Food security",
                  "Food distribution"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Adulteration means making something impure. Like mixing chalk dust into flour to save money."
      },
      {
            "text": "Which of the following is an example of cross-contamination during the preparation stage?",
            "options": [
                  "Using the same knife to cut raw meat and to prepare food that won't be cooked",
                  "Storing food in a warehouse with rats",
                  "Irrigating fruits with contaminated water",
                  "A manufacturer adding inferior chemicals to a product"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: \"Cross\" means moving germs from one place to another—like transferring raw chicken bacteria onto a fresh salad."
      },
      {
            "text": "Contaminated food can lead to over how many different diseases?",
            "options": [
                  "10",
                  "50",
                  "100",
                  "200"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Memory Hook: There are over 200 distinct diseases (ranging from diarrhea to cancers) caused by bad food."
      },
      {
            "text": "Which group is NOT specifically mentioned in the video as being at a higher risk for severe impacts from unsafe food?",
            "options": [
                  "Elderly people over 65",
                  "Children under 5 years",
                  "Teenagers aged 13-18",
                  "Pregnant women and immunocompromised individuals"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Healthy teenagers have peak immune systems. The very old, very young, and pregnant are much more vulnerable."
      },
      {
            "text": "How does unsafe food impact economies on a broader level?",
            "options": [
                  "It increases farm productivity",
                  "It causes a strain due to the cost of illness and reduced productivity",
                  "It lowers international shipping costs",
                  "It creates more jobs in the medical sector"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Sick people can't go to work, and hospital bills drain family savings, hurting the whole economy."
      },
      {
            "text": "What is the Codex Alimentarius?",
            "options": [
                  "A type of toxic pesticide",
                  "A collection of international standards, guidelines, and codes of practice for food safety",
                  "A specific bacteria that contaminates meat",
                  "A step in the food supply chain"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: \"Codex\" translates to a book or code of laws. It is the ultimate global rulebook for safe food."
      },
      {
            "text": "Which global network of national food authorities shares information and collaborates on food safety issues?",
            "options": [
                  "INFOSAN",
                  "HACCP",
                  "FAO",
                  "WHO"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Memory Hook: INFO (Information) + SAN (Sanitation/Safety). INFOSAN is the global alert network for food crises."
      },
      {
            "text": "What does the acronym HACCP stand for?",
            "options": [
                  "Health and Chemical Control Program",
                  "Hazard Analysis and Critical Control Point",
                  "Hygiene and Clean Cooking Practices",
                  "Human and Animal Contamination Prevention"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Memory Hook: Factories Analyze Hazards and find Critical Points to Control them before the food ships."
      },
      {
            "text": "Which of the following is a simple step an individual can take at home to reduce the risk of foodborne disease?",
            "options": [
                  "Using untreated water to wash vegetables",
                  "Keeping raw and cooked food together",
                  "Cooking food thoroughly",
                  "Leaving food out at room temperature for long periods"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Memory Hook: Heat is the ultimate weapon against biology. Cooking food thoroughly kills almost all dangerous bacteria."
      }
    ] }
  }
];
