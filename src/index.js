    import {Componentes} from './class/juego-class';
    import {crearBotones} from './js/componentes';
    import './styles.css';

    
    
   export let juego= new Componentes('sal')
    juego.lineas();
    crearBotones();
   
    juego.comprobar();




