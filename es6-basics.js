"use strict";
// ES2015/ES6 features - latest JavaScript; ECMA Community
// Destructuring - Objects and Arrays : Split the collection
exports.__esModule = true;
// var friends = ["Foo", "Bar", "Bam", "Baz"];
// var [arr1, arr2, arr3, arr4, arr5] = friends;
// // var newVar;
// // console.log(newVar);        // undefined
// console.log(arr5);          // Bam
// var myObj = {
//     drawText : function(text){return "I - Drawing " + text},
//     drawRect : function(w,l){return 2*w*l},
//     drawCircle : function(r){return Math.PI * r * r}
// }
// var myObj2 = {
//     drawText : function(text){return "II - Drawing " + text}
// }
// var { drawText : dt1, drawCircle, drawRect } = myObj;
// var { drawText : dt2 } = myObj2;
// console.log(dt1("Sample String"));
// console.log(dt2("Sample String"));
// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     age : 32,
//     friends : ["Bam", "Baz"],
//     address : {
//         city : "Bengaluru",
//         street : "201 Main Road"
//     }
// }
// var {
//     firstName : fn,
//     lastName : ln,
//     age,
//     friends: [f1, f2, f3],
//     address : {
//         city : ct,
//          street  : st
//     }
// } = user;
// console.log(fn, ln, age, f1, f2, ct, st);
// Block Scope : restricts the variable scope to the nearest curly braces
// - let : 
// - const :
// function demo(args){
//     if(args.length > 2){
//         let LOAD = "Loading"
//         console.log(FLASH);         // undefined / FLASHING / 
//     }else{
//         let FLASH = "FLASHING"
//     }
// }
// demo([1,2,3,4,5]);
// const USER = "Foo";
// USER = "BAR";
// const user = {
//     name : "Foo"
// }
// user = {
//     name : "Baz"
// }
//  user.name = "Bar"
// // user.email = "test@test.com"
// console.log(user);      // {name : "Bar"} / { name : "Foo"} / 
// // const != mutatble ->  true
// // const === immutable  -> true
// let str = "Some String";          // Immutable
// str = "New String";
// Immutable => Can't change the value
//  Mutatble => Can change the value
// Arrow functions / Lambda Expr - one-liner functions
// (param_list) => { // function body }
// With Curly braces = () => {}
// Without Curly braces () => return statement
// Don't have "this" keyword - 
// 
// "this" refers to current context; 
// "this" refers to Caller Object -> 100% Right in JavaScript
// let user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         return () => this.firstName +", " + this.lastName;
//         // let that = this;
//         // return function(){
//         //     return this.firstName + " " + this.lastName;
//         // }
//     }
// }
// // console.log(user.getFullName());    // Foo Bar
// let nestedFunc = user.getFullName();
// console.log(nestedFunc());          // undefined undefined
// var x= 300;
// // function abc(){
// //     console.log(x);         // 300
// // }
// // Lexical Scoping/Environment
// function xyz(){
//     var x = 100;
//     function abc(){
//         console.log(x);         // 100
//     }
//     abc();
// }
// xyz();
// Call / Apply / Bind
// let user1 = {
//     firstName : "Bam",
//     lastName : "Baz"
// }
// let boundFunc = user.getFullName.bind(user1);
// console.log("BOUND FUNC", boundFunc());
// console.log("CURRENT CONTEXT - ", user.getFullName());
// let numbers = [1,2,3,4,5];
// ES5 Way
// let newArray = numbers.map(function(value, index, array){
//     console.log("INDEX - ", index);
//     return value * 2
// });      // Iterator Function      
// console.log(newArray);      // []
// ES6 Way - Arrow Function
// let tripleValue = numbers.map((value, index, array) => value * 3);
// let tripleValue = numbers.map((value, index, array) => {
//     console.log(index);
//     return value * 3
// });
// console.log(tripleValue);
// let modifiedNum = numbers.forEach(num => {
//     return num * 2
// });
// console.log("FOREACH - ",  modifiedNum);
// const map = new Map();
// Rest and Spread ( ... )
// - Rest : 
//  - takes the individual elements and creates the collection
//  - function arguments
//  - last parameter in argument list
// - Spread : Takes the collections and spreads into individual elements
// SPREAD
// let arr = [3,4,5];
// let newArr1 = [1,2, ...arr , 6,7,8];
// let newArr2 = [1,2, arr , 6,7,8];
// console.log(newArr1);            // [1,2,3,4,5,6,7,8]
// console.log(newArr2);            // [1,2,[3,4,5],6,7,8]
// let user = {
//     name : "Foo",
//     email : "foo@test.com",
//     address :{
//         city : "Bengaluru"
//     }
// }
// let newUser = {
//     ...user,
//     email : "test@test.com",
//     age : 32
// }
// // newUser.name = "Bar";
// console.log(newUser);       // { name : "Foo", email : "", age : 32}
// let newObj = Object.assign(
//     {name : "Vivek"}, 
//     {email : "ina@kronos.com", age : 32}, 
//     {name : "Ina", age : 34}
//     );
// console.log(newObj);            
// {email : "ina@kronos", name : "Ina", age : ?} 
// REST
// function display(name, email, ...args){
//     console.log(args[0]);           // emailID
// }
// display("Sumit Khandelwal", "sumit@test.com");
// display("Sumit Khandelwal", "sumit@text.com");
// display("Sumit Khandelwal", "sumit@text.com", 37);
// Template Syntax - back-tick (``) | Single Quotes ('') | Double Quotes ("")
// - Embedd variables within string
// - Multiline Strings without (+) operator
// let username = "Foo";
// let age = 36;
// let str = `Hello ${username},
// I am ${age} years old!`;
// let str1 = "Hello " + username + ",\n" + "I am " + age + " years old!";
// console.log(str);
// Modules
// - ES5 - 
//  - module.exports to export functionality
//  - require() to import functionality
// const utils = require("./utils");
// console.log(utils.MAGIC_NUMBER);
// console.log(utils.add(4,6));
// - ES6 - Import / Export keywords
var student_1 = require("./student");
var foo = new student_1.Student("Foo Bar", "foo@test.com");
console.log(foo.sayHello());
console.log(student_1.add(3, 5));
// TypeScript - Working with types
// Type Systems & Classes
// Access Modifiers
// Interface - Complex types
// JS can run in two environments 
//  - Client (Browser)
//  - Server (NodeJS Platform) 
// NodeJS Imstaller
//  - Core/Native Modules (e.g http, fs, os, utils etc)
//  - Node Runtime Environment (NRE)
//  - Node Package Manager (NPM)
// Angular - Vanilla JS, LatestJS, TypeScript, DART
