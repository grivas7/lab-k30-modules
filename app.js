let currentLang = "en";
let currentFilter = "all";
let activeLesson = null;
let demoTimer = null;

const uiTranslations = {
  en: {
    title: "Logic & Robotics Lab",
    subtitle: "30-Hour Interactive Curriculum (Ages 5+)",
    intro: "Welcome to our hands-on coding & robotics lab! Core technical terms stay in English so young learners build real IT fluency from day one.",
    all: "All (30)",
    explorer: "Explorer (Ages 5–7)",
    builder: "Builder (Ages 8+)",
    video: "Interactive Lesson Preview",
    lessonPrefix: "Lesson"
  },
  el: {
    title: "Εργαστήριο Λογικής & Ρομποτικής",
    subtitle: "Διαδραστικό Πρόγραμμα 30 Ωρών (Ηλικίες 5+)",
    intro: "Καλώς ήρθατε στο εργαστήριο προγραμματισμού και ρομποτικής! Οι βασικοί όροι παραμένουν στα Αγγλικά ώστε τα παιδιά να εξοικειωθούν με τη γλώσσα της πληροφορικής από την πρώτη μέρα.",
    all: "Όλα (30)",
    explorer: "Explorer (5–7 ετών)",
    builder: "Builder (8+ ετών)",
    video: "Διαδραστική Παρουσίαση Μαθήματος",
    lessonPrefix: "Μάθημα"
  },
  ro: {
    title: "Laborator de Logică & Robotică",
    subtitle: "Programă Interactivă de 30 de Ore (Vârsta 5+)",
    intro: "Bine ați venit în laboratorul nostru de programare și robotică! Termenii tehnici de bază rămân în engleză pentru ca cei mici să se obișnuiască natural cu limbajul IT încă din prima zi.",
    all: "Toate (30)",
    explorer: "Explorer (5–7 ani)",
    builder: "Builder (8+ ani)",
    video: "Prezentare Animată a Lecției",
    lessonPrefix: "Lecția"
  }
};

// Scenarii animate pentru fiecare lecție (hartă 5x5 + pași sincronizați cu liniile de cod)

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
  if (activeLesson && !document.getElementById("lesson-modal").classList.contains("hidden")) {
    openLessonModal(activeLesson);
  }
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

  if (typeof lessonsData === "undefined") return;

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
  activeLesson = lesson;
  const t = uiTranslations[currentLang];
  document.getElementById("modal-badge").textContent = `Module ${lesson.module} • ${lesson.tag}`;
  document.getElementById("modal-title").textContent = `${t.lessonPrefix} ${lesson.id}: ${lesson.title[currentLang]}`;
  document.getElementById("modal-desc").textContent = lesson.desc[currentLang];
  document.getElementById("modal-explorer").textContent = lesson.explorer[currentLang];
  document.getElementById("modal-builder").textContent = lesson.builder[currentLang];
  document.getElementById("lesson-modal").classList.remove("hidden");

  startLessonDemo(lesson.id);
}

function replayLessonDemo() {
  if (activeLesson) startLessonDemo(activeLesson.id);
}

function startLessonDemo(lessonId) {
  if (demoTimer) clearInterval(demoTimer);

  const allDemos = (typeof lessonDemos !== "undefined") ? lessonDemos : {};
  const demo = allDemos[lessonId] || allDemos[1];
  const codeBox = document.getElementById("karel-code-box");
  const caption = document.getElementById("karel-caption");

  // Randăm liniile de cod jos
  codeBox.innerHTML = demo.code
    .map((line, idx) => `<div class="code-line" id="code-line-${idx}">${line}</div>`)
    .join("");

  // Stare inițială robot
  let state = {
    x: demo.start.x,
    y: demo.start.y,
    dir: demo.start.dir,
    beepers: demo.beepers.map(b => ({ ...b })),
    dropped: []
  };

  drawGrid(demo, state);
  caption.textContent = "Starting simulation...";

  let stepIndex = 0;
  demoTimer = setInterval(() => {
    if (stepIndex >= demo.steps.length) {
      clearInterval(demoTimer);
      return;
    }

    const step = demo.steps[stepIndex];

    // Evidențiem linia de cod curentă
    document.querySelectorAll(".code-line").forEach(el => el.classList.remove("active"));
    const activeLineEl = document.getElementById(`code-line-${step.line}`);
    if (activeLineEl) activeLineEl.classList.add("active");

    // Executăm acțiunea robotului
    if (step.action === "move") {
      if (state.dir === 0 && state.x < 4) state.x++;
      else if (state.dir === 1 && state.y < 4) state.y++;
      else if (state.dir === 2 && state.x > 0) state.x--;
      else if (state.dir === 3 && state.y > 0) state.y--;
    } else if (step.action === "turnLeft") {
      state.dir = (state.dir + 3) % 4;
    } else if (step.action === "turnRight") {
      state.dir = (state.dir + 1) % 4;
    } else if (step.action === "pick") {
      state.beepers = state.beepers.filter(b => !(b.x === state.x && b.y === state.y));
    } else if (step.action === "put") {
      state.dropped.push({ x: state.x, y: state.y });
    } else if (step.action === "face") {
      state.dir = step.dir;
    }
    caption.textContent = step.text[currentLang] || step.text.en;
    drawGrid(demo, state);
    stepIndex++;
  }, 1100);
}

function drawGrid(demo, state) {
  const gridEl = document.getElementById("karel-grid");
  gridEl.innerHTML = "";
  const angles = [0, 90, 180, -90];

  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      const cell = document.createElement("div");
      cell.className = "grid-cell";

      const isWall = demo.walls.some(w => w.x === x && w.y === y);
      const isGoal = demo.goal && demo.goal.x === x && demo.goal.y === y;
      const hasBeeper = state.beepers.some(b => b.x === x && b.y === y);
      const hasDropped = state.dropped.some(d => d.x === x && d.y === y);

      if (isWall) {
        cell.classList.add("wall");
        cell.textContent = "🧱";
      } else {
        if (isGoal) cell.classList.add("goal");
        if (hasBeeper || hasDropped) cell.textContent = "💎";
      }

      if (state.x === x && state.y === y) {
        cell.innerHTML = `<img src="karel-mascot.png" alt="Karel" class="karel-sprite" style="transform: rotate(${angles[state.dir]}deg);" onerror="this.outerHTML='🤖'">`;
      }

      gridEl.appendChild(cell);
    }
  }
}

function closeModal() {
  if (demoTimer) clearInterval(demoTimer);
  document.getElementById("lesson-modal").classList.add("hidden");
}

function closeModalOnBackdrop(e) {
  if (e.target.id === "lesson-modal") closeModal();
}

setLanguage("en");
