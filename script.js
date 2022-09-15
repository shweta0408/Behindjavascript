"use strict";

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1995 && birthYear <= 2010) {
      const str = `you are genZ , ${firstName}`;
      console.log(str);
    }
  }
  printAge();

  return age;
}

const firstName = "Shweta"; //global variable
calcAge(2004);
//console.log(age); not define in global scope
