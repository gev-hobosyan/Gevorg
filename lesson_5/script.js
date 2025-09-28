// 1.
let person = {
	name: "John",
	age: 17,
	city: "Yerevan"
}
console.group("1.")
console.log(person)
console.groupEnd()

//a.
person.isStudent = true
console.group("a.")
console.log(person)
console.groupEnd()

//b.
delete person.city
console.group("b.")
console.log(person)
console.groupEnd()

//c.
console.group("c.")
console.log(person.age !== undefined ? "Person has age parameter." : "Person doesn't have age parameter.")
console.groupEnd()

//2.

function delUndefined(obj) {
	for (let key in obj) {
		if(obj[key] === undefined) delete obj[key]
	}
}

let obj = {
	key1: 'hello',
	key2: undefined,
	key3: 1234,
	key4: undefined
}

delUndefined(obj)
console.log(obj)