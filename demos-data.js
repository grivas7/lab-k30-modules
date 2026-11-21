const lessonDemos = {
  // --- MODULUL 1: KAREL (1 - 8) ---
  1: {
    start: { x: 0, y: 2, dir: 0 }, walls: [], beepers: [], goal: { x: 3, y: 2 },
    code: ["move();", "move();", "move();"],
    steps: [
      { line: 0, action: "move", text: { en: "Step 1: Karel moves forward!", el: "Βήμα 1: Ο Karel προχωρά!", ro: "Pasul 1: Karel merge înainte!" } },
      { line: 1, action: "move", text: { en: "Step 2: Moving again!", el: "Βήμα 2: Προχωρά ξανά!", ro: "Pasul 2: Încă un pas înainte!" } },
      { line: 2, action: "move", text: { en: "Goal reached! Great job!", el: "Φτάσαμε στον στόχο!", ro: "Am ajuns la destinație!" } }
    ]
  },
  2: {
    start: { x: 1, y: 3, dir: 0 }, walls: [{ x: 3, y: 2 }], beepers: [], goal: { x: 3, y: 1 },
    code: ["move();", "move();", "turnLeft();", "move();", "move();"],
    steps: [
      { line: 0, action: "move", text: { en: "Walk along the street...", el: "Περπατάμε στον δρόμο...", ro: "Mergem pe stradă..." } },
      { line: 1, action: "move", text: { en: "Reach the corner...", el: "Φτάνουμε στη γωνία...", ro: "Ajungem la colț..." } },
      { line: 2, action: "turnLeft", text: { en: "Turn Left to face North!", el: "Στρίβουμε αριστερά!", ro: "Virăm la stânga!" } },
      { line: 3, action: "move", text: { en: "Going up past the wall...", el: "Ανεβαίνουμε δίπλα στον τοίχο...", ro: "Urcăm pe lângă zid..." } },
      { line: 4, action: "move", text: { en: "Arrived safely!", el: "Φτάσαμε με ασφάλεια!", ro: "Am ajuns cu bine!" } }
    ]
  },
  3: {
    start: { x: 0, y: 2, dir: 0 }, walls: [], beepers: [{ x: 1, y: 2 }, { x: 2, y: 2 }], goal: { x: 4, y: 2 },
    code: ["move();", "pickBeeper();", "move();", "pickBeeper();", "move();", "move();", "putBeeper();"],
    steps: [
      { line: 0, action: "move", text: { en: "Move to first diamond...", el: "Πάμε στο πρώτο διαμάντι...", ro: "Mergem la primul diamant..." } },
      { line: 1, action: "pick", text: { en: "pickBeeper() -> Collected!", el: "pickBeeper() -> Το πήραμε!", ro: "pickBeeper() -> Am ridicat diamantul!" } },
      { line: 2, action: "move", text: { en: "Move to second diamond...", el: "Πάμε στο δεύτερο διαμάντι...", ro: "Mergem la al doilea diamant..." } },
      { line: 3, action: "pick", text: { en: "pickBeeper() -> Got both!", el: "pickBeeper() -> Πήραμε και τα δύο!", ro: "pickBeeper() -> Le-am luat pe ambele!" } },
      { line: 4, action: "move", text: { en: "Heading to base...", el: "Πάμε στη βάση...", ro: "Mergem spre bază..." } },
      { line: 5, action: "move", text: { en: "Almost there...", el: "Σχεδόν φτάσαμε...", ro: "Aproape am ajuns..." } },
      { line: 6, action: "put", text: { en: "putBeeper() -> Delivered!", el: "putBeeper() -> Παραδόθηκε!", ro: "putBeeper() -> Comoara a fost livrată!" } }
    ]
  },
  4: {
    start: { x: 1, y: 1, dir: 0 }, walls: [{ x: 2, y: 2 }], beepers: [], goal: { x: 3, y: 3 },
    code: ["move();", "turnRight(); // 3x turnLeft()", "move();", "move();", "turnLeft();", "move();"],
    steps: [
      { line: 0, action: "move", text: { en: "Move before turning right...", el: "Προχωράμε πριν στρίψουμε δεξιά...", ro: "Înaintăm înainte de viraj..." } },
      { line: 1, action: "turnRight", text: { en: "turnRight() = 3 left turns!", el: "turnRight() = 3 αριστερές στροφές!", ro: "turnRight() = 3 întoarceri la stânga!" } },
      { line: 2, action: "move", text: { en: "Going around the wall...", el: "Παρακάμπτουμε τον τοίχο...", ro: "Ocolim zidul..." } },
      { line: 3, action: "move", text: { en: "One more step down...", el: "Ένα βήμα ακόμα κάτω...", ro: "Încă un pas în jos..." } },
      { line: 4, action: "turnLeft", text: { en: "Turn Left toward the goal...", el: "Στρίβουμε αριστερά στον στόχο...", ro: "Virăm la stânga spre țintă..." } },
      { line: 5, action: "move", text: { en: "Mission complete!", el: "Η αποστολή ολοκληρώθηκε!", ro: "Misiune îndeplinită!" } }
    ]
  },
  5: {
    start: { x: 0, y: 2, dir: 0 }, walls: [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }], beepers: [], goal: { x: 4, y: 2 },
    code: ["for (let i = 0; i < 4; i++) {", "  move();", "  putBeeper();", "}"],
    steps: [
      { line: 1, action: "move", text: { en: "Loop 1/4: Step forward", el: "Επανάληψη 1/4: Βήμα μπροστά", ro: "Bucla 1/4: Pas înainte" } },
      { line: 2, action: "put", text: { en: "Loop 1/4: Place diamond", el: "Επανάληψη 1/4: Βάζουμε διαμάντι", ro: "Bucla 1/4: Punem diamant" } },
      { line: 1, action: "move", text: { en: "Loop 2/4: Step forward", el: "Επανάληψη 2/4: Βήμα μπροστά", ro: "Bucla 2/4: Pas înainte" } },
      { line: 2, action: "put", text: { en: "Loop 2/4: Place diamond", el: "Επανάληψη 2/4: Βάζουμε διαμάντι", ro: "Bucla 2/4: Punem diamant" } },
      { line: 1, action: "move", text: { en: "Loop 3/4: Step forward", el: "Επανάληψη 3/4: Βήμα μπροστά", ro: "Bucla 3/4: Pas înainte" } },
      { line: 2, action: "put", text: { en: "Loop 3/4: Place diamond", el: "Επανάληψη 3/4: Βάζουμε διαμάντι", ro: "Bucla 3/4: Punem diamant" } },
      { line: 1, action: "move", text: { en: "Loop 4/4: Reached end!", el: "Επανάληψη 4/4: Φτάσαμε!", ro: "Bucla 4/4: Am ajuns la capăt!" } }
    ]
  },
  6: {
    start: { x: 0, y: 2, dir: 0 }, walls: [], beepers: [{ x: 1, y: 2 }, { x: 3, y: 2 }], goal: { x: 4, y: 2 },
    code: ["move();", "if (beepersPresent()) {", "  pickBeeper();", "}", "move();"],
    steps: [
      { line: 0, action: "move", text: { en: "Step 1: Checking tile...", el: "Βήμα 1: Έλεγχος θέσης...", ro: "Pasul 1: Verificăm pătratul..." } },
      { line: 1, action: "none", text: { en: "Sensor: Diamond found! (TRUE)", el: "Αισθητήρας: Βρέθηκε διαμάντι!", ro: "Senzor: Diamant găsit! (ADEVĂRAT)" } },
      { line: 2, action: "pick", text: { en: "Picking up diamond!", el: "Μαζεύουμε το διαμάντι!", ro: "Ridicăm diamantul!" } },
      { line: 4, action: "move", text: { en: "Empty tile -> skip pickBeeper()", el: "Άδεια θέση -> προσπερνάμε", ro: "Pătrat gol -> mergem mai departe" } },
      { line: 0, action: "move", text: { en: "Next tile: Diamond found!", el: "Επόμενη θέση: Βρέθηκε διαμάντι!", ro: "Următorul pătrat: Diamant găsit!" } },
      { line: 2, action: "pick", text: { en: "Collected!", el: "Το μαζέψαμε!", ro: "Colectat!" } },
      { line: 4, action: "move", text: { en: "Street cleaned!", el: "Ο δρόμος καθαρίστηκε!", ro: "Strada a fost curățată!" } }
    ]
  },
  7: {
    start: { x: 0, y: 4, dir: 0 }, walls: [{ x: 4, y: 4 }, { x: 1, y: 2 }, { x: 2, y: 2 }], beepers: [], goal: { x: 3, y: 1 },
    code: ["while (frontIsClear()) {", "  move();", "}", "turnLeft();", "move();"],
    steps: [
      { line: 1, action: "move", text: { en: "frontIsClear() is TRUE -> move", el: "frontIsClear() -> προχωράμε", ro: "frontIsClear() e ADEVĂRAT -> mergem" } },
      { line: 1, action: "move", text: { en: "frontIsClear() is TRUE -> move", el: "frontIsClear() -> προχωράμε", ro: "frontIsClear() e ADEVĂRAT -> mergem" } },
      { line: 1, action: "move", text: { en: "Wall ahead! Loop stops.", el: "Τοίχος μπροστά! Σταματάμε.", ro: "Zid în față! Bucla se oprește." } },
      { line: 3, action: "turnLeft", text: { en: "Turn Left into clear hallway", el: "Στρίβουμε αριστερά στον διάδρομο", ro: "Virăm la stânga pe coridor" } },
      { line: 4, action: "move", text: { en: "Moving up...", el: "Ανεβαίνουμε...", ro: "Urcăm..." } },
      { line: 4, action: "move", text: { en: "Moving up...", el: "Ανεβαίνουμε...", ro: "Urcăm..." } },
      { line: 4, action: "move", text: { en: "Escaped the maze!", el: "Βγήκαμε από τον λαβύρινθο!", ro: "Am ieșit din labirint!" } }
    ]
  },
  8: {
    start: { x: 0, y: 4, dir: 3 }, walls: [{ x: 1, y: 3 }, { x: 2, y: 2 }], beepers: [{ x: 0, y: 1 }], goal: { x: 4, y: 1 },
    code: ["deliverPackage(); // Custom Mission", "pickBeeper();", "turnRight();", "while (frontIsClear()) { move(); }", "putBeeper();"],
    steps: [
      { line: 0, action: "move", text: { en: "Heading to warehouse...", el: "Πάμε στην αποθήκη...", ro: "Mergem spre depozit..." } },
      { line: 0, action: "move", text: { en: "Almost at package...", el: "Σχεδόν φτάσαμε στο δέμα...", ro: "Aproape de pachet..." } },
      { line: 0, action: "move", text: { en: "Package located!", el: "Εντοπίστηκε το δέμα!", ro: "Pachet localizat!" } },
      { line: 1, action: "pick", text: { en: "Package picked up!", el: "Πήραμε το δέμα!", ro: "Am preluat pachetul!" } },
      { line: 2, action: "turnRight", text: { en: "Turning East toward customer", el: "Στρίβουμε ανατολικά", ro: "Virăm spre client" } },
      { line: 3, action: "move", text: { en: "Delivering across city...", el: "Παράδοση στην πόλη...", ro: "Traversăm orașul..." } },
      { line: 3, action: "move", text: { en: "Delivering across city...", el: "Παράδοση στην πόλη...", ro: "Traversăm orașul..." } },
      { line: 3, action: "move", text: { en: "Arrived at address!", el: "Φτάσαμε στη διεύθυνση!", ro: "Am ajuns la adresă!" } },
      { line: 3, action: "move", text: { en: "At the doorstep!", el: "Στην πόρτα!", ro: "La ușă!" } },
      { line: 4, action: "put", text: { en: "City Delivery Complete!", el: "Η παράδοση ολοκληρώθηκε!", ro: "Livrare finalizată cu succes!" } }
    ]
  },

  // --- MODULUL 2: SCRATCH (9 - 14) ---
  9: {
    start: { x: 2, y: 2, dir: 0 }, walls: [], beepers: [], goal: { x: 4, y: 0 },
    code: ["when [Right Arrow] pressed -> change x by 10", "when [Up Arrow] pressed -> change y by 10", "go to x: 200 y: 150"],
    steps: [
      { line: 0, action: "move", text: { en: "X increases (+1): Moving Right", el: "Το X αυξάνεται: Δεξιά", ro: "X crește (+1): Mișcare la dreapta" } },
      { line: 0, action: "move", text: { en: "X increases (+1): Moving Right", el: "Το X αυξάνεται: Δεξιά", ro: "X crește (+1): Mișcare la dreapta" } },
      { line: 1, action: "face", dir: 3, text: { en: "Now changing Y coordinate...", el: "Αλλάζουμε συντεταγμένη Y...", ro: "Acum schimbăm coordonata Y..." } },
      { line: 1, action: "move", text: { en: "Y increases (+1): Moving Up", el: "Το Y αυξάνεται: Πάνω", ro: "Y crește (+1): Mișcare în sus" } },
      { line: 2, action: "move", text: { en: "Reached target (X, Y)!", el: "Φτάσαμε στις συντεταγμένες!", ro: "Am ajuns la coordonatele țintă!" } }
    ]
  },
  10: {
    start: { x: 1, y: 2, dir: 0 }, walls: [], beepers: [{ x: 3, y: 2 }], goal: { x: 3, y: 2 },
    code: ["when this sprite clicked:", "  play sound [Hello!]", "  say [Let's code!] for 2 secs"],
    steps: [
      { line: 0, action: "none", text: { en: "Mouse Click detected!", el: "Εντοπίστηκε κλικ!", ro: "Clic detectat pe personaj!" } },
      { line: 1, action: "move", text: { en: "Playing sound effect...", el: "Αναπαραγωγή ήχου...", ro: "Redăm efectul sonor..." } },
      { line: 2, action: "move", text: { en: "Karel says: 'Let's code!'", el: "Ο Karel λέει: 'Let's code!'", ro: "Karel spune: 'Let's code!'" } }
    ]
  },
  11: {
    start: { x: 2, y: 4, dir: 0 }, walls: [], beepers: [{ x: 1, y: 4 }, { x: 3, y: 4 }], goal: null,
    code: ["if <touching [Star]?> then", "  change [Score v] by 1", "  play sound [Collect]", "end"],
    steps: [
      { line: 0, action: "face", dir: 2, text: { en: "Moving basket left...", el: "Κινούμε το καλάθι αριστερά...", ro: "Mutăm coșul la stânga..." } },
      { line: 0, action: "move", text: { en: "Touching falling star!", el: "Αγγίξαμε το αστέρι!", ro: "Am atins steaua căzătoare!" } },
      { line: 1, action: "pick", text: { en: "Score = 1!", el: "Σκορ = 1!", ro: "Scor = 1!" } },
      { line: 0, action: "face", dir: 0, text: { en: "Moving right for next star...", el: "Πάμε δεξιά...", ro: "Mergem la dreapta..." } },
      { line: 0, action: "move", text: { en: "Moving...", el: "Κίνηση...", ro: "În mișcare..." } },
      { line: 0, action: "move", text: { en: "Caught second star!", el: "Πιάσαμε 2ο αστέρι!", ro: "Am prins a doua stea!" } },
      { line: 1, action: "pick", text: { en: "Score = 2! High Score!", el: "Σκορ = 2!", ro: "Scor = 2! Record nou!" } }
    ]
  },
  12: {
    start: { x: 2, y: 4, dir: 3 }, walls: [{ x: 2, y: 2 }, { x: 1, y: 1 }], beepers: [], goal: { x: 3, y: 0 },
    code: ["create clone of [Asteroid v]", "go to x: (pick random -200 to 200)", "glide 1 secs to dodge!"],
    steps: [
      { line: 0, action: "none", text: { en: "Asteroids spawning at random X!", el: "Εμφάνιση αστεροειδών!", ro: "Apar asteroizi la poziții aleatorii!" } },
      { line: 2, action: "face", dir: 0, text: { en: "Dodging right...", el: "Αποφυγή δεξιά...", ro: "Ocolim spre dreapta..." } },
      { line: 2, action: "move", text: { en: "Dodged asteroid 1!", el: "Αποφύγαμε τον 1ο!", ro: "Am evitat asteroidul 1!" } },
      { line: 2, action: "face", dir: 3, text: { en: "Flying forward...", el: "Πετάμε μπροστά...", ro: "Zburăm înainte..." } },
      { line: 2, action: "move", text: { en: "Past asteroid belt...", el: "Περάσαμε τη ζώνη...", ro: "Am trecut de centura de asteroizi..." } },
      { line: 2, action: "move", text: { en: "Clear space ahead...", el: "Καθαρός χώρος...", ro: "Spațiu liber înainte..." } },
      { line: 2, action: "move", text: { en: "Safe landing!", el: "Ασφαλής προσγείωση!", ro: "Aterizare reușită!" } }
    ]
  },
  13: {
    start: { x: 1, y: 2, dir: 0 }, walls: [], beepers: [], goal: null,
    code: ["repeat (4)", "  play drum (Snare) for 0.25 beats", "  next costume", "end"],
    steps: [
      { line: 1, action: "move", text: { en: "Beat 1: Drum + Step Right", el: "Ρυθμός 1: Τύμπανο + Βήμα", ro: "Bătaia 1: Tobă + Pas dreapta" } },
      { line: 2, action: "turnLeft", text: { en: "Beat 2: Spin Up!", el: "Ρυθμός 2: Στροφή πάνω!", ro: "Bătaia 2: Piruetă!" } },
      { line: 1, action: "move", text: { en: "Beat 3: Step Up!", el: "Ρυθμός 3: Βήμα πάνω!", ro: "Bătaia 3: Pas în sus!" } },
      { line: 2, action: "turnRight", text: { en: "Beat 4: Pose!", el: "Ρυθμός 4: Πόζα!", ro: "Bătaia 4: Poză finală!" } }
    ]
  },
  14: {
    start: { x: 0, y: 3, dir: 0 }, walls: [{ x: 2, y: 3 }], beepers: [{ x: 2, y: 1 }], goal: { x: 4, y: 3 },
    code: ["// Mini-Arcade Boss Level", "if <key [space] pressed?> then jump()", "broadcast [Level Complete!]"],
    steps: [
      { line: 0, action: "move", text: { en: "Running toward obstacle...", el: "Τρέχουμε προς το εμπόδιο...", ro: "Alergăm spre obstacol..." } },
      { line: 1, action: "face", dir: 3, text: { en: "SPACE pressed -> JUMP!", el: "SPACE -> ΑΛΜΑ!", ro: "SPACE apăsat -> SĂRITURĂ!" } },
      { line: 1, action: "move", text: { en: "Jumping over wall...", el: "Πηδάμε πάνω από τον τοίχο...", ro: "Sărim peste zid..." } },
      { line: 1, action: "move", text: { en: "Grabbing bonus star!", el: "Πιάνουμε το μπόνους αστέρι!", ro: "Prindem steaua bonus!" } },
      { line: 1, action: "pick", text: { en: "+100 Bonus Points!", el: "+100 Πόντοι!", ro: "+100 Puncte Bonus!" } },
      { line: 1, action: "face", dir: 0, text: { en: "Landing across...", el: "Προσγείωση...", ro: "Aterizăm dincolo..." } },
      { line: 1, action: "move", text: { en: "Moving to finish...", el: "Προς τον τερματισμό...", ro: "Spre linia de sosire..." } },
      { line: 1, action: "move", text: { en: "Almost there...", el: "Σχεδόν φτάσαμε...", ro: "Aproape gata..." } },
      { line: 2, action: "face", dir: 1, text: { en: "Landing on finish flag!", el: "Σημαία τερματισμού!", ro: "Aterizare pe steag!" } },
      { line: 2, action: "move", text: { en: "Landing...", el: "Προσγείωση...", ro: "Aterizare..." } },
      { line: 2, action: "move", text: { en: "LEVEL COMPLETE!", el: "ΕΠΙΠΕΔΟ ΟΛΟΚΛΗΡΩΘΗΚΕ!", ro: "NIVEL COMPLET!" } }
    ]
  },

  // --- MODULUL 3: BBC MICRO:BIT (15 - 16) ---
  15: {
    start: { x: 2, y: 2, dir: 3 }, walls: [], beepers: [], goal: { x: 2, y: 2 },
    code: ["input.onButtonPressed(Button.A, () => {", "  basic.showIcon(IconNames.Heart)", "})"],
    steps: [
      { line: 0, action: "none", text: { en: "Pressing Button A on micro:bit...", el: "Πατάμε το κουμπί A...", ro: "Apăsăm butonul A pe micro:bit..." } },
      { line: 1, action: "put", text: { en: "LED Matrix lights up: Heart!", el: "Τα LED ανάβουν: Καρδιά!", ro: "Matricea LED se aprinde: Inimă!" } }
    ]
  },
  16: {
    start: { x: 2, y: 2, dir: 3 }, walls: [], beepers: [], goal: null,
    code: ["input.onGesture(Gesture.Shake, () => {", "  let dice = randint(1, 6)", "  basic.showNumber(dice)", "})"],
    steps: [
      { line: 0, action: "turnLeft", text: { en: "Shaking micro:bit...", el: "Κουνάμε το micro:bit...", ro: "Scuturăm placa micro:bit..." } },
      { line: 0, action: "turnRight", text: { en: "Accelerometer triggered!", el: "Ενεργοποιήθηκε το επιταχυνσιόμετρο!", ro: "Senzor de mișcare activat!" } },
      { line: 1, action: "none", text: { en: "Picking random number 1..6...", el: "Τυχαίος αριθμός 1..6...", ro: "Alegem număr aleatoriu 1..6..." } },
      { line: 2, action: "put", text: { en: "Rolled a 6! You win!", el: "Έφερε 6! Κέρδισες!", ro: "A ieșit 6! Ai câștigat!" } }
    ]
  },
     // --- MODULUL 3: BBC MICRO:BIT SENZORI & RADIO (17 - 22) ---
  17: {
    start: { x: 2, y: 2, dir: 3 }, walls: [], beepers: [], goal: null,
    code: ["if (input.lightLevel() < 50) {", "  basic.showIcon(IconNames.SmallSquare)", "} else {", "  basic.clearScreen()", "}"],
    steps: [
      { line: 0, action: "none", text: { en: "Room is bright (lightLevel = 180)", el: "Το δωμάτιο έχει φως (180)", ro: "Camera e luminată (lightLevel = 180)" } },
      { line: 0, action: "none", text: { en: "Covering sensor with hands -> Dark!", el: "Καλύπτουμε τον αισθητήρα -> Σκοτάδι!", ro: "Acoperim senzorul cu palmele -> Întuneric!" } },
      { line: 1, action: "put", text: { en: "Night Light ON automatically!", el: "Το φως νυκτός άναψε αυτόματα!", ro: "Lampa de noapte s-a aprins automat!" } }
    ]
  },
  18: {
    start: { x: 2, y: 2, dir: 0 }, walls: [], beepers: [], goal: { x: 2, y: 0 },
    code: ["let deg = input.compassHeading()", "if (deg < 45 || deg > 315) {", "  basic.showString(\"N\")", "}"],
    steps: [
      { line: 0, action: "turnRight", text: { en: "Rotating South (180°)...", el: "Περιστροφή Νότια (180°)...", ro: "Rotire spre Sud (180°)..." } },
      { line: 0, action: "turnRight", text: { en: "Rotating West (270°)...", el: "Περιστροφή Δυτικά (270°)...", ro: "Rotire spre Vest (270°)..." } },
      { line: 1, action: "face", dir: 3, text: { en: "Heading 0° -> North found!", el: "0° -> Βρέθηκε ο Βορράς!", ro: "0° -> Am găsit Nordul!" } },
      { line: 2, action: "move", text: { en: "Displaying 'N' & walking North!", el: "Εμφάνιση 'N' και πορεία Βόρεια!", ro: "Afișăm 'N' și mergem spre Nord!" } }
    ]
  },
  19: {
    start: { x: 0, y: 2, dir: 0 }, walls: [], beepers: [], goal: { x: 4, y: 2 },
    code: ["let steps = 0", "input.onGesture(Gesture.Shake, () => {", "  steps += 1", "  basic.showNumber(steps)", "})"],
    steps: [
      { line: 2, action: "move", text: { en: "Step 1 counted! (steps = 1)", el: "Βήμα 1! (steps = 1)", ro: "Pasul 1 numărat! (steps = 1)" } },
      { line: 2, action: "move", text: { en: "Step 2 counted! (steps = 2)", el: "Βήμα 2! (steps = 2)", ro: "Pasul 2 numărat! (steps = 2)" } },
      { line: 2, action: "move", text: { en: "Step 3 counted! (steps = 3)", el: "Βήμα 3! (steps = 3)", ro: "Pasul 3 numărat! (steps = 3)" } },
      { line: 3, action: "move", text: { en: "Step 4! Goal reached!", el: "Βήμα 4! Φτάσαμε στον στόχο!", ro: "Pasul 4! Obiectiv atins!" } }
    ]
  },
  20: {
    start: { x: 0, y: 2, dir: 0 }, walls: [{ x: 2, y: 1 }, { x: 2, y: 3 }], beepers: [], goal: { x: 4, y: 2 },
    code: ["radio.setGroup(7)", "input.onButtonPressed(Button.A, () => {", "  radio.sendString(\"HELLO\")", "})"],
    steps: [
      { line: 0, action: "none", text: { en: "Both micro:bits tuned to Radio Group 7", el: "Συντονισμός στην ομάδα Radio 7", ro: "Ambele plăci setate pe Radio Group 7" } },
      { line: 2, action: "put", text: { en: "Sending wireless signal...", el: "Αποστολή ασύρματου σήματος...", ro: "Trimitem semnalul wireless..." } },
      { line: 2, action: "move", text: { en: "Signal traveling across room...", el: "Το σήμα ταξιδεύει...", ro: "Semnalul traversează sala..." } },
      { line: 2, action: "move", text: { en: "Signal traveling across room...", el: "Το σήμα ταξιδεύει...", ro: "Semnalul traversează sala..." } },
      { line: 2, action: "move", text: { en: "Signal traveling across room...", el: "Το σήμα ταξιδεύει...", ro: "Semnalul traversează sala..." } },
      { line: 2, action: "move", text: { en: "Friend received 'HELLO'!", el: "Ο φίλος έλαβε 'HELLO'!", ro: "Colegul a primit mesajul 'HELLO'!" } }
    ]
  },
  21: {
    start: { x: 2, y: 2, dir: 3 }, walls: [], beepers: [{ x: 2, y: 2 }], goal: null,
    code: ["if (input.isGesture(Gesture.TiltUp)) {", "  radio.sendNumber(911) // INTRUDER!", "  music.playTone(988, 500)", "}"],
    steps: [
      { line: 0, action: "none", text: { en: "Treasure box closed & armed...", el: "Το κουτί είναι κλειστό...", ro: "Cutia cu comori este închisă și armată..." } },
      { line: 0, action: "turnLeft", text: { en: "Someone lifted the lid!", el: "Κάποιος άνοιξε το καπάκι!", ro: "Cineva a ridicat capacul!" } },
      { line: 1, action: "pick", text: { en: "ALARM! Sending Radio Alert 911!", el: "ΣΥΝΑΓΕΡΜΟΣ! Σήμα 911!", ro: "ALARMĂ! Trimitem alerta radio 911!" } },
      { line: 2, action: "put", text: { en: "Siren active!", el: "Η σειρήνα χτυπά!", ro: "Sirena a pornit!" } }
    ]
  },
  22: {
    start: { x: 1, y: 2, dir: 0 }, walls: [], beepers: [], goal: { x: 3, y: 2 },
    code: ["// Smart Reaction Gadget", "basic.pause(randint(1000, 3000))", "basic.showIcon(IconNames.Target)", "if (input.buttonIsPressed(Button.A)) { win() }"],
    steps: [
      { line: 1, action: "none", text: { en: "Get ready... Wait for signal...", el: "Ετοιμαστείτε... Περιμένετε...", ro: "Pregătiți-vă... Așteptați semnalul..." } },
      { line: 2, action: "put", text: { en: "GO! Target appeared!", el: "ΠΑΜΕ! Εμφανίστηκε ο στόχος!", ro: "START! A apărut ținta!" } },
      { line: 3, action: "move", text: { en: "Fast reaction! Player 1 scores!", el: "Γρήγορη αντίδραση! Πόντος!", ro: "Reacție fulger! Punct câștigat!" } },
      { line: 3, action: "move", text: { en: "Gadget test passed!", el: "Επιτυχής δοκιμή!", ro: "Testul gadgetului a reușit!" } }
    ]
  },

  // --- MODULUL 4: PHYSICAL ROBOTS (23 - 30) ---
  23: {
    start: { x: 0, y: 2, dir: 0 }, walls: [], beepers: [], goal: { x: 4, y: 2 },
    code: ["robot.motorLeft(80)", "robot.motorRight(80)", "basic.pause(2000)", "robot.stop()"],
    steps: [
      { line: 0, action: "move", text: { en: "Left & Right motors at 80% power", el: "Μοτέρ στο 80% ισχύ", ro: "Motoarele stânga/dreapta la 80%" } },
      { line: 1, action: "move", text: { en: "Driving straight...", el: "Κίνηση ευθεία...", ro: "Mers în linie dreaptă..." } },
      { line: 2, action: "move", text: { en: "Driving straight...", el: "Κίνηση ευθεία...", ro: "Mers în linie dreaptă..." } },
      { line: 3, action: "move", text: { en: "1 meter reached -> robot.stop()", el: "1 μέτρο -> robot.stop()", ro: "1 metru parcurs -> robot.stop()" } }
    ]
  },
  24: {
    start: { x: 1, y: 3, dir: 3 }, walls: [{ x: 2, y: 2 }], beepers: [], goal: { x: 3, y: 1 },
    code: ["driveForward(1000)", "turnRight90()", "driveForward(1000)", "parkInGarage()"],
    steps: [
      { line: 0, action: "move", text: { en: "Driving to corner...", el: "Οδήγηση στη γωνία...", ro: "Conducem până la colț..." } },
      { line: 0, action: "move", text: { en: "At corner...", el: "Στη γωνία...", ro: "Am ajuns la colț..." } },
      { line: 1, action: "turnRight", text: { en: "Executing 90-degree turn", el: "Στροφή 90 μοιρών", ro: "Viraj precis la 90°" } },
      { line: 2, action: "move", text: { en: "Approaching garage...", el: "Πλησιάζουμε το γκαράζ...", ro: "Ne apropiem de garaj..." } },
      { line: 3, action: "move", text: { en: "Parked perfectly!", el: "Παρκάραμε τέλεια!", ro: "Parcare perfectă în garaj!" } }
    ]
  },
  25: {
    start: { x: 0, y: 3, dir: 0 }, walls: [{ x: 2, y: 3 }, { x: 2, y: 1 }], beepers: [], goal: { x: 4, y: 2 },
    code: ["// Radio Tilt Controller", "if (tiltForward) { drive() }", "if (tiltLeft) { steerLeft() }", "if (tiltRight) { steerRight() }"],
    steps: [
      { line: 1, action: "move", text: { en: "Tilted forward -> Driving!", el: "Κλίση μπροστά -> Κίνηση!", ro: "Înclinat înainte -> Pornire!" } },
      { line: 2, action: "turnLeft", text: { en: "Tilted left -> Steering around cone", el: "Κλίση αριστερά -> Στροφή", ro: "Înclinat stânga -> Ocolim conul" } },
      { line: 1, action: "move", text: { en: "Passing slalom cone...", el: "Περνάμε τον κώνο...", ro: "Trecem de primul con..." } },
      { line: 3, action: "turnRight", text: { en: "Tilted right -> Steering East", el: "Κλίση δεξιά -> Στροφή", ro: "Înclinat dreapta -> Redresare" } },
      { line: 1, action: "move", text: { en: "Slalom driving...", el: "Οδήγηση σλάλομ...", ro: "Conducere în slalom..." } },
      { line: 1, action: "move", text: { en: "Slalom driving...", el: "Οδήγηση σλάλομ...", ro: "Conducere în slalom..." } },
      { line: 1, action: "move", text: { en: "Slalom course cleared!", el: "Ολοκληρώθηκε το σλάλομ!", ro: "Traseu slalom finalizat!" } }
    ]
  },
  26: {
    start: { x: 0, y: 2, dir: 0 }, walls: [{ x: 3, y: 2 }], beepers: [], goal: { x: 3, y: 0 },
    code: ["let dist = robot.ultrasonicCm()", "if (dist < 15) {", "  robot.turnLeft()", "} else { robot.forward() }"],
    steps: [
      { line: 3, action: "move", text: { en: "dist = 45 cm -> Path clear", el: "απόσταση = 45 εκ. -> Ελεύθερο", ro: "dist = 45 cm -> Drum liber" } },
      { line: 0, action: "move", text: { en: "dist = 12 cm -> WALL DETECTED!", el: "απόσταση = 12 εκ. -> ΤΟΙΧΟΣ!", ro: "dist = 12 cm -> ZID DETECTAT!" } },
      { line: 2, action: "turnLeft", text: { en: "Auto-turning away from wall!", el: "Αυτόματη στροφή!", ro: "Viraj automat pentru evitare!" } },
      { line: 3, action: "move", text: { en: "dist = 60 cm -> Safe to drive!", el: "απόσταση = 60 εκ. -> Ασφαλές!", ro: "dist = 60 cm -> Drum sigur!" } },
      { line: 3, action: "move", text: { en: "Obstacle avoided autonomously!", el: "Αποφυγή εμποδίου επιτυχής!", ro: "Obstacol evitat autonom!" } }
    ]
  },
  27: {
    start: { x: 0, y: 4, dir: 0 }, walls: [], beepers: [], goal: { x: 4, y: 1 },
    code: ["if (leftIR == BLACK && rightIR == WHITE) {", "  steerLeft()", "} else { followLine() }"],
    steps: [
      { line: 2, action: "move", text: { en: "Following black track...", el: "Ακολουθούμε τη μαύρη γραμμή...", ro: "Urmărim linia neagră..." } },
      { line: 2, action: "move", text: { en: "Following black track...", el: "Ακολουθούμε τη μαύρη γραμμή...", ro: "Urmărim linia neagră..." } },
      { line: 1, action: "turnLeft", text: { en: "Curve detected -> Adjusting motors", el: "Στροφή -> Διόρθωση μοτέρ", ro: "Curbă detectată -> Ajustăm motoarele" } },
      { line: 2, action: "move", text: { en: "Climbing curve...", el: "Ανεβαίνουμε τη στροφή...", ro: "Urcăm pe curbă..." } },
      { line: 2, action: "move", text: { en: "Climbing curve...", el: "Ανεβαίνουμε τη στροφή...", ro: "Urcăm pe curbă..." } },
      { line: 2, action: "move", text: { en: "Track completed!", el: "Η διαδρομή ολοκληρώθηκε!", ro: "Traseu parcurs cu succes!" } }
    ]
  },
  28: {
    start: { x: 0, y: 3, dir: 0 }, walls: [{ x: 2, y: 3 }], beepers: [{ x: 4, y: 2 }], goal: { x: 4, y: 2 },
    code: ["avoidObstacle()", "if (targetFound()) {", "  sirenOn()", "  radio.sendString(\"RESCUED\")", "}"],
    steps: [
      { line: 0, action: "move", text: { en: "Scanning rescue zone...", el: "Σάρωση ζώνης διάσωσης...", ro: "Scanăm zona de salvare..." } },
      { line: 0, action: "turnLeft", text: { en: "Debris ahead -> Going around", el: "Εμπόδιο -> Παράκαμψη", ro: "Obstacol în față -> Ocolim" } },
      { line: 0, action: "move", text: { en: "Moving around debris...", el: "Παράκαμψη...", ro: "Ocolim obstacolul..." } },
      { line: 0, action: "turnRight", text: { en: "Back on rescue heading", el: "Επιστροφή στην πορεία", ro: "Revenim pe direcția de salvare" } },
      { line: 0, action: "move", text: { en: "Approaching target...", el: "Πλησιάζουμε τον στόχο...", ro: "Ne apropiem de țintă..." } },
      { line: 0, action: "move", text: { en: "Approaching target...", el: "Πλησιάζουμε τον στόχο...", ro: "Ne apropiem de țintă..." } },
      { line: 2, action: "move", text: { en: "Target reached! Siren ON!", el: "Φτάσαμε! Σειρήνα ON!", ro: "Țintă atinsă! Sirenă pornită!" } },
      { line: 3, action: "pick", text: { en: "Radio sent: 'RESCUED'!", el: "Μήνυμα: 'RESCUED'!", ro: "Mesaj radio trimis: 'RESCUED'!" } }
    ]
  },
  29: {
    start: { x: 0, y: 0, dir: 0 }, walls: [{ x: 1, y: 1 }, { x: 3, y: 3 }], beepers: [{ x: 2, y: 2 }], goal: { x: 4, y: 4 },
    code: ["// Final Project Test Run", "calibrateSensors()", "runFullMission()", "verifyZeroCrashes()"],
    steps: [
      { line: 1, action: "move", text: { en: "Test Run 1/3: Sensors calibrated", el: "Δοκιμή 1/3: Αισθητήρες OK", ro: "Test 1/3: Senzori calibrați" } },
      { line: 2, action: "move", text: { en: "Navigating test course...", el: "Πλοήγηση στην πίστα...", ro: "Navigăm pe traseul de test..." } },
      { line: 2, action: "turnRight", text: { en: "Smooth cornering...", el: "Ομαλή στροφή...", ro: "Viraj lin..." } },
      { line: 2, action: "move", text: { en: "Checking checkpoint...", el: "Έλεγχος σημείου...", ro: "Verificăm punctul de control..." } },
      { line: 2, action: "move", text: { en: "Checkpoint passed!", el: "Πέρασε το σημείο!", ro: "Punct de control trecut!" } },
      { line: 2, action: "turnLeft", text: { en: "Final straight...", el: "Τελική ευθεία...", ro: "Linia dreaptă finală..." } },
      { line: 2, action: "move", text: { en: "Almost at finish...", el: "Σχεδόν στον τερματισμό...", ro: "Aproape de final..." } },
      { line: 3, action: "move", text: { en: "Zero crashes! Ready for Demo Day!", el: "Καμία σύγκρουση! Έτοιμοι!", ro: "Zero erori! Gata pentru Demo Day!" } }
    ]
  },
  30: {
    start: { x: 0, y: 2, dir: 0 }, walls: [], beepers: [{ x: 2, y: 2 }], goal: { x: 4, y: 2 },
    code: ["// DEMO DAY & GRADUATION!", "presentToParents()", "celebrate30Hours()", "awardDiploma(\"LAB-K30\")"],
    steps: [
      { line: 1, action: "move", text: { en: "Presenting robot to parents!", el: "Παρουσίαση στους γονείς!", ro: "Prezentăm robotul părinților!" } },
      { line: 2, action: "move", text: { en: "Collecting graduation trophy!", el: "Παραλαβή τροπαίου!", ro: "Ridicăm trofeul de absolvire!" } },
      { line: 2, action: "pick", text: { en: "30 Hours Completed!", el: "30 Ώρες Ολοκληρώθηκαν!", ro: "30 de Ore Finalizate!" } },
      { line: 3, action: "move", text: { en: "Moving to podium...", el: "Προς το βάθρο...", ro: "Mergem spre podium..." } },
      { line: 3, action: "move", text: { en: "CONGRATULATIONS GRADUATES!", el: "ΣΥΓΧΑΡΗΤΗΡΙΑ ΑΠΟΦΟΙΤΟΙ!", ro: "FELICITĂRI ABSOLVENȚILOR!" } }
    ]
  }
};
