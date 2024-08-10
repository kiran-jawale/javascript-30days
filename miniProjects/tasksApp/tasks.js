let tasks = [];

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const dueDateInput = document.getElementById("dueDate");

addTaskBtn.addEventListener("click", addTask); // Initial event listener

function addTask(e) {
  e.preventDefault(); // Prevent page refresh

  let title = titleInput.value,
    description = descriptionInput.value,
    dueDate = dueDateInput.value;

  if (addTaskBtn.textContent === "Add Task") {
    // Adding a new task
    const newTask = {
      title: title,
      description: description,
      dueDate: dueDate,
    };
    tasks.push(newTask);
  } else {
    // Updating an existing task
    const taskIndex = parseInt(addTaskBtn.dataset.taskIndex);
    tasks[taskIndex].title = title;
    tasks[taskIndex].description = description;
    tasks[taskIndex].dueDate = dueDate;
    addTaskBtn.textContent = "Add Task"; // Reset button text
    delete addTaskBtn.dataset.taskIndex; // Remove index data attribute
  }

  displayTasks(); // Update the task list

  // Clear input fields after adding/updating
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dueDate").value = "";
}

function displayTasks() {
  taskList.innerHTML = ""; // Clear previous task list

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p>Description: ${task.description}</p>
            <p>Due Date: ${task.dueDate}</p>
            <button class="editBtn" data-index="${index}">Edit</button>
            <button class="deleteBtn" data-index="${index}">Delete</button> 
        `;
    taskList.appendChild(taskItem);
  });

  // Add event listeners for new edit and delete buttons
  const editButtons = document.querySelectorAll(".editBtn");
  editButtons.forEach((btn) => {
    btn.addEventListener("click", editTask);
  });
  const deleteButtons = document.querySelectorAll(".deleteBtn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteTask);
  });
}

function editTask(e) {
  const taskIndex = parseInt(this.dataset.index);
  const taskToUpdate = tasks[taskIndex];

  // Populate the form with the task's details
  titleInput.value = taskToUpdate.title;
  descriptionInput.value = taskToUpdate.description;
  dueDateInput.value = taskToUpdate.dueDate;

  // Update the addTaskBtn to update the task instead
  addTaskBtn.textContent = "Update";
  addTaskBtn.dataset.taskIndex = taskIndex; // Store the task index on the button
  addTaskBtn.removeEventListener("click", addTask);
  addTaskBtn.addEventListener("click", addTask);
}

function deleteTask(e) {
  const taskIndex = parseInt(this.dataset.index);

  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(taskIndex, 1);
    displayTasks();
  }
}