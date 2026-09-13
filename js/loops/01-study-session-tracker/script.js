// selections

const tasks = []; 

const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const emptyMessage = document.querySelector("#empty-message");

function renderTasks() {
    taskList.innerHTML = "";

    for (let index = 0; index < tasks.length; index++) {
        const listItem = document.createElement("li");
        listItem.textContent = tasks[index];

        taskList.appendChild(listItem);
    }

    const taskLabel = tasks.length === 1 ? "task" : "tasks";

    taskCount.textContent = `${tasks.length} ${taskLabel}`;

    if (tasks.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const task = taskInput.value.trim();

    if (task === "") {
      return;
    }

    tasks.push(task);

    renderTasks();

    taskInput.value = "";
});