const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  // toDos 객체 안에 있는 id값이 사용자가 클릭한 X버튼의 부모인 li의 id값과 같을 경우 false를 반환하므로 filter에 의해서 flase 값은 제외가 된다. 즉, 동일한 id값이면 삭제하는 것
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  // toDos array에 입력값인 text와 입력값의 구분을 위한 랜덤 id를 넘기기위한 객체 생성
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // Array라서 forEach를 가지고 있고 forEach는 array에 있는 각각의 item에 대해 function을 실행해준다.
  // 화살표 함수는 function, 함수명을 작성할 필요가 없이 매개변수를 적고 => 이후 실행구문을 적어주면 된다.
  parsedToDos.forEach(paintToDo);
}