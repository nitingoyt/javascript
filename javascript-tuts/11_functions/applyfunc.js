/* apply() method similar to call()
   but we can pass argunments as array in apply() method
   where as call() method uses strings as arguments     
*/

const person = {
    show: function(country){
        return `the person named ${this.name} is ${this.age} years old.. and lives in ${country}`;

    }
}

const person1 = {
    name: "Rajesh",
    age: 39,
}
const person2 = {
    name: "champak",
    age: 69,
}

console.log(person.show.apply(person1, ["china"]));


console.log(Math.max(23,345,756,2435756756,0));

console.log(Math.max.apply(Math, [1,34,546,5745532,0]));
