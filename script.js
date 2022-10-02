const input = document.getElementById("input");
const todoForm = document.getElementById("todoForm");
const list = document.getElementById("list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function init() {
  // handle input
  let todo = "";
  let tempTodos = [];

  const handleChange = (e) => (todo = e.target.value);
  input.addEventListener("change", handleChange);

  //testing new things
  console.log(new Date().getTime());
  // ruajte e nje vlere string ne local storage
  window.localStorage.setItem("test", "ruajte ne local storage");

  //marrja e vleres se ruajtur sipas key ne localstorage
  const storedKeyValue = window.localStorage.getItem("test");
  console.log(storedKeyValue);

  //form manipulation
  const onsubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      title: todo,
    };

    todos = [...todos, newTodo];
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };

  todoForm.addEventListener("submit", onsubmit);

  // display todo list
  let newObject = window.localStorage.getItem("todos");
  if (newObject) {
    const storedTodos = JSON.parse(newObject);

    storedTodos.forEach((todo) => {
      const li = document.createElement("li");
      li.innerText = todo.title;
      list.appendChild(li);
    });
  }
}

window.onload = () => {
  console.log("page loaded");
  init();
};
