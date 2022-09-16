"use strict";

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1995 && birthYear <= 2010) {
      var genZ = true;
      //Creating NEW variable with same name as outer scope's variable
      const firstName = `Larry`;

      //Reassigning outer scope's variable
      output = "New Output";
      const str = `you are genZ , ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Shweta"; //global variable
calcAge(2004);
//console.log(age); not define in global scope

// console.log(me);
// console.log(job); //this will give error bcause it is in tdz
// console.log(year);

var me = "Shweta";
let job = "teacher";
const year = 1991;

//function
console.log(addDecl(2, 3));
//console.log(addExp(2, 3)); const is in tdz (temporal dead)
//console.log(addArrow(2, 3)); //arrow fnction variable is in tdz

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

//var addArrow = (a, b) => a + b;
const addArrow = (a, b) => a + b;

var x = 12;
let y = 3;
const z = 3;
