
const carros = ['Ford', 'Chevrolet', 'Volkswagen', 'Honda', 'Toyota'];
let i = 0;

// while(i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }
console.warn('While')
// Son considerados falos: undefined, null y false

while (carros[i]){
    if (i ===1){
       i++;
       continue;
    }

    console.log(carros[i]);
    i++;
}

console.warn('Do While')
let j = 10;

do {
    console.log( carros[j])
    j++;
} while (carros[j])