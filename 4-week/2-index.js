const process = require('process');
const fs = require('fs');

// console.log(process.argv);

function main(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    else {
      console.log("*************************DATA IN FILE PASSED***************************************************");
      console.log(data);
      console.log("**********************************FILE ENDED***************************************************");
      let count = data.split(' ').length;
      console.log(`Number of words in your file : ${count}.`);
      let Line_count = data.split('\n').length;
      console.log(`Number of lines in your file : ${Line_count}.`);

    }
  });
}

main(process.argv[2]);
