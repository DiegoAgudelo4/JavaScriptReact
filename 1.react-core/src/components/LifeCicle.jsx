import { useEffect, useState } from "react"
console.log("pre-render");
const LifeCicle=()=>{
    console.log("logic-render");
    const [cont1, setcont1]= useState(0);
    const [cont2, setcont2]= useState(0);
    
    //se puede usar en tres escenarios [] > dependencia
    //1.  sin dependencia, se llama siempre
    useEffect(()=>{
        console.log("UseEffect sin dependencias");
    });
    
    //2. con dependendecia vacío, se llama solo una vez
    useEffect(()=>{
        console.log("UseEffect con dependencias vacío");
    },[]);

    //3. useEffect(()=>{},[]) con dependencia
    useEffect(()=>{
        console.log("UseEffect con dependencias [cont1]");
    },[cont1]);

    useEffect(()=>{
        console.log("UseEffect con dependencias [cont1,cont2 ]");
    },[cont1,cont2 ]);
    //funcion limpiadora, para desupscribirse de un evento
    useEffect(()=>{
        console.log("Ussefect sin dependencias")
        return ()=>{
            console.log("se desmonta componente")
        };
    });


    return (
        <div>
            {console.log("return-render")}
            <h2>LifeCicle</h2>
            <h4>Counter 1: {cont1}</h4>
            <h4>Counter 2: {cont2}</h4>
            {
            //se debe poner una funcion flecha para que espere el evento
            //si no se queda en un ciclo infinito llamandose
            }
            <button onClick={()=>setcont1(cont1+1)}> Counter 1</button>
            <button onClick={()=>setcont2(cont2+1)}> Counter 2</button>
        </div>
        );
}
export default LifeCicle;