// Header (top menu)
document.getElementById("header").innerHTML = `
  <header class="top-bar">
    <img src="src/Test_Logo.png" alt="Logo" class="logo">
    <nav class="menu">
      <a href="#" onclick="loadPage('home')">Home</a>
      <a href="#" onclick="loadPage('projects')">Projects</a>
      <a href="#" onclick="loadPage('about')">About</a>
      <a href="#" onclick="loadPage('contact')">Contact</a>
    </nav>
  </header>
`;


// Footer (bottom contact info)
document.getElementById("footer").innerHTML = `
  <footer class="bottom-bar">
    <p>© 2025 Wassim El Madina Bridge | Contact: info@madinabridge.com</p>
  </footer>
`;