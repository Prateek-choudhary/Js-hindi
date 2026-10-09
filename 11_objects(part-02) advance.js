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


console.log(obj4);



