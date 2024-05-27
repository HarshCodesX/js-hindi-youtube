const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes); //push pushes the array to existing array
// console.log(marvel_heroes); //output shows that array can take an array as an element inside it

//now to access those elements inside that array
// console.log(marvel_heroes[3][2]);


// another method nd better than push
// const all_heroes = marvel_heroes.concat(dc_heroes); // concat returns a new array instead of pushing to existing one
// console.log(all_heroes);

//another method (more preffered way to join 2 or more arrays)
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);

//more thing about array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("harsh")); //we are asking here that the input we provided is array or not
console.log(Array.from("harsh")); //to convert that input into array, we can also pass objects or even strings
console.log(Array.from({name: "harsh"})); //here it will return an empty here as we have provided key and value pair and we have to tell that you have to create array of key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));