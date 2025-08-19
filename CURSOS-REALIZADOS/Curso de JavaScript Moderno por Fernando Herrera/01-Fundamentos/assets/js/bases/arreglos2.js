let juegos = [ 'Zelda', 'Mario', 'Pokémon', 'Final Fantasy', 'Dragon Quest' ];
console.log('Largo del Array: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log('Primer elemento: ', primero, ', Ultimo elemento: ', ultimo);

juegos.forEach( (elemento,indice,arr) => {
    console.log( `Elemento: ${elemento}, Indice: ${indice}, Array: ${arr}` );
} );

let nuevaLongitud = juegos.push( 'F-Zero');
console.log(nuevaLongitud, juegos);

nuevaLongitud = juegos.unshift( 'PrimerJuego');
console.log(nuevaLongitud, juegos);

let juegoBorrado = juegos.pop();
console.log(juegoBorrado, juegos);

let pos = 1;

console.log(juegos);
let juegosBorrados = juegos.splice(pos,2);
console.log(juegosBorrados, juegos);

let pokemonIndex = juegos.indexOf('Pokémon');
console.log('Posicion del juego Pokémon: ', pokemonIndex);
