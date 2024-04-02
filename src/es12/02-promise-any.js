const promise1 = new Promise((resolve, reject) => reject("Rejected!"));
const promise2 = new Promise((resolve, reject) => resolve("Resolved!"));
const promise3 = new Promise((resolve, reject) => resolve("Resolved 2!"));

Promise.any([promise1, promise2, promise3])     // Solo se ejecutará con la primera promesa cumplida, las posteriores no aparecerán
    .then(response => console.log(response));