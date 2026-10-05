const name  = "Prateek"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //concatenation using backticks

const gameName = new String('prateek-ch-hc')

// console.log(gameName[0]);              //Indexing
// console.log(gameName.__proto__);



// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) //slicing
console.log(newString);

const anotherString = gameName.slice(-7) // slicing( but in this method we can pass negative valuees also (start, end))
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim remove the extra space use to remove useless whitespace before or after text

const url = "https://hitesh.com/hitesh%20choduahry"

console.log(url.replace('%20','-')); // replace() method is used to replace something format('search', 'replacing_text')

console.log(url.includes('hitesh')); // includes() method is used to search a specific word is present in enire url or big string


console.log(gameName.split('-')); // use to seprate string means converting into array like we are sepearting string based on -








