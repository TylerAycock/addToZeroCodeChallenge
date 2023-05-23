// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// For example:

// [1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

// [0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

// [0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.

// Starting array

//1 = true
//0 = false 
let array = [0, 1, 2, 3, 4, 5]

// Write your solution below:

//this was my attempt 
// function addNumbersArr (arr, num) {
//     let obj= {}
//     let diff
//     for (i = 0; i < arr.length; i++)
//     diff = arr[i] + num
//     if (obj[diff] === 0) {
//         return true
//       } else {
//         return false
//     }
// }

// let arrSolution = addNumbersArr(array, 4)
// console.log(arrSolution)

//walkthrough with instructor 
function addToZero (arr) {
    for (let i = 0; i < arr.length; i++){
        for (let x = i + 1; x <arr.length; x++) {
            if (arr[i] + arr[x] === 0) {
                return true
            }                                   //we don't have an else here bcs it would cause it to stop running after the first 2 numbers 
        }
    }
    return false 
}
console.log(addToZero(array))