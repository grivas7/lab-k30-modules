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
  {
    id: 1,
    module: 1,
    tag: "Laptop & Karel",
    title: {
      en: "Meet Your Machine & Meet Karel",
      el: "Γνώρισε τον Υπολογιστή σου & τον Karel",
      ro: "Cunoaște-ți Laptopul și pe Robotul Karel"
    },
    desc: {
      en: "Learn how to open, control, and shut down a laptop safely, find key buttons (Arrows, Enter, Space), and give Karel his first commands.",
      el: "Μαθαίνουμε πώς ανοίγουμε και χειριζόμαστε σωστά το laptop (Arrows, Enter, Space) και δίνουμε στον Karel τις πρώτες του εντολές.",
      ro: "Învățăm cum pornim, controlăm și închidem corect laptopul (Arrows, Enter, Space) și îi dăm lui Karel primele sale comenzi."
    },
    explorer: {
      en: "Practice Left Click, Arrow keys, and guide Karel 3 steps forward using visual commands.",
      el: "Εξάσκηση στο Left Click, τα βελάκια και καθοδήγηση του Karel 3 βήματα μπροστά.",
      ro: "Exersăm Left Click, tastele săgeți și îl ghidăm pe Karel 3 pași înainte folosind comenzi vizuale."
    },
    builder: {
      en: "Navigate the keyboard without looking, type move() commands, and solve a 5-step path.",
      el: "Πληκτρολόγηση των εντολών move() και επίλυση διαδρομής 5 βημάτων.",
      ro: "Tastăm comenzile move() și rezolvăm un traseu de 5 pași fără să lovim pereții."
    }
  },
  {
    id: 2,
    module: 1,
    tag: "Karel Logic",
    title: {
      en: "Karel's First Walk (move & turnLeft)",
      el: "Η Πρώτη Βόλτα του Karel (move & turnLeft)",
      ro: "Prima Plimbare a lui Karel (move & turnLeft)"
    },
    desc: {
      en: "Understand spatial orientation from the robot's perspective and navigate corners safely using move() and turnLeft().",
      el: "Κατανοούμε τον προσανατολισμό από τη σκοπιά του ρομπότ και στρίβουμε στις γωνίες με move() και turnLeft().",
      ro: "Înțelegem orientarea în spațiu din perspectiva robotului și luăm virajele folosind move() și turnLeft()."
    },
    explorer: {
      en: "Help Karel reach the green square with 1 left turn using step-by-step cards and keys.",
      el: "Βοηθάμε τον Karel να φτάσει στο πράσινο τετράγωνο με 1 αριστερή στροφή.",
      ro: "Îl ajutăm pe Karel să ajungă la pătratul verde cu un viraj la stânga."
    },
    builder: {
      en: "Complete an L-shaped and U-shaped corridor using exact move() and turnLeft() instructions.",
      el: "Ολοκληρώνουμε διαδρόμους σχήματος L και U γράφοντας τις εντολές move() και turnLeft().",
      ro: "Parcurgem un coridor în formă de L și U scriind exact instrucțiunile move() și turnLeft()."
    }
  },
  {
    id: 3,
    module: 1,
    tag: "Karel Actions",
    title: {
      en: "Treasure Hunter (pickBeeper & putBeeper)",
      el: "Κυνηγός Θησαυρών (pickBeeper & putBeeper)",
      ro: "Vânătorul de Comori (pickBeeper & putBeeper)"
    },
    desc: {
      en: "Teach Karel to interact with objects on the grid: picking up diamonds and placing them on target spots.",
      el: "Μαθαίνουμε στον Karel να μαζεύει διαμάντια (pickBeeper) και να τα τοποθετεί στον στόχο (putBeeper).",
      ro: "Îl învățăm pe Karel să culeagă obiecte de pe hartă (pickBeeper) și să le așeze la destinație (putBeeper)."
    },
    explorer: {
      en: "Collect 2 diamonds along a straight street and drop them at Karel's home base.",
      el: "Μαζεύουμε 2 διαμάντια σε ευθεία διαδρομή και τα αφήνουμε στη βάση.",
      ro: "Culegem 2 diamante de pe o stradă dreaptă și le lăsăm la baza lui Karel."
    },
    builder: {
      en: "Collect 3 scattered beepers around corners and build a tower of 3 beepers at the finish.",
      el: "Μαζεύουμε 3 διασκορπισμένα beepers και φτιάχνουμε έναν πύργο 3 επιπέδων.",
      ro: "Colectăm 3 comori împrăștiate după colțuri și construim un turn din toate 3 la final."
    }
  },
  {
    id: 4,
    module: 1,
    tag: "Functions",
    title: {
      en: "Teaching Karel New Words (turnRight)",
      el: "Μαθαίνουμε Νέες Λέξεις στον Karel (turnRight)",
      ro: "Îl Învățăm pe Karel Cuvinte Noi (turnRight)"
    },
    desc: {
      en: "Karel only knows how to turn left! Discover how programmers invent new commands (Functions) like turnRight().",
      el: "Ο Karel ξέρει να στρίβει μόνο αριστερά! Ανακαλύπτουμε πώς φτιάχνουμε νέες εντολές (Functions) όπως η turnRight().",
      ro: "Karel știe să facă doar stânga! Descoperim cum inventează programatorii comenzi noi (Funcții) precum turnRight()."
    },
    explorer: {
      en: "Act out 3 left turns physically to see how it equals 1 right turn, then guide Karel right.",
      el: "Κάνουμε 3 αριστερές στροφές στην τάξη για να δούμε πώς γίνονται 1 δεξιά στροφή.",
      ro: "Facem fizic 3 întoarceri la stânga în clasă ca să vedem cum obținem dreapta, apoi îl ghidăm pe Karel."
    },
    builder: {
      en: "Define function turnRight() once and use it to navigate a staircase map.",
      el: "Ορίζουμε τη συνάρτηση turnRight() μία φορά και ανεβαίνουμε μια σκάλα.",
      ro: "Definim funcția turnRight() o singură dată și o folosim ca să urcăm o scară."
    }
  }
];

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  const t = uiTranslations[lang];
  document.getElementById("site-title").textContent = t.title;
  document.getElementById("site-subtitle").textContent = t.subtitle;
  document.getElementById("intro-text").textContent = t.intro;
  document.getElementById("btn-all").textContent = t.all;
  document.getElementById("lbl-explorer").textContent = t.explorer;
  document.getElementById("lbl-builder").textContent = t.builder;
  document.getElementById("lbl-video").textContent = t.video;

  renderLessons();
}

function filterModule(mod, btnElement) {
  currentFilter = mod;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btnElement.classList.add("active");
  renderLessons();
}

function renderLessons() {
  const grid = document.getElementById("lessons-grid");
  const t = uiTranslations[currentLang];
  grid.innerHTML = "";

  const filtered = currentFilter === "all"
    ? lessonsData
    : lessonsData.filter(l => l.module === currentFilter);

  filtered.forEach(lesson => {
    const card = document.createElement("article");
    card.className = "lesson-card";
    card.onclick = () => openLessonModal(lesson);
    card.innerHTML = `
      <div>
        <div class="card-top">
          <span class="lesson-num">${t.lessonPrefix} ${String(lesson.id).padStart(2, "0")}</span>
          <span class="badge">${lesson.tag}</span>
        </div>
        <h3>${lesson.title[currentLang]}</h3>
        <p>${lesson.desc[currentLang]}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openLessonModal(lesson) {
  const t = uiTranslations[currentLang];
  document.getElementById("modal-badge").textContent = `Module ${lesson.module} • ${lesson.tag}`;
  document.getElementById("modal-title").textContent = `${t.lessonPrefix} ${lesson.id}: ${lesson.title[currentLang]}`;
  document.getElementById("modal-desc").textContent = lesson.desc[currentLang];
  document.getElementById("modal-explorer").textContent = lesson.explorer[currentLang];
  document.getElementById("modal-builder").textContent = lesson.builder[currentLang];
  document.getElementById("lesson-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("lesson-modal").classList.add("hidden");
}

function closeModalOnBackdrop(e) {
  if (e.target.id === "lesson-modal") closeModal();
}

// Initial render
setLanguage("en");