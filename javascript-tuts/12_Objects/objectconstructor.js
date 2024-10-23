// Object Contructors

// let weapon = {
//     name: "Insas56",
//     kind: 'assault rifle',
//     type: 'automatic',
//     rpm: 1000
// }

function Weapon(name, kind, type,rpm){
    this.name = name;
    this.kind = kind;
    this.type = type;
    this.rpm  = rpm;
}

// using prototype to add new propereties

Weapon.prototype.color = 'black' 

let Weapon1 = new Weapon('ak47','assault rifle', 'automatic', 1000);
let Weapon2 = new Weapon('ak56','assault rifle', 'semi-automatic', 1400, 'orange');

console.log(Weapon1);
console.log(Weapon1.color);