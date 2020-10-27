// your code here
const form = document.getElementById("create-task-form")
const deleteButton = document.createElement("button")
const tasks = document.getElementById("tasks")

form.addEventListener("submit", function(e) {
  //const node = document.createTextNode(newTask) 
  //const tasks = document.getElementById("tasks")
  const newTask = e.target["new-task-description"].value 
  form.reset()
  const li = document.createElement("li")
  //li.appendChild(node)
  li.innerHTML += `${newTask} 
  <button data-action = "delete" > X </button>` 
  tasks.appendChild(li)
  debugger
  e.preventDefault();
})

tasks.addEventListener("click", function (e) {
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove();
  }
});