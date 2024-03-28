function newUser(name, age, country) {
    var name = name || 'Eddy';
    var age = age || 18;
    var country = country || 'COL';
    console.log(name, age, country);
}

newUser();
newUser('Vanessa', 19, 'ECU');

function newAdmin(name = 'Eddy', age = 18, country = 'COL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Antonella', 18, 'VEN');