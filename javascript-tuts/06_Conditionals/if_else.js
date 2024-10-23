
let income =prompt("Enter your income");
income = parseInt(income);
console.log(income)

if(income<300000){
    alert("You are tax free")
}
else if(income<1000000){
    alert("You have to pay 10% of your income as tax")
}
else{
    alert("You have to pay 12% of your income as tax")     
}


