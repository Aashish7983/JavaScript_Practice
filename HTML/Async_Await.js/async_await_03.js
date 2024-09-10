const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolved!!");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise is resolved!!");
    }, 4000);
  });
  

// now tell me what will return first
// function getData(){
//     p.then((res)=> console.log(res));
//     console.log("Hello Bhai");
// }
// getData(); /// so it will print Hello BHai first and after 10 sec the promise value will be returned

// ->>>>>>>>> now using async await
async function getData(){
    // if i have console at upper side
    console.log("Hello World") // this will be printed first
   const data = await p;
   console.log(data);
   console.log("Hello Bhai from Async await");
   const data2 = await p2;
   console.log(data2);
   console.log("Hello Bhai from Async await-2");
} // it returns the value at same time, means code is waiting at line number 16, it is waiting for promise to resolve

// it is like agar promise pehle waala pehle resolved hogya toh pehle vo print hojayga, ye sab kch depend krta hai first promise kab resolved hoga
// jaise agr first promise P agr 3 sec me resolve hogya aur second promise p2 4 second me hoga then pehle p1 print hoga then p2
// per agr p1 4 sec me hua aur p2 3sec me then p2 ko bhi wait krna pdega 4 sec tak aur dono ek saath print honge

getData();