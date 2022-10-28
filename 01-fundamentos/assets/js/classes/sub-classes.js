class Persona{

    static _conteo = 0;

   
   nombre = "";
   codigo = "";
   
       constructor( nombre = 'Sin Nombre', codigo = 'Sin Codigo'){
   
           this.nombre = nombre;
           this.codigo = codigo;
   
   
   
       }
   
   
   
   }
   
    
   class Hero extends Persona{
    clan = 'Sin Clan';


    constructor( nombre, codigo, clan){
        super(nombre, codigo);

        this.clan = 'Los Advengers';

    }


   }


   const Luis = new Hero( 'Luis', '001', 'locos');
   
   Persona._conteo =2;
   
   console.log( Luis);