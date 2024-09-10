// using async with await
// this combo is used to handle promises
// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.....handling promises before async await
const p = new Promise((resolve, reject)=>{
    resolve("Promise is resolved!!");
});

// function getData(){
//     p.then(res=> console.log(res));
// }
// getData();

// ->>>..using async await to handle promise
// ->> 
async function handlePromise(){
    const data = await p; // this promise is resolved and data will come into a const variable
    console.log(data);
}
handlePromise();
// await is keyword which can only be used inside an async function