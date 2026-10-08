// singleton 
//onject.create

//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name:"Prateek",
    "full name": "Prateek choudhary",
    [mySym] : "mykey1",                         //to use mysym or any symbol as symbol is object we have to add key in []
    age: 18,
    location: "Hyderabad",
    email: "prateekchoudhary@google.com",
    isLoggedIn: false,
    lastLofinDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]); // this format of accessing object data should be know for these types of situation like we cannot access full name using dot
// console.log(Jsuser[mySym]); // To access any symbol we use [] fomat

Jsuser.email = "Prateekchoudhary@strattenoakmont.com"
// Object.freeze(Jsuser)    // freezing object now no one can modify Jsuser
Jsuser.email = "Prateekchoudhary@microsoft.com";
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Welcome to Straton oakmont Js user");
    
}

Jsuser.greetingTwo = function(){
    console.log(`Welcome to Straton oakmont Js user, ${this.name}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());






