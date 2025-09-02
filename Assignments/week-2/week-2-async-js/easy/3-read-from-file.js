// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 



const fs = require("fs");
const path = './README.md';

fs.readFile(path, 'utf8', (err, data) => {
  console.log(data);
})

for (let index = 0; index < 10000; index++) {
  console.log('I am groot.')
}

