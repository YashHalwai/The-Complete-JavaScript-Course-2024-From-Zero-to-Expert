// 'use strict';

// let hasDriverLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriverLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


/*
Function
*/

// function logger() {
//     console.log('My name is Yash');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,8);
// console.log(appleJuice);
// console.log(fruitProcessor(5,0));

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//     return 2024 - birthYear;
// }

// const age1 = calcAge1(2002);
// console.log(age1);

// const calcAge2 = function(birthYear) {
//     return 2024 - birthYear;
// }

// const age2 = calcAge2(2002);
// console.log(age1, age2);


/*
Arrow Function (ES6)
*/

// const calcAge3 = birthYear => 2024 - birthYear;
// const age3 = calcAge3(2002);
// console.log(age3);

// const yearsUntilRetirement = (birthYear,firstName) => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// // console.log(yearsUntilRetirement(2002));
// console.log(yearsUntilRetirement(2002, 'Yash'));
// console.log(yearsUntilRetirement(1995, 'Jonas'));


// function cutFruitPieces(fruit) {
//     return fruit = 4;
// }

// const cutPieces = function

// function fruitProcessor = function(apples, oranges) {

//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice which ${applePieces} pieces of
//     apple and ${orangePieces} pieces of orange.`;

//     return juice;
// }


// const calcAge = function(birthYear) {
//     return 2024 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear,firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     return retirement;

//     if(retirement > 0) {
//         return retirement;
//     } else {
//         return -1;
//         console.log(`${firstName} has already retired!...`);
//     }
// }

// console.log(yearsUntilRetirement(2002, 'Yash'));


/*
Challenge 3
*/


// const calcAverage = (a,b,c) => (a+b+c) / 3;
// console.log(calcAverage(3,4,5));

// // Test 1
// let scoreDolphins = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(576,111);

// // Test 2
// scoreDolphins = calcAverage(85,54,41);
// scoreKoalas = calcAverage(23,34,27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins,scoreKoalas);

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991,1984,2008,2020);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Yash';
// const yash = [firstName, 'Halwai', 2024 - 1991, 'teacher', friends];
// console.log(yash);
// console.log(friends.length);

// Operation in Arrays

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Yash');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove Elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));


/*
Challenge 4
*/

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? 
//     bill * 0.15 : bill = 0.2;
// }

// const bills = [125,555,44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), 
// calcTip(bills[2])];
// const totals = [bills[0] + tips[0],bills[1] + tips[1],
// bills[2] + tips[2]];
// console.log(bills,tips);


//  object --> 

// const jonasArray = [
//     'Jonas',
//     'Sans',
//     2024 - 1991,
//     'teacher',
//     ['Y', 'A', 'S']
// ];

// const yash = {
//     firstName: 'Yash',
//     lastName: 'Halwai',
//     age: 2024 - 1991,
//     job: 'Data Scientist',
//     friends: ['Y', 'S', 'A']
// };

// console.log(yash)

// console.log(yash.lastName);
// console.log(yash['lastName']);

// const nameKey = 'Name';
// console.log(yash['first' + nameKey]);
// console.log(yash['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Yash? Choose between firstName, lastName, age, job, and friends');
// console.log(yash[interestedIn]);

// if(yash[interestedIn]) {
//     console.log(yash[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// yash.location = 'India';
// yash['twitter'] = '@YashHalwai45';
// console.log(yash);

// Challenge

/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.


*/ 

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();
// // console.log(mark.bmi, john.bmi);

// if(mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if(john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }

// FOR LOOP

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repitition ${rep}`);
// }

// const yash = [
//     'Yash',
//     'Halwai',
//     2024 - 1991,
//     'Data Scientist',
//     ['Y', 'S', 'A']
// ];

// for (let i = 0; i < 5; i++) {
//     console.log(yash[i]);
// }

// const years = [1991,2007,1969,2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];
  
  // 0, 1, ..., 4
  // 4, 3, ..., 0
  
  for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
  }
  
  for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
  
    for (let rep = 1; rep < 6; rep++) {
      console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
  }
  
  
  ///////////////////////////////////////
  // The while Loop
  for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  }
  
  let rep = 1;
  while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
  }
  
  let dice = Math.trunc(Math.random() * 6) + 1;
  
  while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
  }
  */
  
  ///////////////////////////////////////
  // Coding Challenge #4
  
  /*
  Let's improve Steven's tip calculator even more, this time using loops!
  
  1. Create an array 'bills' containing all 10 test bill values
  2. Create empty arrays for the tips and the totals ('tips' and 'totals')
  3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
  
  TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
  
  HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉
  
  4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
    4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
    4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
    4.3. Call the function with the 'totals' array
  
  GOOD LUCK 😀
  */
  
  /*
  const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];
  
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
  console.log(bills, tips, totals);
  
  const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // sum = sum + arr[i];
      sum += arr[i];
    }
    return sum / arr.length;
  }
  console.log(calcAverage([2, 3, 7]));
  console.log(calcAverage(totals));
  console.log(calcAverage(tips));
  */