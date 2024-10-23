let user = {
    id: 4001,
    mail: 'nesting@gmail.com',
    personalinfo: {
        name: 'Nesting',
        age: 24,
        address: {
            city: 'mohali',
            pincode: '160061'
        }
    }
}

console.log(user.personalinfo.address.city)