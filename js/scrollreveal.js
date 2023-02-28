ScrollReveal({reset: true})

// Animação do texto da Home
ScrollReveal().reveal('.text-container', {
    delay: 300,
    origin: 'left',
    distance: '150px',
    duration: 500
});

// Animação da seção Sobre e a imagem
ScrollReveal().reveal('.about-text', {
    delay: 300,
    origin: 'left',
    distance: '150px',
    duration: 500
});

ScrollReveal().reveal('.about-photo', {
    delay: 300,
    origin: 'bottom',
    distance: '150px',
    duration: 500
});

// Animação da seção Projetos
ScrollReveal().reveal('.project-card', {
    delay: 300,
    origin: 'bottom',
    distance: '150px',
    duration: 500
});
