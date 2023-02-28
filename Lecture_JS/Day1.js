// console.log(typeof (undefined));
// console.log(typeof (null));

// console.log(typeof [])

// function foo () {

// };

// console.log(typeof foo);

// const b = {name:"RJ"};
// b.name = "da"
// console.log(b)

// let b = "123"
// let a = +b
// console.log(a)
// let c = a+b
// console.log(c)

// let res = 1 + "1"
//let res = 6 + "20" + 5
//let res = null + "5"
//let res = null + 5
//let res = 12 / "2";
//let res = +"132";
//let res = +false;
//let res = + "abc";
// let res = true + false + "1";
// console.log(res)

// const a = {
//     content:{
//         name:"jr"
//     }
// }

// const b = {
//     content:a.content
// }

// console.log(a.content === b.content)//a.content and b.content are pointing to the same object, the reference are the same
// console.log(typeof a)
// console.log(typeof b)
// console.log(a === b) // false, since a and b are different object

// console.log(b)
//console.log(NaN === NaN)

// const a = {number : 10};
// a.number = 12;
//a = {number : 12};

// const dataSource = [1, 2, 3];
// const newList = dataSource;
// newList.push(4);
// console.log(newList);

// let a = true + (false + "1");
// console.log(a)

// const info = {name : "fs", age : "123"};

// for (let key of info){
//     console.log(key)
//     //console.log(info[key]);
// }

// console.log(Object.keys(info));

// console.log(info);
// console.log(info["age"]);

// console.log(info.age);
// console.log(info["age"]);


// function foo(a,b,c){
//     for (let i = 0; i < arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }
// foo(1,2,3,4);


// const student = {name : "adsf", age:30};
// const newS = {...student, gender: "f"};
// console.log(newS);

const obj = {
    info:{
        name : "dsadfs"
    }
}

const obj2 = {...obj};
// console.log(obj === obj2);
// console.log(obj.info === obj2.info);
// console.log(obj.info.name === obj2.info.name);
obj2.info = {name : "sdfsd"};
console.log(obj);