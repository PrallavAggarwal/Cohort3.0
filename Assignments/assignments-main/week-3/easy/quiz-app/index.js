import quizData from "./data.js";
console.log(quizData);

let question = document.getElementById("question");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");

a.innerText = quizData[0].a;
b.innerText = quizData[0].b;
c.innerText = quizData[0].c;
d.innerText = quizData[0].d;
question.innerHTML = quizData[0].question;
