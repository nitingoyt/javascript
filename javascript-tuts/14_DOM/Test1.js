// Driving age


// const canDrive = (age)=>{
//     return age>=20?true:false;
// }

// do{
//     let age = prompt("Enter your age");
//     age = Number.parseInt(age)
//     if(age <= 0){
//         console.error("Invalid Age")
//     }
//     else if(canDrive(age)){
//         alert("Elegible to drive")
//     }
//     else {
//         alert("Your not Elegible")
//     }
// }

// while(confirm("Do you want to Enter age again")){
// }




// Write a program to prompt the user to input a number and change the URL to https://google.com 
// if the user enters a number greater than 4 (Hint: location.href)

let num = prompt("Enter a num: ");
num = Number.parseInt(num);

    if(num > 4){
        location.href = "https://google.com";
    }
    else {
        let color = prompt("Enter a color");
        // color = color.toLowerCase;
        document.body.style.backgroundColor = color;

    }

