"use strict";
const newMember = function (birthyear) {
  let age = 2022 - birthyear;
  return age;
};

console.log(newMember(2004) + " is her age");

const fruitBasket = function (mango, orange) {
  let juice = mango + orange;
  return juice;
};
console.log(fruitBasket(4, 5));
