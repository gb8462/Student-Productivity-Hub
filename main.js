/* ================================
            Variables
================================ */

// Hero Text Group
const heroFadeGroup = document.querySelector('.fade-hero-contents');

// Carousel lists
const carouselTrack = document.querySelector('.carousel-list ul');
const carouselItems = document.querySelectorAll('.items');



/* ================================
            Scroll Function
================================ */

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const fadeStart = 350;
    const fadeEnd = 600;

    let progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
    progress = Math.min(Math.max(progress, 0), 1);

    heroFadeGroup.style.opacity = 1 - progress;
    heroFadeGroup.style.transform = `scale(${1 - progress * 0.15}) translateY(${progress * -40}px)`;
})

/* ================================
            Scroll Function
================================ */