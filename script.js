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

// Task List Section
const newTaskButton = document.getElementById('newTaskButton');
const editTaskButton = document.getElementById('editTaskButton');
const deleteTaskButton = document.getElementById('deleteTaskButton');
const addTableButton = document.getElementById('addTableButton');


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


// Dashboard Section
// Random Quote Generator
async function randomQuoteGenerator() {
    try {
        const proxyUrl = "https://api.allorigins.win/get?url=";
        const targetUrl = encodeURIComponent("https://zenquotes.io/api/random");
        const response = await fetch(proxyUrl + targetUrl);
        const result = await response.json();
        const data = JSON.parse(result.contents); // ZenQuotes JSON is inside "contents"
        console.log(`${data[0].q} — ${data[0].a}`);
    } catch (error) {
        console.error("Error fetching the quote:", error);
    }
}

randomQuoteGenerator();
