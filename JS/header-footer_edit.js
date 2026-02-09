// Header (top menu)
document.getElementById("header").innerHTML = `
  <header class="top-bar">
    <img src="src/logo_trensparent.png" alt="Logo" class="logo_image">
    <div class="logo">
      <div class="line1">Wassim</div>
      <div class="line2">El Madina</div>
    </div>

    <!-- Navigation Menu -->  
    <nav class="menu" id="menu">
      <a href="#" data-i18n="menu_home" onclick="loadPage('home_edit')">Home</a>
      <a href="#" data-i18n="menu_projects" onclick="loadPage('projects_edit')">Projects</a>
      <a href="#" data-i18n="menu_about" onclick="loadPage('about_edit')">About</a>
      <a href="#" data-i18n="menu_contact" onclick="loadPage('contact_edit')">Contact</a>
    </nav>

    <div class="language-switcher">
      <img src="src/Flag_of_Algeria.svg" alt="Ar" class="lang-flag" onclick="loadLanguage('ar')">
      <img src="src/Flag_of_the_United_Kingdom.png" alt="En" class="lang-flag" onclick="loadLanguage('en')">
      <img src="src/Flag_of_France.svg" alt="Fr" class="lang-flag" onclick="loadLanguage('fr')">
    </div>
    
    <!-- Hamburger Icon (visible only on small screens) -->
    <div class="menu-toggle" id="menuToggle">☰</div>


  </header>
`;
/*    <div class="language-switcher">
      <button onclick="loadLanguage('ar')">ar</button>
      <button onclick="loadLanguage('en')">en</button>
      <button onclick="loadLanguage('fr')">fr</button>  
    </div> 
     العربية    English    Français
    * /
/*<!--<img src="src/Test_Logo.png" alt="Logo" class="logo">-->
  <!--<div class="logo">Wassim El Madina</div>-->  * /
//"#" && "javascript:void(0)" means “stay on the same page”
// Footer (bottom contact info)
/*
document.getElementById('footer').innerHTML = `
  <footer class="site-footer">
    <p>&copy; 2025 Wassim El Madina Construction Co. | All Rights Reserved</p>
  </footer>
`;
 */