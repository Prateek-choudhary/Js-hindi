// const tinderUser = new Object()   //singleton object

const tinderUser = {}  //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "somy@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Prateek",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj3 = {5: "a",6: "b"}

// const obj4 = Object.assign({},obj1, obj2, obj3) //{}-----> pass it to consider it as a target  and others are source so source store in target

const obj4 = {...obj1, ...obj2, ...obj3}  //spread operator to merge multiple objects into one object
// console.log(obj4);


const user = [
    {
        id:1,
        email: "prateekchoudhary@gmail.com"
    },
     {
        id:1,
        email: "prateekchoudhary@gmail.com"
    },
     {
        id:1,
        email: "prateekchoudhary@gmail.com"
    }
]

user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  //it will give us key value pair in array format
console.log(tinderUser.hasOwnProperty("isLoggedIn"));  //it will check if the property is present in the object or not



