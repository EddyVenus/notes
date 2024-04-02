const array = ["one", "two", "three", "four", "five", "six", "seven", "ten"];

console.log(array[array.length - 1]);   // Manera convencional

console.log(array.at(-1));  // .at() para obtener los elementos según el índice del array y -1 para el último elemento del arreglo (negativos empiezan desde el último elemento)