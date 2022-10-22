
class Persona{

 static _conteo = 0;

nombre = "";
codigo = "";

    constructor( nombre = 'Sin Nombre', codigo = 'Sin Codigo'){

        this.nombre = nombre;
        this.codigo = codigo;



    }



}

const Luis = new Persona('Luis', '001');

Persona._conteo =2;

console.log( 'Conteo estatico ', Persona._conteo);