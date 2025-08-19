
class Singleton {

    static instancia; // undefined
    nombre = '';

    constructor( nombre = '' ) {


        if( !!Singleton.instancia){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

    }
}

const instancia1 = new Singleton('Juan');
const instancia2 = new Singleton('Pablo');


console.log( instancia1.nombre ); // Juan
console.log( instancia2.nombre ); // Juan