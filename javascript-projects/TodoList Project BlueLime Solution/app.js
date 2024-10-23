// //retrieve data from local storage
// function get_todos(){
//     var todos = new Array;
//     var todos_str = localStorage.getItem('todo');
//     if(todos_str !== null){
//         todos = JSON.parse(todos_str);
//     }
//     return todos;
// }

// function add(){
//     var task = document.getElementById('task').value;

//     var todos = get_todos();
//     todos.push(task);
//     localStorage.setItem('todo', JSON.stringify(todos));

//     show();
//     clearDefault();
//     return false; //avoids any futher action with click event
// }

// //clear the task value from input box
// function clearDefault(){
//     document.getElementById('task').value = '';
// };

// //remove tasks from the list
// function remove(){
//     var id = this.getAttribute('id');//refers to current DOM element
//     var todos = get_todos();
//     todos.splice(id, 1);
//     localStorage.setItem('todo', JSON.stringify(todos));

//     show();

//     return false; //avoids further action with click event
// }

// function show(){
//     var todos = get_todos();

//     var html = '<ul>';
//     for(var i = 0; i < todos.length; i++){
//         html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">Delete</button> </li>';
//     };
//     html += '</ul>';
//  console.log(html);
//     document.getElementById('todos').innerHTML = html;

//     var buttons = document.getElementsByClassName('remove');
//     for(var i=0; i < buttons.length; i++){
//         buttons[i].addEventListener('click', remove);
//     };
// }

// document.getElementById('add').addEventListener('click', add);

// show();

// boss coded
let inputValue = "";
let toDo = [];
let taskinput = document.getElementById("task");
let buttons = document.getElementById("add");
let ulList = document.getElementById("list-main");

taskinput.addEventListener("keyup", inputHandler);
buttons.addEventListener("click", buttonHandler);

function inputHandler(e) {
  inputValue = e.target.value;
}

function buttonHandler() {
  if (inputValue.trim() == "") {
    alert("Please enter a value!!!");
    return;
  } else if (inputValue.length < 3) {
    alert("Enter atleas 3 letters");
    return;
  }
  toDo.push(inputValue);
  taskinput.value = "";
  console.log(toDo);
  addItemToList();
  //   removeItem();
}

function addItemToList() {
  for (let index = toDo.length; index < toDo.length + 1; index++) {
    let list = document.createElement("li");
    let batun = document.createElement("button");
    batun.setAttribute("id", index - 1);
    batun.innerText = "Delete";
    batun.addEventListener("click", (e) => {
    removeItemAtIndex(e.target.id, toDo);
    });
    list.innerHTML = toDo[index - 1];
    list.setAttribute("id", index - 1);
    ulList.appendChild(list);
    list.appendChild(batun);
  }
  console.log(toDo);
}

function removeItemAtIndex(_index, arr1) {
  for (let index = 0; index < arr1.length; index++) {
    if (_index == index) {
      for (let j = index; j < arr1.length - 1; j++) {
        arr1[j] = arr1[j + 1];
      }
    }
  }
  toDo.pop();
  console.log(toDo, "todooooo");
  if (toDo.length < 1) {
    ulList.remove();
  } else {
    let childs = ulList.children;
    ulList.removeChild(childs[_index]);
  }
}
