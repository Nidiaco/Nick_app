const toggleButton = document.getElementById('toggleButton');
const themeStatus = document.getElementById('themeStatus');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeStatus.textContent = `Current theme: ${theme}`;
  localStorage.setItem('cv-theme', theme);
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

  activeButton.classList.add('active');
  activeContent.classList.add('active');

  if (targetTab === 'skills') {
    animateSkillBars();
  }
}

function animateSkillBars() {
  const skillFills = document.querySelectorAll('.skill-fill');
  skillFills.forEach(fill => {
    const skillLevel = fill.dataset.skill;
    fill.style.width = `${skillLevel}%`;
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(contactForm);
  // Simulate form submission (in a real app, send to server)
  formMessage.textContent = 'Thank you for your message! (This is a demo - no email sent)';
  formMessage.style.color = 'green';
  contactForm.reset();
}

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;
    switchTab(target);
  });
});

contactForm.addEventListener('submit', handleFormSubmit);

toggleButton.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
});

loadTheme();
