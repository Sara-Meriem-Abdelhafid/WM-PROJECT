
/*async function loadLanguage(lang) {
  try {
    const response = await fetch(`../WM-PROJECT/lang/${lang}.json`);
    if (!response.ok) throw new Error(`Language file not found: ${lang}`);
    const translations = await response.json();

    console.log("Loaded:", translations);

    // 1. Translate the main document (menu/header/footer)
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) el.innerText = translations[key];
    });

    // 2. Translate the iframe content
    const iframe = document.getElementById("contentFrame");
    if (iframe && iframe.contentDocument) {
      iframe.contentDocument.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) el.innerText = translations[key];
      });

      // Optional: set direction inside iframe
      ///iframe.contentDocument.body.dir = lang === "ar" ? "rtl" : "ltr";
      
    }

    // Set main page direction
    //document.body.dir = lang === "ar" ? "rtl" : "ltr";

  } catch (error) {
    console.error("Error loading language:", error);
  }
}

const iframe = document.getElementById("contentFrame");

if (iframe) {
  // Wait until iframe content is fully loaded
  iframe.addEventListener("load", () => {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      iframeDoc.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) el.innerText = translations[key];
      });

      //iframeDoc.body.dir = lang === "ar" ? "rtl" : "ltr";
    } catch (e) {
      console.error("Error translating iframe:", e);
    }
  });
}

if (lang === "ar") {
  document.body.classList.add("lang-ar");
} else {
  document.body.classList.remove("lang-ar");
}
//document.body.dir = lang === "ar" ? "rtl" : "ltr";
* /










let currentLanguage = "en"; // global
let translations = {};       // global

async function loadLanguage(lang) {
  try {
    currentLanguage = lang;
    const response = await fetch(`../WM-PROJECT/lang/${lang}.json`);
    if (!response.ok) throw new Error(`Language file not found: ${lang}`);
    translations = await response.json();

    console.log("Loaded:", translations);

    // Translate main page
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) el.innerText = translations[key];
    });

    // Translate iframe content
    const iframe = document.getElementById("contentFrame");
    if (iframe) {
      iframe.addEventListener("load", () => {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          iframeDoc.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[key]) el.innerText = translations[key];
          });
          iframeDoc.body.dir = lang === "ar" ? "rtl" : "ltr";
        } catch(e) {
          console.error("Error translating iframe:", e);
        }
      });
      // Optional: trigger reload for iframe if needed
      iframe.contentWindow.location.reload();
    }

    // Set direction and body class
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    if (lang === "ar") document.body.classList.add("lang-ar");
    else document.body.classList.remove("lang-ar");

  } catch (error) {
    console.error("Error loading language:", error);
  }
}*/

/*
let currentLanguage = "en"; // global
let translations = {};       // global

async function loadLanguage(lang) {
  try {
    currentLanguage = lang;
    const response = await fetch(`../WM-PROJECT/lang/${lang}.json`);
    if (!response.ok) throw new Error(`Language file not found: ${lang}`);
    translations = await response.json();

    console.log("Loaded:", translations);

    // 1. Translate main page text (not header layout)
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) el.innerText = translations[key];
    });

    // 2. Translate iframe content
    const iframe = document.getElementById("contentFrame");
    if (iframe) {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      iframeDoc.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) el.innerText = translations[key];
      });

      // Set iframe text direction
      iframeDoc.body.dir = lang === "ar" ? "rtl" : "ltr";

      // Apply Arabic font inside iframe
      if (lang === "ar") {
        iframeDoc.body.classList.add("lang-ar");
      } else {
        iframeDoc.body.classList.remove("lang-ar");
      }
    }

    // 3. Set main page direction and font class
    document.body.dir = lang === "ar" ? "ltr" : "ltr"; // keep header LTR
    if (lang === "ar") document.body.classList.add("lang-ar");
    else document.body.classList.remove("lang-ar");

  } catch (error) {
    console.error("Error loading language:", error);
  }
}

// Initialize default language
document.addEventListener("DOMContentLoaded", () => {
  loadLanguage(currentLanguage);
});/**/

/*
let currentLanguage = localStorage.getItem("language") || "en";
let translations = {};

// Load language file and translate main page
async function loadLanguage(lang) {
  try {
    currentLanguage = lang;
    localStorage.setItem("language", lang);

    // Only fetch translations if not already loaded or different language
    if (!translations || translations.lang !== lang) {
      const response = await fetch(`../WM-PROJECT/lang/${lang}.json`);
      if (!response.ok) throw new Error(`Language file not found: ${lang}`);
      translations = await response.json();
      translations.lang = lang; // store language inside object
    }

    console.log("Loaded:", translations);

    // Translate main page
    translateDocument(document, translations);

    // Set main page direction and body class
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    if (lang === "ar") document.body.classList.add("lang-ar");
    else document.body.classList.remove("lang-ar");

    // Translate iframe content after it has loaded
    const iframe = document.getElementById("contentFrame");
    if (iframe) {
      iframe.addEventListener("load", () => {
        translateDocument(iframe.contentDocument, translations);
        iframe.contentDocument.body.dir = lang === "ar" ? "rtl" : "ltr";
      });
      // If iframe is already loaded (first page), translate immediately
      if (iframe.contentDocument.readyState === "complete") {
        translateDocument(iframe.contentDocument, translations);
        iframe.contentDocument.body.dir = lang === "ar" ? "rtl" : "ltr";
      }
    }

  } catch (error) {
    console.error("Error loading language:", error);
  }
}

// Helper function to translate all [data-i18n] elements in a document
function translateDocument(doc, translations) {
  doc.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) el.innerText = translations[key];
  });
}

// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
  loadLanguage(currentLanguage);
});

// Load page into iframe
function loadPage(page) {
  const iframe = document.getElementById("contentFrame");
  fetch(`HTML/${page}.html`)
    .then(res => res.text())
    .then(html => {
      iframe.contentDocument.open();
      iframe.contentDocument.write(html);
      iframe.contentDocument.close();

      // Apply translations and styles after iframe renders
      setTimeout(() => {
        translateDocument(iframe.contentDocument, translations);
        applyIframeStyles(iframe.contentDocument, currentLanguage);
      }, 50);
    });
}

function applyIframeStyles(iframeDoc, lang) {
  // Create a style element
  const style = iframeDoc.createElement("style");
  style.textContent = `
    body {
      direction: ${lang === "ar" ? "rtl" : "ltr"};
      font-family: ${lang === "ar" ? '"Playpen Sans Arabic", cursive' : '"Poppins", sans-serif'};
    }

    // Arabic-specific elements 
    ${lang === "ar" ? `
      .model-description-ar,
      [data-i18n^="home_desc"],
      [data-i18n^="footer"] {
        font-family: "Playpen Sans Arabic", cursive;
        direction: rtl;
      }
    ` : ''}
  `;
  iframeDoc.head.appendChild(style);
}*/

let currentLanguage = localStorage.getItem("language") || "en";
let translations = {};

// Load language file and translate everything
async function loadLanguage(lang) {
  try {
    currentLanguage = lang;
    localStorage.setItem("language", lang);

    // Fetch translations if not loaded or language changed
    if (!translations || translations.lang !== lang) {
      const response = await fetch(`../WM-PROJECT/lang/${lang}.json`);
      if (!response.ok) throw new Error(`Language file not found: ${lang}`);
      translations = await response.json();
      translations.lang = lang;
    }

    console.log("Loaded:", translations);

    // Translate main page text
    translateDocument(document, translations);

    // Set main page font and direction (header stays LTR)
    document.body.dir = "ltr";
    if (lang === "ar") document.body.classList.add("lang-ar");
    else document.body.classList.remove("lang-ar");

    // Translate iframe content
    const iframe = document.getElementById("contentFrame");
    if (iframe) {
      iframe.addEventListener("load", () => {
        translateDocument(iframe.contentDocument, translations);
        applyIframeStyles(iframe.contentDocument, lang);
      });

      // First load if already ready
      if (iframe.contentDocument.readyState === "complete") {
        translateDocument(iframe.contentDocument, translations);
        applyIframeStyles(iframe.contentDocument, lang);
      }
    }

  } catch (error) {
    console.error("Error loading language:", error);
  }
}

// Helper to translate all [data-i18n] elements
function translateDocument(doc, translations) {
  doc.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) el.innerText = translations[key];
  });
}

// Load page into iframe
function loadPage(page) {
  const iframe = document.getElementById("contentFrame");
  fetch(`../HTML/${page}.html`)
    .then(res => res.text())
    .then(html => {
      iframe.contentDocument.open();
      iframe.contentDocument.write(html);
      iframe.contentDocument.close();

      // Apply translations and styles after rendering
      setTimeout(() => {
        translateDocument(iframe.contentDocument, translations);
        applyIframeStyles(iframe.contentDocument, currentLanguage);
      }, 50);
    });
}

// Apply Arabic font and direction inside iframe
function applyIframeStyles(iframeDoc, lang) {
  const style = iframeDoc.createElement("style");
  style.textContent = `
    body {
      direction: ${lang === "ar" ? "rtl" : "ltr"};
      font-family: ${lang === "ar" ? '"Playpen Sans Arabic", cursive' : '"Poppins", sans-serif'};
    }

    ${lang === "ar" ? `
      .model-description-ar,
      [data-i18n^="home_desc"],
      [data-i18n^="footer"] {
        font-family: "Playpen Sans Arabic", cursive;
        direction: rtl;
      }
    ` : ''}
  `;
  iframeDoc.head.appendChild(style);
}

// Initialize saved language on page load
document.addEventListener("DOMContentLoaded", () => {
  loadLanguage(currentLanguage);
});
