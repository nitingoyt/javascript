// methods

let person = {
    firstname: 'nitin',
    lastname: 'goyat',
    city: 'jind',
    nationality: 'Indian',
    hi (){
        console.log("This is OK!!");  //Third method
    } ,         
    hilo:()=>{
        console.log("This is OK!!");  //Third method
    }          
};

// First Method
// person.hi = function (){
//     console.log("This is OK!!")
// }

// Second Method
// function message() {
//     console.log("This is OK!!")
// }
// person.hi= message;



person.hi()