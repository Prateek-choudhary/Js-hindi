//for 

for (let i = 0; i < 10  ; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is the best number");
        
    }
    // console.log(element);
}


// console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop : ${j} and inner loop : ${i}`);
        // console.log(i + '*' + j + "=" + i*j);
        
    }
    
}


let myArray = ["flash", "IronMan", "BatMan"]
// console.log(myArray.length);

for (let i = 0; i<myArray.length; i++)
{
    const element =  myArray[i];
    // console.log(element);
    
    
}


// Break and continue

for (let index = 1; index <= 20; index++) {
   if(index == 5)
    {
        // console.log("Detected 5")
        break;
    }
    // console.log(`value of i is ${index}`);
}

//continue
for (let index = 1; index <= 20; index++) {
   if(index == 5)
    {
        // console.log("Detected 5")
        continue
    }
    // console.log(`value of i is ${index}`);
}



/****************************************************************************************************************************/
//while Loop
let index = 0
while(index<=10){
    // console.log(`value of i is ${index}`);
    index++;
}

let mynewArray = ['flash', 'batman', 'superman'];
let arr = 0
while(arr < mynewArray.length){
    // console.log(`value of Array is ${mynewArray[arr]}`);
    arr++
    
}


/*****************************************************************************************************************************/
//do-while
let score = 10

do{
    console.log(`score is ${score}`);
    score++
}while(score<=10)