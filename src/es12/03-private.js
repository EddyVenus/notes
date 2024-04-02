class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // métodos
    #speak() { // # para volver el método privado
        return "Buenas";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {  // # para volver el método privado
        return this.age;
    }
    set #uAge(n) {  // # para volver el método privado
        this.age = n;
    }
}

const developer = new user("David", 18);
console.log(developer.uAge);
console.log(developer.uAge = 20);