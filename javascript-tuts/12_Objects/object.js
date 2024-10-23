// Object

let person = {
    firstname: 'raj',
    lastname: 'sharma',
    city:'delhi',
    'age': '19'  //avoid using this method
};

person.lastname = 'chopra'
delete person.age //delete a property

console.log(person.lastname);
console.log(person['age']);
console.log('city' in person);

for(let key in person){
    console.log(key + ":" + person[key])
}