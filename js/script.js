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