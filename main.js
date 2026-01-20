/* ================================
            Variables
================================ */

// Navigation Bar
const appHeader = document.querySelector('.app-header');

// Hero Text Group
const heroFadeGroup = document.querySelector('.fade-hero-contents');

// Carousel lists
const carouselTrack = document.querySelector('.carousel-list ul');
const carouselSlides = document.querySelectorAll('.items');



/* ================================
    Scroll Behavior Function
================================ */
let progress = 0

function scrollFunction(fadeStart, fadeEnd) {
    progress = (window.scrollY - fadeStart) / (fadeEnd - fadeStart);
    progress = Math.min(Math.max(progress, 0), 1);
}

function volume(start, end, time) {
    return start - (start + end) * time;
}

window.addEventListener('scroll', () => {
    navigationMove();
    heroFade();
})

function navigationMove() {
    const progress = scrollFunction(200, 600);

    const marginTop = volume(0, 16, progress);

    appHeader.style.marginTop = `${marginTop}px`;
}

function heroFade() {
    scrollFunction (350, 600)

    heroFadeGroup.style.opacity = 1 - progress;
    heroFadeGroup.style.transform = `scale(${1 - progress * 0.15}) translateY(${progress * -40}px)`;
}

/* ================================
            Carousel List
================================ */
