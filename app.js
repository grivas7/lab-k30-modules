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

  if (typeof lessonsData === "undefined") {
    grid.innerHTML = "<p>Error: lessons-data.js not loaded.</p>";
    return;
  }

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

setLanguage("en");
