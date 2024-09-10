// async is a keyword which is used before the function and it always returns a promise
// if we dont return a promise and returning a value then it will wrap that value into the promise then it will return
// async function getData() {
//     return "Hello"
// }

// const data = getData();
// // console.log(data) // this will return the promise

// data.then((res)=> console.log(res)); // this will return the value of promise // Hello

// ->>>
// const prom = new Promise((resolve, reject) => {
//   resolve("Promise is resolved");
// });

// async function getData() {
//   return prom;
// }

// const dataPromise = getData();
// // console.log(dataPromise);
// dataPromise.then(res => console.log(res));
