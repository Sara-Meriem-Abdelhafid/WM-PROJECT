function loadPage(page) {
  document.getElementById('contentFrame').src = `HTML/${page}.html`;
}
// Toggle menu visibility on small screens
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("show");
});
