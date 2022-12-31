const menuLinks = document.querySelectorAll('.menu-container li a[href^="#"]');
const menuHeight = document.querySelector('nav').clientHeight;

function getDistanceFromTheTop(element) {
  hrefSection = element.getAttribute('href');

  if(hrefSection == "#skills-section") {
    // console.log(hrefSection)
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
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - menuHeight;
  nativeScroll(distanceFromTheTop);
}

menuLinks.forEach(links => {
  links.addEventListener("click", scrollToSection);
});
