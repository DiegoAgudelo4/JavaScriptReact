import { useState } from "react";
import Boton from "./boton";
const Views=()=>{
    const [cantidad, setCantidad]= useState(0);
    const [mensaje, setMensaje]=useState();
    //para ver los eventos del boton, los eventos van antecedidos por 'on'
    //return <button onClick={setCantidad(cantidad+1)}>Me gusta</button>
    //queda en un ciclo infinito
    //el correcto es este
    //solo hasta que se ejecute el evento se llama a la funcions
    return <Boton setCantidad={setCantidad} cantidad={cantidad} titulo="me gusta"></Boton>

}   

export default Views;