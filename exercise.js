//Advanced Control Flow

// function outerBlock(){
// 	test = prompt("Did you win the Battle? Yes or No");
// function winBattle(test) {
//   // test = prompt("Did you win the Battle? Yes or No");
// switch (test) {
// 	case "Yes":
// 		test = 10;
// 		// alert("Your Score is " + test);
// 		break;
// 	case "No":
// 		test = 1;
// 		// alert("Your Score is " + test);
// 		break;
// 	default:
// 		alert("Please enter Yes or No Only");
// 		winBattle();
// 	}
// return test;
// // alert("Your Score is  " + test);
// }
// }

// outerBlock();
// console.log(test);


//ES5 and ES6

// Let + const
let a = "test"; 
let b = true;
const c = 789;

a = "test2";

//Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let {firstName, lastName, age, eyeColor} = person;


//Object Properties
let a = "test";
let b = true;
let c = 789;

const okObj = { a, b, c
}


//Template Strings
let firstName = "Joe";
let city = "Barcelona"
let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no ???`


//default arguments
function isValidAge(age=10) {
    return age;
}


// Symbols

let sym1 = Symbol("This is my first Symbol");

// Arrow Functions

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}



















