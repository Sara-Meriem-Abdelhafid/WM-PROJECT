/*function loadPage(page) {
  fetch(`HTML/${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("contentFrame").innerHTML = html;
      // Reapply current language after the new content is added
      loadLanguage(currentLanguage);
    });
}*/
function loadPage(page) {
  const iframe = document.getElementById("contentFrame");
  iframe.src = `HTML/${page}.html`;
}

// Toggle menu visibility on small screens
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("show");
});

function resizeIframe(iframe) {
  try {
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

