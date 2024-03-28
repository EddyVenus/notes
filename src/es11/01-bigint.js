const bigNumber = 23478478927892347892782357823578235789257892789342498348n; // n para números grandes 
const anotherBigNumber = BigInt(23478478927892347892782357823578235789257892789342498348); // Ya no es necesario la n
// BigInt -> Números para números que superan el tamaño y precisión de los números regulares, para representarlos sin importar su tamaño y sin perder precisión. (Hasta 253-1 dígitos)

console.log(bigNumber);
console.log(anotherBigNumber);