/* ================================
            Variables
================================ */

// Navigation Bar
const appHeader = document.querySelector('.app-header');
const headerWrapper = document.querySelector('.app-header-wrapper');

// Hero Text Group
const heroFadeGroup = document.querySelector('.fade-hero-contents');

// Carousel lists
const carouselTrack = document.querySelector('.carousel-list ul');
const carouselSlides = document.querySelectorAll('.items');



/* ================================
    Scroll Behavior Function
================================ */
function scrollFunction(fadeStart, fadeEnd) {
    let progress = (window.scrollY - fadeStart) / (fadeEnd - fadeStart);
    return progress = Math.min(Math.max(progress, 0), 1);
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

    const marginTop = volume(0, -22, scrollProgress);

    appHeader.style.marginTop = `${marginTop}px`;
}

function heroFade() {
    const scrollProgress = scrollFunction (350, 600);

    heroFadeGroup.style.opacity = 1 - scrollProgress;
    heroFadeGroup.style.transform = `scale(${1 - scrollProgress * 0.2}) translateY(${scrollProgress * -40}px)`;
}

/* ================================
            Carousel List
================================ */
