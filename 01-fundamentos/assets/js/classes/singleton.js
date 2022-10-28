

class Singleton{

static instancia;
nombre ='';

    constructor( nombre = ''){

        if ( !!Singleton.instancia){

            return Singleton.instancia;

        }
        

        Singleton.instancia = this;
        this.nombre = nombre;

    }

}

const Instancia1 = new Singleton('Ironman');

console.log( ` la instancia es ${ Instancia1.nombre}`);