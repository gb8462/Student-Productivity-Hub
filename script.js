// Script for Student Productivity Hub

// Constants

// Sidebar Navigation
const sidebar = document.getElementById('sidebar');
const toggleSideBar = document.getElementById('toggleSideBar');
const navLinks = document.querySelectorAll('.nav-link')

// User Info
const randomGreeting = document.getElementById('randomGreeting');
const username = document.getElementById('username');
const currentDate = document.getElementById('currentDate');

// User Images
const coverImageInput = document.getElementById('coverImageInput');
const coverImage = document.querySelector('.image-cover');
const coverContainer = document.querySelector('.cover-container');

// Cover/Pfp Button
const coverPhotoButton = document.getElementById('coverPhotoButton');
const coverOption = document.getElementById('coverOption');
const coverAddPhotoButton = document.getElementById('coverAddPhotoButton');

const pfpPhotoButton = document.getElementById('pfpPhotoButton');
const pfpOption = document.getElementById('pfpOption');

// Side Navigation Bar Section
// Sidebar Toggle Function
toggle = false;
toggleSideBar.addEventListener('click', () => {
    if (!toggle) {
        toggleSideBar.classList.remove('active-toggle');
        toggleSideBar.classList.add('deactive-toggle');
        sidebar.classList.remove('expanded');
        sidebar.classList.add('collapsed');

        toggle = true;
    } else {
        toggleSideBar.classList.add('active-toggle');
        toggleSideBar.classList.remove('deactive-toggle');
        sidebar.classList.add('expanded');
        sidebar.classList.remove('collapsed');

        toggle = false;
    }
});

// Navigation Link Active
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));

        link.classList.add('active');
    });
});


// User Info Section
// User Info Functions

// Date Function
function dateToday() {
    // Date Const
    const dateToday = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
                    "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", 
                    "December"]

    const dayName = days[dateToday.getDay() + 1];
    const monthName = months[dateToday.getMonth() + 1];
    const date = dateToday.getDate();

    currentDate.innerText = `${dayName}, ${monthName} ${date}`;
};

dateToday();

// Cover/Pfp Buttons
coverPhotoButton.addEventListener('click', () => {
    coverOption.classList.toggle('active');
});

pfpPhotoButton.addEventListener('click', () => {
    pfpOption.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (
        !coverOption.contains(e.target) && 
        !coverPhotoButton.contains(e.target)
    ) {
        coverOption.classList.remove('active');
    } 
    
    if (
        !pfpOption.contains(e.target) && 
        !pfpPhotoButton.contains(e.target)
    ) {
        pfpOption.classList.remove('active')
    }
});