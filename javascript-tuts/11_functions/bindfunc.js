/* bind() => an object can borrow a method from another object.

*/

// const person = {
//     name: 'nitin',
//     age: 44,
//     info: function(){
//         return `the person named ${this.name} is ${this.age} years old..`;
//     }
// }

// const member = {
//     name: "Rejsh",
//     age: 34,
// }

// let info = person.info.bind(member);

// console.log(info());

const person = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      x = this.firstName + " " + this.lastName;
      console.log(x);
    }
  }
  
//   person.display() 
let z = person.display.bind(person);
setTimeout(z, 300)  //during tymout f(n) this keyword is lost
