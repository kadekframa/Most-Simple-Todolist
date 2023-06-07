// variable declaration.
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("addTask");

// Function addTask use to add new todo item.
const addTask = () => {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

// Call function addTask using eventTarget (addEventListener).
addButton.addEventListener("click", () => {
  addTask();
});

// Use eventTarget to check list and remove the list.
listContainer.addEventListener(
  "click",
  (event) => {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// Save data into local stograge.
const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

// Get data from local storage.
const getData = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

// Call function getData to display todo items into unordered list.
getData();
