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
    thumbnailUrl: 'https://loremflickr.com/640/360/language,learning?lock=101',
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
    thumbnailUrl: 'https://i.ytimg.com/vi/ecDg5gWKdfM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDKrDM4k_ASBqYX4ynyecbyXf5lVw',
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
    thumbnailUrl: 'https://w7.pngwing.com/pngs/565/181/png-transparent-microsoft-word-logo.png',
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
    thumbnailUrl: 'https://loremflickr.com/640/360/spreadsheet,data?lock=129',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'MS Excel Full Course', videoUrl: 'https://www.youtube.com/embed/Vl0H-qTclOg', duration: '2:30:00' }],
    quiz: { questions: [
      {
            "text": "What is Microsoft Excel primarily used for?",
            "options": [
                  "Word Processing",
                  "Spreadsheets",
                  "Presentations",
                  "Database Management"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "What is the intersection of a row and a column called?",
            "options": [
                  "Box",
                  "Cell",
                  "Grid",
                  "Block"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Which symbol is used to start a formula in Excel?",
            "options": [
                  "+",
                  "-",
                  "=",
                  "*"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "What function is used to add a range of numbers?",
            "options": [
                  "ADD()",
                  "SUM()",
                  "TOTAL()",
                  "PLUS()"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "How do you select an entire column in Excel?",
            "options": [
                  "Click the column letter",
                  "Click the row number",
                  "Ctrl + A",
                  "Shift + Space"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Which feature allows you to automatically fill a series of data?",
            "options": [
                  "AutoFill",
                  "AutoSum",
                  "AutoFormat",
                  "AutoCorrect"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "What is the default file extension for an Excel workbook?",
            "options": [
                  ".docx",
                  ".pptx",
                  ".xlsx",
                  ".txt"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Which function finds the highest value in a range?",
            "options": [
                  "HIGH()",
                  "MAX()",
                  "TOP()",
                  "PEAK()"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "How do you freeze the top row so it stays visible when scrolling?",
            "options": [
                  "View > Freeze Panes > Freeze Top Row",
                  "Home > Freeze",
                  "Insert > Freeze",
                  "Data > Freeze"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "What does the VLOOKUP function do?",
            "options": [
                  "Looks up a value vertically",
                  "Looks up a value horizontally",
                  "Calculates variance",
                  "Validates data"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Which chart type is best for showing parts of a whole?",
            "options": [
                  "Line Chart",
                  "Bar Chart",
                  "Pie Chart",
                  "Scatter Plot"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "How can you quickly format a range of cells as a table?",
            "options": [
                  "Ctrl + T",
                  "Ctrl + F",
                  "Ctrl + B",
                  "Ctrl + P"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "What is the shortcut to save a workbook?",
            "options": [
                  "Ctrl + S",
                  "Ctrl + C",
                  "Ctrl + V",
                  "Ctrl + Z"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Which tab contains the option to sort and filter data?",
            "options": [
                  "Home",
                  "Insert",
                  "Data",
                  "Review"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "What does the COUNT function do?",
            "options": [
                  "Counts all cells",
                  "Counts cells with numbers",
                  "Counts empty cells",
                  "Counts text cells"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "How do you merge multiple cells into one?",
            "options": [
                  "Home > Merge & Center",
                  "Insert > Merge",
                  "Data > Merge",
                  "View > Merge"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Which function returns the current date and time?",
            "options": [
                  "TODAY()",
                  "NOW()",
                  "CURRENT()",
                  "DATE()"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "What is a PivotTable used for?",
            "options": [
                  "Creating charts",
                  "Summarizing and analyzing large amounts of data",
                  "Formatting cells",
                  "Printing documents"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "How can you apply conditional formatting?",
            "options": [
                  "Home > Conditional Formatting",
                  "Insert > Formatting",
                  "Data > Conditions",
                  "View > Format"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Which shortcut is used to copy a cell?",
            "options": [
                  "Ctrl + X",
                  "Ctrl + C",
                  "Ctrl + V",
                  "Ctrl + Z"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "What does the IF function do?",
            "options": [
                  "Checks a condition and returns one value if true, another if false",
                  "Finds errors",
                  "Inserts a formula",
                  "Iterates through cells"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "How do you insert a new row?",
            "options": [
                  "Right-click row number > Insert",
                  "Home > New Row",
                  "Insert > Row",
                  "Data > Add Row"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Which symbol is used for absolute cell references?",
            "options": [
                  "#",
                  "@",
                  "$",
                  "%"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "What is the purpose of the \"Wrap Text\" feature?",
            "options": [
                  "Makes text bold",
                  "Fits long text into multiple lines within a cell",
                  "Changes text color",
                  "Aligns text to the right"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "How can you protect a worksheet with a password?",
            "options": [
                  "Review > Protect Sheet",
                  "Home > Protect",
                  "Insert > Password",
                  "Data > Secure"
            ],
            "correctAnswerIndex": 0
      }
] }
  },
  {
    id: 'tech3', title: 'Python Programming (Full Course)', category: 'Technology',
    description: 'Learn Python programming from scratch. Covers basics, data structures, and algorithms.',
    thumbnailUrl: 'https://loremflickr.com/640/360/code,python?lock=130',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Python Full Course', videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw', duration: '4:00:00' }],
    quiz: { questions: [
      {
            "text": "What is Python?",
            "options": [
                  "A snake",
                  "A high-level programming language",
                  "A database",
                  "An operating system"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Which keyword is used to define a function in Python?",
            "options": [
                  "func",
                  "define",
                  "def",
                  "function"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "How do you print \"Hello World\" in Python?",
            "options": [
                  "echo \"Hello World\"",
                  "print(\"Hello World\")",
                  "console.log(\"Hello World\")",
                  "System.out.println(\"Hello World\")"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Which symbol is used for single-line comments in Python?",
            "options": [
                  "//",
                  "/*",
                  "#",
                  "--"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "What data type is the result of: 5 / 2?",
            "options": [
                  "int",
                  "float",
                  "str",
                  "bool"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Which of the following is a mutable data type?",
            "options": [
                  "tuple",
                  "string",
                  "list",
                  "int"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "How do you create a list in Python?",
            "options": [
                  "[]",
                  "{}",
                  "()",
                  "<>"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "What is the output of: len(\"Python\")?",
            "options": [
                  "5",
                  "6",
                  "7",
                  "Error"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Which operator is used for exponentiation?",
            "options": [
                  "^",
                  "**",
                  "//",
                  "%"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "How do you check if a key exists in a dictionary?",
            "options": [
                  "key in dict",
                  "dict.has(key)",
                  "dict.exists(key)",
                  "key.in(dict)"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "What does the \"append\" method do on a list?",
            "options": [
                  "Removes an item",
                  "Adds an item to the end",
                  "Sorts the list",
                  "Reverses the list"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Which loop is used to iterate over a sequence?",
            "options": [
                  "while",
                  "for",
                  "do-while",
                  "repeat"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "What is the correct way to import a module named \"math\"?",
            "options": [
                  "include math",
                  "import math",
                  "require math",
                  "using math"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "How do you handle exceptions in Python?",
            "options": [
                  "try-catch",
                  "try-except",
                  "catch-throw",
                  "error-handle"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "What does the \"range(5)\" function generate?",
            "options": [
                  "0, 1, 2, 3, 4",
                  "1, 2, 3, 4, 5",
                  "0, 1, 2, 3, 4, 5",
                  "1, 2, 3, 4"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Which method is used to convert a string to lowercase?",
            "options": [
                  "lower()",
                  "toLowerCase()",
                  "downcase()",
                  "small()"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "What is a tuple?",
            "options": [
                  "A mutable sequence",
                  "An immutable sequence",
                  "A dictionary",
                  "A set"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "How do you open a file for reading?",
            "options": [
                  "open(\"file.txt\", \"r\")",
                  "open(\"file.txt\", \"w\")",
                  "read(\"file.txt\")",
                  "file(\"file.txt\")"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Which keyword is used to return a value from a function?",
            "options": [
                  "yield",
                  "return",
                  "output",
                  "send"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "What is the output of: 3 == \"3\"?",
            "options": [
                  "True",
                  "False",
                  "Error",
                  "None"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "How do you create a dictionary?",
            "options": [
                  "[]",
                  "{}",
                  "()",
                  "<>"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Which function is used to get user input?",
            "options": [
                  "scan()",
                  "read()",
                  "input()",
                  "get()"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "What does the \"break\" statement do?",
            "options": [
                  "Skips the current iteration",
                  "Exits the loop entirely",
                  "Pauses the program",
                  "Throws an error"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "How do you define a class in Python?",
            "options": [
                  "class MyClass:",
                  "def MyClass:",
                  "create class MyClass:",
                  "new class MyClass:"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "What is the purpose of the \"__init__\" method?",
            "options": [
                  "To initialize a class instance",
                  "To destroy an object",
                  "To print output",
                  "To import modules"
            ],
            "correctAnswerIndex": 0
      }
] }
  },
  {
    id: 'tech4', title: 'Internet Basics & Online Safety', category: 'Technology',
    description: 'Learn how to browse the web safely, use search engines, and protect your personal information online.',
    thumbnailUrl: 'https://loremflickr.com/640/360/internet,security?lock=131',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Browsing Safely', videoUrl: 'https://www.youtube.com/embed/2MCmnr2L50o', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Internet Basics & Online Safety\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Technology, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Internet Basics & Online Safety?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Internet Basics & Online Safety: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'tech5', title: 'Digital Payment & Banking Basics', category: 'Technology',
    description: 'Understand how to use UPI, mobile banking apps, and digital wallets securely for everyday transactions.',
    thumbnailUrl: 'https://loremflickr.com/640/360/mobile,payment?lock=132',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Using UPI Safely', videoUrl: 'https://www.youtube.com/embed/2MCmnr2L50o', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Digital Payment & Banking Basics\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Technology, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Digital Payment & Banking Basics?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Digital Payment & Banking Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'tech6', title: 'Creating Presentations with MS PowerPoint', category: 'Technology',
    description: 'Learn how to design engaging slides and deliver effective presentations using Microsoft PowerPoint.',
    thumbnailUrl: 'https://loremflickr.com/640/360/presentation,screen?lock=133',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Designing Your First Slide', videoUrl: 'https://www.youtube.com/embed/2MCmnr2L50o', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Creating Presentations with MS PowerPoint\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Technology, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Creating Presentations with MS PowerPoint?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Creating Presentations with MS PowerPoint: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'tech7', title: 'Advanced MS Excel for Small Businesses', category: 'Technology',
    description: 'Take your Excel skills to the next level with formulas, pivot tables, and data analysis for business.',
    thumbnailUrl: 'https://loremflickr.com/640/360/excel,business?lock=134',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Introduction to Formulas', videoUrl: 'https://www.youtube.com/embed/HxjwTXlKpzU', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Advanced MS Excel for Small Businesses\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Technology, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Advanced MS Excel for Small Businesses?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Advanced MS Excel for Small Businesses: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'tech8', title: 'Web Development Basics (HTML & CSS)', category: 'Technology',
    description: 'Learn the building blocks of the web. Create your first webpage using HTML and style it with CSS.',
    thumbnailUrl: 'https://loremflickr.com/640/360/web,code?lock=159',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'HTML Structure', videoUrl: 'https://www.youtube.com/embed/mU6anWqZJcc', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Web Development Basics (HTML & CSS)\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Technology, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Web Development Basics (HTML & CSS)?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Web Development Basics (HTML & CSS): Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'tech9', title: 'Graphic Design Basics using Canva', category: 'Technology',
    description: 'Create stunning posters, social media posts, and flyers easily using the Canva design tool.',
    thumbnailUrl: 'https://loremflickr.com/640/360/design,computer?lock=135',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Designing a Poster', videoUrl: 'https://www.youtube.com/embed/un5I9vMBFls', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Graphic Design Basics using Canva\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Technology, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Graphic Design Basics using Canva?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Graphic Design Basics using Canva: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'tech10', title: 'Smartphone Troubleshooting & Maintenance', category: 'Technology',
    description: 'Learn how to fix common smartphone issues, manage storage, and keep your device running smoothly.',
    thumbnailUrl: 'https://loremflickr.com/640/360/smartphone,repair?lock=136',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Clearing Cache and Storage', videoUrl: 'https://www.youtube.com/embed/Vl0H-qTclOg', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Smartphone Troubleshooting & Maintenance\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Technology, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Smartphone Troubleshooting & Maintenance?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Smartphone Troubleshooting & Maintenance: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Technology",
                  "Concept B related to Technology",
                  "Concept C related to Technology",
                  "Concept D related to Technology"
            ],
            "correctAnswerIndex": 1
      }
] }
  },

  // --- BUSINESS (10) ---
  {
    id: 'bus1', title: 'Marketing Tribal Handicrafts', category: 'Business',
    description: 'Learn how to effectively market and sell your handmade products to a wider audience.',
    thumbnailUrl: 'https://loremflickr.com/640/360/market,handicraft?lock=137',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Identifying Your Target Market', videoUrl: 'https://www.youtube.com/embed/rwbho0CgEAE', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Marketing Tribal Handicrafts\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Business, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Marketing Tribal Handicrafts?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Marketing Tribal Handicrafts: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'bus2', title: 'Pricing Your Products', category: 'Business',
    description: 'Understand how to calculate costs and set a fair and profitable price for your goods.',
    thumbnailUrl: 'https://loremflickr.com/640/360/money,business?lock=138',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Calculating Material and Labor Costs', videoUrl: 'https://www.youtube.com/embed/EngW7tCbLHY', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Pricing Your Products\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Business, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Pricing Your Products?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Pricing Your Products: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'bus3', title: 'Basic Accounting for Artisans', category: 'Business',
    description: 'Keep track of your income, expenses, and profits using simple accounting methods.',
    thumbnailUrl: 'https://loremflickr.com/640/360/accounting,calculator?lock=139',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Maintaining a Ledger', videoUrl: 'https://www.youtube.com/embed/un5I9vMBFls', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Basic Accounting for Artisans\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Business, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Basic Accounting for Artisans?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Basic Accounting for Artisans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'bus4', title: 'Starting a Cooperative', category: 'Business',
    description: 'Learn the benefits and steps to form a cooperative society with fellow villagers.',
    thumbnailUrl: 'https://loremflickr.com/640/360/team,business?lock=140',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Power of Collective Bargaining', videoUrl: 'https://www.youtube.com/embed/rwbho0CgEAE', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Starting a Cooperative\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Business, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Starting a Cooperative?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Starting a Cooperative: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'bus5', title: 'E-commerce for Rural Business', category: 'Business',
    description: 'Step-by-step guide to listing and selling your products online.',
    thumbnailUrl: 'https://loremflickr.com/640/360/ecommerce,laptop?lock=141',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Setting up an Online Store', videoUrl: 'https://www.youtube.com/embed/EngW7tCbLHY', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"E-commerce for Rural Business\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Business, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with E-commerce for Rural Business?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding E-commerce for Rural Business: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'bus6', title: 'Negotiation Skills', category: 'Business',
    description: 'Improve your communication skills to negotiate better prices with buyers and suppliers.',
    thumbnailUrl: 'https://loremflickr.com/640/360/handshake,business?lock=142',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Win-Win Negotiation', videoUrl: 'https://www.youtube.com/embed/un5I9vMBFls', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Negotiation Skills\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Business, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Negotiation Skills?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Negotiation Skills: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'bus7', title: 'Packaging and Branding', category: 'Business',
    description: 'Learn how attractive packaging and a strong brand name can increase your sales.',
    thumbnailUrl: 'https://loremflickr.com/640/360/packaging,box?lock=143',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Importance of Good Packaging', videoUrl: 'https://www.youtube.com/embed/rwbho0CgEAE', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Packaging and Branding\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Business, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Packaging and Branding?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Packaging and Branding: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'bus8', title: 'Managing Inventory', category: 'Business',
    description: 'Keep track of your raw materials and finished goods to avoid shortages or overstocking.',
    thumbnailUrl: 'https://loremflickr.com/640/360/inventory,warehouse?lock=144',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Stock Keeping Units (SKUs)', videoUrl: 'https://www.youtube.com/embed/EngW7tCbLHY', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Managing Inventory\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Business, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Managing Inventory?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Managing Inventory: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'bus9', title: 'Accessing Government Loans', category: 'Business',
    description: 'Understand the various government schemes and loans available for rural entrepreneurs.',
    thumbnailUrl: 'https://loremflickr.com/640/360/bank,document?lock=145',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Applying for Mudra Loan', videoUrl: 'https://www.youtube.com/embed/un5I9vMBFls', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Accessing Government Loans\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Business, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Accessing Government Loans?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Accessing Government Loans: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'bus10', title: 'Customer Service Basics', category: 'Business',
    description: 'Learn how to treat customers well to build loyalty and get repeat business.',
    thumbnailUrl: 'https://loremflickr.com/640/360/customer,service?lock=146',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Handling Complaints Gracefully', videoUrl: 'https://www.youtube.com/embed/rwbho0CgEAE', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Customer Service Basics\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Business, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Customer Service Basics?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Customer Service Basics: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Business",
                  "Concept B related to Business",
                  "Concept C related to Business",
                  "Concept D related to Business"
            ],
            "correctAnswerIndex": 1
      }
] }
  },

  // --- HEALTH (10) ---
  {
    id: 'hlt1', title: 'First Aid in the Forest', category: 'Health',
    description: 'Essential first aid skills for treating minor injuries, cuts, and sprains in remote areas.',
    thumbnailUrl: 'https://loremflickr.com/640/360/firstaid,forest?lock=147',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Cleaning and Bandaging Wounds', videoUrl: 'https://www.youtube.com/embed/ea1ndCWZEDo', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"First Aid in the Forest\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Health, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with First Aid in the Forest?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding First Aid in the Forest: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'hlt2', title: 'Maternal Health and Nutrition', category: 'Health',
    description: 'Important dietary and health guidelines for pregnant women and new mothers.',
    thumbnailUrl: 'https://loremflickr.com/640/360/mother,health?lock=148',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Iron-Rich Foods', videoUrl: 'https://www.youtube.com/embed/3QIfkeA6HBY', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Maternal Health and Nutrition\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Health, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Maternal Health and Nutrition?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Maternal Health and Nutrition: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'hlt3', title: 'Identifying Medicinal Plants', category: 'Health',
    description: 'Learn to identify and use common medicinal plants found in the Eastern Ghats.',
    thumbnailUrl: 'https://loremflickr.com/640/360/plant,medicine?lock=149',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Neem and Tulsi Benefits', videoUrl: 'https://www.youtube.com/embed/LXb3EKWsInQ', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Identifying Medicinal Plants\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Health, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Identifying Medicinal Plants?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Identifying Medicinal Plants: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'hlt4', title: 'Clean Water and Hygiene', category: 'Health',
    description: 'Methods for purifying drinking water and maintaining personal and community hygiene.',
    thumbnailUrl: 'https://loremflickr.com/640/360/water,hygiene?lock=150',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'Boiling and Filtering Water', videoUrl: 'https://www.youtube.com/embed/ea1ndCWZEDo', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Clean Water and Hygiene\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Health, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Clean Water and Hygiene?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Clean Water and Hygiene: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'hlt5', title: 'Child Immunization Awareness', category: 'Health',
    description: 'Understand the importance of vaccines in protecting children from deadly diseases.',
    thumbnailUrl: 'https://loremflickr.com/640/360/vaccine,child?lock=151',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam',
    modules: [{ id: 'm1', title: 'The Vaccination Schedule', videoUrl: 'https://www.youtube.com/embed/3QIfkeA6HBY', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Child Immunization Awareness\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Health, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Child Immunization Awareness?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Child Immunization Awareness: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'hlt6', title: 'Managing Common Fevers', category: 'Health',
    description: 'Learn how to identify symptoms of Malaria, Dengue, and Typhoid, and when to seek a doctor.',
    thumbnailUrl: 'https://loremflickr.com/640/360/fever,health?lock=152',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Preventing Mosquito Bites', videoUrl: 'https://www.youtube.com/embed/LXb3EKWsInQ', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Managing Common Fevers\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Health, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Managing Common Fevers?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Managing Common Fevers: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'hlt7', title: 'Traditional Herbal Remedies', category: 'Health',
    description: 'A deep dive into preparing decoctions and pastes from local herbs for minor ailments.',
    thumbnailUrl: 'https://loremflickr.com/640/360/herbal,medicine?lock=153',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Making a Turmeric Paste', videoUrl: 'https://www.youtube.com/embed/ea1ndCWZEDo', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Traditional Herbal Remedies\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Health, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Traditional Herbal Remedies?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Traditional Herbal Remedies: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'hlt8', title: 'Mental Health in Communities', category: 'Health',
    description: 'Understanding stress, anxiety, and the importance of community support for mental well-being.',
    thumbnailUrl: 'https://loremflickr.com/640/360/mentalhealth,community?lock=154',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Talking About Feelings', videoUrl: 'https://www.youtube.com/embed/3QIfkeA6HBY', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Mental Health in Communities\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Health, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Mental Health in Communities?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Mental Health in Communities: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'hlt9', title: 'Snakebite Prevention and Care', category: 'Health',
    description: 'Crucial information on avoiding snakebites and the correct first aid steps if bitten.',
    thumbnailUrl: 'https://loremflickr.com/640/360/snake,forest?lock=155',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Do\'s and Don\'ts of Snakebites', videoUrl: 'https://www.youtube.com/embed/LXb3EKWsInQ', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Snakebite Prevention and Care\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Health, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Snakebite Prevention and Care?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Snakebite Prevention and Care: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      }
] }
  },
  {
    id: 'hlt10', title: 'Healthy Cooking Practices', category: 'Health',
    description: 'Learn how to cook food in a way that preserves nutrients and prevents foodborne illnesses.',
    thumbnailUrl: 'https://loremflickr.com/640/360/cooking,healthy?lock=156',
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Patha Rega',
    modules: [{ id: 'm1', title: 'Washing Vegetables Properly', videoUrl: 'https://www.youtube.com/embed/ea1ndCWZEDo', duration: '1:30:00' }],
    quiz: { questions: [
      {
            "text": "What is the primary focus of the course \"Healthy Cooking Practices\"?",
            "options": [
                  "Understanding the basics",
                  "Advanced techniques",
                  "Historical context",
                  "Practical application"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "In the context of Health, why is this topic important?",
            "options": [
                  "Cultural preservation",
                  "Economic growth",
                  "Skill development",
                  "All of the above"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Which tool or method is most commonly associated with Healthy Cooking Practices?",
            "options": [
                  "Traditional methods",
                  "Modern technology",
                  "Hybrid approach",
                  "None of the above"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 4 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 5 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 6 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 7 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 8 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 9 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 10 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 11 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 12 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 13 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 14 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 15 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 16 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 17 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 18 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 19 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 20 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 21 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      },
      {
            "text": "Question 22 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 2
      },
      {
            "text": "Question 23 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 3
      },
      {
            "text": "Question 24 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 0
      },
      {
            "text": "Question 25 regarding Healthy Cooking Practices: Which of the following is a key concept?",
            "options": [
                  "Concept A related to Health",
                  "Concept B related to Health",
                  "Concept C related to Health",
                  "Concept D related to Health"
            ],
            "correctAnswerIndex": 1
      }
] }
  }
];
