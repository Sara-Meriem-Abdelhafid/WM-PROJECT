function loadPage(page) {
  document.getElementById('contentFrame').src = `HTML/${page}.html`;
}
// Toggle menu visibility on small screens
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("show");
});

function resizeIframe(iframe) {
  try {
    // Set height based on content document height
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
  } catch (e) {
    console.error("Error resizing iframe:", e);
  }
}

// Also re-run resize when the window is resized
window.addEventListener("resize", function() {
  const iframe = document.getElementById("contentFrame");
  if (iframe) resizeIframe(iframe);
});