// // Reverse the string

// let alias = "Peanut Man is just a legend !!";
// console.log(alias);

// let aliasReversed = "";

// for (let i = alias.length - 1; i >= 0; i--) {
//   aliasReversed += alias[i];
// }
// console.log(aliasReversed);

// // check if a string contains a specific substring

// let subAlias = alias.includes("is");
// console.log(subAlias);

// // Remove the first and last element of an array

// let arr1 = [3, 4, 5, 6, 23, 54, 3232, 909, 69];
// // let arr2 = [];
// // arr2 = arr1.slice(1, -1)
// // console.log(arr2);

// // merge two arrays in JavaScript without using the concat()

// let arr2 = [70, 80, 90, 100];
// let newarr = [];
// arr2.forEach((element) => {
//   arr1.push(element);
// });

// // filter out only the even numbers

// let arrEven = arr1.filter((a) => {
//   return a % 2 == 0;
// });
// console.log(arrEven);

// // check if an object has a specific property

// let person = {
//   firstname: "raj",
//   lastname: "sharma",
//   city: "delhi",
//   age: 19,
// };
// console.log(person.age)

// // merge two objects in JavaScript
// let personA = {
//   firstname: "raj",
//   lastname: "sharma",
//   city: "delhi",
//   age: 19,
// };
// let personB = {
//   pincode: 126213,
//   country: 'India',
//   religion: 'Hindu'

// };

// let mergePerson = {...personA, ...personB}
// console.log(mergePerson);

const obj = {
  name: "Rajesh",
  regularFunc: function () {
    console.log(this.name);
  },
};

obj.regularFunc();

const obj2 = {
  name: "Mukesssh",
  showName: () => {
    console.log(this);
  },
};

obj2.showName.bind(this)   //showing undefined
