function sum(a,b){
  let ans = a + b;
  return ans;
}

console.log("sum of 2 and 3 : ",sum(2,3));


function sumToN(n){
  let ans = 0;
  for(let i=0; i<n; i++){
    ans+=i;
  }
  return ans;
}

const ans = sumToN(100);
console.log("Sum from 0 to 100 : ", ans);

const f = require("fs");

const file = f.readFileSync('a.txt', 'utf8');
console.log("file : ", file);

const file2 = f.readFileSync('b.txt', 'utf8');
console.log("file2 : ", file2);



//writing AsyncJS
function print(err, data){
  console.log("data :\n" , data);
}

f.readFile('a.txt', 'utf8', print)

f.readFile('b.txt', 'utf8', print)

setTimeout(()=>{
  console.log("inside settimeout waiting from 0 second")
}, 0);

console.log('done!!!!')
