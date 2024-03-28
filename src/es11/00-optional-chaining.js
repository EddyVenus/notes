const users = {
    eddyvenus : {
        country : "COL"
    },
    saturrrno : {
        country : "VEN"
    }
}

console.log(users.bebeloper.country);   // Genera error bloqueante al no existir 'bebeloper' al leer 'country'
console.log(users?.bebeloper?.country); // Con signos de interrogación para preguntar si existe y evitar un error bloqueante si no. 