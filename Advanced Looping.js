// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ["a", 3, 4, 2]; // should return 4
const array3 = []; // should return 0

const biggestNumberInArray = (a) => {
  max = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }
  return max;
};

const biggestNumberInArray2 = (a) => {
  max2 = 0;
  for (item of a) {
    if (max2 < item) {
      max2 = item;
    }
  }
  return max2;
};

const biggestNumberInArray3 = (array) => {
  let max3 = 0;
  array.forEach((item) => {
    if (max3 < item) {
      max3 = item;
    }
  });
  return max3;
};

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

const checkBasket = (amazonBasket, books) => {
  for (item in amazonBasket) {
    if (item === books) {
      return `You have ${books} in your basket`;
    }
  }
  return `You do not have ${books} in your basket`;
};

function checkBasket2(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      return `${lookingFor} is in your basket`;
    }
  }
  return "that does not exist in your basket";
}
