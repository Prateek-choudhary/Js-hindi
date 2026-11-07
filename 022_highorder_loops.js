// for of

//[" "," ", " " ]
//[{},{},{}]

const arr = [1, 2, 3, 4, 5]


for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello world!"
for(const greet of greetings){
    console.log(`Each charcter is ${greet}`);
}

//Maps

const map = new Map()     //didnt store duplicate values in map, if we try to store duplicate value it will overwrite the previous value
map.set("Name", "Prateek")
map.set("Age", 22)
map.set("Country", "India")
map.set("Age", 22)
// console.log(map);


for (const key of map) {  // use this form to prit key and value diffrenlty [key, value]
    console.log(key);
    
}
