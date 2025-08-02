function crearPersona(nombre, apellido){
    return {
        nombre,
        apellido
    }
}

const crearPersona2 = (nombre, apellido) => ({nombre, apellido});


const persona = crearPersona2('Salvi','Del Marmol')

console.log('Persona: ', persona);

function imprimeArgumentos(){
    console.log( arguments );
}

// Parametro rest
const imprimeArgumentos2 = (edad , ...args ) => { return args };

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Salvi', 'Hola');


console.log('Argumentoos: ', casado, vivo, nombre, saludo);

const { apellido: nuevoApellido } = crearPersona('Salvi', 'Del Marmol');
console.log(nuevoApellido)

const tony = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster'],
  };


const imprimePropiedades = ( {nombre, codeName, vivo, edad= 15, trajes} ) => { 

    console.log({nombre}); 
    console.log({codeName});   
    console.log({vivo}); 
    console.log({edad}); 
    console.log({trajes}); 

};

imprimePropiedades(tony);