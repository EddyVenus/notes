// Arrays destructuring

let fruits = ['Apple','Banana','Pear'];
let [a,b] = fruits;
console.log(a,b);

// Objet destructuring

let user = {
    username: 'Eddy',
    age: 23,
    country: 'COL'
};

let {username, age} = user;
console.log(username, age);

// Spread operator

let person = {
    name : 'Antonella',
    age : 22
};
let country = 'VEN';

let data = {id: '01', ...person, country};

console.log(data);

// Rest 

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 2, 3, 4, 5);