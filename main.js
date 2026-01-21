/* ================================
            Variables
================================ */

// Navigation Bar
const appHeader = document.querySelector('.app-header');
const headWrapper = document.querySelector('.app-header-wrapper');
const navBar = document.querySelector('.app-navigation-bar');
const logoContainer = document.querySelector('.logo-container');
const navLinks = document.querySelector('.navigation-links');
const signInContainer = document.querySelector('.sign-in-container');

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

    if (window.scrollY > 200) {
        appHeader.classList.add('active');
    } else {
        appHeader.classList.remove('active');
    }
}

function heroFade() {
    const scrollProgress = scrollFunction (350, 600);

    heroFadeGroup.style.opacity = 1 - scrollProgress;
    heroFadeGroup.style.transform = `scale(${1 - scrollProgress * 0.2}) translateY(${scrollProgress * -40}px)`;
}

console.log(scrollFunction(200, 600));

/* ================================
            Carousel List
================================ */
