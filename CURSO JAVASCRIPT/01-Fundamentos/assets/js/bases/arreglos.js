
// const arr = new Array(10);
// const arr = [];
// console.log(arr); 

let videojuegos = ["Minecraft", "Fortnite", "Call of Duty", "PlayerUnknown's Battlegrounds"]
console.log(videojuegos);

// Primera Posición
console.log( 'Primer juego:' , videojuegos[0] );

let arregloCosas = [
    true,
    10,
    "Hola",
    1 + 2,
    function(){},
    () => {},
    { a: 1 },
    ['Steve', 'John', 'Jane', [
        'Juan', 
        'Pedro',
        'Luis',
    ]],
  
];

console.log(arregloCosas);

// Acceder a un elemento del arreglo que esta dentro del arrelgoCosas
console.log( arregloCosas[7][3][1]);

