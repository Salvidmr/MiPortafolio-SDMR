function saludar(nombre) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return [1, 2];

    console.log('Soy un codigo que esta despues del return');
}

const saludar2 = function (nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}


const retornoDeSaludar = saludar('Salvi', 40, true, 'España'); // 1
console.log('Retorno de saludar: ', retornoDeSaludar[0], 'y ', retornoDeSaludar[1]); // 1 y 2

// saludar2 ('Salvi');
// saludarFlecha();
// saludarFlecha2('Salvi');

function sumar(a, b) {
    return a + b;
}


// const sumar2 = (a,b) => {
//     return a + b;
// }


const sumar2 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorioFlecha = () => Math.random()


console.log('Suma: ', sumar2(3, 2));
console.log('Numero Aleatorio:' , getAleatorio());
console.log('Aleatorio con flecha:', getAleatorioFlecha());