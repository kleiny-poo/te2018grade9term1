const READLINE = require("readline-sync");
function sayHello(name) {
	console.log(`Bonjour ${name}! >:)`);
}

function brother(name) {
	sayHello(name);
	sayHello(name);
	sayHello(name);
	sayHello(name);
	sayHello(name);
	sayHello(name);
	sayHello(name);

}
brother("klein");

function add(x,y) {
	console.log(x+y);

}
add(1,3);


function getAge() {
	let birthYear= READLINE.question("what is your birth year?: ?");
	let currentYear = (new Date()).getFullYear();
	let age = currentYear - birthYear;
	return age;
}
let age = getAge();
if(age < 17) {
	console.log("No R-Rated Movies!");
}

let dog = {
	numLegs: 4
	amputate: function(legs) {
		this.numLegs = this.numLegs - legs;
	}
};

console.log(`This is your new puppy! He has ${dog.numLegs}`)



let fellow = "Humpty Dumpty";
let len = =fellow, length;
console.log(`Length: ${len}`);
let six = =fellow.charAt(7);
console.log(`Char at index 7: ${seven}`);
console.log(`Index of D: ${fellow.indexOf('D')};

