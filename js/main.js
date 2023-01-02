const menuLinks = document.querySelectorAll('.menu-container li a[href^="#"]');
const menuHeight = document.querySelector('nav').clientHeight;
const menu = document.querySelector('.menu-container');
const hamburguerMenu = document.querySelector('.hamburguer-menu');
const copyrightYear = document.querySelector('#copyright-year');

// Setando o ano atual
const date = new Date();
copyrightYear.textContent = date.getFullYear();


hamburguerMenu.addEventListener('click', () => {
  hamburguerMenu.classList.toggle('active');
  menu.classList.toggle('active');
});

function getDistanceFromTheTop(element) {
  hrefSection = element.getAttribute('href');

  if(hrefSection == "#skills-section") {
    return document.querySelector('.card-container').offsetTop;
  } else {
    const id = hrefSection;
    return document.querySelector(id).offsetTop;
  }

}

function nativeScroll(distanceFromTheTop) {
  window.scroll({
    top: distanceFromTheTop,
    behavior: 'smooth'
  })
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - (menuHeight);
  console.log(menuHeight);
  nativeScroll(distanceFromTheTop);
}

menuLinks.forEach(links => {
  links.addEventListener("click", () => {
    hamburguerMenu.classList.remove('active');
    menu.classList.remove('active');
    scrollToSection(event);
  });
});
