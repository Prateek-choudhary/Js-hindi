const user = {
    username : "Hitesh",
    price : 999, 

//this keyword works only for objects
//     }
    welcomeMessage: function() {
            console.log(`${this.username}, welcome to website`);       //This keyword represeng current context
            console.log(this);
            
            
    }

}

// user.welcomeMessage()
// user.username = "Ragahv"
// user.welcomeMessage()

// console.log(this);

// function chain(){
//     let username = "Prateek"
//     console.log(this.username);  //

// chain()

// const chai = (){
//     let username = "Prateek"
//     console.log(this.username);
// }

// chai()



const chai = () => {                    //Arrow function
    let username = "Prateek"
    console.log(this.username);  //Arrow function does not have its own this keyword so it will take this keyword from its parent function which is global context in this case so it will return undefined because there is no username variable in global context.
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2   //implicit return method in arrow function when we have only one line of code in function body then we can remove return keyword and curly braces and it will return the value automatically.
// const addTwo = (num1, num2) => (num1 + num2)   // This is another method whenever we use parenthesis to close end line like (num1+num2) we automatically ge value return without using return keyword commonly use technique in react
const addTwo = (num1, num2) => ({username: "Prateek"})  // coomon way to return object
// console.log(addTwo(3,4));


