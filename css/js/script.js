// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//Check one; add up to 50
// This is a fairly simple operation using
// arithmetic operators and a corporation.
const isSum50 = (n1 + n2 + n3 +n4) == 50;
console.log (isSum50);


//Check two: at least two odd numbers
//Here, we use modules to check if something is odd
// Since % 2 is 0 if even and 1 if odd we can use
// arithmetic to count the total number of odd numbers
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;


// Check three: no number larger than 25
// This time , we use the  or operator to check
// If any of the numbers is larger than 25
const  isOver25 = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Check four, all unique numbers
//This is long and there are more efficient
// ways of handling it with other data structures
// That we will review later
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here we put the results into a single variable for convience . Note how we negate isOver25 using the I operator, we could have also tested for "isUnder25" as an alternative
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

// ====results=====
console.log(isValid);

const isDivis = (50 / n1 ==0);
console.log(isDivis);


// =====Part 2: Practical Math=====
// You are planning a cross-country road trip!

// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

// Set up a program to answer the following questions:
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.


let g1 = 30
let g2 = 28
let g3 = 23

let t1 = 55
let t2 = 60
let t3 = 75

const totaldist = 1500
const totalbudg = 175
let costOfFuel = 3

const trip1 = totaldist/g1
console.log(t1, 'gallons of gas');

const trip2 = totaldist/g2
console.log(t2, 'gallons of gas');

const trip3 = totaldist/g3
console.log(t3,'gallons of gas');

const trip1FuelCost =  trip1* costOfFuel < totalbudg
console.log(trip1FuelCost);

const trip2FuelCost = trip2* costOfFuel < totalbudg
console.log(trip2FuelCost);

const trip3FuelCost = trip3* costOfFuel < totalbudg
console.log(trip3FuelCost);

const trip1Time = totaldist/t1
console.log(trip1Time);

const trip2Time = totaldist/t2
console.log(trip2Time);













//=======Part 3: Future Exploration===

// In all of the problems above, there are two tools that would make it much easier to implement the logic we need and to reuse the code to test with different values:
// Control flow, which is how we conditionally determine what a program does next. For example, if we exceed our fuel budget, perhaps the program could automatically change the speed it is testing until it finds the optimal speed.
// Functions, which are reusable blocks of code, allow us to run pieces of code multiple times without rewriting the code or changing the value of variables in the code itself, like we needed to do above.