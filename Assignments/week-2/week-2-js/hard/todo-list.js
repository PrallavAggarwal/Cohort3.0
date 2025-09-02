/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

//   id:124,
//   title: 'first task',
//   date: Date.now(),
//   time: Date.now(),
//   about: 'about your task.'
// }


class Todo {
  constructor(){
    this.todos = [];
  }
  add(index, newTask){
    if(index<0 || index>this.todos.length){
      console.log('give proper indexing.');
      return;
    }
    this.todos[index] = newTask;
  }
  remove(index){
    if(index<0 || index>=this.todos.length){
      console.log('give proper indexing');
      return;
    }
    this.todos.splice(index, 1);
  }
  update(index, newTask){
    if(index<0 || index>=this.todos.length){
      console.log('give proper indexing.');
      return;
    }
    this.todos[index] = newTask;
  }
  get(){
    for (let index in this.todos) {
      let val = Number(index) + 1;
      console.log(`Your task ${val} is ${this.todos[index]}`);
    }
  }
}


let task = new Todo();
task.add(0, 'eating');
task.add(1, 'exercise');
task.add(2, 'study');
task.add(3, 'code');
task.add(4, 'sleep');
task.get();
task.remove(2);
task.get();
task.update(2,'Walk');
task.get();

// module.exports = Todo;
