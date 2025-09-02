let input = document.querySelector('#input_field');
console.log('input element : ', input);
console.log('value of input element : ', input.value);
console.log('hello')

let task_list = [];


function addTask() {
  // console.log('add task called successfully.')
  // input.value = input.innerText;
  // console.log('value of input : ', input.value);
  if (input.value === '') {
    alert('input field is empty.');
    return;
  }
  //generate an element 
  // let newTask = document.createElement('div');
  // let newTaskContent = document.createTextNode(input.value);
  // newTask.appendChild(newTaskContent);
  // //append created element in dom 
  // let ParentDiv = document.querySelector("#Tasks")
  // document.getElementById("Tasks").ppendChild(newTask);


  //generating by another method.
  task_list.push({
    task: input.value,
  });
  let index = task_list.length;
  let newTask = document.createElement('div');
  newTask.setAttribute("id", "todo-" + index);
  newTask.setAttribute("class", "task_name");
  let Deletebutton = document.createElement("button")
  Deletebutton.setAttribute("onclick", `deleteToDo(${index})`)
  Deletebutton.innerHTML = "Delete task."
  newTask.innerHTML = `${index}. ${input.value}`
  newTask.appendChild(Deletebutton)

  // newTask.innerHTML = `${index}. ${input.value} <button onclick = "deleteToDo(${index})">delete task.</button>`

  document.getElementById("Tasks").appendChild(newTask);
}

function deleteToDo(index) {
  //deleting from array
  task_list.splice(index - 1, 1);
  console.log("ToDo deleted from array.");
  console.log('task_list after deletion : ', task_list);
  console.log('task_name before deletion : ', document.getElementsByClassName("task_name"));
  console.log('Tasks before deletion : ', document.getElementById("Tasks"));

  //selecting node to be deleted from DOM.
  let taskToBeDeleted = document.getElementById("todo-" + index);

  //deleting selected node from DOM.
  document.getElementById("Tasks").removeChild(taskToBeDeleted);
  console.log('ToDo deleted from DOM.');
  console.log('Tasks after deletion : ', document.getElementById("Tasks"))
  console.log('task_name after deletion : ', document.getElementsByClassName("task_name"));
  let elements = document.getElementsByClassName("task_name");
  //console.log('elements : ', elements);
  for (let index = 0; index < elements.length; index++) {
    let element = elements[index];
    let temp = index + 1;
    let temp2 = task_list[index].task;
    element.setAttribute("id", "todo-" + temp)
    element.innerHTML = `${temp}. ${temp2} <button onclick = "deleteToDo(${temp})">delete task.</button>`
    console.log("elements in loop : ", element);
  }
  console.log('elements after loop : ', elements);
  console.log('task_name after loop : ', document.getElementsByClassName("task_name"));
  // newTask.innerHTML = `${index}. ${input.value} <button onclick = "deleteToDo(${index})">delete task.</button>`
}


let counter = 0;
let timer = document.querySelector(".timer");
setInterval(() => {
  counter = counter + 1;
  timer.textContent = counter;
}, 1000)
