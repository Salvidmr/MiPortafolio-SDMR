
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!false);

console.log('[!regresaFalse()] -> Va regresar true [', !regresaFalse());
console.log('[!regresaTrue()] -> Va regresar false [', !regresaTrue());


console.warn('And')
console.log(true && true);
console.log(true && !false);
console.log(false && true);
console.log(false && false);

console.log(' =============== ');
console.log( regresaFalse() && regresaTrue() );
console.log( regresaTrue() && regresaFalse() );

console.log(' =============== ');
regresaFalse() && regresaTrue();

console.log( '4 condiciones: ', true && true && true && false)

console.warn('OR');
console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log(false || true);

console.log( regresaTrue() || regresaFalse() );
console.log( '4 condiciones: ', true || true || true || false)

console.warn('Asignaciones')

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy Falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy Falso' || true;
const a5 = soyFalso || soyUndefined || soyNull || true || 'Ya no soy Falso';
const a6 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy Falso' || true;



console.log({a1, a2, a3, a4 , a5, a6});

if (regresaFalse() && regresaTrue() && (true || false || true)) {
    console.log('Hacer Algo');
} else {
    console.log('Hacer otra cosa');
}
    
