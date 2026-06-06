// ═══════════════════════════════════════════════
//  ZODIAC SIGNS DATA
// ═══════════════════════════════════════════════
const zodiacSigns = [
    {
        name: "Capricorn", icon: "♑", dates: "Dec 22 - Jan 19",
        element: "Earth", planet: "Saturn", lucky: "4, 8, 13",
        stone: "Garnet",
        desc: "Capricorns are disciplined, responsible, and ambitious. They are natural leaders who work hard to achieve their goals.",
        traits: ["Ambitious", "Disciplined", "Patient", "Responsible", "Practical"]
    },
    {
        name: "Aquarius", icon: "♒", dates: "Jan 20 - Feb 18",
        element: "Air", planet: "Uranus", lucky: "4, 7, 11",
        stone: "Amethyst",
        desc: "Aquarians are innovative, independent, and humanitarian. They love freedom and are often ahead of their time.",
        traits: ["Independent", "Innovative", "Humanitarian", "Intellectual", "Unique"]
    },
    {
        name: "Pisces", icon: "♓", dates: "Feb 19 - Mar 20",
        element: "Water", planet: "Neptune", lucky: "3, 9, 12",
        stone: "Aquamarine",
        desc: "Pisces are compassionate, artistic, and intuitive. They are dreamers who feel emotions deeply.",
        traits: ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise"]
    },
    {
        name: "Aries", icon: "♈", dates: "Mar 21 - Apr 19",
        element: "Fire", planet: "Mars", lucky: "1, 8, 17",
        stone: "Diamond",
        desc: "Aries are courageous, energetic, and enthusiastic leaders. They love challenges and are always ready to take action.",
        traits: ["Courageous", "Energetic", "Confident", "Enthusiastic", "Competitive"]
    },
    {
        name: "Taurus", icon: "♉", dates: "Apr 20 - May 20",
        element: "Earth", planet: "Venus", lucky: "2, 6, 9",
        stone: "Emerald",
        desc: "Taurus are reliable, patient, and practical. They love comfort, beauty, and the finer things in life.",
        traits: ["Reliable", "Patient", "Practical", "Devoted", "Stubborn"]
    },
    {
        name: "Gemini", icon: "♊", dates: "May 21 - Jun 20",
        element: "Air", planet: "Mercury", lucky: "5, 7, 14",
        stone: "Pearl",
        desc: "Geminis are curious, adaptable, and communicative. They are social butterflies who love learning new things.",
        traits: ["Curious", "Adaptable", "Witty", "Communicative", "Versatile"]
    },
    {
        name: "Cancer", icon: "♋", dates: "Jun 21 - Jul 22",
        element: "Water", planet: "Moon", lucky: "2, 7, 11",
        stone: "Ruby",
        desc: "Cancers are intuitive, emotional, and nurturing. They are deeply connected to home and family.",
        traits: ["Intuitive", "Emotional", "Nurturing", "Loyal", "Protective"]
    },
    {
        name: "Leo", icon: "♌", dates: "Jul 23 - Aug 22",
        element: "Fire", planet: "Sun", lucky: "1, 3, 10",
        stone: "Peridot",
        desc: "Leos are confident, creative, and charismatic natural leaders. They love the spotlight and inspiring others.",
        traits: ["Confident", "Creative", "Generous", "Charismatic", "Dramatic"]
    },
    {
        name: "Virgo", icon: "♍", dates: "Aug 23 - Sep 22",
        element: "Earth", planet: "Mercury", lucky: "6, 12, 27",
        stone: "Sapphire",
        desc: "Virgos are analytical, meticulous, and hardworking. They have a sharp eye for detail and love perfection.",
        traits: ["Analytical", "Hardworking", "Practical", "Loyal", "Perfectionist"]
    },
    {
        name: "Libra", icon: "♎", dates: "Sep 23 - Oct 22",
        element: "Air", planet: "Venus", lucky: "6, 15, 24",
        stone: "Opal",
        desc: "Libras are diplomatic, fair-minded, and social. They seek balance and harmony in all aspects of life.",
        traits: ["Diplomatic", "Fair", "Social", "Charming", "Idealistic"]
    },
    {
        name: "Scorpio", icon: "♏", dates: "Oct 23 - Nov 21",
        element: "Water", planet: "Pluto", lucky: "8, 11, 18",
        stone: "Topaz",
        desc: "Scorpios are passionate, determined, and resourceful. They are intense individuals who value loyalty above all.",
        traits: ["Passionate", "Determined", "Resourceful", "Brave", "Intense"]
    },
    {
        name: "Sagittarius", icon: "♐", dates: "Nov 22 - Dec 21",
        element: "Fire", planet: "Jupiter", lucky: "3, 7, 9",
        stone: "Turquoise",
        desc: "Sagittarians are optimistic, adventurous, and philosophical. They love freedom and exploring new ideas.",
        traits: ["Optimistic", "Adventurous", "Philosophical", "Honest", "Generous"]
    }
];

// ═══════════════════════════════════════════════
//  HISTORICAL EVENTS (366 DAYS)
// ═══════════════════════════════════════════════
const historicalEvents = {
    "1-1":"New Year's Day — First day of the Gregorian calendar, celebrated worldwide since 45 BC!",
    "1-2":"Isaac Asimov's Birthday (1920) — Legendary science fiction author who wrote 'I, Robot'.",
    "1-3":"Alaska became 49th US State (1959) — America's largest state joined the union.",
    "1-4":"Louis Braille's Birthday (1809) — Inventor of the Braille reading system for the blind.",
    "1-5":"George Washington Carver died (1943) — Pioneer in agricultural science and peanut research.",
    "1-6":"Epiphany / Three Kings Day — Christian feast day celebrating the visit of the Magi.",
    "1-7":"First US Presidential Election (1789) — George Washington was elected as the first US President.",
    "1-8":"Elvis Presley's Birthday (1935) — The King of Rock and Roll was born in Mississippi.",
    "1-9":"iPhone Announced (2007) — Steve Jobs unveiled the first iPhone at Macworld.",
    "1-10":"League of Nations Founded (1920) — The first worldwide intergovernmental organization.",
    "1-11":"Amelia Earhart flew across Pacific (1935) — First person to fly solo from Hawaii to California.",
    "1-12":"National Youth Day (India) — Birthday of Swami Vivekananda, celebrated since 1985.",
    "1-13":"Emancipation of Serfs in Russia (1861) — Tsar Alexander II freed millions of serfs.",
    "1-14":"Makar Sankranti / Pongal — Indian harvest festival celebrating the Sun God.",
    "1-15":"Martin Luther King Jr. Birthday (1929) — Civil rights leader who changed America forever.",
    "1-16":"Prohibition began in USA (1920) — 18th Amendment banned alcohol in the United States.",
    "1-17":"Benjamin Franklin's Birthday (1706) — Founding Father, inventor, and diplomat.",
    "1-18":"Captain Cook discovered Hawaii (1778) — First European to reach the Hawaiian Islands.",
    "1-19":"Edgar Allan Poe's Birthday (1809) — Master of mystery and macabre literature.",
    "1-20":"US Presidential Inauguration Day — New US presidents are sworn in on this day.",
    "1-21":"Concorde's First Flight (1976) — Supersonic passenger jet made aviation history.",
    "1-22":"Queen Victoria died (1901) — Longest-reigning British monarch of the 19th century.",
    "1-23":"Netaji Subhas Chandra Bose Birthday (1897) — Indian freedom fighter and INA founder.",
    "1-24":"Gold Rush began (1848) — Gold discovered at Sutter's Mill, California.",
    "1-25":"National Voters' Day (India) — Celebrating democracy and voting rights since 2011.",
    "1-26":"Republic Day (India) — India adopted its Constitution and became a republic in 1950.",
    "1-27":"Holocaust Remembrance Day — Liberation of Auschwitz concentration camp in 1945.",
    "1-28":"Space Shuttle Challenger Disaster (1986) — Seven astronauts lost in tragic explosion.",
    "1-29":"Kansas became 34th US State (1861) — Free state admitted before the Civil War.",
    "1-30":"Mahatma Gandhi Assassinated (1948) — Father of Indian independence was shot in New Delhi.",
    "1-31":"First Monkey in Space (1961) — Ham the chimpanzee traveled to space and returned safely.",
    "2-1":"National Freedom Day (USA) — Abraham Lincoln signed the 13th Amendment (1865).",
    "2-2":"Groundhog Day — If the groundhog sees its shadow, six more weeks of winter!",
    "2-3":"Gutenberg Bible Published (1455) — First major book printed using movable type.",
    "2-4":"Facebook Founded (2004) — Mark Zuckerberg launched Facebook from his Harvard dorm room.",
    "2-5":"Constitution of Mexico (1917) — Mexican constitution signed during the revolution.",
    "2-6":"Babe Ruth's Birthday (1895) — Greatest baseball player in history was born.",
    "2-7":"Beatles arrived in America (1964) — British Invasion began, changing music forever.",
    "2-8":"Boy Scouts Founded (1910) — Robert Baden-Powell founded the Boy Scouts of America.",
    "2-9":"World Pizza Day — Celebrating the world's most popular food!",
    "2-10":"First fire extinguisher patented (1863) — Alanson Crane changed fire safety forever.",
    "2-11":"Nelson Mandela Released (1990) — After 27 years in prison, Mandela walked free.",
    "2-12":"Abraham Lincoln's Birthday (1809) — 16th US President who abolished slavery.",
    "2-13":"World Radio Day — UNESCO celebrates the power of radio communication.",
    "2-14":"Valentine's Day — Day of love and affection celebrated worldwide since the 5th century.",
    "2-15":"Galileo Galilei's Birthday (1564) — Father of modern observational astronomy.",
    "2-16":"Kyoto Protocol came into force (2005) — International treaty to reduce greenhouse gases.",
    "2-17":"Newsweek first published (1933) — Famous American weekly news magazine launched.",
    "2-18":"Pluto discovered (1930) — Clyde Tombaugh discovered the dwarf planet.",
    "2-19":"Copernicus' Birthday (1473) — Proposed the heliocentric model of the solar system.",
    "2-20":"John Glenn orbited Earth (1962) — First American to orbit the Earth.",
    "2-21":"International Mother Language Day — UNESCO promotes linguistic and cultural diversity.",
    "2-22":"George Washington's Birthday (1732) — First US President, Father of the Nation.",
    "2-23":"Gutenberg's Birthday (1400) — Inventor of the printing press that changed the world.",
    "2-24":"Steve Jobs' Birthday (1955) — Apple co-founder who revolutionized technology.",
    "2-25":"World Sword Swallowers Day — Celebrating the ancient art of sword swallowing!",
    "2-26":"Grand Canyon National Park (1919) — One of the world's natural wonders became a park.",
    "2-27":"Dominican Republic Independence Day — Freedom from Haiti in 1844.",
    "2-28":"DNA Structure Discovered (1953) — Watson and Crick discovered the double helix.",
    "2-29":"Leap Day — Occurs only once every 4 years! Rarest birthday of all! 🎉",
    "3-1":"World Civil Defence Day — Raising awareness about civil protection.",
    "3-2":"Dr. Seuss Birthday (1904) — Beloved children's book author: 'Cat in the Hat'.",
    "3-3":"World Wildlife Day — UN celebrates the beauty and diversity of wild animals.",
    "3-4":"Constitution Day (USA, 1789) — US Constitution went into effect.",
    "3-5":"Winston Churchill's Iron Curtain Speech (1946) — Marked the start of the Cold War.",
    "3-6":"Michelangelo's Birthday (1475) — Renaissance genius who painted the Sistine Chapel.",
    "3-7":"Alexander Graham Bell patented telephone (1876) — Communication changed forever!",
    "3-8":"International Women's Day — Celebrating women's achievements globally since 1911.",
    "3-9":"Barbie's Birthday (1959) — The iconic Barbie doll debuted at the New York Toy Fair.",
    "3-10":"Mario Day — MAR10 (March 10) celebrates Nintendo's famous plumber character!",
    "3-11":"World Plumbing Day — Recognizing the importance of plumbing for public health.",
    "3-12":"World Day Against Cyber Censorship — Promoting digital freedom worldwide.",
    "3-13":"Uranus discovered (1781) — William Herschel discovered the seventh planet.",
    "3-14":"Pi Day — Celebration of mathematical constant π (3.14159...) Albert Einstein's Birthday!",
    "3-15":"Ides of March — Julius Caesar was assassinated in 44 BC.",
    "3-16":"Freedom of Information Day — Promoting open government and transparency.",
    "3-17":"St. Patrick's Day — Celebrating Irish culture with shamrocks and green!",
    "3-18":"World Sleep Day — Raising awareness about the importance of healthy sleep.",
    "3-19":"World Social Work Day — Honoring social workers who help communities.",
    "3-20":"International Day of Happiness — UN day celebrating joy and well-being.",
    "3-21":"World Poetry Day — UNESCO celebrates the beauty of poetry worldwide.",
    "3-22":"World Water Day — Raising awareness about clean water access globally.",
    "3-23":"World Meteorological Day — Celebrating weather science and climate research.",
    "3-24":"World Tuberculosis Day — Raising awareness about TB prevention and treatment.",
    "3-25":"International Waffle Day — Celebrating the beloved breakfast treat worldwide!",
    "3-26":"Purple Day (Epilepsy Awareness) — Raising awareness about epilepsy worldwide.",
    "3-27":"World Theatre Day — Celebrating performing arts and theatre globally.",
    "3-28":"Three Mile Island Accident (1979) — Worst nuclear accident in US history.",
    "3-29":"Vietnam Veterans Day — Honoring veterans who served in the Vietnam War.",
    "3-30":"Van Gogh's Birthday (1853) — Legendary post-impressionist painter born in Netherlands.",
    "3-31":"Eiffel Tower Completed (1889) — Iconic Parisian landmark opened to the public.",
    "4-1":"April Fools' Day — A day of jokes, pranks, and hoaxes celebrated since the 16th century!",
    "4-2":"World Autism Awareness Day — UN raises awareness about autism spectrum disorder.",
    "4-3":"Jane Goodall's Birthday (1934) — World's leading primatologist and conservationist.",
    "4-4":"Martin Luther King Jr. Assassinated (1968) — Civil rights leader shot in Memphis.",
    "4-5":"First Modern Olympic Games (1896) — Olympic Games revived in Athens, Greece.",
    "4-6":"North Pole reached (1909) — Robert Peary claimed to reach the North Pole.",
    "4-7":"World Health Day — Global health awareness day organized by WHO since 1950.",
    "4-8":"Buddha's Birthday — Celebrated across Asia honoring Siddhartha Gautama's birth.",
    "4-9":"Civil Rights Act of 1866 — First US law to define citizenship and civil rights.",
    "4-10":"Titanic set sail (1912) — The 'unsinkable' ship departed Southampton, England.",
    "4-11":"Jackie Robinson broke baseball color barrier (1947) — First African-American in MLB.",
    "4-12":"Yuri Gagarin went to Space (1961) — First human in space!",
    "4-13":"Thomas Jefferson's Birthday (1743) — Third US President and Declaration author.",
    "4-14":"Ambedkar Jayanti (India) — Birthday of Dr. B.R. Ambedkar, architect of Indian Constitution.",
    "4-15":"Titanic sank (1912) — Over 1,500 people perished in the tragic maritime disaster.",
    "4-16":"Charlie Chaplin's Birthday (1889) — Legendary silent film comedian and filmmaker.",
    "4-17":"World Hemophilia Day — Raising awareness about bleeding disorders.",
    "4-18":"World Heritage Day — Celebrating cultural heritage sites worldwide.",
    "4-19":"American Revolution began (1775) — First shots fired at Lexington and Concord.",
    "4-20":"UN Chinese Language Day — Celebrating Chinese language and culture.",
    "4-21":"Rome Founded (753 BC) — Legend says Romulus founded the city of Rome.",
    "4-22":"Earth Day — Worldwide environmental awareness day celebrated since 1970.",
    "4-23":"World Book Day — UNESCO celebrates books, reading, and Shakespeare's Birthday (1564)!",
    "4-24":"Hubble Space Telescope launched (1990) — Revolutionized our understanding of space.",
    "4-25":"World Malaria Day — Raising awareness about malaria prevention globally.",
    "4-26":"Chernobyl Nuclear Disaster (1986) — Worst nuclear accident in world history.",
    "4-27":"Freedom Day (South Africa) — First democratic elections in South Africa (1994).",
    "4-28":"Workers' Memorial Day — Remembering those who died from work-related injuries.",
    "4-29":"International Dance Day — Celebrating dance as an art form worldwide.",
    "4-30":"George Washington inaugurated (1789) — First US President took the oath of office.",
    "5-1":"International Labour Day — Workers' rights and achievements celebrated worldwide.",
    "5-2":"Leonardo da Vinci died (1519) — Renaissance genius: painter, inventor, scientist.",
    "5-3":"World Press Freedom Day — UN promotes freedom of the press and media.",
    "5-4":"Star Wars Day — 'May the 4th be with you!' Celebrating George Lucas's galaxy.",
    "5-5":"Cinco de Mayo — Mexico celebrates victory over France at Battle of Puebla (1862).",
    "5-6":"Sigmund Freud's Birthday (1856) — Father of psychoanalysis was born in Austria.",
    "5-7":"Rabindranath Tagore's Birthday (1861) — Nobel Prize winning poet from India.",
    "5-8":"World Red Cross Day — Honoring humanitarian work of Red Cross.",
    "5-9":"Europe Day — Celebrating peace and unity in Europe (Schuman Declaration 1950).",
    "5-10":"First Transcontinental Railroad (1869) — Golden Spike connected East and West USA.",
    "5-11":"Salvador Dali's Birthday (1904) — Surrealist painter known for 'The Persistence of Memory'.",
    "5-12":"International Nurses Day — Florence Nightingale's Birthday.",
    "5-13":"Stevie Wonder's Birthday (1950) — Musical genius and singer.",
    "5-14":"Facebook became a company (2003) — Social media giant officially incorporated.",
    "5-15":"International Family Day — UN day celebrating the importance of families.",
    "5-16":"First Academy Awards (1929) — Hollywood's biggest night happened in Los Angeles.",
    "5-17":"World Telecommunication Day — Celebrating global communication technology.",
    "5-18":"International Museum Day — Promoting museums and cultural exchange.",
    "5-19":"Malcolm X's Birthday (1925) — Civil rights activist and influential speaker.",
    "5-20":"World Bee Day — Celebrating bees and their importance to the ecosystem.",
    "5-21":"World Day for Cultural Diversity — UNESCO promotes diversity and dialogue.",
    "5-22":"International Biodiversity Day — Raising awareness about Earth's biodiversity.",
    "5-23":"World Turtle Day — Celebrating and protecting turtles and tortoises.",
    "5-24":"Queen Victoria's Birthday (1819) — Ruler of the British Empire for 63 years.",
    "5-25":"Africa Day — Celebrating African unity and the founding of the African Union.",
    "5-26":"Mount Everest first conquered (1953) — Edmund Hillary and Tenzing Norgay reached the summit!",
    "5-27":"Golden Gate Bridge opened (1937) — Iconic San Francisco bridge opened.",
    "5-28":"International Hamburger Day — Celebrating the world's favorite sandwich!",
    "5-29":"JFK Birthday (1917) — 35th US President John F. Kennedy was born.",
    "5-30":"Joan of Arc executed (1431) — French heroine burned at the stake at age 19.",
    "5-31":"World No Tobacco Day — WHO raises awareness about the dangers of smoking.",
    "6-1":"World Children's Day — Celebrating children's rights and welfare worldwide.",
    "6-2":"Coronation of Queen Elizabeth II (1953) — Longest-reigning British monarch crowned.",
    "6-3":"World Bicycle Day — UN promotes cycling for health and sustainability.",
    "6-4":"First hot air balloon flight (1783) — Montgolfier brothers made aviation history.",
    "6-5":"World Environment Day — UN day for environmental awareness since 1974.",
    "6-6":"D-Day (1944) — Allied forces invaded Normandy, turning the tide of World War II.",
    "6-7":"World Food Safety Day — Raising awareness about safe food practices.",
    "6-8":"World Oceans Day — Celebrating and protecting our planet's oceans.",
    "6-9":"Donald Duck's Birthday (1934) — Disney's famous duck first appeared on screen.",
    "6-10":"Ballpoint Pen patented (1943) — László Bíró changed how the world writes.",
    "6-11":"Jacques Cousteau's Birthday (1910) — Pioneer of marine conservation.",
    "6-12":"Anne Frank's Birthday (1929) — Author of the famous diary during the Holocaust.",
    "6-13":"Pioneer 10 left Solar System (1983) — First spacecraft to leave our solar system.",
    "6-14":"World Blood Donor Day — Thanking blood donors who save millions of lives.",
    "6-15":"Magna Carta signed (1215) — Foundation of modern democracy and human rights.",
    "6-16":"Valentina Tereshkova in Space (1963) — First woman in space!",
    "6-17":"World Day to Combat Desertification — Fighting drought and land degradation.",
    "6-18":"International Sushi Day — Celebrating Japan's most famous culinary gift!",
    "6-19":"Juneteenth — Emancipation Day celebrating the end of slavery in the United States.",
    "6-20":"World Refugee Day — Honoring refugees and their strength worldwide.",
    "6-21":"International Yoga Day — Yoga celebrated worldwide since UN declaration in 2015.",
    "6-22":"Galileo forced to recant (1633) — Galileo was made to deny Earth orbits the Sun.",
    "6-23":"International Olympic Day — Celebrating the founding of the modern Olympic movement.",
    "6-24":"First flying saucer reported (1947) — Kenneth Arnold's UFO sighting in Washington.",
    "6-25":"Michael Jackson died (2009) — The King of Pop passed away at age 50.",
    "6-26":"International Day Against Drug Abuse — UN fights illicit drugs and trafficking.",
    "6-27":"Helen Keller's Birthday (1880) — Deaf-blind author and activist.",
    "6-28":"World War I began (1914) — Assassination of Archduke Franz Ferdinand triggered WWI.",
    "6-29":"First iPhone went on sale (2007) — Apple's revolutionary smartphone hit stores.",
    "6-30":"Asteroid Day — Raising awareness about asteroid impacts and planetary defense.",
    "7-1":"Canada Day — Canada became a self-governing dominion in 1867.",
    "7-2":"Amelia Earhart disappeared (1937) — Legendary aviator vanished over the Pacific.",
    "7-3":"Dog Days of Summer begin — Named after Sirius, the 'Dog Star'.",
    "7-4":"US Independence Day — America declared freedom from Britain in 1776!",
    "7-5":"Dolly the Sheep born (1996) — First mammal cloned from an adult cell.",
    "7-6":"First successful rabies vaccine (1885) — Louis Pasteur saved a boy's life.",
    "7-7":"World Chocolate Day — Celebrating chocolate, introduced to Europe in 1550!",
    "7-8":"First Wall Street Journal published (1889) — Premier financial newspaper launched.",
    "7-9":"Argentina Independence Day — Argentina declared independence from Spain in 1816.",
    "7-10":"Nikola Tesla's Birthday (1856) — Inventor of AC electricity and wireless technology.",
    "7-11":"World Population Day — Awareness of global population issues since 1989.",
    "7-12":"Malala Yousafzai's Birthday (1997) — Youngest Nobel Prize laureate for education rights.",
    "7-13":"Live Aid Concert (1985) — Historic dual-venue charity concert for Ethiopian famine.",
    "7-14":"Bastille Day (France) — French Revolution began, celebrating liberty and equality.",
    "7-15":"World Youth Skills Day — UN promotes skills development for young people.",
    "7-16":"First atomic bomb tested (1945) — Trinity test in New Mexico changed warfare forever.",
    "7-17":"Disneyland opened (1955) — Walt Disney's 'Happiest Place on Earth' opened in California.",
    "7-18":"Nelson Mandela Day — Celebrating Mandela's life and legacy of peace.",
    "7-19":"First Women's Rights Convention (1848) — Seneca Falls Convention advanced gender equality.",
    "7-20":"Moon Landing (1969) — Neil Armstrong became the first human to walk on the Moon!",
    "7-21":"First supermarket opened (1930) — King Kullen opened in Jamaica, Queens, New York.",
    "7-22":"Pi Approximation Day — 22/7 is a common approximation of π!",
    "7-23":"World Sjogren's Day — Raising awareness about autoimmune diseases.",
    "7-24":"Amelia Earhart's Birthday (1897) — First woman to fly solo across the Atlantic.",
    "7-25":"World Drowning Prevention Day — UN raises awareness about water safety.",
    "7-26":"Kargil Vijay Diwas (India) — India's victory in the Kargil War (1999).",
    "7-27":"Korean War Armistice signed (1953) — End of fighting in the Korean War.",
    "7-28":"World Hepatitis Day — Raising awareness about hepatitis prevention.",
    "7-29":"NASA established (1958) — National Aeronautics and Space Administration was created.",
    "7-30":"International Friendship Day — Celebrating bonds of friendship worldwide.",
    "7-31":"Harry Potter's Birthday — The Boy Who Lived was born on this day (fictional)!",
    "8-1":"World Wide Web went public (1991) — Tim Berners-Lee changed the world forever.",
    "8-2":"Iraq invaded Kuwait (1990) — Triggered the Gulf War and international coalition.",
    "8-3":"Columbus set sail (1492) — Christopher Columbus departed Spain for the New World.",
    "8-4":"Barack Obama's Birthday (1961) — 44th US President, first African-American president.",
    "8-5":"Traffic Light invented (1914) — First electric traffic signal installed in Cleveland.",
    "8-6":"Hiroshima Peace Day — Atomic bomb dropped on Hiroshima, Japan in 1945.",
    "8-7":"Purple Heart established (1782) — US military decoration for wounded soldiers.",
    "8-8":"International Cat Day — Celebrating our beloved feline companions worldwide!",
    "8-9":"Nagasaki Atomic Bombing (1945) — Second atomic bomb ended World War II.",
    "8-10":"World Lion Day — Raising awareness about lion conservation.",
    "8-11":"World Steelpan Day — Celebrating Trinidad's national instrument.",
    "8-12":"International Youth Day — Celebrating young people's contributions worldwide.",
    "8-13":"International Left-Handers Day — Celebrating left-handed people!",
    "8-14":"Pakistan Independence Day — Pakistan gained freedom from Britain in 1947.",
    "8-15":"India Independence Day — India gained freedom from British rule in 1947!",
    "8-16":"Elvis Presley died (1977) — The King of Rock and Roll passed away at age 42.",
    "8-17":"Indonesian Independence Day — Indonesia declared independence from Netherlands (1945).",
    "8-18":"Genghis Khan died (1227) — Founder of the Mongol Empire, the largest in history.",
    "8-19":"World Humanitarian Day — Honoring aid workers who serve people in need.",
    "8-20":"Voyager 2 launched (1977) — NASA spacecraft explored multiple planets.",
    "8-21":"Mona Lisa stolen (1911) — Leonardo da Vinci's masterpiece was stolen from the Louvre!",
    "8-22":"International Day for Victims of Violence — Based on religion or belief.",
    "8-23":"First photo of Earth from Moon (1966) — Lunar Orbiter 1 captured iconic image.",
    "8-24":"Mount Vesuvius erupted (79 AD) — Buried the Roman cities of Pompeii and Herculaneum.",
    "8-25":"National Park Service created (1916) — Preserving America's natural treasures.",
    "8-26":"Women's Equality Day — 19th Amendment gave American women the right to vote (1920).",
    "8-27":"Mother Teresa's Birthday (1910) — Saint of Calcutta devoted to serving the poor.",
    "8-28":"MLK 'I Have a Dream' speech (1963) — Historic speech at the Lincoln Memorial.",
    "8-29":"International Day Against Nuclear Tests — UN promotes a nuclear-weapon-free world.",
    "8-30":"Mary Shelley's Birthday (1797) — Author of 'Frankenstein', first science fiction novel.",
    "8-31":"Princess Diana died (1997) — People's Princess killed in a Paris car accident.",
    "9-1":"World Letter Writing Day — Celebrating the art of handwritten letters.",
    "9-2":"VJ Day (1945) — Japan formally surrendered, ending World War II.",
    "9-3":"World Beard Day — Celebrating facial hair worldwide!",
    "9-4":"Google Founded (1998) — Larry Page and Sergey Brin started Google in a garage.",
    "9-5":"Teachers' Day (India) — Honoring Dr. Sarvepalli Radhakrishnan's birthday.",
    "9-6":"Read a Book Day — Encouraging everyone to pick up and enjoy a good book.",
    "9-7":"Google Chrome launched (2008) — World's most popular web browser was released.",
    "9-8":"International Literacy Day — UNESCO promotes literacy as a fundamental right.",
    "9-9":"World First Aid Day — Raising awareness about life-saving first aid skills.",
    "9-10":"World Suicide Prevention Day — Promoting awareness and prevention worldwide.",
    "9-11":"9/11 Attacks (2001) — Terrorist attacks on World Trade Center and Pentagon.",
    "9-12":"Space Rendezvous Day — Gemini 11 achieved highest Earth orbit (1966).",
    "9-13":"Roald Dahl's Birthday (1916) — Author of 'Charlie and the Chocolate Factory'.",
    "9-14":"Hindi Diwas (India) — Celebrating Hindi as the official language of India.",
    "9-15":"International Day of Democracy — UN celebrates democratic principles.",
    "9-16":"World Ozone Day — Celebrating the Montreal Protocol protecting the ozone layer.",
    "9-17":"US Constitution signed (1787) — Founding document of American democracy.",
    "9-18":"World Water Monitoring Day — Engaging citizens in monitoring water quality.",
    "9-19":"International Talk Like a Pirate Day — Arrr! Fun day of pirate speech!",
    "9-20":"World Pediatric Bone and Joint Day — Children's bone health awareness.",
    "9-21":"International Peace Day — UN day dedicated to world peace and ceasefire.",
    "9-22":"First day of Autumn — Autumnal equinox marks the beginning of fall.",
    "9-23":"International Sign Languages Day — Celebrating deaf culture and sign language.",
    "9-24":"World Heart Day — Raising awareness about cardiovascular disease prevention.",
    "9-25":"World Pharmacist Day — Honoring pharmacists and their role in healthcare.",
    "9-26":"World Contraception Day — Promoting family planning and reproductive health.",
    "9-27":"World Tourism Day — Celebrating travel, culture, and global tourism.",
    "9-28":"World Rabies Day — Raising awareness about rabies prevention.",
    "9-29":"World Heart Day Eve — Promoting heart-healthy lifestyles worldwide.",
    "9-30":"International Translation Day — Celebrating translators who connect the world.",
    "10-1":"International Coffee Day — Celebrating the world's favorite morning beverage!",
    "10-2":"Gandhi Jayanti — Birthday of Mahatma Gandhi, International Day of Non-Violence.",
    "10-3":"German Unity Day — East and West Germany reunified in 1990.",
    "10-4":"World Animal Day — Celebration of animals and their welfare since 1931.",
    "10-5":"World Teachers' Day — UNESCO celebrates teachers' contributions globally.",
    "10-6":"World Cerebral Palsy Day — Raising awareness about cerebral palsy.",
    "10-7":"World Smile Day — Celebrating smiles and acts of kindness worldwide.",
    "10-8":"World Octopus Day — Celebrating the amazing eight-armed sea creature!",
    "10-9":"World Post Day — Celebrating postal services connecting the world since 1874.",
    "10-10":"World Mental Health Day — Raising awareness about mental health globally.",
    "10-11":"International Day of the Girl Child — UN empowers girls worldwide.",
    "10-12":"Columbus Day — Christopher Columbus reached the Americas in 1492.",
    "10-13":"World Sight Day — Focusing attention on blindness and vision impairment.",
    "10-14":"World Standards Day — Celebrating standardization in technology and industry.",
    "10-15":"APJ Abdul Kalam's Birthday (1931) — Missile Man of India, People's President.",
    "10-16":"World Food Day — Awareness of world hunger, nutrition, and food security.",
    "10-17":"International Day for Eradication of Poverty — UN fights poverty globally.",
    "10-18":"Alaska Day — US purchased Alaska from Russia for $7.2 million (1867).",
    "10-19":"Lumiere Brothers' Birthday (1862) — Inventors of cinema and motion pictures.",
    "10-20":"World Statistics Day — Celebrating the importance of official statistics.",
    "10-21":"Back to the Future Day — Marty McFly traveled to October 21, 2015 in the movie!",
    "10-22":"International Stuttering Awareness Day — Supporting people who stutter.",
    "10-23":"Mole Day (Chemistry) — Celebrating Avogadro's number (6.02 × 10²³).",
    "10-24":"United Nations Day — UN was established on this day in 1945.",
    "10-25":"Pablo Picasso's Birthday (1881) — Legendary artist who co-founded Cubism.",
    "10-26":"National Pumpkin Day — Celebrating pumpkins before Halloween!",
    "10-27":"Navy Day (India) — Celebrating the Indian Navy's attack on Karachi in 1971.",
    "10-28":"Statue of Liberty dedicated (1886) — Gift from France to the United States.",
    "10-29":"Internet Day — ARPANET sent the first message in 1969, creating the internet!",
    "10-30":"War of the Worlds broadcast (1938) — Orson Welles caused mass panic with radio drama.",
    "10-31":"Halloween — Ancient Celtic festival of costumes, candy, and spooky celebrations!",
    "11-1":"World Vegan Day — Celebrating plant-based lifestyles worldwide.",
    "11-2":"Day of the Dead (Mexico) — Honoring deceased loved ones with celebrations.",
    "11-3":"First dog in space (1957) — Laika the dog orbited Earth aboard Sputnik 2.",
    "11-4":"King Tut's tomb discovered (1922) — Howard Carter found Tutankhamun's tomb.",
    "11-5":"Guy Fawkes Night (UK) — Fireworks celebrate the foiled Gunpowder Plot of 1605.",
    "11-6":"Abraham Lincoln elected President (1860) — 16th President won the election.",
    "11-7":"Marie Curie's Birthday (1867) — First woman to win Nobel Prize.",
    "11-8":"X-rays discovered (1895) — Wilhelm Röntgen discovered X-rays, revolutionizing medicine.",
    "11-9":"Fall of the Berlin Wall (1989) — Berlin Wall fell, ending Cold War division.",
    "11-10":"Sesame Street premiered (1969) — Beloved children's show started on PBS.",
    "11-11":"Veterans Day / Armistice Day — Honoring military veterans, WWI ended (1918).",
    "11-12":"World Pneumonia Day — Raising awareness about pneumonia prevention.",
    "11-13":"World Kindness Day — Celebrating acts of kindness around the world.",
    "11-14":"Children's Day (India) — Birthday of Jawaharlal Nehru, first PM of India.",
    "11-15":"World Philosophy Day — UNESCO promotes philosophical reflection.",
    "11-16":"International Day of Tolerance — UN promotes mutual understanding.",
    "11-17":"International Students' Day — Celebrating students' rights worldwide.",
    "11-18":"Mickey Mouse's Birthday (1928) — Disney's iconic character debuted.",
    "11-19":"International Men's Day — Celebrating men's health and positive role models.",
    "11-20":"Universal Children's Day — UN promotes children's welfare globally.",
    "11-21":"World Television Day — Celebrating TV's impact on society since 1996.",
    "11-22":"JFK Assassinated (1963) — President Kennedy shot in Dallas, Texas.",
    "11-23":"World Fibonacci Day — 11/23 (1, 1, 2, 3) celebrates the Fibonacci sequence!",
    "11-24":"Darwin published Origin of Species (1859) — Theory of evolution changed science.",
    "11-25":"International Day for Elimination of Violence Against Women — UN promotes safety.",
    "11-26":"Constitution Day (India) — Indian Constitution adopted in 1949.",
    "11-27":"Bruce Lee's Birthday (1940) — Legendary martial artist and actor.",
    "11-28":"World Compassion Day — Promoting empathy and compassion globally.",
    "11-29":"International Day of Solidarity with Palestinians — UN supports Palestinian rights.",
    "11-30":"Mark Twain's Birthday (1835) — Author of 'Tom Sawyer' and 'Huckleberry Finn'.",
    "12-1":"World AIDS Day — Global awareness of HIV/AIDS since 1988.",
    "12-2":"International Day for Abolition of Slavery — Fighting modern slavery.",
    "12-3":"International Day of Persons with Disabilities — Promoting inclusion and access.",
    "12-4":"Indian Navy Day — Celebrating the Indian Navy's role in the 1971 war.",
    "12-5":"World Soil Day — Raising awareness about healthy soil and land management.",
    "12-6":"Saint Nicholas Day — Celebrating the original Santa Claus tradition!",
    "12-7":"Pearl Harbor attacked (1941) — Japan attacked the US naval base, entering WWII.",
    "12-8":"John Lennon died (1980) — Beatles legend shot outside his New York apartment.",
    "12-9":"International Anti-Corruption Day — UN fights corruption worldwide.",
    "12-10":"Human Rights Day — UN Universal Declaration of Human Rights adopted (1948).",
    "12-11":"UNICEF established (1946) — United Nations Children's Fund was created.",
    "12-12":"Marconi's first radio signal (1901) — First transatlantic radio transmission!",
    "12-13":"World Violin Day — Celebrating the beautiful string instrument.",
    "12-14":"South Pole reached (1911) — Roald Amundsen's team was the first to reach it.",
    "12-15":"Bill of Rights ratified (1791) — First 10 amendments to the US Constitution.",
    "12-16":"Vijay Diwas (India) — India's victory in 1971 war, Bangladesh liberated.",
    "12-17":"Wright Brothers' first flight (1903) — First powered airplane flight at Kitty Hawk!",
    "12-18":"International Migrants Day — UN promotes the rights of migrants worldwide.",
    "12-19":"Goa Liberation Day (India) — Goa was freed from Portuguese rule in 1961.",
    "12-20":"Macau returned to China (1999) — End of Portuguese administration after 442 years.",
    "12-21":"Winter Solstice — Shortest day of the year in the Northern Hemisphere.",
    "12-22":"National Mathematics Day (India) — Birthday of Srinivasa Ramanujan (1887).",
    "12-23":"Transistor invented (1947) — Bell Labs invention that started the digital revolution.",
    "12-24":"Christmas Eve — Night before Christmas, celebrated with family worldwide.",
    "12-25":"Christmas Day — Birth of Jesus Christ, celebrated by billions worldwide!",
    "12-26":"Boxing Day — Gift-giving day celebrated in UK, Canada, Australia.",
    "12-27":"Louis Pasteur's Birthday (1822) — Father of microbiology and pasteurization.",
    "12-28":"World Cinema Day — Celebrating the magic of movies and filmmaking.",
    "12-29":"YMCA founded (1851) — Young Men's Christian Association started in London.",
    "12-30":"Rudyard Kipling's Birthday (1865) — Author of 'The Jungle Book' and Nobel laureate.",
    "12-31":"New Year's Eve — Last day of the year, celebrated with fireworks worldwide!"
};

// ═══════════════════════════════════════════════
//  HELPER FUNCTIONS
// ═══════════════════════════════════════════════
function getZodiacByDate(month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return zodiacSigns[0];
    if (month === 1 && day >= 20) return zodiacSigns[1];
    if (month === 2 && day <= 18) return zodiacSigns[1];
    if (month === 2 && day >= 19) return zodiacSigns[2];
    if (month === 3 && day <= 20) return zodiacSigns[2];
    if (month === 3) return zodiacSigns[3];
    if (month === 4 && day <= 19) return zodiacSigns[3];
    if (month === 4) return zodiacSigns[4];
    if (month === 5 && day <= 20) return zodiacSigns[4];
    if (month === 5) return zodiacSigns[5];
    if (month === 6 && day <= 20) return zodiacSigns[5];
    if (month === 6) return zodiacSigns[6];
    if (month === 7 && day <= 22) return zodiacSigns[6];
    if (month === 7) return zodiacSigns[7];
    if (month === 8 && day <= 22) return zodiacSigns[7];
    if (month === 8) return zodiacSigns[8];
    if (month === 9 && day <= 22) return zodiacSigns[8];
    if (month === 9) return zodiacSigns[9];
    if (month === 10 && day <= 22) return zodiacSigns[9];
    if (month === 10) return zodiacSigns[10];
    if (month === 11 && day <= 21) return zodiacSigns[10];
    if (month === 11) return zodiacSigns[11];
    if (month === 12 && day <= 21) return zodiacSigns[11];
    return zodiacSigns[0];
}

function getDayName(date) {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[new Date(date).getDay()];
}

function formatNumber(num) {
    return num.toLocaleString('en-IN');
}

function getSpecialEvent(month, day) {
    const key = `${month}-${day}`;
    return historicalEvents[key] || "A unique and special day just for you! 🌟";
}

function calculateAge(birthDate, toDate) {
    let years  = toDate.getFullYear()  - birthDate.getFullYear();
    let months = toDate.getMonth()     - birthDate.getMonth();
    let days   = toDate.getDate()      - birthDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(toDate.getFullYear(), toDate.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    return { years, months, days };
}

// ═══════════════════════════════════════════════
//  LIVE TIMER + BODY STATS (Updates Every Second)
// ═══════════════════════════════════════════════
let liveTimerInterval = null;
let storedBirthDate   = null;

function startLiveTimer(birthDate) {
    if (liveTimerInterval) clearInterval(liveTimerInterval);
    storedBirthDate = birthDate;

    function updateTimer() {
        const now  = new Date();
        const diff = now - storedBirthDate;

        const totalSeconds = Math.floor(diff / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours   = Math.floor(totalMinutes / 60);
        const totalDays    = Math.floor(totalHours / 24);

        const displayHours   = totalHours % 24;
        const displayMinutes = totalMinutes % 60;
        const displaySeconds = totalSeconds % 60;

        // ── Live Age Timer ──
        const liveDays = document.getElementById('liveDays');
        const liveHours = document.getElementById('liveHours');
        const liveMinutes = document.getElementById('liveMinutes');
        const liveSeconds = document.getElementById('liveSeconds');
        
        if (liveDays) liveDays.textContent    = formatNumber(totalDays);
        if (liveHours) liveHours.textContent   = String(displayHours).padStart(2,'0');
        if (liveMinutes) liveMinutes.textContent = String(displayMinutes).padStart(2,'0');
        if (liveSeconds) liveSeconds.textContent = String(displaySeconds).padStart(2,'0');

        // ── Body Stats (LIVE) ──
        const yearsLived = totalDays / 365.25;
        const awakeMins  = totalMinutes * (16 / 24);

        const heartbeats  = document.getElementById('heartbeats');
        const eyeBlinks   = document.getElementById('eyeBlinks');
        const breaths     = document.getElementById('breaths');
        const sleptDays   = document.getElementById('sleptDays');
        const meals       = document.getElementById('meals');
        const steps       = document.getElementById('steps');
        const laughs      = document.getElementById('laughs');
        const dreams      = document.getElementById('dreams');
        const bloodPumped = document.getElementById('bloodPumped');
        const hairGrowth  = document.getElementById('hairGrowth');
        const nailGrowth  = document.getElementById('nailGrowth');
        const thoughts    = document.getElementById('thoughts');

        if (heartbeats)  heartbeats.textContent  = formatNumber(totalMinutes * 72);
        if (eyeBlinks)   eyeBlinks.textContent   = formatNumber(Math.floor(awakeMins * 17));
        if (breaths)     breaths.textContent     = formatNumber(totalMinutes * 15);
        if (sleptDays)   sleptDays.textContent   = formatNumber(Math.floor(totalDays * 0.33)) + ' days';
        if (meals)       meals.textContent       = formatNumber(totalDays * 3) + ' meals';
        if (steps)       steps.textContent       = formatNumber(totalDays * 8000);
        if (laughs)      laughs.textContent      = formatNumber(totalDays * 15) + ' times';
        if (dreams)      dreams.textContent      = formatNumber(totalDays * 5);
        if (bloodPumped) bloodPumped.textContent = formatNumber(totalDays * 7571) + ' L';
        if (hairGrowth)  hairGrowth.textContent  = (yearsLived * 15).toFixed(1) + ' cm';
        if (nailGrowth)  nailGrowth.textContent  = (yearsLived * 3.5).toFixed(1) + ' cm';
        if (thoughts)    thoughts.textContent    = formatNumber(totalDays * 6200);
    }

    updateTimer();
    liveTimerInterval = setInterval(updateTimer, 1000);
}

// ═══════════════════════════════════════════════
//  BIRTHDAY COUNTDOWN
// ═══════════════════════════════════════════════
let countdownInterval = null;

function startCountdown(birthMonth, birthDay, birthYear) {
    if (countdownInterval) clearInterval(countdownInterval);

    function update() {
        const now  = new Date();
        let nextBD = new Date(now.getFullYear(), birthMonth - 1, birthDay);

        if (now >= nextBD) {
            nextBD = new Date(now.getFullYear() + 1, birthMonth - 1, birthDay);
        }

        const diff = nextBD - now;
        const d    = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h    = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m    = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s    = Math.floor((diff % (1000 * 60)) / 1000);

        const cdDays = document.getElementById('cdDays');
        const cdHours = document.getElementById('cdHours');
        const cdMinutes = document.getElementById('cdMinutes');
        const cdSeconds = document.getElementById('cdSeconds');

        if (cdDays) cdDays.textContent    = String(d).padStart(2,'0');
        if (cdHours) cdHours.textContent   = String(h).padStart(2,'0');
        if (cdMinutes) cdMinutes.textContent = String(m).padStart(2,'0');
        if (cdSeconds) cdSeconds.textContent = String(s).padStart(2,'0');

        const options    = { year:'numeric', month:'long', day:'numeric' };
        const turningAge = nextBD.getFullYear() - birthYear;

        const nextBdayDate = document.getElementById('nextBirthdayDate');
        const turningAgeEl = document.getElementById('turningAge');

        if (nextBdayDate)
            nextBdayDate.textContent =
                `🎂 Next Birthday: ${nextBD.toLocaleDateString('en-US', options)} (${getDayName(nextBD)})`;

        if (turningAgeEl)
            turningAgeEl.textContent = `🎉 You will be turning ${turningAge} years old!`;
    }

    update();
    countdownInterval = setInterval(update, 1000);
}

// ═══════════════════════════════════════════════
//  BIRTHDAY HISTORY TABLE (No Event Column)
// ═══════════════════════════════════════════════
function buildBirthdayTable(birthDate) {
    const tbody = document.getElementById('birthdayTableBody');
    tbody.innerHTML = '';

    const today      = new Date();
    const birthYear  = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth() + 1;
    const birthDay   = birthDate.getDate();
    const currentAge = today.getFullYear() - birthYear;

    for (let age = 0; age <= currentAge; age++) {
        const year   = birthYear + age;
        const bdDate = new Date(year, birthMonth - 1, birthDay);

        if (bdDate > today) break;

        const dayName = getDayName(bdDate);
        const options = { year:'numeric', month:'short', day:'numeric' };
        const dateStr = bdDate.toLocaleDateString('en-US', options);

        const isBorn = age === 0;
        const isLast = (new Date(year + 1, birthMonth - 1, birthDay) > today);

        const tr = document.createElement('tr');
        if (isBorn) tr.classList.add('born-row');
        else if (isLast) tr.classList.add('last-row');

        tr.innerHTML = `
            <td>${age === 0 ? '🍼' : age}</td>
            <td style="color:#f093fb;font-weight:bold;">
                ${age === 0 ? 'Born!' : age + (age === 1 ? ' year' : ' years')}
            </td>
            <td>${dateStr}</td>
            <td class="day-highlight">${dayName}</td>
        `;
        tbody.appendChild(tr);
    }
}

// ═══════════════════════════════════════════════
//  SPECIAL FACTS
// ═══════════════════════════════════════════════
function showSpecialFacts(birthDate) {
    const month = birthDate.getMonth() + 1;
    const day   = birthDate.getDate();
    const year  = birthDate.getFullYear();
    const event = getSpecialEvent(month, day);

    const monthNames = [
        "","January","February","March","April",
        "May","June","July","August",
        "September","October","November","December"
    ];

    const seasons = {
        1:"Winter ❄️", 2:"Winter ❄️",  3:"Spring 🌸",
        4:"Spring 🌸", 5:"Spring 🌸",  6:"Summer ☀️",
        7:"Summer ☀️", 8:"Summer ☀️",  9:"Autumn 🍂",
        10:"Autumn 🍂",11:"Autumn 🍂", 12:"Winter ❄️"
    };

    const birthstones = {
        1:"Garnet 💎",    2:"Amethyst 💜",    3:"Aquamarine 💙",
        4:"Diamond 💍",   5:"Emerald 💚",     6:"Pearl 🤍",
        7:"Ruby ❤️",      8:"Peridot 💚",     9:"Sapphire 💙",
        10:"Opal 🌈",     11:"Topaz 🟡",      12:"Turquoise 🩵"
    };

    const birthFlowers = {
        1:"Carnation 🌸",        2:"Violet 💜",          3:"Daffodil 🌼",
        4:"Daisy 🌼",            5:"Lily of Valley 🌺",  6:"Rose 🌹",
        7:"Larkspur 💐",         8:"Gladiolus 🌸",       9:"Aster 🌸",
        10:"Marigold 🌻",        11:"Chrysanthemum 💐",  12:"Narcissus 🌼"
    };

    const chineseZodiacs = [
        "Monkey 🐵","Rooster 🐔","Dog 🐶","Pig 🐷",
        "Rat 🐭","Ox 🐮","Tiger 🐯","Rabbit 🐰",
        "Dragon 🐲","Snake 🐍","Horse 🐴","Goat 🐐"
    ];

    const dayNumber = Math.floor(
        (birthDate - new Date(year, 0, 0)) / (1000 * 60 * 60 * 24)
    );

    const chineseZodiac = chineseZodiacs[year % 12];
    const seasonName    = seasons[month];
    const birthstone    = birthstones[month];
    const birthFlower   = birthFlowers[month];
    const monthName     = monthNames[month];

    const facts = [
        {
            title: "🌍 Historical Significance",
            text:  event
        },
        {
            title: "🍂 Birth Season",
            text:  `You were born in ${seasonName}. People born in this season are known for their adaptability and unique perspective on life!`
        },
        {
            title: "💎 Birth Stone",
            text:  `Your birthstone is ${birthstone}. It is said to bring you luck, protection, and positive energy throughout your life.`
        },
        {
            title: "🌸 Birth Flower",
            text:  `Your birth flower is ${birthFlower}. It symbolizes the beautiful qualities and strengths you carry within you.`
        },
        {
            title: "🐉 Chinese Zodiac",
            text:  `According to the Chinese calendar, you were born in the Year of the ${chineseZodiac}. This sign reflects your personality and destiny!`
        },
        {
            title: "📅 Day of the Year",
            text:  `You were born on day ${dayNumber} of the year. Out of 365 days, this is YOUR truly special and unique day!`
        },
        {
            title: "🌙 Birth Month",
            text:  `${monthName} is your birth month. It carries a unique cosmic energy and cultural significance around the world.`
        },
        {
            title: "⭐ Fun Fact",
            text:  `On the day you were born, the world became a better place. Every year on ${monthName} ${day}, the universe celebrates YOUR existence! 🎉`
        }
    ];

    const container = document.getElementById('specialFacts');
    if (!container) return;

    container.innerHTML = `
        <div class="special-grid">
            ${facts.map(f => `
                <div class="special-item">
                    <h4>${f.title}</h4>
                    <p>${f.text}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// ═══════════════════════════════════════════════
//  MAIN CALCULATE FUNCTION
// ═══════════════════════════════════════════════
function calculate() {
    const input = document.getElementById('birthdate').value;
    const nameEl = document.getElementById('name');
    const name  = nameEl ? nameEl.value : '';

    if (!input) {
        alert('⚠️ Please enter your birth date!');
        return;
    }

    const birthDate = new Date(input);
    const today     = new Date();

    if (birthDate > today) {
        alert('⚠️ Birth date cannot be in the future!');
        return;
    }

    const resultsEl = document.getElementById('results');
    if (resultsEl) resultsEl.style.display = 'block';

    // ── Age ──
    const age = calculateAge(birthDate, today);

    const yearsEl = document.getElementById('years');
    const monthsEl = document.getElementById('months');
    const daysEl = document.getElementById('days');

    if (yearsEl)  yearsEl.textContent  = age.years;
    if (monthsEl) monthsEl.textContent = age.months;
    if (daysEl)   daysEl.textContent   = age.days;

    // Greeting
    const nameText = name ? `, ${name}` : '';
    const greetingEl = document.getElementById('greeting');
    if (greetingEl)
        greetingEl.textContent =
            `🎉 Hello${nameText}! You are ${age.years} years, ${age.months} months and ${age.days} days old!`;

    // Born day
    const bornDayEl = document.getElementById('bornDay');
    if (bornDayEl) bornDayEl.textContent = getDayName(birthDate);

    // ── Zodiac ──
    const zodiac = getZodiacByDate(birthDate.getMonth() + 1, birthDate.getDate());

    const zIcon = document.getElementById('zodiacIcon');
    const zName = document.getElementById('zodiacName');
    const zDates = document.getElementById('zodiacDates');
    const zDesc = document.getElementById('zodiacDesc');
    const zElement = document.getElementById('zodiacElement');
    const zPlanet = document.getElementById('zodiacPlanet');
    const zLucky = document.getElementById('zodiacLucky');
    const zStone = document.getElementById('zodiacStone');
    const zTraits = document.getElementById('zodiacTraits');

    if (zIcon)    zIcon.textContent    = zodiac.icon;
    if (zName)    zName.textContent    = zodiac.name;
    if (zDates)   zDates.textContent   = zodiac.dates;
    if (zDesc)    zDesc.textContent    = zodiac.desc;
    if (zElement) zElement.textContent = zodiac.element;
    if (zPlanet)  zPlanet.textContent  = zodiac.planet;
    if (zLucky)   zLucky.textContent   = zodiac.lucky;
    if (zStone)   zStone.textContent   = zodiac.stone;

    if (zTraits)
        zTraits.innerHTML = zodiac.traits.map(t => `<span class="trait-tag">${t}</span>`).join('');

    // ── Live Timer + Body Stats ──
    startLiveTimer(birthDate);

    // ── Countdown ──
    startCountdown(
        birthDate.getMonth() + 1,
        birthDate.getDate(),
        birthDate.getFullYear()
    );

    // ── Special Facts ──
    showSpecialFacts(birthDate);

    // ── Birthday Table ──
    buildBirthdayTable(birthDate);

    if (resultsEl) resultsEl.scrollIntoView({ behavior: 'smooth' });
}

// ═══════════════════════════════════════════════
//  SET MAX DATE = TODAY
// ═══════════════════════════════════════════════
window.addEventListener('DOMContentLoaded', () => {
    const bdInput = document.getElementById('birthdate');
    if (bdInput) {
        bdInput.max = new Date().toISOString().split('T')[0];
    }
});