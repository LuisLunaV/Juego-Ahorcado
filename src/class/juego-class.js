const linea=document.querySelector('#lineaUno')

//Creamos la classe del juago
export class Ahorcado{
   
    constructor(palabra){
        
    this.palabra=palabra;
    this.palabraOculta='';
    this.intetos=0;
    }
    
    lineas(){
    this.palabraOculta='-'.repeat(this.palabra.length);  
    linea.innerText=`${this.palabraOculta}` 
    }

    comprobar(letra){
     //Esta funcion envia la letra al metodo turnos para comparar si fallo o no.
        this.Turnos(letra);
    //////////////////////////////////////////////////////////////////////////////
    let palabraOcultaArr = this.palabraOculta.split('');
    
    for(let i=0; i<this.palabra.length; i++){
     
    if(this.palabra[i]===letra){

        palabraOcultaArr[i]=letra;
       linea.innerText= this.palabraOculta=palabraOcultaArr.join('');
    }
    } 
    }

    Turnos(Nletra){
        let Cantidad=document.querySelector('#contador');

     
    if(this.palabra.indexOf(Nletra)>=0){
      
        console.log('Existe letra:'+Nletra);
        
    }else{
        const divBtn=document.querySelector('#div-tres');
        const imagen=document.querySelector('.ahorcado-img');
        this.intetos++;
        Cantidad.innerText=this.intetos;
        imagen.src=`./assets/img/${this.intetos}.png`;

        if(this.intetos===9){
        linea.innerHTML='Losiento, Perdiste'
        divBtn.innerHTML='';
        }
}   
 }
  }
    