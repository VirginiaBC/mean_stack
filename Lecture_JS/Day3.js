// "use strict"

// ES - EcmaScript
// ES6 new features
// let const
// destucturing
// arrow functions

// ES7 Array.includes()
// ES8 Object.entries, Object.values, Async Await 
// ES9 rest/spread operator with Objects
// ES10 bigInt
// ES2022  , release in June, .at()   .at(-1)  === arr[arr.length-1]
// arr[0] = arr.at(0)
// arr[arr.length-1]. arr.at(-1)

// caniuse.com
///////////////////////////////////////////////////////////////

// Destructure Array
// let a = 1
// let b = 2
// let c = 3

// let [a, b, c] = [1, 2, 3]


// let [a, b] = [1, 2, 3]
// let [a, b, c, d] = [1, 2, 3]
// let [a, b, c = 33, d = 44] = [1, 2, 3]

// let [a, , b] = [1, 2, 3]
// let [, b] = [1, 2, 3]

//rest parameter/ spread operator

// let [, ...b] = [1, 2, 3, 4]

// rest element not as the last element
// let [...b, ,a] = [1, 2, 3, 4]

// console.log(obj1.name)
// console.log("a = ", a)
// console.log("b = ", b)
// console.log("c = ", c)
// console.log("d = ", d)

/////////////////////////////////////////////////
// Desturcture Objects
// let obj = { x: 1, y: 2 }

// let { a, b} = obj
// let { x, y } = obj

// let { a, ...x } = { a: 1, c: 3 }

// let { a: x, b: y } = { a: 2, b: 3 }
// // console.log("a = ", a)
// // console.log("b = ", b)
// console.log("x = ", x)
// console.log("y = ", y)

///////////////////////////////////
// const obj2 = {name:"JR", id:1}
// let obj1 = {...obj2};
// obj1.name = "Moe"
// // console.log(obj2.name)
// const {name} = obj2

// console.log(name)
// obj1 = { age:30, name:name}
// console.log(obj1)
// clone only part of Obj2 into Obj1


/////////////////////////////////////////////////////////////
// Arrow functions

// "use strict"
// function foo(){
//     console.log("Normal fn");
//     console.log(this);
//   }


// const foo = function () {
//     console.log("Normal fn");
//     console.log(this);
//   }

//   const foo2 = () => {
//     console.log("Arrow fn");
//     console.log(this);
//   };
//   foo();
//   foo2()

// const foo = function() {
//     console.log("Normal fn");
//     console.log(this);
//   }.bind(this)

//   const foo2 = () => {
//     console.log("Arrow fn");
//     console.log(this);
//   };

//   https://stackoverflow.com/questions/22770299/meaning-of-this-in-node-js-modules-and-functions


//   foo(); //Print global object
//   foo2(); //Print an empty object

// https://www.w3schools.com/js/js_this.asp

// const obj = {
//     title: "developer"
// }

// function person(name, age){
//     console.log(this.title + name + age);
// }

// person.bind(obj)("ad",39)

// bind/ apply/ call
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

// module.exports.x = 200;
// this.x = 100
// global.x = 300;
// console.log(this)

// function foo2() {
//     console.log(this)
// }
//   foo2()

// function foo(){
//     this.xy = 100;
//     console.log(this)
// }
// foo()
// console.log(this.xy)

// const testObj = {
//     x:999
// }

// const module1 = {
//     x: 42,
//     y:this,

//     getX: () => {
//       this.x = 1000;
//       console.log(this.x)
//       return this.x;
//     },

//     getY: function(){
//         console.log(this.y)
//     },

//     getOutsideY: () => {
//         console.log(this.y)
//     },

//     getOutsideX: function(){
//         console.log(this.x)
//         return this.x;
//     }.bind(this)
//   };
  
//   module1.getY();
//   module1.getOutsideY();
//   module1.getX()
//   module1.getOutsideX()
//   console.log(this.x);

//   const unboundGetX = function(){

//   }
//   const boundGetX = unboundGetX.bind(this)
//   console.log(unboundGetX()); 

//   const boundGetX = unboundGetX.bind(module1);
//   console.log(boundGetX());

////////////////////////////////////////////////////
// const Person = {
//     name:"jack",
//     age:25,
//     sayName = function(){

//     }

// }



//   function Person() {
//     console.log(this)
//     this.name = 'Jack',
//     this.age = 25,

//     this.sayName = function () {}

//     //     console.log(this.age);

//     //     const inner = function() {

//     //         // console.log(this.age);
//     //         console.log(this);
//     //     }

//     //     inner();

//     // }
//     this.sayName.inner = function(){
//         // console.log(this.age);

//             // console.log(this.age);
//             console.log(this);
//     }
// }


// let x = new Person();
// // console.log(x.sayName.inner())
// x.sayName.inner()

// x.sayName();

// call/ apply
// https://www.w3schools.com/js/js_function_apply.asp






// IIFE Immediately Invoked Function Expression
// (function foo(message){
//     console.log(message)
// })("hello 1")

// ((message) => {
//     console.log(message)
// })("hello")

// function foo2(message){
//     console.log(message)
// }
// foo2("hello")
// (()=>{
//     console.log("running")

// })()

// (function logText(){
//     console.log("log the test")
// })()

// ((input) => {
//     console.log(input)
// })("this is the input")

// const controller = (function (a) {
//     // return {
//     //   init: () => {
//     //     console.log("init: " + a);
//     //   },
//     // };
//     return a;
//   })(5);

// console.log(controller)

/////////////////////////////////////////////////
// Callback functions
// A callback is a function passed as an argument 
// to another function
// A callback function can run after another function has finished
// sequence control

// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

// const arr = [1,2,3,4,5]

// arr.reduce(cb, 0)


// const cb = (acc,curr) => acc += curr



// console.log(arr.reduce(cb,0))

// const arr = [1,2,3,4,5]
// const arr1 = [
//     {name:"JR", age:30},
//     {name:"David", age:40},
//     {name:"Moe", age:25},
// ]
// callBackFn = (accumulator, CurrentValue) => {
//     accumulator = accumulator + CurrentValue.name
//     return accumulator;
// }
// console.log(arr1.reduce(callBackFn))

// console.log(arr1.reduce((acc,curr) => { return acc += curr.age}, 0));

// const arr = [1,2,3,4,5]
// let accumulator = -5;
// for(let i = 0; i< arr.length; i++){
//     accumulator += arr[i]
// }
// return accumulator

// arr.reduce((acc,curr)=> acc+= curr , -5)

// arr.map(cb)
// cb = (number) => number * 2;

// const arr = [1,2,3,4,5]

// for(let i = 0; i< arr.length; i++){
//     arr[i] = arr[i] * 2
// }
// return arr

//////////////////////////////////////////////////////////////

// Higher-Order Functions // First-order function
// Higher order functions are functions that 
// operate on other functions, either by taking them 
// as arguments or by returning them. In simple words, 
// A Higher-Order function is a function that receives a 
// function as an argument or returns the function as output.
// Array.prototype.map
// Array.prototype.filter

///////////////////////////////////////////////////////////
// Closure
// In JavaScript, a closure is a function that references 
// variables in the outer scope from its inner scope. 
// The closure preserves the outer scope inside its inner scope.


// function tem(){
//     let score = 20;
//     function get(){
//         console.log(this)
//         console.log(this.score)
//     };
// }
// get()
// function scoreBoard() {

//     // Local variable that ends up within the closure 
//     let score = 100;
//     let board = "A"

//     const minusScore = function () { 
//         score--;
//         console.log(score)
//     }

//     const addScore = function () { 
//         score++;
//         console.log(score)
//     }
//     return [addScore,minusScore];
// }

// const {add,minus} = scoreBoard()
// add()
// minus()


// const sayHelloClosure = sayHello();
// sayHelloClosure(); // ‘Hello, world!’

//////////////////////////////////////////////////////////
//Currying


// foo(a)(b)(c)(d)(e)


// function multiply(a, b, c) {

//     return a * b * c;
// }
// let res = multiply(1, 2, 3);
// console.log(res);

// multiply(a)(b)(c)

// function mulitiply(a){

//     return function(b){

//         return function(c){

//             return a*b*c

//         }

//     }

// }





// function multiply(a, b, c) {

//     return a * b * c;
// }
// console.log(multiply(a,b,c))

// function multiply_curried(a) {

//     return function (b) {
//         return function (c)  {
//             return a * b * c
//         }
//     }
// }
// const curried = multiply_curried(a)(b)(c)
// console.log(curried)


// let a = 1
// let b = 2 
// let c = 3

// function multiply_curried(a) {

//     return function (b) {
//         return function (c)  {
//             return a * b * c
//         }
//     }
// }

// let mc1 = multiply_curried(5);
// console.log(mc1(b)(c))
// function mc1(b) {
//     return function (c)  {
//         return 1 * b * c
//     }
// }

// mc2 = multiply_curried(a)(b)
// let mc2 = mc1(10);

// function mc2(c){
//         return 1 * 2 * c
// }


// let res2 = mc2(3);
// console.log(res2);

// let res3 = multiply_curried(1)(2)(3);
// console.log(res3);



// Assignment 

// Create a function that everytime you invoke it, it will print out the message "Congrats you earn the chance!", however it can only print out the message with the first 5 excutions. all the rest invoke will print out the message "Sorry you missed the chance"

// function printMsg(a) {
//     function say(msg) {
//         if (a > 0) {
//             console.log(msg)
//             a--;
//         } else {
//             console.log("undefined")
//         }
//     }
//     return say;
// }



// const cb1 = (a,x) => a + x
// const cb2 = (b,y) => b * y
// const cb3 = (c,z) => c - z

// function runAll(cb1,cb2,cb3){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return function(d){
//                     return cb3(cb2(cb1(d,c),b),a)
//                 }
//             }
//         }
//     }

// }


// console.log(runAll(cb1,cb2,cb3)(3)(2)(2)(3)) //8

// Filter an Array with a user input of minimum length


arr1 = ["123123", "123", "451511", "422"]
minimumLength = 5


// const cb = function(length){
//     return function(item){
//         return item.length > length
//     }
// }

// console.log(arr1.filter(cb(minimumLength)))

function cb2(item){
    return function(length){
        return item.length > length
    }
}
console.log(arr1.filter(res=>cb2(res)(minimumLength)))

// Array.prototype.myReduce = function(cb, initial){
//     console.log(this)
//     let initialValue = (initial !== undefined) ? initial : this[0]
//     for(let i = (initial !== undefined) ? 0 : 1; i < this.length; i++){
//         initialValue = cb(initialValue, this[i])
//     }
//     return initialValue;
// }
// // const arr = new Array(1,2,3,4,5)
// const arr = [
//     {name:"JR"},
//     {name:"David"},
//     {name:"Luke"},
//     {name:"Moe"},
// ]
// console.log(arr.myReduce((acc , curr) => acc += curr.name, ""))
