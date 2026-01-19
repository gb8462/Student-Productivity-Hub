// Dashboard Section
const randomFocus = document.getElementById('randomFocus');
const taskBox = document.getElementById('taskBox');
const taskCount = document.getElementById('taskCount');
const timeBox = document.getElementById('timeBox');
const modeBox = document.getElementById('modeBox');
const randomQuoteText = document.getElementById('randomQuoteText');
const quoteAuthor = document.getElementById('quoteAuthor');

const quotes = [
    '“Discipline is choosing between what you want now and what you want most.” – Abraham Lincoln',
    '“Success is the sum of small efforts, repeated day in and day out.” – Robert Collier',
    '“The future depends on what you do today.” – Mahatma Gandhi',
    '“You don’t have to be great to start, but you have to start to be great.” – Zig Ziglar',
    '“Focus is more important than intelligence.”',
    '“Study smart, not just hard.”'
];

function randomQuote() {
    const quoteText = quotes[Math.floor(Math.random() * quotes.length)];

    randomQuoteText.textContent = quoteText;
};

randomQuote();