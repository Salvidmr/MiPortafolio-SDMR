class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log('Hola, soy un mensaje estatico');
    }

    nombre = '' ;
    codigo = '' ;
    frase = '' ;
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identificador es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.nombre} dice: ${this.frase}`);
    }

    
}



const spiderman = new Persona('Peter Parker', 'Spiderman', 'Conoce tu poder');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy IronMan');
// console.log(ironman);
// spiderman.quienSoy();
// ironman.quienSoy();

spiderman.miFrase();

spiderman.setComidaFavorita = 'Lentejas';
// spiderman.comida = 'Duende Verde';

// console.log(spiderman.getComidaFavorita);
// console.log(spiderman); 
// Persona._conteo = 2;

console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';
console.log( Persona.propiedadExterna );
console.log( Persona );

