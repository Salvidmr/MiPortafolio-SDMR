let a = 5;

if (a >= 10) { // undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10')
}


// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay();

if (dia === 0) {
    console.log('Hoy es domingo');
} else if (dia === 1){
    console.log('Hoy es lunes');
}else if (dia === 2){
    console.log('Hoy es martes');
}else if (dia === 3){
    console.log('Hoy es miercoles');
}else if (dia === 4){
    console.log('Hoy es jueves');
}else if (dia === 5){
    console.log('Hoy es viernes');
}else{
    console.log('Hoy es sabado');
}


console.log(dia);
// console.log(hoy)


// Sin usar If Else, o Swith¡ch, únicamente objetos
dia = 3; // 0 = domingo, 1 = lunes, 2 = martes, 3 = miercoles

const diaLetras = {
    0: ()=> 'domingo - 0',
    1: ()=> 'lunes - 1',
    2: ()=> 'martes - 2',
    3: ()=> 'miercoles - 3',
    4: ()=> 'jueves - 4',
    5: ()=> 'viernes - 5',
    6: ()=> 'sabado - 6',
}

const diaArrays = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']; 

console.log('DIASLETRAS:' , diaLetras[dia]() );
console.log('DIASARRAY' , diaArrays[dia]);