// const numbers = [1, 2, 3, 4, 5, 6]

// numbers.push(7)
// console.log(numbers)

// numbers.unshift(-1, 0)
// console.log(numbers)

// numbers.pop()
// console.log(numbers)

// numbers.shift()
// console.log(numbers)

// const numbers = [3, 7, 10, 15, 20, 25]
// console.log(numbers.find(number => number > 10))
// console.log(numbers.find(num => num % 5 === 0))

// const numbers = [5, 12, 8, 130, 44]
// console.log(numbers.filter(num => num > 10))
// console.log(numbers.filter(num => num % 2 === 0))

// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]
// console.log(words.filter(word => word.length > 5))

// const numbers = [1, 2, 3, 4, 5]
// numbers.map(num => num * 2)
// numbers.map(num => num + 10)

// const people = [
// 	{name: "Anna", age: 17},
// 	{name: "Karen", age: 22},
// 	{name: "Aram", age: 15},
// 	{name: "Merry", age: 19}
// ]

// console.log(people.find(person => person.age > 18))
// console.log(people.filter(person => person.age >= 18))

// const names = people.map(person => person.name)
// console.log(names)

const printNumbers = (from, to) => {
	let num = from
	let interval = setInterval(() => {
		if(num <= to) {
			console.log(num)
			num++
		}
		else{
			clearInterval(interval)
		}
	}, 1000)

}


printNumbers(10, 12)