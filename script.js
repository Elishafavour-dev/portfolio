// ============================
// DARK MODE TOGGLE
// ============================

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  if (toggleBtn) toggleBtn.textContent = "☀️ Light Mode";
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️ Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
}

// ============================
// MOBILE NAVIGATION MENU
// ============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}
// ============================
// TYPING ANIMATION
// ============================

const typingText = document.getElementById("typing");

const words = [
  "Frontend Developer",
  "UI/UX Designer",
  "Computer Repair Technician",
  "Founder of Unique Scholars Tutorials (U.S.T)"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500; // pause before deleting
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
// ============================
// SCROLL REVEAL ANIMATION
// ============================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(function (section) {

        const windowHeight = window.innerHeight;

        const sectionTop = section.getBoundingClientRect().top;

        const revealPoint = 100;

        if (sectionTop < windowHeight - revealPoint) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

// Run once when the page loads
revealSections();
// ============================
// BACK TO TOP BUTTON
// ============================

const backToTop = document.getElementById("backToTop");

// Show or hide the button when scrolling
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

// Scroll to the top when clicked
backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// ============================
// PROJECT FILTER
// ============================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class from all buttons
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active class to the clicked button
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projectCards.forEach(function (card) {

            const category = card.getAttribute("data-category");

            if (filter === "all" || filter === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});