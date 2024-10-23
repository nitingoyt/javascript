// object

let person = {
    firstname: 'Nitin',
    lastname: 'Goyat',
    hi() {
        console.log(person.firstname + " owns a " + weapon.name);
    },
    hlo() {
        console.log(this.firstname + " owns a " + weapon.name);
    }
}

let weapon = {
    name: 'AK47',
    type: 'Assault Rifle'
           
}

person.hlo()