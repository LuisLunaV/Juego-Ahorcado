const linea=document.querySelector('#lineaUno')

//Creamos la classe del juago
export class Componentes{
   
    constructor(palabra){
        
    this.palabra=palabra;
    this.palabraOculta='';
    }
    
    lineas(){
    this.palabraOculta='-'.repeat(this.palabra.length);  
    linea.innerText=`${this.palabraOculta}` 
    }

    comprobar(letra){
        
        console.log('letra');
    // const palabraOcultaArr = this.palabraOculta.split(' ');
    // console.log(palabraOcultaArr);
    }
    }
    