// const accountId  = 223343
// let accountEmail = "prateekchoudhary344@gmail.conm"
// var accountPassword = "2233"
// accountcity = "Jaipur"
// let accountState;

// accountEmail = "Prateekchoudhary@google.com"
// accountPassword = "4455"
// accountcity = "Delhi"
// console.log(accountEmail, accountId, accountPassword, accountcity)

// console.table([accountId, accountEmail, accountPassword, accountcity, accountState]);

"use strict"; //treat all JS code as new version

// alert(3+3) // we are using node js not browser

//first priority (Code Readability should be High)

let name = "Prateek"
let age = 18
//let isLogedIn = false

// number => 2 to power 53
//bigint
//string => ""
//boolaen => True/False
//null => standalone value
//undefined => variable defined but value is ot assinged
//symbol => unique

//object
// console.log(typeof undefined); //undefined
// console.log(typeof null); //object

let score = "Prateek"
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

let apples = true
let banana = Number(apples)
// console.log(typeof(banana));
// console.log(banana);



//"33" => 33
//"33abc" => NaN
//undefined => NaN
//true => 1; false => 0
//"string" => Nan

let isLoggedIn = "Prateek"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//1 => true, 0 => false
//""=> false
// "Prateek" => true

let somenumber = 33
let stringnumber = String(somenumber)
// console.log(stringnumber)
// console.log(typeof(stringnumber));

//*************operations**************************

let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(5%2);
// console.log(5**2);
// console.log(3/2);

let str1 = "hello"
let str2 = " prateek"

let str3 = str1 + str2

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 3 + "2");

// console.log((3+2)*5%3);
// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2
let gameCounter = 100
++gameCounter;
// console.log(gameCounter);
// console.log(num1);

// console.log(2  > 1);
// console.log(2  >= 1);
// console.log(2  < 1);
// console.log(2  <= 1);
// console.log(2  == 1);
// console.log(2  != 1);

// console.log("2" > 1);
// console.log("02" > 1); // avoid these types of comparisons

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); // Javascript Converts Null to 0 for realational operators (avoid these types of comparison)


// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined <= 0);
// console.log(undefined > 0);
// console.log(undefined >= 0); // avoid these types of comparison

// === this is strict comparison operator it also checks the data type of the variable

// console.log("2" === 2);

//Types of Data type
//Primitive Data Type and Reference Data Type

//Primitive Data Type (In these types of Data sets we get copy of origina variable when we When we change the value only copy variable gett affected not original one)

//Types of DataTransfer(Primitive)---------------> string, number, Boolean, null, undefined, symbol, Bigint

const scoreOne = 100
const scoreTwo = 10.4

const isLoggedIned = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const another_Id = Symbol('123')

// console.log(id === another_Id);
// console.log(typeof(scoreTwo));

const bigNumber = 12232234556783452342312n 

//Reference Type(Non Primitive) (In these Data Types we get reference access of original Value and when we update something in reference It will affect original value directly)
// Array, object, Functions

const heros = ["IronMan", "Batman", "ShaktiMaan"]

let myobj = {
    name: "Prateek",
    age: 20
}

const myfunction = function(){
    console.log("Hello, Prateek");
    
}

//Stack(Primitve), Heap(Non-primitve)

let myYoutubename = "coffeeorRusk"

let anothername = myYoutubename
anothername = "coffeeorbiscuit"

// console.log(myYoutubename);
// console.log(anothername);

let UserOne = {
    email : "user@google.com",
    upi : "upi@88192ybl"
}

let userTwo = UserOne
userTwo.email = "prateek8832@gmail.com"

// console.log(UserOne.email);
// console.log(userTwo.email);

const namee = "Prateek"
const repocount = 50
// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('prateek-ch-hc')
// console.log(gameName[0]);
// console.log(gameName._proto_);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('ee'));

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-7)  // Ihis method we can pass start and end point
// console.log(anotherString);

const newStringOne = " Prateek "
// console.log(newStringOne);
// console.log(newStringOne.trim());//This method removes extra space before or after the text

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20','-'));++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //replace() method is use to reaplace something format('search','replacing_text')
// console.logO(url.includes('hitesh')); //This method is used to check specific word is present in entire url or not


// console.log(gameName.split('-'));

const numeric_score = 300
// console.log(numeric_score);

const balance = new Number(100) //performing explicit Typecasting
// console.log(balance);

// console.log(balance.toString().length)

// console.log(balance.toFixed(2));

const otherNum = 123.8966
// console.log(otherNum.toPrecision(3));

const hund = 100000
// console.log(hund.toLocaleString('en-In'));

//+++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.sqrt(49));
// console.log(Math.min(2,3,4));
// console.log(Math.max(4,3,6,8)); 

// console.log(Math.random());

// console.log(Math.random()*10+1);
// console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20
// console.log(Math.floor(Math.random()*(max-min+1)) + min);

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);                                   //virgotama (codeforces new name)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long",
})

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["IronMan", "Batman", "SuperMan"]

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr[1]);

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

 myArr.unshift(9)
// console.log(myArr);
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// slice, splice
// console.log("A ", myArr); 

const myn1 = myArr.slice(1, 3) //Doesnt manuplate actual array
// console.log(myn1)
// console.log("B", myArr);

const myn2 = myArr.splice(1, 3) //manuplates actual array
// console.log(myn2)
// console.log("C", myArr);

const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "batman"]

// marvel_heroes.push(dc_heros)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const all_heros = marvel_heroes.concat(dc_heros) 
// console.log(all_heros);

const all_new_heros = [...marvel_heroes, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]

const real_another_arrray = another_array.flat(Infinity) //flat method is used to remove the nested array and make it single array
// console.log(real_another_arrray);
 
//singleton
//object.create

//object literals

const mysym = Symbol("key1")
const Jsuser = {
    name: "Prateek",
    "full name": "Prateek choudhary",
    [mysym] : "mykey1",
    location: "Hyderabad",
    email: "Prateekchoudhary@gmail.com",
    isLoggedIn : false,
    lastloginDays: ["Monday", "saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mysym]);
// console.log(typeof mysym);

Jsuser.email = "Prateekchoudhary@google.com";
// Object.freeze(Jsuser) // freexong object now no one can modify anything
Jsuser.email = "Prateekchoudhary@microsoft.com";
// console.log(Jsuser);

Jsuser.greeting = function()
{
    // console.log("Welcome Home warrior");
    
}

Jsuser.greetingTwo = function()
{
    // console.log(`Welcome to straton oakont ${this.name}`);
    
}

// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingTwo());





































