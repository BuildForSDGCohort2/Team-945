document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value;
        if (taskText.trim() === "") return;

        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete">Delete</button>`;
        taskList.appendChild(li);

        taskInput.value = "";
        li.querySelector("button.delete").addEventListener("click", function() {
            taskList.removeChild(li);
        });
    });
});
