const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heroes = marvel_heros.concat(dc_heros)
// console.log(all_heroes);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator ... this spread elemets of Array
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_antoher_array = another_array.flat(Infinity) // use flat where there are multiple array inside array to get all elemts into single array by passing value of till how much deph you wanna flat 
// console.log(real_antoher_array);




// console.log(Array.isArray("Prateek")); //asking is Array
// console.log(Array.from("Prateek")); // converting word or object etc into array
// console.log(Array.from({name:"Prateek"})); //Interesting


let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));



