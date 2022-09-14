"use strict";
const newMember = function (birthyear) {
  let age = 2022 - birthyear;
  return age;
};

console.log(newMember(2004));
