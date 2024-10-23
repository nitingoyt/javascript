// let i;
// for(i=0 ; i<12 ; i++){
//     console.log(i);
 
// };

// Even Number
// for(i=0 ; i<=30 ; i++){
//     if(i%2==0){
//         console.log(i);
//     } 
// };

// Sum of Numbers 
let sum = 0;
for(i=0 ; i<10 ; i++){
    sum =sum + i;
}
console.log(sum)

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    console.log( key,user[key] );  // name, age, isAdmin
    // values for the keys
    console.log( user[key] ); // John, 30, true
  }



