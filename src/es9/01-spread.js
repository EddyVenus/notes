const user = {
    username : "eddyvenus",
    age : 23,
    countri : "CO"
}

const {username, ...values} = user;

console.log(username);
console.log(values);