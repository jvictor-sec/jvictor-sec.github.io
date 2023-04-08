const header = document.querySelector('header');

const mobileMenu = document.querySelector('#mobile-menu');
const menuContainer = document.querySelector('#menu-container');
const menuLinks = document.querySelectorAll('#menu-container li a[href^="#"]');

const currentYear = document.querySelector('#current-year');
const selectSkills = document.querySelectorAll('.select-skill');

window.addEventListener('scroll', () => {
  if (window.scrollY > header.offsetHeight) {
      header.classList.add('active');
  } else {
      header.classList.remove('active');
  }
});

currentYear.textContent = new Date().getFullYear();

selectSkills.forEach(selectSkill => {
  selectSkill.addEventListener('click', event => {
    document.querySelector(`#${selectSkill.id} i`).classList.toggle('invisible');

    const skillBadges = document.querySelectorAll(`.${selectSkill.id}`);

    skillBadges.forEach(skillBadge => {
      skillBadge.classList.toggle('disabled-badge');
    });
  });
});

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  menuContainer.classList.toggle('left-1');
    console.log(menuContainer)
});

menuLinks.forEach(links => {
  links.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuContainer.classList.remove('left-1');
  });
});

particlesJS.load('particles-container', './assets/particlesjs/particlesjs-config.json', () => {
  console.log('Particles.js loaded...');
});
