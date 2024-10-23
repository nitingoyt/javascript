// adding value to array

let arr1 = [2,4,5,7,9,10];
let a;
// let a = prompt("Enter a number");
// a = Number.parseInt(a)

// arr1.push(a);
// console.log(arr1)

// Adding values till 'O' comes 
do {
    a = prompt("Enter a number")
    a = Number.parseInt(a)
    arr1.push(a)  
} while (a != 0);
  
console.log(arr1)