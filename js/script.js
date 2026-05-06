// ALL YOU JS GOES HERE

const hamburger = document.querySelector('.menu-toggle');
const dropdown = document.querySelector('.dropdown');
const navLinks = document.querySelectorAll('.dropdown a');

if (hamburger && dropdown) {

  hamburger.addEventListener('click', () => {
    dropdown.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      dropdown.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

}

function toggletheme() {
const theme = document.getElementById("lightmode");
const current = theme.getAttribute("href");

if (current === "css/styles.css") {
theme.setAttribute("href", "css/dark-mode.css");
} else {
theme.setAttribute("href", "css/styles.css");
}


}

const today = new Date ();

if (today.getHours() >= 18 || today.getHours() <6) {

  document.getElementById("lightmode").setAttribute("href", "css/dark-mode.css");
} else {
  document.getElementById("lightmode").setAttribute("href", "css/styles.css");
}

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
});