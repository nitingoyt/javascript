
let arr = [30, 55, 8, 9, 456];

// console.log(arr.join("&"))
console.log(arr.push())
console.log(arr.pop())

// Print All Elements in an Array

let nums = [3, 50, 18, 79, 11, 99];

function printnum(nums){
    for(let i in nums){
        return nums;
    }        
}
console.log(printnum(nums))

// Find the Maximum Value in an Array

function findMax(nums){
    if(nums.length === 0){
        return null;
    }
    let max = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(nums[i]> max){
            max = nums[i];
        }
    }
    return max;
}
console.log(findMax(nums))


// Find the Minimum Value in an Array

function findMin(nums){
    if(nums.length === 0){
        return null;
    }
    let min = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(nums[i]< min){
            min = nums[i];
        }
    }
    return min;
}
console.log(findMin(nums))

// Calculate the Sum of All Elements in an Array

function sumofArray(nums){
    let sum = 0;
    for(let i = 0 ; i < nums.length; i++){
        sum +=nums[i];
    }
    return sum;
}
console.log(sumofArray(nums))

// Count the Number of Even and Odd Numbers in an Array

function oddeven(nums){
    let odd = 0;
    let even = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            even++;
        }
        else{
            odd++;
        }       
    }
    return {evencount: even, oddcount: odd};
}
console.log(oddeven(nums))


// Reverse an Array

function arrayreverse(nums){
    let start = 0;
    let ends = nums.length-1;
    while(start < ends){
        let temp = nums[start];
        nums[start] = nums[ends];
        nums[ends] = temp;   
    start++;
    ends--;
    }
    return nums;
}
// console.log(arrayreverse(nums))

// Merge Two Arrays into One

function Mergearr(nums, arr){
    newarr = [];
    for (let i = 0; i < nums.length; i++) {
        newarr.push(nums[i]);
    }

    // Add all elements from the second array
    for (let j = 0; j < arr.length; j++) {
        newarr.push(arr[j]);
    }
    return newarr;
}
console.log(Mergearr(nums, arr))

// sorting ascending or descending 

function compare(a, b){
    return a - b;
}
console.log(arr.sort(compare))

