const userEmail = "prateekchoudhary88105@gmail.com"

if(userEmail) {
    console.log("Got User Email");
}else{
    console.log("User Email not found");
}



/* falsy values

false, 0, -0, BigInt(0n), "", null, undefined, NaN

truthy values

true, {}, [], 1,function(){}, -1, "false", "0", "null", "undefined", "NaN"*/

// const userArray = []                     // here userArray is empty array so it will return false and execute else block
// if (userArray.length === 0) {
//     console.log("Array is empty");

// }


const emptyObject = {}                    // here emptyObject is empty object so it will return false and execute else block
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
} 
// Nullish coalescing Operator (??): null undefined

let val1;
//val1 =  5 ?? 10   // when you call from databse or use apprwrite you directly doesnt get value you get 2 value so there are chances you get null response or undefine so for those case you use these if null display x value if undefined display y value
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);


//Terniary operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")