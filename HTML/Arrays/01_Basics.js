//Array, it can store multiple items under a single variable
const myArr = [0, 1, 2, 3, 4, 5] // these are called elements and it can store different type of data
// array are resizeable in js,
// to access
// console.log(myArr[4]);

// when we do copy operation then it creates shallow copy
// A shallow copy of an object is a copy whose properties share the same references(point to the same underlying values), its like
// changes will be reflected in orignal array also

// ->>Deep copy do not share the same references
// // -> other way to create an array
// const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2[2]);

// -> Methods
// myArr.push(6);

// console.log(myArr);
// myArr.pop()
// console.log(myArr)

// to insert at start
// myArr.unshift(10);
// console.log(myArr);

// -> to check if the array contains the value -> use includes() and it returns true and false
// console.log(myArr.includes(9));
// console.log(myArr.includes(4));

// ->>> to ask for index, if index not exist then it will give -1 else will return the actual index
// console.log(myArr.indexOf(3));

// ->>>>>>>>>>>>>> .join() -> adds all the elements of an array into a string

const newArr = myArr.join(); // it will join all the values with comma seprated
// console.log(myArr);
// console.log(newArr);

// ->>>>>>>Slice and Splice
// ->>>The main difference is that Slice(it does not contain the last value of range) does not manipulate the real array but splice(it contatins the last value of range) manipulate the real array

// console.log("A", myArr);
// const myA2 = myArr.slice(1,3);
// console.log(myA2);
// console.log("B", myArr);
const myA3 = myArr.splice(1,3);
console.log(myA3);
console.log(myArr);