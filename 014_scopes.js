//var c = 300   //global
//  scope
let a = 300

if (true) {
 let a = 10
 const b = 20                      //block scope 
//  console.log("Inner:",a);
}



// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Prateek"

    function two() {
        const website = "youtube"  //nested function (child function) can access parent function variable but parent function cannot access child function variable
        console.log(username);
    }
    // console.log(website);
    
    two();
}

// one()

if (true) {
    const username = "Prateek"
    if (username === "Prateek") {
        const website = "youtube"
        // console.log(username + " " + website);
    }
    // console.log(website);
}

// console.log(username);
 

// +++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++
console.log(addOne(5))                  //possible in this case because of hoisting function declaration is hoisted to top of the file so we can call it before declaration but in case of function expression it will not work because function expression is not hoisted to top of the file so we cannot call it before declaration.
function addOne(num){    
    return num + 1
}

// addOne(5)


addOne(5)                                               // not possible in this 
const addTwo = function(num){  //function expression
    return num + 2
}
// addTwo(5)