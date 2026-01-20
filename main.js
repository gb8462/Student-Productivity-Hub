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
    return start - (end + start) * time;
}

let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            navigationMove();
            heroFade();
            ticking = false;
        });
        ticking = true;
    }
});

function navigationMove() {
    const scrollProgress = scrollFunction(200, 600);

    const marginTop = volume(0, 16, scrollProgress);

    appHeader.style.marginTop = `${marginTop}px`;
}

function heroFade() {
    const scrollProgress = scrollFunction (350, 600);

    const opacity = volume(1, 0, scrollProgress);
    const translateY = volume(0, -60, scrollProgress);
    const scale = volume(1, 0.9, scrollProgress);

    heroFadeGroup.style.opacity = opacity;
    heroFadeGroup.style.transform = `scale(${scale}) translateY(${translateY}px)`;
}

/* ================================
            Carousel List
================================ */
