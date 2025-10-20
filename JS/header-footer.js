// Header (top menu)
document.getElementById("header").innerHTML = `
  <header class="top-bar">
    <!--<img src="src/Test_Logo.png" alt="Logo" class="logo">-->
    <!--<div class="logo">Wassim El Madina</div>-->
    <div class="logo">
      <div class="line1">Wassim</div>
      <div class="line2">El Madina</div>
    </div>
    <nav class="menu">
      <a href="javascript:void(0)" onclick="loadPage('home')">Home</a>
      <a href="javascript:void(0)" onclick="loadPage('projects')">Projects</a>
      <a href="#" onclick="loadPage('about')">About</a>
      <a href="#" onclick="loadPage('contact')">Contact</a>
    </nav>
  </header>
`;

//"#" && "javascript:void(0)" means “stay on the same page”
// Footer (bottom contact info)
document.getElementById('footer').innerHTML = `
  <footer class="site-footer">
    <p>&copy; 2025 Wassim El Madina Construction Co. | All Rights Reserved</p>
  </footer>
`;