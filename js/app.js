//Variables

// Global Variables
const HIDDEN_CLASSNAME = "hidden";

// Username 
const nameInput = document.querySelector(".nameInput");
const nameBox = document.querySelector(".nameBox");
const USERNAME_KEY = "USERNAME";
const greeting = document.querySelector("#greeting");
const savedUserName = localStorage.getItem(USERNAME_KEY);


// Mantra
const mantraInput = document.querySelector(".mantraInput");
const mantraBox = document.querySelector(".mantraBox");
const mantraSubmitBox = document.querySelector(".mantraSubmitBox");
const MANTRA_KEY = "MANTRA";
const savedMantra = localStorage.getItem(MANTRA_KEY);

// To-do-list
const yourMantra = document.querySelector(".yourMantra");
const author = document.querySelector(".author");

const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos"
let toDos = [];


// Username Input -done.
function handleNameForm(event) {
    event.preventDefault();

    const username = nameBox.value;

    nameInput.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
};

if(savedUserName === null) {
    nameInput.classList.remove(HIDDEN_CLASSNAME);
    nameInput.addEventListener("submit", handleNameForm);
} else {
    paintGreeting(savedUserName); 
};

function paintGreeting(event) {
    greeting.innerText = `${event}, What's your mantra?`; 
    mantraInput.classList.remove(HIDDEN_CLASSNAME);
};

// Mantra Input
function handleMantraForm(event) {
    event.preventDefault();

    const mantraContext = mantraBox.value;
    const username = nameBox.value;

    localStorage.setItem(MANTRA_KEY, mantraContext);
    paintMantra(mantraContext);
    paintAuthor(username);
};

if(savedMantra === null) {
    mantraInput.addEventListener("submit", handleMantraForm);
} else {    
    paintMantra(savedMantra);
    paintAuthor(savedUserName);
};

function paintMantra(mantraContext) {
    yourMantra.innerText = `" ${mantraContext} "`;
    mantraInput.classList.add(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
};

function paintAuthor(savedUserName) {
    author.innerText = `- ${savedUserName}`;
};


// Handing To-do-list Part
toDoForm.addEventListener("submit", handleToDoSubmit);

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
};

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "✓";
    button.addEventListener("click", deleteTodo);
    
    li.appendChild(span);
    li.appendChild(button);
  
    toDoList.appendChild(li);
    
};

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
};


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
};
