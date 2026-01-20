/* ================================
            Variables
================================ */

// Hero Text Group
const heroFadeGroup = document.querySelector('.fade-hero-contents');

// Carousel lists
const carouselTrack = document.querySelector('.carousel-list ul');
const carouselSlides = document.querySelectorAll('.items');



/* ================================
    Scroll Behavior Function
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
            Carousel List
================================ */

// NEEDS TO FIX
let listItem = 0;

function moveItem() {
    carouselTrack.style.transform = `translateX(-${listItem * 100}%)`;
}

function nextSlide() {
    listItem++;
    if (listItem >= carouselSlides.length) listItem = 0;
    moveItem();
}

setInterval(nextSlide, 4000);