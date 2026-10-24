//var c = 300   //local scope
let a = 300

if (true) {
 let a = 10
 const b = 20                      //block scope 
 console.log("Inner:",a);
}



console.log(a);
// console.log(b);
// console.log(c);

