// loops

// for of
// const arr2 = [1,8,7,6,5]
// for (let ele in arr2) {
//     console.log(ele);
//     // ele === array[i]
// }


// for in
// obj1 = {
//     name:"JR",
//     age:30
// }
// for (let key in obj1) {
//     console.log(key)
//     // console.log(key + ": " + obj[key]);
// }

//argument
// function foo() {
//     for (let index = 0 ; index < arguments.length; index++) {
//         console.log(arguments[index]);
//     }
// }
// foo(1, 2, 3, 4, 5, 6);

// rest parameter vs spread operator 
// ...

//rest parameter
// function foo2(a,b,c,...args) {
//     console.log(args)

// }
// foo2(1, 2, 3, 4, 5, 6);

// spread operator
// const student = {
//     name:"JR",
//     age:30
// }

// const studentNew = { ...student, name:"daivd"}

// console.log(studentNew)

// function sum(x, y, z) {
//     return x + y + z;
// }
// const numbers = [1, 2, 3]
// console.log(sum(...numbers));

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// console.log(arr2)

// console.log(arr1 === arr2);
// console.log(arr1 == arr2);



// let obj1 = { name: "Bob" }
// let obj2 = { name: "Bob" }
// console.log(JSON.stringify(obj1) == JSON.stringify(obj2));
//compare the value in the stack


// const a = {
//     content:{
//         name:"JR"
//     }
// }

// a's address  ===> in heap (content's address)

// c's address => {...a.content} content's address

// shallow copy and deep copy

// const obj1 = {   // outer
//     info :   // inner
//     {
//         name : "JR"
//     },
//     age : 30
// }

// const obj2 = {
//     ...obj1
// }

// obj2.age = 40
// console.log(obj1)



// // const b = {...a}
// JSON.stringify(object)
// JSON.parse()

// "{'name':JR}"

// const c = {...a, age:30}
// // console.log(c)
// c.content.name = "David";
// console.log(a);
// ...



// // Rest parameter
// foo(1, 2, 3, 4, 5, 6);
// function foo(...args) {
//     console.log(args);
// }
// function foo(num1, ...args) {
//     console.log(args);
// }



// OOP ---- Object Oriented Programming

// instance

// const student = new Person()

// class Person{
//     constructor(){}

//     name = "human"
//     sayHi = function(){ console.log("hi")}
// }
// Attributes, Methods 


// Abstraction
// Encapsulation
// Inheritance
// Polymorphism


// Abstraction
// class Person {
//     constructor(){
//         if(this.constructor == Person){
//             throw new error("You cannot create an instance of Abstract Class")
//         }
//     }
//     info(){
//         // this is the function to get the info of person   
//         throw new error("you need to implement the abstract class function")

//     }

//     getAge(){
//         console.log("the trainer's age is 20")
//     }
// }
// class Trainer extends Person {
//     info(){
//         // super.info();
//         console.log("I am a trainer")
//     }
// }
// const JR = new Trainer();
// JR.info();
// JR.getAge();

// Encapsulation
// class Person {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }

//     get name() {
//         console.log('Get Name');
//         return this._name;
//     }

//     set name(newName) {
//         console.log('Set name');
//         this._name = newName + " the teacher ";
//     }

//     age(){

//     }
// }


// let p = new Person('Bob', 18);
// let p2 = new Person('David',30)

// console.log(p.name)  //getter
// console.log(p.name = "David") //setter

// console.log(p._name)
// console.log(p.name)

// console.log(p.name);
// p.name = "Pat";
// console.log(p.name);


// scroing board
// class ScoringBoard {
//     constructor(score){
//         this._score = score
//     }

//     get currentScore(){
//         return this._score
//     }

//     set currentScore(newScore){
//         this._score = newScore
//     }

//     increase(){
//         // this._score = this._score + 1
//         this.currentScore =  this.currentScore + 1
//     }

//     decrease(){
//         // this._score = this._score - 1
//         this.score--
//     }
// }

// const newBoard = new ScoringBoard(0)
// newBoard.increase()
// newBoard.increase()
// newBoard.increase()
// console.log(newBoard.currentScore)




// // inheritance
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this.salary = 0;
    }

    get name() {
        console.log('Get Name');
        return this._name;
    }

    set name(newName) {
        console.log('Set name');
        this._name = newName;

    }

    getSalary() {
        console.log('without param');
        return this.salary;
    }
}

class Employee extends Person {
    constructor(name, age, company) {
        super(name, age);
        this.company = company
    }

    getSalary(baseSalary) {
        // console.log('With param');
        return this.salary + baseSalary; // 0 + undefined => NaN
    }
    greetings(){ 
        // 
    }
}
//prototype vs. _proto_ ([[prototype]])

const JR = new Employee("JR",30,"Antra")
// console.log(JR.getSalary(3000))
console.dir(Array.apply())
console.dir(Employee)
console.dir(Employee.prototype)
// console.dir(JR)
// [[prototype]] = _proto_


 const arr = new Array(3)
 Array.prototype.map = () =>{
    console.log("My map")
 }

 class subArr extends Array{
    map(){
        
    }
 }
 const newArr = new subArr(5)
 newArr.map(()=>{})

 console.dir(newArr)

 const newFoo = () => {}
 console.dir(newFoo)
//  arr.map(()=>{})
//  console.dir(arr)

//Polymorphism
//make class reusable



///////////////////////////////////////////////////////
// prototype
// Object is the prototype of Array

// prototype
// _proto_

// const trainer ={
//     name:"JR"
// }
// console.log(trainer)


// class Person{
//     constructor(){

//     }
// }
// Person.prototype

// const trainer = new Person()
// trainer.__proto__


// https://www.javascripttutorial.net/javascript-constructor-prototype/

// https://learnbatta.com/course/javascript/prototypes/


// function Trainer(){
//     this.name = "JR";
// }

// Trainer.prototype.name = "David"

// Trainer.prototype.getSalary = function(base){ return base}

// const trainer = new Trainer()
// console.log(trainer.getSalary(3000))

// portotype chain
// https://giamir.com/pseudoclasses-and-prototypal-inheritance-in-JS


// function Person(name){

//     this.name  = name
    
// }
// function Student(){
//     this.name = "student"
// }


// Student.prototype = Object.create(Person.prototype)
// const JR = new Student()

// console.log(JR)
// console.log(JR)

////////////////////////////////////////////////////////////////

// const arr = [1,2,3,4,5]
// console.log(arr.__proto__);

// const timesTwo = function(number){
//     return number*2
// }
// const newArr = arr.map(timesTwo)

// console.log(newArr);

// Implement Array.myMap

// Array functions
// map filter forEach reduce 
// Array.prototype.Mymap  MyReduce