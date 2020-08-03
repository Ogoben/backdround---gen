let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");





const inputLength = () => input.value.length;


const createListElement = () => {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	let delBtn = document.createElement("button");
	delBtn.classList.add("btn");
	delBtn.classList.add("btn-primary");
	delBtn.textContent = "Delete";
	li.append(delBtn);
	input.value = "";			
}

const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
		}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		}
}

// Using if else statement
// const toggleClassOrDeleteButton= (event) => {
//     if (event.target.tagName === "LI") {
//         event.target.classList.toggle("done");
//     }
//     else if (event.target.tagName === "BUTTON") {
//         event.target.parentNode.remove();
//     }
   
// }

// Using switch command
const toggleClassOrDeleteButton = (event) => {
	switch (event.target.tagName) {
		case "LI":
		event.target.classList.toggle("done");
		break;
		case "BUTTON":
		event.target.parentNode.remove();
		break;
		default:
	}
	return console.log("I executed well");
}

ul.addEventListener("click", toggleClassOrDeleteButton);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


