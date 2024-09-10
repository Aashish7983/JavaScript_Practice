// Protoype, Array also contains the prototype(it have all the methods)
const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// to push this array into the array
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // to get value of nested array
// const allHeros = [...marvel_heros, ...dc_heros];
// console.log(allHeros)

// console.log(marvel_heros.concat(dc_heros));
// concat combines two or more array. This methods returns a new array without modifying any existing array;
// const allHeros = marvel_heros.concat(dc_heros); // we should hold the new array
// console.log(allHeros);

// -->>>>>>>>>>> Use Spread operator for this also instead of concat
// spread - > glass -> dropped - > spread

// const allNewHeros = [...marvel_heros,...dc_heros];

// console.log(allNewHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// ->>>>>>>flat array -> it returns a new array with all sub-array elements concatenated into it recuursively up to the specifies depts.
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);


// ->>>>> to get data or to convert into array
// to check if array
// console.log(Array.isArray("Aashish"));

// -> to convert
// console.log(Array.from("aashish"));


// ->>> to convert variable into the array
let a = 100;
let b = 200;
let c = 300;
const newArr = Array.of(a,b,c);
console.log(newArr);



