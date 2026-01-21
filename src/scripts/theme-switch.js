// Theme Switch JS

let darkmode = localStorage.getItem('dark-theme');
const themeSwitch = document.querySelector('.switch');

const enableDarkMode = () => {
    document.body.classList.add('dark-theme');
    localStorage.setItem('dark-theme', 'active');
};

const disableDarkMode = () => {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('dark-theme', null);
};

if(darkmode === 'active') enableDarkMode();

themeSwitch.addEventListener('change', (event) => {
    darkmode = localStorage.getItem('dark-theme');
    if (darkmode !== "active") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});