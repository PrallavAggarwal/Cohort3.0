"use strict";
// let a: number = 1;
//
// console.log(a)
// let hostname: string = "prallav"
// console.log("hostname : ", hostname);
//
//
// //sum function 
// function sum(a: number, b: number) {
//   console.log(`sum : ${a + b}`)
// }
//
// sum(2, 3);
//
//
// //isEligible function 
// function isEligible(age: number) {
//   if (age >= 18) return true;
//   return false;
// }
//
// console.log(isEligible(19))
//
// //
// function sum2(a: number, b: number): number {
//   let sum: number = a + b;
//   return sum;
// }
// console.log(sum2(2, 4))
//
// //type to function as argument 
// function delayedFunc(anotherFunc: () => void) {
//   setTimeout(anotherFunc, 2000);
// }
//
// delayedFunc(function () {
//   console.log("hello")
// })
//
//
// //sort of polymorphism 
// function polyFun(fn: () => void): void;
// function polyFun(fn: () => string): void;
// //function implementaion
// function polyFun(fn: () => void | string): void {
//   setTimeout(async () => {
//     const result = fn();
//     if (typeof result === "string") {
//       console.log(result)
//     }
//     else {
//       console.log("type is void")
//     }
//   }, 1000);
// }
//
// polyFun(() => {
//   return "what are you doing ?"
// })
//
// polyFun(() => {
//   console.log("hello void.")
// })
//
//
// //interface
// // interface User {
// //   firstname: string;
// //   lastname: string;
// //   email: string;
// //   age: number;
// //   address?: Address  //optional field and other interface used.
// //   greet: (msg: string) => string, //function as entry with argument and return type as string,
// // }
//
// interface Address {
//   city: string,
//   country: string,
//   pincode: number
// }
//
// let profile01: User = {
//   firstname: "prallav",
//   lastname: "aggarwal",
//   email: "prallav@gmail.com",
//   age: 23,
//   greet: (firstname: string): string => { return firstname + "hello"; }
// }
//
// function isLegal(user: User): boolean {
//   // let fname: string = user.firstname;
//   console.log(user.greet(user.firstname)) //it may show error if greet is optional field.
//   console.log(user.greet("ben"))
//   return user.age >= 18;
// }
//
// console.log(isLegal(profile01))
// profile01.greet("ben")
//
// //classes using interfaces 
// interface Person {
//   name: string;
//   age: number;
// }
//
// class mangager implements Person {
//   name: string;
//   age: number;
//   hobby: string;
//   constructor(name: string, age: number, hobby: string) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
//   }
//
//   print(): void {
//     console.log(`name: ${this.name}, age: ${this.age}, hobby: ${this.hobby}`);
//   }
// }
//
// let lee = new mangager("lee", 23, "coding");
// lee.print();
//
// class submanager extends mangager {
//   constructor(public name: string, public age: number, public hobby: string, public subid: number) {
//     super(name, age, hobby);
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
//     this.subid = subid;
//   }
//
// }
// let assist = new submanager("ben", 23, "coding", 1324);
// assist.print();
// let assist2 = new submanager("jon", 24, "reading", 2313);
// assist2.print();
//
Object.defineProperty(exports, "__esModule", { value: true });
function isAdult(users) {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
        console.log(users[i]?.name);
    }
}
let users = [{ name: "lee", age: 23 }, { name: "ben", age: 34 }];
isAdult(users);
// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
// }
//
// function filteredUsers(users: User[]) {
//   return users.filter(x => x.age >= 18);
// }
//
// console.log(filteredUsers([{
//   firstName: "harkirat",
//   lastName: "Singh",
//   age: 21
// }, {
//   firstName: "Raman",
//   lastName: "Singh",
//   age: 16
// },]));
//# sourceMappingURL=index.js.map