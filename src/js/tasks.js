// Task List Section

// Buttons
const addTaskButton = document.getElementById('addTaskButton');
const editTaskButton = document.getElementById('editTaskButton');
const deleteTaskButton = document.getElementById('deleteTaskButton');

// Progress Bar
const progressLabel = document.getElementById('progressLabel')
const progressFill = document.getElementById('progressFill')

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

        editTaskButton.addEventListener('click', () => editTask(task.id));

        deleteTaskButton.addEventListener('click', () => deleteTask(task.id));
    });

    updateTaskStats();
};

function updateTaskStats() {
    const total = tasks.length;
    const done = tasks.filter(t => t.done).length;

    const percentage = total === 0 ? 0 :Math.round((done / total) * 100);
    progressFill.style.width = percentage + '%';
    progressLabel.textContent = `${done} of ${total} done`;
};

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;
    tasks.push({
        id: Date.now(),
        text,
        done: false
    });
    taskInput.value = '';
    renderTask();
};

function toggleTodo(id) {
    tasks = tasks.map(t => t.id === id ? { ...t, done: !t.done} : t);
    renderTask();
};

function deleteTask(id) {
    tasks = tasks.filter(t => t.id === id);
    renderTask();
};

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    
    // Will finish later
};

addTaskButton.addEventListener('click', addTask());
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});