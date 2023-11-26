function addTask() {
    // Get the task input value
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== '') {
        // Create a new task element
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;

        // Append the task to the task container
        const taskContainer = document.getElementById('task-container');
        taskContainer.appendChild(taskElement);

        // Clear the task input
        taskInput.value = '';
    }
}

function completeTask(button) {
    // Mark the task as completed
    const taskElement = button.parentElement;
    taskElement.classList.toggle('completed');
}

function deleteTask(button) {
    // Delete the task
    const taskElement = button.parentElement;
    taskElement.remove();
}