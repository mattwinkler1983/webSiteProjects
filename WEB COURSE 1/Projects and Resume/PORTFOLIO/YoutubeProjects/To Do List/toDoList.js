const formEl = document.querySelector(".form")

const inputEl = document.querySelector(".input")

console.log(inputEl.value)

formEl.addEventListener("submit", (event)=>{
event.preventDefault();
toDoList()
})
function toDoList () {

}