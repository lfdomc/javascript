
class persona{

_conteo = 0;

nombre = "";
codigo = "";

    constructor( nombre = 'Sin Nombre', codigo = 'Sin Codigo'){

        this.nombre = nombre;
        this.codigo = codigo;



    }



}

const Luis = new persona('Luis', '001');

console.log( Luis);