// Elements
const bgColorInput = document.getElementById("bg-color");
const fontColorInput = document.getElementById("font-color");
const pageTitleInput = document.getElementById("page-title-text");
const saveButton = document.getElementById("save-btn");
const resetButton = document.getElementById("reset-btn");
const pageTitle = document.getElementById("page-title");

// Default Preferences
const defaultPreferences = {
  backgroundColor: "#ffffff",
  fontColor: "#000000",
  pageTitle: "Customize Your Page",
};

// Load Preferences from Local Storage
function loadPreferences() {
  const savedPreferences = JSON.parse(localStorage.getItem("preferences"));
  const preferences = savedPreferences || defaultPreferences;

  // Apply preferences to the page
  document.body.style.backgroundColor = preferences.backgroundColor;
  document.body.style.color = preferences.fontColor;
  pageTitle.textContent = preferences.pageTitle;

  // Set input values to match preferences
  bgColorInput.value = preferences.backgroundColor;
  fontColorInput.value = preferences.fontColor;
  pageTitleInput.value = preferences.pageTitle;
}

// Save Preferences to Local Storage
function savePreferences() {
  const preferences = {
    backgroundColor: bgColorInput.value,
    fontColor: fontColorInput.value,
    pageTitle: pageTitleInput.value || defaultPreferences.pageTitle,
  };

  localStorage.setItem("preferences", JSON.stringify(preferences));
  loadPreferences();
}

// Reset Preferences to Default
function resetPreferences() {
  localStorage.removeItem("preferences");
  loadPreferences();
}

// Event Listeners
saveButton.addEventListener("click", savePreferences);
resetButton.addEventListener("click", resetPreferences);

// Initialize Page
loadPreferences();
