// ALL YOU JS GOES HERE

const hamburger = document.querySelector('.menu-toggle');
const dropdown = document.querySelector('.dropdown').classList;


function revealDropdown() {
    dropdown.toggle('dropdown')
};

hamburger.addEventListener('click', revealDropdown);




const navkinks = document.querySelectorAll('a.links')
for (let i = 0; i < navlinks.length; i ++) 
    
{
navlinks [i].addEventListener('click', closemenu)
}

function closemenu () {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('show');
}