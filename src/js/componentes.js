    import {juego} from '../index';
    const divTres=document.querySelector('#div-tres');
    const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
                    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  //crear botones
export const crearBotones=()=>{

       for(let i=0; i<letras.length;i++){
       let abc=letras[i];
       const btn=document.createElement('div');
       //Creamos los elementos buton y el evento onclick.
       const htmlButon=`<button onclick="juego.comprobar()" class="btn btn-primary" id="btn-${abc}">${abc}</button>`;

       btn.innerHTML=htmlButon;
       divTres.append(btn.firstElementChild);
       

       
    }
    
}

