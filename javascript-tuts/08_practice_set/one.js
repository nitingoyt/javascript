// odd even

function oddeven(num){
    if(num%2 == 0){
        console.log("Number is even")
    }
    if(num%2 == 1){
        console.log("Number is odd")
    }
}
z=11
oddeven(z)

// max of two numbers

function maxoftwo(num1,num2){
    if(num1>num2){
        console.log(num1,"is greater than", num2)
    }
    else if(num1==num2){
        console.log("Both are equal")
    }
    else{
        console.log(num2,"is greater")
    }
}

maxoftwo(100,100)

// print from 1 to 10

function  loop(a){
    for (let i=1; i<a; i++){
        console.log(i)
    }

}
// loop(11)

// factorial of number

function factorial(num){
    let fact = 1;
    for(let i=1; i<=num; i++){
        fact *=i;       
    }
    console.log(fact);
}

factorial(5);

// 5th sum of numbers in array

let nums= [40, 100, 1, 5, 25, 10];

function sumofArray(arr){
    let sum = 0;
    for(let i =0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log(sum)
    
}
sumofArray(nums)

// 6th LeapYear

function LeapYear(year){
    if(year%400===0){
        console.log("Leap Year")
    }
    else if(year%100===0 ){
        console.log("Not a Leap Year")
    }
    else if(year%4===0){
        console.log("Leap Year")
    }
    else {
        console.log("Not a Leap Year")
    }
}

LeapYear(1900)

// 7th Count vowels in a String

function numOfVowels(str){
    let count = 0;
    const vowels = "aeiouAEIOU";
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])) {
            count++;
        }
    }   
    return count;
}

console.log(numOfVowels("THis is jsut a triall"));

// 8th reverse of string 

let alias = "Rajesh";
let reversed = "";
for(let i=alias.length-1; i>=0; i--){
    reversed += alias[i] 
}
console.log(reversed)
//  can make a function too
