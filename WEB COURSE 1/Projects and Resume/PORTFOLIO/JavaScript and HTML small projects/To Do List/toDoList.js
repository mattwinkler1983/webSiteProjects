const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

// Load saved tasks from localStorage
let savedList = JSON.parse(localStorage.getItem("list")) || [];
savedList.forEach(task => {
    toDoList(task);
});

// Handle form submission
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList(); // Add new task
});

function toDoList(task) {
    let newTask = inputEl.value;
    if (task) {
        newTask = task.name;
    }

    if (!newTask) return; // Do not add empty tasks

    const liEl = document.createElement("li");
    liEl.innerText = newTask;

    if (task && task.checked) {
        liEl.classList.add("checked");
    }

    ulEl.appendChild(liEl);
    inputEl.value = "";

    // Create check button
    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `<i class="fa-regular fa-square-check"></i>`;
    liEl.appendChild(checkBtnEl);

    // Create trash button
    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    liEl.appendChild(trashBtnEl);

    // Toggle check
    checkBtnEl.addEventListener("click", () => {
        liEl.classList.toggle("checked");
        updateLocalStorage();
    });

    // Remove task
    trashBtnEl.addEventListener("click", () => {
        liEl.remove();
        updateLocalStorage();
    });

    updateLocalStorage();
}

function updateLocalStorage() {
    const liEls = document.querySelectorAll("li");
    let list = [];
    liEls.forEach(liEl => {
        list.push({
            name: liEl.childNodes[0].nodeValue.trim(), // Get only text
            checked: liEl.classList.contains("checked")
        });
    });
    localStorage.setItem("list", JSON.stringify(list));
}