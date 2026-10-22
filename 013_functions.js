
function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);    // in this we cant call function by storing new in variable
// }

function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result                  // In this way we are storing output in variable in side function
    return num1 + num2                // directly returning output
}


const result = addTwoNumbers(1,3);
// console.log("Result :", result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter user name");
        return
    }
    return `${username} Just logged in`
}

console.log(loginUserMessage());
