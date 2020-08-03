const array = [
  {
    username: "john",
    team: ["red", "green", "yellow"],
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: ["blue", "orange", "purple"],
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: ["blue", "black", "green"],
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: ["violet", "brown"],
    score: 1,
    items: ["book", "pen"],
  },
];

const userNames = [];
const newArray = array.forEach((array) => {
  userNames.push(array.username + "!");
});
console.log(userNames);

//Map
const mapArray = array.map((array) => {
  return array.username + "?";
});
console.log(mapArray);

//Filter
const filterArray = array.filter((array) => {
  return array.score > 50;
});
console.log(filterArray);

//Reduce
const reduceArray = array.reduce((accumulator, array) => {
  return accumulator + array.score;
}, 0);
console.log(reduceArray);

//Bonus
const answer = array.map((user) => {
  user.items = user.items.map((item) => {
    return item + "!";
  });
  return user;
});
console.log(answer);

import { without } from "lodash";

let testarray = without([2, 1, 2, 3], 1, 2);

testarray;
