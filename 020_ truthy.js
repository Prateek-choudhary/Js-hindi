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