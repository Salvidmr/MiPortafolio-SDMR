const personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    ultima_pelicula: 'Infinity War',
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coors (Latitud)', personaje.coords.lat);
console.log('Número de trajes de IronMan:', personaje.trajes.length);
console.log('Último traje de IronMan:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('última película' , personaje.ultima_pelicula);


// Más detalles

delete personaje.edad
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log(entriesPares);

// personaje = true
console.log(personaje);

Object.freeze( personaje );

personaje.dinero = 1000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades);
console.log(valores);