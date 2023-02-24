// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 

function reverseNumber(num) {
    let digits = num.toString().split("");
    let reversedDigits = digits.reverse().join("");
    return +reversedDigits;
}

let x = 32243;
let reversedX = reverseNumber(x);
console.log(reversedX); // Output: 34223

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function isPalindrome(s) {
    s = s.toLowerCase();
    var first = 0;
    var last = s.length - 1;
    while (first < last) {
        if (!isValid(s[first])) {
            first++;
            continue;
        }
        if (!isValid(s[last])) {
            last--;
            continue;
        }
        if (s[first] != s[last]) {
            return false;
        } else {
            first++;
            last--;
        }
    }
    return true;

};

var isValid = function (a) {
    return (a >= 'a' && a <= 'z') || (a >= '0' && a <= '9') || (a >= 'A' && a <= 'Z');
};
let x1 = "madam";
let y1 = "nurses run";
let isPal1 = isPalindrome(x1);
let isPal2 = isPalindrome(y1);
console.log(isPal1);
console.log(isPal2);

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 
function generateCombinations(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        let combination = '';
        for (let j = i; j < str.length; j++) {
            combination += str[j];
            if (!result.includes(combination)) {
                result.push(combination);
            }
        }
    }
    return result;
}

let str = "dog";
let combinations = generateCombinations(str);
console.log(combinations);

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the past string.
function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}
let test = "webmaster";
let out = alphabeticalOrder(test);
console.log(out);

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
function convertFirst(sentence) {
    sentence = sentence.split(" ");
    for (let i = 0; i < sentence.length; i++) {
        let firstLetter = sentence[i][0].toUpperCase();
        let restOfWord = sentence[i].slice(1);
        sentence[i] = firstLetter + restOfWord;
    }
    return sentence.join(' ');
}

let sentence = "the quick brown fox";
let outSentence = convertFirst(sentence);
console.log(outSentence);

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'
function longestWord(word) {
    word = word.split(" ");
    var indexWord = -1;
    var longest = -Infinity;
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > longest) {
            longest = word[i].length
            indexWord = i;
        }
    }
    return word[indexWord];
}

let word = "Web Development Tutorial";
let outWord = longestWord(word);
console.log(outWord);

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (vowels.includes(letter)) {
            count++;
        }
        //   if (vowels.indexOf(letter) !== -1) {
        //     count++;
        //   }
    }
    return count;
}
let vowelCount = "The quick brown fox";
let count = countVowels(vowelCount);
console.log(count); // Output: 5


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let num = 17;
let num2 = 27;
let isNumPrime = isPrime(num);
let isNum2Prime = isPrime(num2);
console.log(isNumPrime);
console.log(isNum2Prime);


// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function getType(argument) {
    return typeof (argument)
}
let t = "Hello, world!";
let strType = getType(t);
console.log(strType); // Output: "string"

let n = 42;
let numType = getType(n);
console.log(numType); // Output: "number"

let bool = true;
let boolType = getType(bool);
console.log(boolType); // Output: "boolean"

//10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function identityMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                row.push(1);
            } else {
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}

let matrix = identityMatrix(3);
console.log(matrix);


// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
function findSecondLowestAndGreatest(numbers) {
    let sortedNumbers = numbers.sort();
    let secondLowest = sortedNumbers[1];
    let secondGreatest = sortedNumbers[sortedNumbers.length - 2];
    return [secondLowest, secondGreatest];
}
let numbers = [1, 2, 3, 4, 5];
let result = findSecondLowestAndGreatest(numbers);
console.log(result);


// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive 
// divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). 
// Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. 
// Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. 
// The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(496));
console.log(isPerfectNumber(10));


// 13. Write a JavaScript function to compute the factors of a positive integer. 
function findFactor(num) {
    const factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
console.log(findFactor(10));
console.log(findFactor(24));

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
function convertAmount(amount, coins) {
    let result = [];
    let i = 0;
    while (amount > 0) {
        if (coins[i] <= amount) {
            result.push(coins[i]);
            amount -= coins[i];
        } else {
            i++;
        }
    }
    return result;
}
console.log(convertAmount(46, [25, 10, 5, 2, 1])); // [25, 10, 10, 1]


// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
// Accept b and n from the user and display the result. 
  

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"


