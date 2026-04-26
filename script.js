const noteInput = document.getElementById('note');
const saveButton = document.getElementById('saveButton');
const savedMessage = document.getElementById('savedMessage');
const toggleButton = document.getElementById('toggleButton');
const themeStatus = document.getElementById('themeStatus');

const storageKey = 'phone-access-demo-note';

function loadNote() {
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    noteInput.value = saved;
    savedMessage.textContent = 'Loaded your saved note. Edit it and press Save again.';
  }
}

function saveNote() {
  localStorage.setItem(storageKey, noteInput.value.trim());
  savedMessage.textContent = 'Note saved locally in your browser.';
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeStatus.textContent = `Current theme: ${theme}`;
  localStorage.setItem('phone-access-demo-theme', theme);
}

function loadTheme() {
  const saved = localStorage.getItem('phone-access-demo-theme');
  setTheme(saved === 'dark' ? 'dark' : 'light');
}

saveButton.addEventListener('click', saveNote);
toggleButton.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
});

loadTheme();
loadNote();
