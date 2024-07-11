document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('task-list').addEventListener('click', handleTaskListClick);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');
        
        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit-task-btn">Edit</button>
            <button class="delete-task-btn">Delete</button>
        `;
        
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function handleTaskListClick(event) {
    if (event.target.classList.contains('edit-task-btn')) {
        editTask(event.target);
    } else if (event.target.classList.contains('delete-task-btn')) {
        deleteTask(event.target);
    }
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskTextElement = taskItem.querySelector('.task-text');
    const newTaskText = prompt('Edit your task', taskTextElement.textContent);
    
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskTextElement.textContent = newTaskText.trim();
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}