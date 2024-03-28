// Declarando la clase
class User {};
// Declarando la instancia
//const newUser = new User();

class user {
    // Métodos
    greeting() {
        return "Saludos!";
    }
};

const eddyvenus = new user();
console.log(eddyvenus.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// Constructor
class user {
    // constructor
    constructor() {
        console.log("Nuevo Usuario");
    }
    greeting() {
        return "Saluditos!"
    }
}

const David = new user();

// This -> Referencia al elemento padre que lo contiene

class user {
    constructor(name) {
        this.name = name;
    }
    // Métodos
    speak() {
        return "Buenas";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const Pedro = new user("Pedro");
console.log(Pedro.greeting());

// setters getters

class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // métodos
    speak() {
        return "Buenas";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const developer = new user("David", 18);
console.log(developer.uAge);
console.log(developer.uAge = 20);