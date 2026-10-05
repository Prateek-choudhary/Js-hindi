// Primitive (In these data types we get copy of original variable when we change value in copy variable nothing change in original value)

// 7 types :- String, number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//  console.log(id === anotherId);
//  console.log(typeof(scoreValue));
 

const bigNumber = 33233232323232323232323233n



//Reference Type (Non Primitive) (In these data types we get reference of variable original value if we update something in refernce access it will effect on original value)

//Array, Objects, Functions, 

const heros = ["ironMan", "SuperMan", "ShaktiMaan"];

let myObj = {
    name:"Prateek",
    age : 20,
}

const myFunction = function(){
    console.log("Hello world");
    
}

// console.log(typeof(anotherId));

// https://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(Primitive), Heap(Non-Primitive)


let myYoutubename = "coffeeorcode"

let anothername = myYoutubename
anothername = "chaiaurcode"


// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi: "upi@8833ybl"
}

let userTwo = userOne

userTwo.email = "prateek@google.com"

// console.log(userOne.email)
// console.log(userTwo.email);
