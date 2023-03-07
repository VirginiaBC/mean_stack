const arr1 = ["123123", "123", "451511", "422"];
const minimumLength = 5;

const filteredArr = arr1.filter(str => str.length >= minimumLength);

console.log(filteredArr);



const cb = function(length){
    return function(item){
        return item.length > length
    }
}

console.log(arr1.filter(cb(minimumLength)))

function cb2(item){
    return function(length){
        return item.length > length
    }
}
console.log(arr1.filter(res=>cb2(res)(minimumLength)))