// Define an array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    
    if (task !== "") {
        tasks.push(task);
        renderTasks();
        taskInput.value = "";
    }
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        
        // Add delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.onclick = () => deleteTask(index);
        
        // Append task and delete button to list item
        li.appendChild(deleteButton);
        
        // Append list item to task list
        taskList.appendChild(li);
    });
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
