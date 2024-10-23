// Reverse a String

let alias = "Justify";
let reversed ="";

function reverse(alias){
    for(let i=alias.length-1; i>=0; i--){
    reversed += alias[i]
    }
    console.log(reversed)
    console.log(alias.split('').reverse().join(''));
    
}

reverse('abcdefgh')

// Count the Number of Words in a String 

let str = "This is a string";
let count;
function counter(str){
}

// Check if a String is a Palindrome

function Palindrome(str){
    for(let i =0, j = str.length-1; i<j; i++,j--){
        if(str[i] !== str[j]){
            return false;       
        }
    }
    return true;         
}

console.log(Palindrome("nitin"))

// vowels check

function countVowels(str){
    let count ="";
    let vowels = "aeiouAEIOU";
    for(let i=0 ; i<str.length; i++){
        for(let j=0; j<vowels.length; j++ ){
            if (str[i] === vowels[j])
            count++;
        }
    }
    return count;
}

console.log(countVowels("JUst a reninfer"));

// Extract a Substring from a String
 
function Substring(str, start , end){
    let result = "";
    for(let i = start; i<end; i++){
        result += str[i]
    }
    return result;
}
console.log(Substring("THis is a string", 5, 10))

// First occurance of cahracter

function occurance(str, char){
    for(let i =0; i< str.length; i++){
        if(str[i] === char){
            return i;
        }    
    }
    return -1
}
console.log(occurance("Mollly wholly dollie", "l"))