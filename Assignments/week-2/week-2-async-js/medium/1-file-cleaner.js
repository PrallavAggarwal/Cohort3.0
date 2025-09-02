// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
//
// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```
//
// After the program runs, the output should be
//
// ```
// hello world my name is raman
// ```


const fs = require('fs');
let content = '';

//read the content of the file
// content = fs.readFileSync('./test.txt', 'utf8')
//
// console.log(typeof content);
// console.log(content);
//
// let cleanContent = content.replace(/\s+/g, ' ');
// console.log(cleanContent);
//

//Now doing the same thing but using async await 
let cleaner = async function () {
  let rawContent = await fs.readFile('./test.txt', 'utf8');
  console.log(typeof rawContent);
  console.log(rawContent);

  let cleanerContent = rawContent.replace(/\s+/g, ' ');
  console.log(cleanerContent);
}

cleaner();
// console.log(cleanerContent);
