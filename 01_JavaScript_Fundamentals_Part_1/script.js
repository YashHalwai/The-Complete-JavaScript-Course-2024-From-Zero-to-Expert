// let js = 'amazing';
// if (js === 'amazing') alert("JS is FUN!");
// 40 + 8 + 23 - 18;
// console.log(40+8+23-18);

// console.log('Jonas');
// console.log(23)

// let firstName = "Yash";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let yash_sh = "YaSH";
// let $function = 27;
// console.log($function)
// never name variable as name
// let name = "Yash";  
// let pi = 3.14125; 
// console.log(pi);

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

/*
Values and Variables:
Declare variables called country, 
continent and population and assign their values according to your own country 
(population in millions).

Log their values to the console.
*/

// let country = 'Portugal';
// let continent = 'Europe';
// let population = 10;

// console.log(country);
// console.log(continent);
// console.log(population);

/*
Data Types:
Declare a variable called isIsland and set its value according to your country. 
The variable should hold a Boolean value. Also declare a variable language, 
but don't assign it any value yet.

Log the types of isIsland, population, country and language to the console.
*/ 

// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

/*
let, const and var:
Set the value of language to the language spoken where you live 
(some countries have multiple languages, but just choose one).

Think about which variables should be const variables 
(which values will never change, and which might change). 
Then, change these variables to const.

Try to change one of the changed variables now, and observe what happens.
*/ 

// language = 'portuguese';
// const country = 'Portugal';
// const continent = 'Europe';
// const isIsland = false;
// isIsland = true;

// true;
// console.log(true);
// let javascriptIsFun = true;

// typeof => To check type of datatypes...

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Yash')

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun)

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year)

// console.log(typeof null)

// let age = 30;
// age = 31;
// const birthYear = 1991;
// // birthYear = 1990;
// var job = 'programmer';
// job = 'teacher';

// lastName = "Halwai"
// console.log(lastName);

// const now  = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

// const firstName = 'Yash';
// const lastName = 'Halwai';
// console.log(firstName + ' ' + lastName);

// Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// Comparison Operators 
// console.log(ageJonas > ageSarah); // >,<.>=,<=
// console.log(ageSarah >= 18);
// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);
// console.log(25-10-5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x,y); 

// const averageAge = ageJonas + ageSarah / 2;
// console.log(ageJonas, ageSarah, averageAge);

/*
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
Your task is to write some code to help them:
Store Mark's and John's mass and height in variables called massMark, 
heightMark, massJohn and heightJohn.
Calculate both their BMIs using the formula, 
and store the results in two variables called BMIMark and BMIJohn.
Log the value of BMIMark and BMIJohn to the console.
BONUS: Create a boolean variable markHigherBMI containing information about whether 
Mark has a higher BMI than John. Log it to the console too
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
👋 OPTIONAL: You can watch my solution in video format in the next lecture
IMPORTANT: The ** operator is not supported in this editor.
Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

/* Write your code below. Good luck! 🙂 */

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark  / (heightMark * heightMark);
// // const BMIMark = massMark  / (heightMark *= 2);
// const BMIJohn = massJohn  / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// // console.log(BMIMark);
// // console.log(BMIJohn);

// console.log(BMIMark,BMIJohn,markHigherBMI);

// const firstName = 'Yash';
// const job = 'teacher';
// const birthYear = 2002;
// const year = 2024;

// const yash = "I'm " + firstName + ', a ' + (year - birthYear) + 
// ' years old ' + job + '!';
// console.log(yash)

// const yashNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(yashNew)

// console.log(`Just a regular string...`);

// console.log('Starting with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple 
// lines`);

// const age = 15;
// const isOldEnough = age >= 18;

// if(isOldEnough) {
//     console.log('Sarah can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }


// const birthYear = 2012;

// let century;

// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

/*
CHALLENGE #2
Use the BMI example from Challenge #1, 
and the code you already wrote, and improve it:
1. Print a nice output to the console, 
telling the user who has the higher BMI. The message can be either:
"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
2. Modify the outputs above to use template literals to include the BMI values in the outputs.
Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
Note: Don't round the BMI values. Leave them as they are.
*/ 

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// const HighBMIMark = BMIMark >= BMIJohn;
// if(HighBMIMark) {
//     // console.log(`Mark's BMI is higher than John's!`);
//     console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// } else {
//     // console.log(`John's BMI is higher than Mark's!`);
//     console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
// }


//  Type Conversion:

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Yash'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// type coercion

// console.log('I am ' + 23 + ' years old'); 
// console.log('I am ' + String(23) + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');


// let n = '1' + 1;
// n = n - 1;
// console.log(n); 

// 5 Falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Yash'));
// console.log(Boolean({}));
// console.log(Boolean(''))

// const money = 0;

// if(money) {
//     console.log("Don't spend it all...");
// } else {
//     console.log("You should get a job!");
// }


// let height = 0;
// if(height) {
//     console.log('YAY! Height is defined!');
// } else {
//     console.log('Height is UNDEFINED...');
// }


// '==' and '===='

// const age = 18;
// if (age === 18) console.log("You just become an adult :D (strict)");
// if (age == 18) console.log("You just become an adult :D (loose)");

// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log('Cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//     console.log("7 is also a cool number!");
// } else if (favourite === 9) {
//     console.log("9 is also a cool number!")
// } else {
//     console.log("Number is not 23 or 7!");
// }

// if (favourite != 23) console.log("Why not 23?");


// basic Boolean Logic: The AND, OR & NOT operators

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// const isTired = false;
// // console.log(hasDriversLicense && hasGoodVision && isTired);
// // console.log(hasDriversLicense || hasGoodVision || isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. 
They compete against each other 3 times. 
The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, 
using the test data included below. 
The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine 
the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. 
Koalas scored 88, 91, and 110.
*/ 

/* Write your code below. Good luck! 🙂 */

// const dolphinScore1 = 96;
// const dolphinScore2 = 108;
// const dolphinScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// const scoreDolphins = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
// const scoreKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// if(scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy");
// }  else {
//     console.log("Koalas win the trophy");
// }


// Switch Case Statement:  

// const day = 'monday';

// switch(day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!')
// }

// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//     const str = '23 is bigger';
// }

// const me = 'Yash';
// console.log(`I'm ${2024 - 2002} years old ${me}`);

// const age = 22;
// age >= 18 ? console.log('I like to drink wine'):
// console.log('I like to drink water.');

// const age = 22;
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// const age = 22;
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


/*
CHALLENGE #4
Steven needs a very simple tip calculator for whenever 
he goes to eat in a restaurant. In his country, 
it's usual to tip 15% if the bill value is between 50 and 300. 
If the value is different, the tip is 20%.
Your tasks:
Calculate the tip, depending on the bill value. 
Create a variable called tip for this. 
It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).
Print a string to the console containing the bill value, 
the tip, and the final value (bill + tip).
Example: The bill was 275, the tip was 41.25, 
and the total value 316.25.
Note: Use the values of the bill and tip variables to 
construct this string. Don't hard-code them 🙂
TEST DATA: Test with different bill values: 275,
40, and 430
HINT: To calculate 20% of a value, simply multiply it 
by 20/100 = 0.2
HINT 2: Value X is between 50 and 300, 
if it's >= 50 && <= 300 😉
*/

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : 
// bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip},
// and the total value ${bill + tip}`);