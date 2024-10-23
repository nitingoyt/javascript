// let person1 = {}

// console.log(person1);

// let person2 = {
//     name: 'bulla'
// }

// function person(n){
//     this.name = n;
// }

// function info(){
//     let age = 5;
//     return getage = ()=>{
//         return age++;
//     }
// }

// let show = new info;

// console.log(show());

// let person3 = new person('surjeet');

// console.log(person3);

// // use case

function Animal(ls) {
  this.lifespan = ls;
}

Animal.prototype.breath = function () {
  console.log("breathing");
};

let animal1 = new Animal(30);

console.log(animal1);


function Person(first, last, a) {
    this.firstName = first;
    this.lastName = last;
    this.age = a;
}

Person.prototype.fullname = function () {
    console.log(this.firstName + " " + this.lastName);
};

Person.prototype.__proto__ = Animal.prototype;

let person1 = new Person("nitin", "kumar", 23);
let person2 = new Person("r", "k", 22);

console.log(person2);
console.log(person2.fullname());
console.log(person1.breath());
