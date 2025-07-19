const elMayor = (a,b) => (a > b) ? `El mayor es ${a}` : `El mayor es ${b}`;
const tieneMembresia = ( miembro ) => ( miembro ) ? '2 Dólares' : '10 Dólares';


console.log( elMayor(25, 10));
console.log(tieneMembresia(true));

const amigo = false;
const amigosArrr = [
    'Peter',
    'Juan',
    'Maria',
    amigo ? 'Pedro' : 'Loki',
    (() => 'Diana')(),
    elMayor(15, 20)
];

console.table( amigosArrr )

const nota = 82.5; // A+ A B+

const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 60 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({nota, grado})