//*******************************************************
//promisified setTimeout
// function setTimeoutPromisified(ms) {
//  let p = new Promise(resolve => setTimeout(resolve, ms));
//  return p;
// }
//
// function callback() {
//  console.log("3 seconds have passed");
// }

//setTimeoutPromisified(3000).then(callback)
// let p = setTimeoutPromisified(3000)
// console.log(p); //it will log instance of prommise.

//****************************************************
//wrapper around setTimeout
// function promiseCallback(resolve){
//   setTimeout(resolve, 3000);
// }
//
// function main(){
//   console.log('main is called.');
// }
//
// promiseCallback(main);

//*****************************************************
//simpler promisified setTimeout
// function waitFor3s(resolve){
//   setTimeout(resolve,3000);
// }
//
// function setTimeoutPromisified(){
//   return new Promise(waitFor3s);
// }
//
// function main(){
//   console.log('main function called.');
// }
// setTimeoutPromisified().then(main);

//*****************************************************
//understanding Promise class 
// function random(resolve){
//   setTimeout(resolve, 3000);
//
// }
// let p=new Promise(random);
// console.log(p);//it is instance of promise class. it tells that it will eventually completed sometime.
// //after eventually completed it will give control to .then(callback).
//
// function callback(){
//   console.log("Promise completed.");
// }
// p.then(callback);
//
//*********************************************************
//create promisified version of fs.readfile, fs.writefile, cleanFile
//import fs
const f = require("fs");
console.log('(1)---top of file---')

//executer : resolve of promise
function timer(resolve){
  console.log('(4)inside timer function.');
  f.readFile("b.txt", "utf8", function(err,data) {
    console.log('(8)readFile data done.');
    resolve(data)
  })
}

//promisified function
function readFilePromisified(){
  console.log('(3)readFilePromisified called.');
  return new Promise(timer);
}

//callback for instance of promise
function callback(content){
  console.log('(9)callback called.');
  console.log('(10)content of file : ', content);
}

//stored instance of promise
console.log('(2)stored instance of readFilePromisified.');
const InstanceOfPromise = readFilePromisified();
console.log('(5).then(callback) called.');
InstanceOfPromise.then(callback);

console.log('(6)callback based f.readFile called')
f.readFile('b.txt', 'utf8', (err,data) => { console.log('data : ', data)})
console.log('(7)---end of file---');
