const score = 400
// console.log(score)
const balance = new Number(100)  //Explicit Typecasting
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));  // used to see that how much precision(decimal) value you wanna see.

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); // used to get only precise value it can precise on both sides before and after of point.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // it seperate a value according to indian standard as passed in 'en-IN' and by default it seperate based on US Standard 

// +++++++++++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4));   //abs() to trasnform negative value to positive
// console.log(Math.round(4.6)); //roundoff 
// console.log(Math.ceil(4.5)); //roundoff to top
// console.log(Math.floor(4.9)); //roundoff to bottom
// console.log(Math.sqrt(25)); // to get square root
// console.log(Math.min(4,3,6,8)); // to get min value
// console.log(Math.max(4,3,6,8)); // to get max value


console.log(Math.random()); //Math.random value give  value between 0 and 1
console.log(Math.random()*10 +1); // +1 used to  remove 0 cases appearance like 0.04 and *10 shift first value by left 
console.log(Math.floor(Math.random()*10) +1); //used to get min value without decimal 


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min); // formula to get a numberr and we add min to get minimum 10






