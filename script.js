document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    const currentYear = new Date().getFullYear();
    yearEl.textContent = `© ${currentYear}`;
  }
});





















































