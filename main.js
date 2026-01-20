/* 
    Hero Fade Function
*/

const heroFadeGroup = document.querySelector('.fade-hero-contents');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const fadeStart = 350;
    const fadeEnd = 600;

    let progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
    progress = Math.min(Math.max(progress, 0), 1);

    heroFadeGroup.style.opacity = 1 - progress;
    heroFadeGroup.style.transform = `scale(${1 - progress * 0.15}) translateY(${progress * -40}px)`;
})