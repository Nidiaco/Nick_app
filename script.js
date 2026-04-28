const toggleButton = document.getElementById('toggleButton');
const themeStatus = document.getElementById('themeStatus');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  updateThemeUI(theme);
  localStorage.setItem('cv-theme', theme);
}

function updateThemeUI(theme) {
  if (themeStatus) {
    themeStatus.textContent = `Current theme: ${theme}`;
  }

  if (toggleButton) {
    toggleButton.innerHTML = theme === 'dark'
      ? '<i class="bi bi-sun-fill"></i> Light Mode'
      : '<i class="bi bi-moon-fill"></i> Dark Mode';
  }
}

function loadTheme() {
  const saved = localStorage.getItem('cv-theme');
  setTheme(saved === 'dark' ? 'dark' : 'light');
}

function switchTab(targetTab) {
  tabButtons.forEach(btn => btn.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));

  const activeButton = document.querySelector(`[data-tab="${targetTab}"]`);
  const activeContent = document.getElementById(targetTab);

  if (!activeButton || !activeContent) return;

  activeButton.classList.add('active');
  activeContent.classList.add('active');

  if (targetTab === 'skills') {
    animateSkillBars();
  }
}

let skillsAnimated = false;
const detailToggles = document.querySelectorAll('.detail-toggle');
const copyEmailBtn = document.getElementById('copyEmail');
const emailAddress = 'Nidiaco03@gmail.com';

function animateSkillBars() {
  if (skillsAnimated) return;
  const skillFills = document.querySelectorAll('.skill-fill');
  skillFills.forEach(fill => {
    const skillLevel = fill.dataset.skill;
    fill.style.width = `${skillLevel}%`;
  });
  skillsAnimated = true;
}

function handleFormSubmit(e) {
  // Let formsubmit.co handle the submission - no preventDefault
}

function toggleDetail(event) {
  const button = event.currentTarget;
  const detail = button.closest('.timeline-item').querySelector('.detail-content');
  const isOpen = detail.classList.contains('active');
  detail.classList.toggle('active');
  button.innerHTML = isOpen ? '<i class="bi bi-chevron-down"></i> Show details' : '<i class="bi bi-chevron-up"></i> Hide details';
}

function copyEmail() {
  if (!copyEmailBtn) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(emailAddress).then(() => {
      copyEmailBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyEmailBtn.innerHTML = '<i class="bi bi-clipboard-fill"></i> Copy Email';
      }, 1800);
    }).catch(() => {
      window.prompt('Copy email address:', emailAddress);
    });
  } else {
    window.prompt('Copy email address:', emailAddress);
  }
}

function handleTabKey(event, button) {
  const index = Array.from(tabButtons).indexOf(button);
  if (event.key === 'ArrowRight') {
    const next = tabButtons[(index + 1) % tabButtons.length];
    next.focus();
  } else if (event.key === 'ArrowLeft') {
    const prev = tabButtons[(index - 1 + tabButtons.length) % tabButtons.length];
    prev.focus();
  } else if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    switchTab(button.dataset.tab);
  }
}

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;
    switchTab(target);
  });
  button.addEventListener('keydown', event => handleTabKey(event, button));
});

detailToggles.forEach(toggle => toggle.addEventListener('click', toggleDetail));

if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', copyEmail);
}

if (contactForm) {
  contactForm.addEventListener('submit', handleFormSubmit);
}

toggleButton.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
});

loadTheme();
