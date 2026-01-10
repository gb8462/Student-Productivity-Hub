// Task List Section

// Buttons
const addTaskButton = document.getElementById('addTaskButton');
const editTaskButton = document.getElementById('editTaskButton');
const deleteTaskButton = document.getElementById('deleteTaskButton');

// Progress Bar
const progressLabel = document.getElementById('progressLabel')
const progressBar = document.getElementById('progressFill')

// Task List
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Task List
let tasks = []; // id, text

// Render Function
function renderTask() {
    taskList.innerHTML = '';

    // Creation of Lists of task
    tasks.forEach(task => {
        const createLi = document.createElement('li');
        createLi.className = 'task-item';

        const createDiv = document.createElement('div');
        createDiv.className = 'task-left';

        const createCheckbox = document.createElement('input');
        createCheckbox.type = 'checkbox';
        createCheckbox.checked = task.done;
        createCheckbox.addEventListener('change', () => toggleTodo(task.id));

        const createSpan = document.createElement('span');
        createSpan.className = 'task-name' + (todo.done ? ' done' : '');
        createSpan.textContent = task.text;

        createDiv.appendChild(createCheckbox);
        createDiv.appendChild(createSpan);

        
    });
};