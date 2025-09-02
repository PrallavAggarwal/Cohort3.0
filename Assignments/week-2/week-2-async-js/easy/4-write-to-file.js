// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require("fs");
const data = 'NEW DATA THAT IS INSERTED WHILE DOING ASYNCHRONOUS OPEREATIONS.';
const path = 'test.txt';

fs.writeFile(path, data, (err, data) => {
  if (err) {
    throw err;
  }
  console.log('Data written to file successfully.')
})

for (let i = 0; i < 1000; i++) {
  console.log(("I am groot."));
}
