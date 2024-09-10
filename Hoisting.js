//Accessing the varibale and function before their initialization is called hoisting,

// x();
// console.log(x) // this will print function itself because the funtion is not invoking this time
// console.log(b)

// function x(){
//     console.log("hello")
// }

// var b = 10;


// if i use arrow function then it will read it as normal js variable
// a(); // this will show that a is not a function
// console.log(a) // this will show undefined
// var a = () => {
//     console.log("variable")
// }

// console.log(a)
// let a=10;
// console.log(a)
// let a = 10;

fun();
function fun(){
    console.log("Function called")
}

() =>{}
// function fun(){}


