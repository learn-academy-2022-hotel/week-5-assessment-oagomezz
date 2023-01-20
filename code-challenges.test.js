// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { array } = require("yargs")



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
describe("codedMessage", () => { 
    it("replaces letter for numbers", () => {
        expect(codedMessage('Lackadaisical')).toEqual('L4ck4d41s1c4l')
        expect(codedMessage('Gobbledygook')).toEqual('G0bbl3dyg00k')
        expect(codedMessage('Eccentric')).toEqual('3cc3ntr1c')
     })
})
const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.
// Method: Create an object that establishes the relationship between the letters and the numbers. Create a function codedMessage that takes in a string. The string gets the method replace used on it which allows us to reference the dictionary and code the message as required by taking the value and replacing it by the value in the key-value pair.  
// Input: string 
// Output: string
// [/aeioE/g]
// const codedMessage = (string) => {
//     // create condition replacing a for 4
//    let ReplacedA = string.split(/a/gi).join('4')
//     let ReplacedE = ReplacedA.split([//g]).join('3')
//         let ReplacedI = ReplacedE.split('i').join('1')
//         let ReplacedO = ReplacedI.split('o').join('0')
//         return ReplacedO
//     }

const dictionary = {
    a: 4,
    e: 3,
    i: 1,
    o: 0,
    E: 3
}

const codedMessage = (string) => {
    return string.replace(/[aeioE]/g, (l) => dictionary[l])
}
console.log(codedMessage(secretCodeWord1))
console.log(codedMessage(secretCodeWord2))
console.log(codedMessage(secretCodeWord3))

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
describe("searchFunc", () => { 
    it("finds values of array that match the letter and returns shorter array", () => {
        expect(searchFunc(["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"], 'a')).toEqual(["Mango", "Apricot", "Peach"])
        expect(searchFunc(["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"], 'e')).toEqual(["Cherry", "Blueberry", "Peach"])
     })
})

// ReferenceError: SearchFunc is not defined


// a) Create a test with expects statement using the variable provided.
// Method: Create a function that takes in both a letter and array of words and filters through the array and returns the array with the elements that includes the indicated letter. 
// Input: array of strings 
// Output: array of strings

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

const searchFunc = (array, letter) => {
  return array.filter((array) => array.toLowerCase().includes(letter.toLowerCase()))
}
console.log(searchFunc(fruitArray, letterA));
console.log(searchFunc(fruitArray, letterE));
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.
// Method:Create a function that takes an array and filters the array and returns all the same values as array[0]. Create a second variable that takes the array and returns all the values that don't equal array[0]. Create a third array that finds the values that meet the condition !== array[0]. If the length of the array for match1 = 3 and the length of array nextMatch is 2 or vice versa they should return true. else false.
// Input: array
// Output:array.
// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => { 
    it("", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
     })
})
const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true
// ReferenceError: FullHouse is not defined

// b) Create the function that makes the test pass.


const fullHouse = (array) => {
    let match1 = array.filter(value => value === array[0])
    let match2 = array.find(value => value !== array[0])
    let nextMatch = array.filter(value => value === match2)
    if((match1.length === 2 && nextMatch.length === 3) ||
    (match1.length === 3 && nextMatch.length === 2)){
        return true 
    }else {
        return false
    }
    
}

// codedMessage
// ✓ replaces letter for numbers (1 ms)
// searchFunc
// ✓ finds values of array that match the letter and returns shorter array
// fullHouse