// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

var sum = 0
var arr1 = [2, 22, 12, 17, 18, 39, 129] 
var arr2 = [3, 5, 6, 8, 9]
function arraySum(arr) {
    for(let i = 0; i < arr1.length; i++ ) {
        sum = sum + arr[i];
        //sum += arr[i] // does the same thing as above
        //0 + 2 // First Loop
        //2 + 22 // Second Loop
        //24 + 12 // Third Loop
        //36 + 17 // Fourth Loop
    }
    console.log(sum);
}

arraySum(arr1)
arraySum(arr2)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

var book = {};

book.title = "The Hobbit by J.R.R. Tolkien";
book.pages = 295;
book.readCount = 3;

book.info = function(x) {
    return `${book.title}, ${book.pages}, ${book.readCount}`
};

console.log(book.info());


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let sentence = "The quick brown fox jumps over the lazy dog";
function reverseString(str) {

let splitSentence = sentence.split(' ');

let answer = []

for (let i = 0; i < splitSentence.length; i++) {
    let reverseWord = splitSentence[i].split('').reverse().join("");
    answer.push(reverseWord)
}

let newSentence = answer.join(' ');
console.log(newSentence);
return newSentence
}

reverseString(sentence)
