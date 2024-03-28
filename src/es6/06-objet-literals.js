// enhaced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("EddyVenus", 23, "COL", 1));
