const regex = /\bApple\b/g;  // Expresión regular para la búsqueda de MatchAll, siendo específica con los límites de palabras (\b) e indiferente con las "s"

const fruits = "One Apple, two Apples, three Apples and an Apple";

for (const match of fruits.matchAll(regex)) {
    console.log(match);
}

var manzana = match;
console.log(match);





const text = "El número de teléfono es 123-456-7890.";

const regexConGrupo = /(\d{3})-(\d{3})-(\d{4})/; // Expresión regular para buscar 3 números (dos de 3 y uno de 4 dígitos)

for (const match of text.match(regexConGrupo)) { // .match junto con la expresión regular. Mostrará índices 0 al 3, la coincidencia completa y los grupos de captura
    console.log(match); 
}



//playground jeje
const text2 = `Los microorganismos son organismos diminutos que no son visibles a simple vista y se encuentran en todas partes en nuestro entorno, desde el suelo hasta el aire y dentro de nuestro cuerpo. Estos seres vivos son extremadamente diversos y desempeñan roles importantes en los ecosistemas terrestres y acuáticos.
Los microorganismos pueden clasificarse en varios grupos, incluidas las bacterias, los virus, los hongos y los protozoos. Cada grupo tiene características únicas y desempeña funciones específicas en el medio ambiente. Por ejemplo, las bacterias son importantes para descomponer la materia orgánica y reciclar nutrientes en el suelo, mientras que los virus pueden infectar células y causar enfermedades en organismos más grandes.
Además de su papel en los ecosistemas naturales, los microorganismos también son utilizados por los humanos en una variedad de aplicaciones industriales y médicas. Por ejemplo, las bacterias se utilizan en la producción de alimentos fermentados como el yogur y el queso, y en la producción de medicamentos como la insulina. Los virus también se utilizan en la terapia génica para tratar enfermedades genéticas.
A pesar de su pequeño tamaño, los microorganismos tienen un impacto significativo en el mundo que nos rodea. Es importante comprender su función en los ecosistemas y aprovechar su potencial en beneficio de la humanidad.
`;


const palabra = /\b(microorganismos)+\b/gi;
var cantidadPalabra = 0;
const signo = /(,)/gi;
var cantidadSigno = 0;
const frase = /(los microorganismos son importantes)/gi;
var cantidadFrase = 0;
const regexPalabras = /\b\w+\b/g;
var cantidadPalabras = 0;


const coincidenciasPalabra = text2.match(palabra);
if (coincidenciasPalabra !== null) {
    for (const match of text2.match(palabra)) {
        cantidadPalabra++;
    }
    console.log(`Hay ${cantidadPalabra} palabras "microorganismos" en el texto.`);
} else {
    console.log(`Hay 0 palabras "microorganismos" en el texto.`);
}

const coincidenciaSigno = text2.match(signo);
if (coincidenciaSigno !== null) {
    for (const match of text2.match(signo)) {
        cantidadSigno++;
    }
    console.log(`Hay ${cantidadSigno} comas en el texto.`);
} else {
    console.log(`Hay 0 comas en el texto.`);
}

const coincidenciasFrase = text2.match(frase);
if (coincidenciasFrase !== null) {
    for (const match of text2.match(frase)) {
        cantidadFrase++;
    }
    console.log(`Hay ${cantidadFrase} frases "los microorganismos son importantes" en el texto.`);
} else {
    console.log(`Hay 0 frases "los microorganismos son importantes" en el texto.`);
}

const palabrasTexto = text2.match(regexPalabras);
if (palabrasTexto !== null) {
    for (const match of text2.match(regexPalabras)) {
        cantidadPalabras++;
    }
    console.log(`Hay ${cantidadPalabras} palabras en el texto.`);
} else {
    console.log("No hay ningún texto.");
}


