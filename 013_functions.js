
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


function loginUserMessage(username = "sam"){ // passing defualt value
    if(!username){                             //error safety adding if to check if username is empty this block will excute.
        console.log("Please enter user name");
        return
    }
    return `${username} Just logged in`
}

// console.log(loginUserMessage("Prateek choudhary"));


function calculateCartPrice(...num1){          //Using ... Rest operator when we dont know how much parameters gonna appear in function like how much items cutomer will add in cart
         return num1;
}

// console.log(calculateCartPrice(200, 300, 400));

const user = {
    username: "hitesh",
    price : 199
}

function handlObject(anyobject){                    //using functions with object
    console.log(`username is ${anyobject.username} amd price is ${anyobject.price}`);
    
}

// handlObject(user)

// handlObject({                     //direct passing object in functions
//     username: "samaltmon",
//     price: 2299
// })


// const myNewArray = [200, 400, 100, 600]  //using functions with array

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600])); // direct passng array

