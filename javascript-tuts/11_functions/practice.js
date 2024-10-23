// function sum(a, b){
//     // return a + b;
//     return this;

// }

// // let x = sum(10, 69);
// let x = sum();
// console.log(x);

// const myObject = {
//     firstName: Rajesh,
//     lastName: Gaitonde,
//     fullName: function (){
//         return this.fullname + " " +this.lastname;    }
// }

// myObject,lastName()
{
}
function myfunction(name, age) {
  this.name = name;
  this.age = age;
}

const info = new myfunction("Raj", 22);

console.log(info.age);

// function call method

const person = {
  info: function (country) {
    return "the person named " + this.name + " is " + this.age + " years old.. lives in " + country;
  },
};

const person1 = {
  name: "raj",
  age: 25,
};
const person2 = {
  name: "ra",
  age: 29,
};

// console.log(person.info.call(person1));


// using arguments in call function 

console.log(person.info.call(person1, "china"));

