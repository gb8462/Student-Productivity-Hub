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

// Dashboard Section
const randomFocus = document.getElementById('randomFocus');
const taskBox = document.getElementById('taskBox');
const taskCount = document.getElementById('taskCount');
const timeBox = document.getElementById('timeBox');
const modeBox = document.getElementById('modeBox');
const randomQuoteText = document.getElementById('randomQuoteText');

// Task List Section
const newTaskButton = document.getElementById('newTaskButton');
const editTaskButton = document.getElementById('editTaskButton');
const deleteTaskButton = document.getElementById('deleteTaskButton');
const addTableButton = document.getElementById('addTableButton');


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