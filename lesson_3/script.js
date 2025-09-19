// 1.
// let num = prompt("Մուտքագրեք թիվ")

// // if (num > 0){
// // 	alert(1)
// // }
// // else if(num < 0){
// // 	alert(-1)
// // }
// // else{
// // 	alert(0)
// // }

// // -5 != 0 -5 / |-5| = 1

// alert(num != 0 ? num / Math.abs(num) : num);

// // 2.
// console.group("---2---")
// let a = 3, b = 0;
// let result;

// result = a + b < 4 ? "Мало" : "Много"

// console.log(result)
// console.groupEnd()

// // 3.
// console.group("---3---")
// for (let i = 0; i <= 40; i+=2){
// 	console.log(i)
// }
// console.groupEnd()

// // 4.

// console.group("---4---")

let res = 1;

// for(let i = 1; i <= 40; i++){
// 	res *= i
// }

// console.log(res)
// console.groupEnd

// // 5.

// console.group("---5---")

// let i = 1;
// let sum = 0;

// while(i <= 40) {
// 	if (i % 2 == 0) sum += i
// 	i++
// }

// console.log(sum)
// console.groupEnd()

// 6.

console.group("---6---")
i = 0;

while(i <= 40){
	if (i % 7 == 0) console.log(i)
	i++
}

console.groupEnd()

// 7.
console.group("---7---")
res = 1;

for (let i = 1; i <= 60; i++) {
	if(i % 6 == 0) res *= i
}

console.log(res)
console.groupEnd()