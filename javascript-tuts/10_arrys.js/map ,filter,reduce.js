// Map Method

let arr = [44,55,22,663,99];

let a = arr.map((value , index)=>{
    console.log(value, index)
    return value +1;
})
console.log(a)

// Filter Method

let arr2 = [45,3,9,44,89,19,67];
let a2 = arr2.filter((a)=>{ 
    return a<40;

})
console.log(a2)

// Array reduce method
let arr3 = [5,3,9,4,8,1,7];
let newarr3 = arr3.reduce((h1, h2)=>{
    return h1 + h2 ;
})
console.log(newarr3)