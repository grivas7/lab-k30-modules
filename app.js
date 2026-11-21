let currentLang = "en";
let currentFilter = "all";

const uiTranslations = {
  en: {
    title: "Logic & Robotics Lab",
    subtitle: "30-Hour Interactive Curriculum (Ages 5+)",
    intro: "Welcome to our hands-on coding & robotics lab! Core technical terms stay in English so young learners build real IT fluency from day one.",
    all: "All (30)",
    explorer: "Explorer (Ages 5–7)",
    builder: "Builder (Ages 8+)",
    video: "60-Sec Lesson Preview",
    lessonPrefix: "Lesson"
  },
  el: {
    title: "Εργαστήριο Λογικής & Ρομποτικής",
    subtitle: "Διαδραστικό Πρόγραμμα 30 Ωρών (Ηλικίες 5+)",
    intro: "Καλώς ήρθατε στο εργαστήριο προγραμματισμού και ρομποτικής! Οι βασικοί όροι παραμένουν στα Αγγλικά ώστε τα παιδιά να εξοικειωθούν με τη γλώσσα της πληροφορικής από την πρώτη μέρα.",
    all: "Όλα (30)",
    explorer: "Explorer (5–7 ετών)",
    builder: "Builder (8+ ετών)",
    video: "Βίντεο Παρουσίασης (60 δευτ.)",
    lessonPrefix: "Μάθημα"
  },
  ro: {
    title: "Laborator de Logică & Robotică",
    subtitle: "Programă Interactivă de 30 de Ore (Vârsta 5+)",
    intro: "Bine ați venit în laboratorul nostru de programare și robotică! Termenii tehnici de bază rămân în engleză pentru ca cei mici să se obișnuiască natural cu limbajul IT încă din prima zi.",
    all: "Toate (30)",
    explorer: "Explorer (5–7 ani)",
    builder: "Builder (8+ ani)",
    video: "Prezentare Video (60 sec.)",
    lessonPrefix: "Lecția"
  }
};

const lessonsData = [
  // --- MODULE 1: KAREL (1-8) ---
  {
    id: 1, module: 1, tag: "Laptop & Karel",
    title: { en: "Meet Your Machine & Meet Karel", el: "Γνώρισε τον Υπολογιστή σου & τον Karel", ro: "Cunoaște-ți Laptopul și pe Robotul Karel" },
    desc: { en: "Learn how to open, control, and shut down a laptop safely, find key buttons (Arrows, Enter, Space), and give Karel his first commands.", el: "Μαθαίνουμε πώς ανοίγουμε και χειριζόμαστε σωστά το laptop (Arrows, Enter, Space) και δίνουμε στον Karel τις πρώτες του εντολές.", ro: "Învățăm cum pornim, controlăm și închidem corect laptopul (Arrows, Enter, Space) și îi dăm lui Karel primele sale comenzi." },
    explorer: { en: "Practice Left Click, Arrow keys, and guide Karel 3 steps forward using visual commands.", el: "Εξάσκηση στο Left Click, τα βελάκια και καθοδήγηση του Karel 3 βήματα μπροστά.", ro: "Exersăm Left Click, tastele săgeți și îl ghidăm pe Karel 3 pași înainte folosind comenzi vizuale." },
    builder: { en: "Type move() commands accurately and solve a 5-step path without hitting walls.", el: "Πληκτρολόγηση των εντολών move() και επίλυση διαδρομής 5 βημάτων.", ro: "Tastăm comenzile move() și rezolvăm un traseu de 5 pași fără să lovim pereții." }
  },
  {
    id: 2, module: 1, tag: "Karel Logic",
    title: { en: "Karel's First Walk (move & turnLeft)", el: "Η Πρώτη Βόλτα του Karel (move & turnLeft)", ro: "Prima Plimbare a lui Karel (move & turnLeft)" },
    desc: { en: "Understand spatial orientation from the robot's perspective and navigate corners safely using move() and turnLeft().", el: "Κατανοούμε τον προσανατολισμό από τη σκοπιά του ρομπότ και στρίβουμε στις γωνίες με move() και turnLeft().", ro: "Înțelegem orientarea în spațiu din perspectiva robotului și luăm virajele folosind move() și turnLeft()." },
    explorer: { en: "Help Karel reach the green square with 1 left turn using step-by-step keys.", el: "Βοηθάμε τον Karel να φτάσει στο πράσινο τετράγωνο με 1 αριστερή στροφή.", ro: "Îl ajutăm pe Karel să ajungă la pătratul verde cu un viraj la stânga." },
    builder: { en: "Complete an L-shaped and U-shaped corridor using exact move() and turnLeft() instructions.", el: "Ολοκληρώνουμε διαδρόμους σχήματος L και U γράφοντας τις εντολές move() και turnLeft().", ro: "Parcurgem un coridor în formă de L și U scriind exact instrucțiunile move() și turnLeft()." }
  },
  {
    id: 3, module: 1, tag: "Karel Actions",
    title: { en: "Treasure Hunter (pickBeeper & putBeeper)", el: "Κυνηγός Θησαυρών (pickBeeper & putBeeper)", ro: "Vânătorul de Comori (pickBeeper & putBeeper)" },
    desc: { en: "Teach Karel to interact with objects on the grid: picking up diamonds and placing them on target spots.", el: "Μαθαίνουμε στον Karel να μαζεύει διαμάντια (pickBeeper) και να τα τοποθετεί στον στόχο (putBeeper).", ro: "Îl învățăm pe Karel să culeagă obiecte de pe hartă (pickBeeper) și să le așeze la destinație (putBeeper)." },
    explorer: { en: "Collect 2 diamonds along a straight street and drop them at Karel's home base.", el: "Μαζεύουμε 2 διαμάντια σε ευθεία διαδρομή και τα αφήνουμε στη βάση.", ro: "Culegem 2 diamante de pe o stradă dreaptă și le lăsăm la baza lui Karel." },
    builder: { en: "Collect 3 scattered beepers around corners and build a tower of 3 at the finish.", el: "Μαζεύουμε 3 διασκορπισμένα beepers και φτιάχνουμε έναν πύργο 3 επιπέδων.", ro: "Colectăm 3 comori împrăștiate după colțuri și construim un turn din toate 3 la final." }
  },
  {
    id: 4, module: 1, tag: "Functions",
    title: { en: "Teaching Karel New Words (turnRight)", el: "Μαθαίνουμε Νέες Λέξεις στον Karel (turnRight)", ro: "Îl Învățăm pe Karel Cuvinte Noi (turnRight)" },
    desc: { en: "Karel only knows how to turn left! Discover how programmers invent new commands (Functions) like turnRight().", el: "Ο Karel ξέρει να στρίβει μόνο αριστερά! Ανακαλύπτουμε πώς φτιάχνουμε νέες εντολές (Functions) όπως η turnRight().", ro: "Karel știe să facă doar stânga! Descoperim cum inventează programatorii comenzi noi (Funcții) precum turnRight()." },
    explorer: { en: "Act out 3 left turns physically in class to see how it equals 1 right turn, then guide Karel.", el: "Κάνουμε 3 αριστερές στροφές στην τάξη για να δούμε πώς γίνονται 1 δεξιά στροφή.", ro: "Facem fizic 3 întoarceri la stânga în clasă ca să vedem cum obținem dreapta, apoi îl ghidăm pe Karel." },
    builder: { en: "Define function turnRight() once and use it to navigate a staircase map.", el: "Ορίζουμε τη συνάρτηση turnRight() μία φορά και ανεβαίνουμε μια σκάλα.", ro: "Definim funcția turnRight() o singură dată și o folosim ca să urcăm o scară." }
  },
  {
    id: 5, module: 1, tag: "Loops (for)",
    title: { en: "The Power of Repeat (for Loops)", el: "Η Δύναμη της Επανάληψης (for Loops)", ro: "Puterea Repetiției (Bucle for)" },
    desc: { en: "Stop typing the same command 10 times! Use repeat loops to make Karel walk long streets and plant rows of beepers.", el: "Σταματάμε να γράφουμε την ίδια εντολή 10 φορές! Χρησιμοποιούμε βρόχους επανάληψης (loops).", ro: "Nu mai scriem aceeași comandă de 10 ori! Folosim bucle de repetiție pentru drumuri lungi." },
    explorer: { en: "Use a Repeat block with number 5 to cross a bridge in one smart instruction.", el: "Χρησιμοποιούμε μπλοκ Repeat με τον αριθμό 5 για να περάσουμε μια γέφυρα.", ro: "Folosim blocul Repeat cu cifra 5 ca să traversăm un pod dintr-o singură instrucțiune." },
    builder: { en: "Write a for loop to place 8 beepers along a wall and return to start.", el: "Γράφουμε έναν βρόχο for για να τοποθετήσουμε 8 beepers κατά μήκος ενός τοίχου.", ro: "Scriem o buclă for ca să plantăm 8 comori de-a lungul unui zid și să revenim la start." }
  },
  {
    id: 6, module: 1, tag: "Conditions (if)",
    title: { en: "Smart Karel: Looking Around (if)", el: "Έξυπνος Karel: Κοιτάζω Γύρω (if)", ro: "Karel Inteligent: Decizii (if)" },
    desc: { en: "Give Karel eyes! Use frontIsClear() and beepersPresent() so the robot checks the world before acting.", el: "Δίνουμε μάτια στον Karel! Χρησιμοποιούμε frontIsClear() και beepersPresent() για έξυπνες αποφάσεις.", ro: "Îi dăm ochi lui Karel! Folosim frontIsClear() și beepersPresent() ca robotul să ia singur decizii." },
    explorer: { en: "Play 'If green light, step forward' and help Karel pick up hidden diamonds only where present.", el: "Παίζουμε 'Αν πράσινο φως, προχώρα' και βοηθάμε τον Karel να μαζέψει κρυμμένα διαμάντια.", ro: "Jucăm 'Dacă e verde, fă un pas' și îl ajutăm pe Karel să ia diamantele doar unde există." },
    builder: { en: "Use if/else statements to clean up a messy street with random beepers.", el: "Χρησιμοποιούμε εντολές if/else για να καθαρίσουμε έναν δρόμο με τυχαία beepers.", ro: "Folosim structuri if/else pentru a curăța o stradă cu obiecte așezate aleatoriu." }
  },
  {
    id: 7, module: 1, tag: "Loops (while)",
    title: { en: "Karel's Maze (while Loops)", el: "Ο Λαβύρινθος του Karel (while Loops)", ro: "Labirintul lui Karel (Bucle while)" },
    desc: { en: "Navigate hallways of unknown length using while(frontIsClear()) without ever crashing into a wall.", el: "Πλοήγηση σε διαδρόμους άγνωστου μήκους με while(frontIsClear()) χωρίς συγκρούσεις.", ro: "Navigăm prin coridoare de lungime necunoscută cu while(frontIsClear()) fără să lovim pereții." },
    explorer: { en: "Guide Karel through a 3-turn maze using sensor blocks that stop before walls.", el: "Οδηγούμε τον Karel σε λαβύρινθο 3 στροφών με αισθητήρες τοίχου.", ro: "Îl ghidăm pe Karel printr-un labirint cu 3 viraje folosind blocuri care opresc înaintea zidului." },
    builder: { en: "Combine while loops and if conditions to escape a spiral maze automatically.", el: "Συνδυάζουμε βρόχους while και συνθήκες if για αυτόματη έξοδο από σπειροειδή λαβύρινθο.", ro: "Combinăm bucle while și condiții if pentru a ieși automat dintr-un labirint spiralat." }
  },
  {
    id: 8, module: 1, tag: "Module 1 Boss",
    title: { en: "Challenge: Karel's City Delivery", el: "Πρόκληση: Αποστολή στην Πόλη του Karel", ro: "Provocare: Livrarea în Orașul lui Karel" },
    desc: { en: "Team up in mixed-age pairs! Design and code a complete delivery route collecting supplies and avoiding roadblocks.", el: "Ομαδική αποστολή! Σχεδιάζουμε και προγραμματίζουμε μια πλήρη διαδρομή παράδοσης.", ro: "Lucrăm în echipe mixte! Proiectăm și programăm un traseu complet de livrare ocolind obstacolele." },
    explorer: { en: "Act as Navigator: spot the diamonds, count steps, and test the robot run.", el: "Ρόλος Πλοηγού: εντοπίζουμε τα διαμάντια, μετράμε βήματα και δοκιμάζουμε τη διαδρομή.", ro: "Rol de Navigator: identificăm comorile, numărăm pașii și testăm rularea robotului." },
    builder: { en: "Act as Coder: write clean functions (turnRight, deliverPackage) to complete the mission.", el: "Ρόλος Προγραμματιστή: γράφουμε καθαρές συναρτήσεις για να ολοκληρωθεί η αποστολή.", ro: "Rol de Programator: scriem funcții curate (turnRight, deliverPackage) pentru finalizarea misiunii." }
  },

  // --- MODULE 2: SCRATCH (9-14) ---
  {
    id: 9, module: 2, tag: "Scratch Stage",
    title: { en: "Welcome to the Stage (Sprites & X/Y)", el: "Καλώς ήρθατε στη Σκηνή (Sprites & X/Y)", ro: "Bun Venit pe Scenă (Sprites & Coordonate)" },
    desc: { en: "Discover visual blocks in Scratch, choose characters (Sprites), and move them across the X and Y coordinate grid.", el: "Ανακαλύπτουμε τα οπτικά μπλοκ στο Scratch, επιλέγουμε χαρακτήρες και κινούμαστε στους άξονες X και Y.", ro: "Descoperim blocurile vizuale în Scratch, alegem personaje (Sprites) și le mișcăm pe coordonatele X și Y." },
    explorer: { en: "Pick a character, change its color, and make it walk across a space background.", el: "Επιλέγουμε χαρακτήρα, αλλάζουμε χρώμα και τον κάνουμε να περπατήσει στο διάστημα.", ro: "Alegem un personaj, îi schimbăm culoarea și îl facem să meargă pe un fundal spațial." },
    builder: { en: "Program smooth 4-direction movement using Arrow keys and exact X/Y coordinates.", el: "Προγραμματίζουμε κίνηση 4 κατευθύνσεων με τα βελάκια και συντεταγμένες X/Y.", ro: "Programăm mișcarea lină în 4 direcții cu tastele săgeți și coordonate exacte X/Y." }
  },
  {
    id: 10, module: 2, tag: "Events & Sound",
    title: { en: "Talking Characters & Events", el: "Χαρακτήρες που Μιλούν & Events", ro: "Personaje Vorbitoare & Evenimente" },
    desc: { en: "Use Event blocks (When Flag Clicked, When Sprite Clicked) to create an interactive animated story with speech bubbles and sound.", el: "Χρησιμοποιούμε Events για να φτιάξουμε μια διαδραστική ιστορία με διαλόγους και ήχους.", ro: "Folosim blocuri de tip Event pentru a crea o poveste animată interactivă cu replici și sunete." },
    explorer: { en: "Make 2 animals greet each other in English when clicked with the mouse.", el: "Κάνουμε 2 ζωάκια να χαιρετιούνται στα Αγγλικά όταν κάνουμε κλικ πάνω τους.", ro: "Facem 2 animale să se salute în engleză când dăm clic pe ele." },
    builder: { en: "Synchronize a 4-scene animated dialogue using Broadcast messages.", el: "Συγχρονίζουμε έναν διάλογο 4 σκηνών χρησιμοποιώντας μηνύματα Broadcast.", ro: "Sincronizăm un dialog animat în 4 scene folosind mesaje Broadcast." }
  },
  {
    id: 11, module: 2, tag: "Variables",
    title: { en: "Catch the Falling Star (Score Variable)", el: "Πιάσε το Αστέρι (Μεταβλητή Score)", ro: "Prinde Steaua Căzătoare (Variabila Scor)" },
    desc: { en: "Build your first arcade game! Learn how Variables store numbers like Score and how collision detection works.", el: "Φτιάχνουμε το πρώτο μας παιχνίδι! Μαθαίνουμε πώς οι μεταβλητές (Variables) αποθηκεύουν το σκορ.", ro: "Construim primul nostru joc! Învățăm cum păstrează Variabilele scorul și cum detectăm atingerile." },
    explorer: { en: "Control the basket left/right and catch falling stars to hear a celebration sound.", el: "Κινούμε το καλάθι αριστερά/δεξιά και πιάνουμε αστέρια με ηχητικά εφέ.", ro: "Controlăm coșul stânga/dreapta și prindem stelele căzătoare cu efecte sonore." },
    builder: { en: "Add a Score variable, falling speed levels, and a Game Over screen.", el: "Προσθέτουμε μεταβλητή Score, επίπεδα ταχύτητας και οθόνη Game Over.", ro: "Adăugăm variabila Score, niveluri de viteză și ecran de Game Over." }
  },
  {
    id: 12, module: 2, tag: "Clones & Random",
    title: { en: "Space Dodge Game (Clones & Random)", el: "Διαστημική Αποφυγή (Clones & Random)", ro: "Cursă Printre Asteroizi (Clones & Random)" },
    desc: { en: "Pilot a spaceship through an asteroid field using random coordinates and cloning blocks.", el: "Πιλοτάρουμε ένα διαστημόπλοιο ανάμεσα σε αστεροειδείς με τυχαίες θέσεις (Random).", ro: "Pilotăm o navă spațială printre asteroizi folosind poziții aleatorii (Random) și clone." },
    explorer: { en: "Steer the rocket safely past 2 moving planets to reach the moon.", el: "Οδηγούμε τον πύραυλο με ασφάλεια ανάμεσα από 2 πλανήτες μέχρι το φεγγάρι.", ro: "Ghidăm racheta printre 2 planete în mișcare până ajunge pe Lună." },
    builder: { en: "Spawn infinite asteroid clones at random X positions and add a shield timer.", el: "Δημιουργούμε άπειρους κλώνους αστεροειδών σε τυχαίες θέσεις X και χρονόμετρο.", ro: "Generăm clone infinite de asteroizi la poziții X aleatorii și adăugăm un cronometru." }
  },
  {
    id: 13, module: 2, tag: "Music & Loops",
    title: { en: "Digital DJ & Dance Machine", el: "Ψηφιακός DJ & Μηχανή Χορού", ro: "DJ Digital & Mașina de Dans" },
    desc: { en: "Turn keyboard keys into musical instruments and code dancers that change moves to the beat.", el: "Μετατρέπουμε τα πλήκτρα σε μουσικά όργανα και προγραμματίζουμε χορευτές στον ρυθμό.", ro: "Transformăm tastele în instrumente muzicale și programăm dansatori care se mișcă pe ritm." },
    explorer: { en: "Map 4 keys (A, S, D, F) to drums and piano notes with flashing stage lights.", el: "Αντιστοιχίζουμε 4 πλήκτρα σε τύμπανα και νότες πιάνου με φώτα σκηνής.", ro: "Asociem 4 taste (A, S, D, F) cu tobe și note de pian și lumini de scenă." },
    builder: { en: "Compose a 16-beat loop using Scratch Music extensions and synchronized costumes.", el: "Συνθέτουμε έναν ρυθμό 16 χρόνων με συγχρονισμένες αλλαγές κοστουμιών.", ro: "Compunem un ritm de 16 bătăi folosind extensia Music și schimbări sincronizate de costume." }
  },
  {
    id: 14, module: 2, tag: "Module 2 Boss",
    title: { en: "Challenge: Mini-Arcade Showcase", el: "Πρόκληση: Παρουσίαση Mini-Arcade", ro: "Provocare: Expoziția de Mini-Jocuri" },
    desc: { en: "Customize your own playable game with custom graphics and present it to the group in simple English.", el: "Προσαρμόζουμε το δικό μας παιχνίδι και το παρουσιάζουμε στην ομάδα στα Αγγλικά.", ro: "Personalizăm propriul joc și îl prezentăm colegilor în engleză simplă." },
    explorer: { en: "Design a custom hero sprite, test classmates' games, and share 1 favorite thing.", el: "Σχεδιάζουμε τον ήρωά μας, δοκιμάζουμε τα παιχνίδια των άλλων και λέμε τι μας άρεσε.", ro: "Desenăm propriul personaj, testăm jocurile colegilor și spunem ce ne-a plăcut." },
    builder: { en: "Build a 2-level game with start menu, score counter, and win condition.", el: "Φτιάχνουμε παιχνίδι 2 επιπέδων με μενού έναρξης, σκορ και συνθήκη νίκης.", ro: "Construim un joc cu 2 niveluri, meniu de start, scor și condiție de victorie." }
  },

  // --- MODULE 3: BBC MICRO:BIT (15-22) ---
  {
    id: 15, module: 3, tag: "Hardware Start",
    title: { en: "Hello micro:bit! (LEDs & Buttons)", el: "Γεια σου micro:bit! (LEDs & Κουμπιά)", ro: "Salut, micro:bit! (Matricea LED & Butoane)" },
    desc: { en: "Touch real hardware! Connect the BBC micro:bit via USB, flash your first program, and light up the 25 LED matrix.", el: "Αγγίζουμε πραγματικό hardware! Συνδέουμε το BBC micro:bit με USB και ανάβουμε τα 25 LED.", ro: "Atingem hardware real! Conectăm placa BBC micro:bit prin USB și aprindem cele 25 de LED-uri." },
    explorer: { en: "Display a beating heart icon and smile when pressing Button A and Button B.", el: "Εμφανίζουμε μια καρδιά που χτυπά και χαμόγελο πατώντας τα κουμπιά A και B.", ro: "Afișăm o inimă care bate și un zâmbet când apăsăm butoanele A și B." },
    builder: { en: "Scroll your name across the LEDs and code custom pixel animations.", el: "Εμφανίζουμε το όνομά μας στα LED και φτιάχνουμε δικά μας pixel animations.", ro: "Afișăm numele pe LED-uri și programăm animații pixelate personalizate." }
  },
  {
    id: 16, module: 3, tag: "Accelerometer",
    title: { en: "Digital Dice & Rock-Paper-Scissors", el: "Ψηφιακό Ζάρι & Πέτρα-Ψαλίδι-Χαρτί", ro: "Zar Digital & Piatră-Foarfecă-Hârtie" },
    desc: { en: "Use the built-in motion sensor (Accelerometer) so shaking the board triggers random game icons.", el: "Χρησιμοποιούμε τον αισθητήρα κίνησης (Accelerometer) ώστε κουνώντας την πλακέτα να παίζουμε.", ro: "Folosim senzorul de mișcare (Accelerometru) astfel încât scuturarea plăcii să genereze simboluri." },
    explorer: { en: "Build a shaking digital dice (1–6) and play a board game round in class.", el: "Φτιάχνουμε ψηφιακό ζάρι (1–6) και παίζουμε έναν γύρο επιτραπέζιου στην τάξη.", ro: "Construim un zar digital (1–6) și jucăm o rundă de joc de societate în clasă." },
    builder: { en: "Code Rock-Paper-Scissors using if/else variables and play a tournament.", el: "Προγραμματίζουμε Πέτρα-Ψαλίδι-Χαρτί με μεταβλητές if/else και κάνουμε τουρνουά.", ro: "Programăm Piatră-Foarfecă-Hârtie cu variabile și organizăm un turneu." }
  },
  {
    id: 17, module: 3, tag: "Sensors",
    title: { en: "Smart Thermometer & Night Light", el: "Έξυπνο Θερμόμετρο & Φως Νυκτός", ro: "Termometru Inteligent & Lumină de Noapte" },
    desc: { en: "Read real environmental data! Measure classroom temperature and ambient light levels to trigger automatic LEDs.", el: "Μετράμε πραγματικά δεδομένα! Θερμοκρασία δωματίου και φως για αυτόματο άναμμα LED.", ro: "Citim date reale din mediu! Măsurăm temperatura camerei și lumina pentru aprinderea automată a LED-urilor." },
    explorer: { en: "Cover the micro:bit with your hands to turn it into an automatic night lamp.", el: "Καλύπτουμε το micro:bit με τα χέρια για να ανάψει αυτόματα σαν φωτάκι νυκτός.", ro: "Acoperim micro:bit-ul cu palmele ca să se transforme într-o lampă de noapte automată." },
    builder: { en: "Display live Celsius readings and sound a warning beep if temperature rises.", el: "Εμφανίζουμε τη θερμοκρασία σε Κελσίου και ήχο συναγερμού αν ανέβει.", ro: "Afișăm temperatura în grade Celsius și declanșăm o alarmă sonoră dacă crește." }
  },
  {
    id: 18, module: 3, tag: "Magnetometer",
    title: { en: "Explorer's Digital Compass", el: "Ψηφιακή Πυξίδα Εξερευνητή", ro: "Busola Digitală a Exploratorului" },
    desc: { en: "Calibrate the magnetic sensor and turn your micro:bit into a real navigation compass pointing North.", el: "Βαθμονομούμε τον μαγνητικό αισθητήρα και φτιάχνουμε μια πραγματική πυξίδα.", ro: "Calibrăm senzorul magnetic și transformăm placa într-o busolă reală care arată Nordul." },
    explorer: { en: "Find North in the classroom and follow directional clues to a hidden sticker.", el: "Βρίσκουμε τον Βορρά στην τάξη και ακολουθούμε στοιχεία για ένα κρυμμένο αυτοκόλλητο.", ro: "Găsim Nordul în clasă și urmărim indiciile către o comoară ascunsă." },
    builder: { en: "Program a compass that displays N, E, S, W letters based on degree angles.", el: "Προγραμματίζουμε πυξίδα που δείχνει N, E, S, W ανάλογα με τις μοίρες.", ro: "Programăm o busolă care afișează literele N, E, S, W în funcție de unghiul în grade." }
  },
  {
    id: 19, module: 3, tag: "Wearable Tech",
    title: { en: "Wrist Step Counter (Pedometer)", el: "Μετρητής Βημάτων Καρπού", ro: "Contor de Pași pentru Mână (Pedometru)" },
    desc: { en: "Strap the battery pack and micro:bit to your wrist to count footsteps and track physical movement.", el: "Δένουμε το micro:bit στον καρπό για να μετράμε βήματα και κίνηση.", ro: "Prindem bateria și micro:bit-ul la încheietură pentru a număra pașii în timp ce ne mișcăm." },
    explorer: { en: "Walk 20 steps across the room and check if the counter matches your count.", el: "Περπατάμε 20 βήματα στην αίθουσα και ελέγχουμε αν ο μετρητής συμφωνεί.", ro: "Facem 20 de pași prin sală și verificăm dacă ecranul arată exact 20." },
    builder: { en: "Add a step goal (e.g., 50 steps) that triggers a trophy icon and victory melody.", el: "Προσθέτουμε στόχο 50 βημάτων που εμφανίζει κύπελλο και μελωδία νίκης.", ro: "Adăugăm un obiectiv (ex. 50 de pași) care afișează un trofeu și o melodie de victorie." }
  },
  {
    id: 20, module: 3, tag: "Wireless Radio",
    title: { en: "Secret Radio Messages", el: "Μυστικά Ασύρματα Μηνύματα (Radio)", ro: "Mesaje Secrete prin Radio (Wireless)" },
    desc: { en: "Connect two micro:bits wirelessly! Send secret icons and coded messages across the room without cables.", el: "Συνδέουμε δύο micro:bit ασύρματα! Στέλνουμε μυστικά εικονίδια χωρίς καλώδια.", ro: "Conectăm două plăci micro:bit fără fire! Trimitem pictograme secrete de la o masă la alta." },
    explorer: { en: "Send a happy face or heart icon from your desk to your friend's micro:bit.", el: "Στέλνουμε ένα χαμογελαστό πρόσωπο από το θρανίο μας στο micro:bit του φίλου μας.", ro: "Trimitem o față zâmbitoare sau o inimă de pe banca noastră pe placa colegului." },
    builder: { en: "Set matching Radio Groups and build a Morse-code telegraph communicator.", el: "Ρυθμίζουμε ομάδες Radio και φτιάχνουμε τηλέγραφο κώδικα Μορς.", ro: "Configurăm grupuri Radio și construim un telegraf care transmite în cod Morse." }
  },
  {
    id: 21, module: 3, tag: "Security System",
    title: { en: "Smart Treasure Box Alarm", el: "Έξυπνος Συναγερμός Θησαυρού", ro: "Sistem de Alarmă pentru Cutia cu Comori" },
    desc: { en: "Combine motion sensors and wireless radio to protect a box and alert a guard station remotely.", el: "Συνδυάζουμε αισθητήρα κίνησης και radio για να προστατεύσουμε ένα κουτί θησαυρού.", ro: "Combinăm senzorul de mișcare cu semnalul radio pentru a proteja o cutie și a alerta paznicul." },
    explorer: { en: "Place a micro:bit inside a box; if someone opens it, an alarm icon flashes.", el: "Βάζουμε ένα micro:bit σε κουτί· αν κάποιος το ανοίξει, αναβοσβήνει συναγερμός.", ro: "Punem un micro:bit într-o cutie; dacă cineva o