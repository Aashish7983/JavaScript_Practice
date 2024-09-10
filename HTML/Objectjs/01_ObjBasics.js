// when an object is created by constructor then it is call singleton(it is the only object);
// objects stores the data in key value pair

// ->>Object Literals


// creating object
// by default the key is considered as string but it is not shown and generally we dont write but using "name" or name both are same
// const user = {
//     name: "Aashish",
//     age: 24,
//     "full name": "Aashish Yadav", // to access this we can not use .operator
//     location: "Delhi",
//     email: "aashish@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays:["Monday", "Tuesday"]
// }

// ->>> to accees then use . dot operator or use []bractes
// console.log(user.name);
// console.log(user["name"]);
// 
// console.log(user["full name"]);


// ->>>>>>>>> to use symobol as a key, or add this symbol in object as key

const mySymbol = Symbol("key1");


const user = {
    name: "Aashish",
    age: 24,
    [mySymbol]: "myKey1", // it is used as symbol
    "full name": "Aashish Yadav", // to access this we can not use .operator
    location: "Delhi",
    email: "aashish@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Tuesday"]
}

// console.log(user[mySymbol]);

// -> to change the value of any key
// user.name = "Mayank";
// console.log(user.name)

// ->>>>> to freeze the value so that no one can change the value of object
// Object.freeze(user);

// ->>>>>>>>>>> to add function in an object
user.greeting = function(){
    console.log("Hello User")
}
console.log(user.greeting());
// console.log(user.greeting);
// difffernce between greeting()-> 
//  and 
// greeting; -> this shows undefined

// user.greetingTwo = function(){
//     console.log(`Hello ${this.name}`)
// }
// console.log(user.greetingTwo())



