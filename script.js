'use strict';
/*
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


const shweta = {
  firstName: "Shweta",
  year: 2004,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    const isGenz = function () {
      console.log(this.year >= 1996 && this.year <= 2010);
    };
    isGenz();
  },
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
shweta.greet(); //arrow function should never be used as a arrow function
shweta.isGenz();


let age = 20;
let oldAge = age;
age = 21;
console.log(age);
console.log(oldAge);

const me = {
  name: 'shweta',
  age: 18,
};


const friend = me;
friend.age = 27;
console.log('friend:', friend);
console.log('Me', me);

let lastName = 'Willy';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);
// output will be davis, willy since

const jennie = {
  firstName: 'jennie',
  lastName: 'jacob',
  age: 21,
};

const marriedJennie = jennie;
marriedJennie.lastName = 'elly';
console.log(jennie.lastName);
console.log(marriedJennie.lastName);

const jennie2 = Object.assign({}, jennie);
//this creates a new empty object and copys the members of the existing one
console.log(jennie2 + 'is good');

// setInterval(() => {
//   fetch('https://github.com/shweta0408');
//   console.log('fetching');
// }, 1000);

*/

let age = 12;
let mYage = age;
age = 18;
console.log(age, mYage);

let numNew = {
  name: 'shweta',
  job: 'Student',
  location: 'India',
};

let helloW = {
  name: 'billy',
  age: '18',
  job: 'teacher',
  location: 'NYC',
};

numNew.location = helloW.location;
console.log(numNew, helloW);
