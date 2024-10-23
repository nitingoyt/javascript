// // JavaScript that allows functions to "remember" the scope in which they were created.


// function acess(){

//     let number = 12

//     return function (){
//        return number++;
//     //    console.log(number);
//     }
// }

// const adder = acess();
// console.log(adder());
// console.log(adder());
// console.log(adder());


// console.log('2' + 2)
// console.log(true + false)
// console.log(typeof function(){})

function add() {
    let counter = 0;   
    return function (){
        counter +=1;
        return counter;
        
    } 
  }

const plus = add();
console.log(plus); 
// console.log(plus()); 
// console.log(plus()); 

  