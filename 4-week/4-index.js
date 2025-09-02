//# Assignment #2
// Filesystem based todo list.
// Create a `cli` that lets a user
//
// 1. Add a todo
// 2. Delete a todo
// 3. Mark a todo as done
//
// Store all the data in files (todos.json)
//Steps 
// 1. Add todo : take task as input from cli. Then add it to array or some other file.
// 2. Delete todo : take id of todo from cli
// 3. List todo : list all todos
// 4. Mark todo as done. 

const fs = require('fs')
const { Command } = require('commander');
const program = new Command();
const collection = [];

program
  .name('todo-app')
  .description('It stores todo-task in json file.')
  .version('0.0.1')

program
  .command('add-todo')
  .description('It will add todo-task.')
  .argument('<file>', 'It takes task as strings to store in json file.')
  .argument('<data>', 'task name')
  .action((file, data) => {
    console.log(file);
    let newData = data;
    fs.readFile(file, 'utf8', (err, data) => {
      console.log(JSON.parse(data)[1]);
      let temp = JSON.parse(data);
      temp.forEach(element => {
        collection.push(element);
      });
      collection.push(newData);
      console.log('collection : ', collection);
    })
    // collection.push({ id: collection.length, name: data });
    // console.log('collection : ', collection);
    // fs.writeFile(file, JSON.stringify(collection), 'utf8', (err) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   else {
    //     console.log('task added.');
    //   }
    // })
  })
  .action((file, data) => {
    fs.writeFile(file, JSON.stringify(collection), 'utf8', (err) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log('task added.');
      }
    })

  })


program.parse();
