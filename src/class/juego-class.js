const linea=document.querySelector('#lineaUno')

//Creamos la classe del juago
export class Ahorcado{
   
    constructor(palabra){
        
    this.palabra=palabra;
    this.palabraOculta='';
    }
    
    lineas(){
    this.palabraOculta='-'.repeat(this.palabra.length);  
    linea.innerText=`${this.palabraOculta}` 
    }

    comprobar(letra){
    
    let palabraOcultaArr = this.palabraOculta.split('');
    console.log(palabraOcultaArr);
    for(let i=0; i<this.palabra.length; i++){
     
    if(this.palabra[i]===letra){
        console.log(letra);
        console.log(palabraOcultaArr[i]=letra);
       linea.innerText= this.palabraOculta=palabraOcultaArr.join('');
       
      
    }
    }
    
    
    }
    }
    