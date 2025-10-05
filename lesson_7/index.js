// 1.
// let arr = [1, 2, 3, 4, 5]
// arr.splice(2, 1)

// console.log(arr)

// 2.
// let arr = [1, 2, 3, 4, 5, 6]
// arr.splice(0, 3, 7, 8, 9)

// console.log(arr)

//3.
// function reversedCombinedArrays( arr1, arr2 ) {
// 	return arr1.concat(arr2).reverse()
// }

// console.log(reversedCombinedArrays([1, 2, 3], [4, 5, 6]))

// 4.
// let fruits = "яблоко,банан,киви,груша"
// fruits = fruits.split(",")
// console.log(fruits)

// 5.
// let words = ["Я", "учу", "JS"]
// let sentence = words.join(" ")
// console.log(sentence)

// 6.
// let arr = ["html", "css", "js"];
// console.log(arr.includes("js"))

// 7.
// function contains(arr, string) {
// 	return arr.includes(string)
// }

// let names = ["Levon", "Gevorg", "John"]
// console.log(contains(names, "Levon"))

// 8.
// let nums = [10, 20, 30, 40, 50]
// nums.splice(0, 3)
// console.log(nums)

// 9.
// let colors = ["red", "green", "blue", "yellow"]
// colors[colors.indexOf("blur")] = "purple"

// 10.
// let sentence = "Привет как дела"
// sentence = sentence.split(" ").reverse().join(" ")
// console.log(sentence)

// 11.
let words = ["cat", "dog", "hamster", "parrot"]
console.log(words.find(word => word.includes("r")))
// OR
console.log(words.filter(word => word.includes("r")).join(", "))