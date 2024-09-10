// // //const is read only, it means we cannot change or update the value
// // // const a = 16;
// // // console.log(a);
// // // a = 10; // cannot reassign or redeclare
// // // console.log(a) // cause error
// // // constant cant be declare with the same name as variable and function name in the same scope

// // // function b(){
   
// // //     console.log("187t3")
// // // }
// // // const b = 10;
// // // b();

// // // const MY_OBJECT = { key: "value" };
// // // MY_OBJECT.key = "otherValue";
// // // console.log(MY_OBJECT)
// // // var a = 20;
// // // var a = 30;

// // // console.log(a)

// // // let b = 20;

// // // console.log(b);
// // // {
// // //     var c = 10;
    
// // // }
// // // // console.log(c)

// // // {
// // //     let d = 10;
// // // }
// // // console.log(d)
// // // a = 10;
// // // console.log(a);

// // // var a;



// // // console.log(b)
// // // let b;



// // // function print(){
// // //     var a = 1;
// // //     console.log(a)
// // // }

// // // print();
// // // console.log(a)
// // // console.log(a)
// // // let a = 10; 
// // // a = 10;
// // // // console.log(a);

// // // let b = typeof(a);
// // // console.log(b)

// // function init() {
// //     var name = "Mozilla"; // name is a local variable created by init

// //     function displayName() {
// //       // displayName() is the inner function, that forms the closure
// //       console.log(name); // use variable declared in the parent function
// //     }
// //     // displayName();
// //     console.log(name)
// //   }
// //   init();
  








// function findHighest(arr, index, highest) {
//   // Assign default values if not provided
//   index = index || 0;
//   highest = highest || arr[0];

//   // Base case: check if the entire array has been traversed
//   if (index === arr.length) {
//       return highest;
//   }

//   // Update highest if the current element is greater
//   if (arr[index] > highest) {
//       highest = arr[index];
//   }

//   // Recursively call the function for the next element in the array
//   return findHighest(arr, index + 1, highest);
// }

// // Example usage
// var myArray = [3, 7, 2, 10, 5];
// var highestNumber = findHighest(myArray);

// console.log("The highest number is:", highestNumber);





function findHighest(arr, index, highest) {
  index = index || 0;
   
   highest = highest || arr[0]; 
   
   if(index === arr.length) {
     return highest;
   }
   
   if (arr[index] > highest) {
     highest == arr[index];
   }
   
   return findHighest (arr, index + 1, highest);
 }
 var myArray = [16,45,34,65,9,3];
 var highestNumber = findHighest(myArray);
 
 console.log("the highest number is : ", highestNumber);


















