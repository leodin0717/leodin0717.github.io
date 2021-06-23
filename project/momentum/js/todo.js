const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const TODOS_KEY = "todos";
const toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo );
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li); // append는 항상 마지막에 놓여져야 한다.
}
function handleToDoSubmit (event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDos.push(newTodo);
  toDoInput.value = "";
  paintToDo(newTodo);
  saveToDos(); 

}

function sayHello(item){
  console.log("this is item", item);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((item) => console.log("this is item ", item));
}
