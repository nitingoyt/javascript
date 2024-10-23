let person = {
    name: 'Raj',
    age: 25,

    // getname: function(){
    //     return this.name.toUpperCase();
    // },

    // getter use
    // get getnam(){
    //     return this.name.toUpperCase();
    // },

    // setter use
    set setname(a){
        this.name = a.toUpperCase();
    }
};

person.setname = "raju";
// console.log(person.name)
// console.log(person.getname())
// console.log(person.getnam)
console.log(person)