// ->>> to combine objects just like array
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = {...obj1, ...obj2};
// console.log(obj3)
// Or
// const obj3 = Object.assign(obj1, obj2);
// or
// const obj3 = Object.assign({}, obj1, obj2); it works as a target and source = > Object.assign({Target-> this is an empty object}, source)

// ->>>>>>>values come from database are in array of object form
const users = [
  {
    id: 1,
    name: "Aashish",
  },
  {
    id: 2,
    name: "Yadav",
  },
];

const data = users.map((val)=>{
    return val.name;
})
// console.log(data); 

// ->>>>>>>>>>to get the key and value in a sperate array from an object
// console.log(Object.keys(users)) // it returns the value in array
// console.log(Object.values(users));

// ->>> to check if value exist or not in the object
// console.log(users.hasOwnProperty('id'));