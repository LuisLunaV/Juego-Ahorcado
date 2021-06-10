    import {Ahorcado} from './class/juego-class';
    import {letr_A} from './js/componentes';
    import './styles.css';


    export let juego= new Ahorcado('SAL');
    //Instancia del metodo que nos ayuda a crear las lineas de las palabras ocultas
    juego.lineas();