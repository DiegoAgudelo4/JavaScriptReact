import { createContext, useContext, useEffect, useState } from "react";
import { empleados } from "../data/dataEmpleados";

const EmpleadosContext=createContext();

export const EmpleadosProvider=({children})=>{
    const [empleadosData, setEmpleadosData] = useState(empleados);
    useEffect(() => {
        // Esta función se ejecutará después de cada actualización de empleadosData
        // Aquí puedes realizar la operación de escritura en dataEmpleados.js
      
        // Ejemplo: escribir en el archivo dataEmpleados.js (esta es una operación ficticia)
        // updateDataEmpleados(empleadosData);
        console.log(empleadosData)
      }, [empleadosData]); 
    const agregarEmpleado = (nuevoEmpleado) => {
        // Copia el array existente para no modificar el estado directamente
        const nuevoArrayEmpleados = [...empleadosData];
    
        // Agrega el nuevo empleado al array
        nuevoArrayEmpleados.push(nuevoEmpleado);
    
        // Actualiza el estado con el nuevo array de empleados
        setEmpleadosData(nuevoArrayEmpleados);
      }

    return(
        <EmpleadosContext.Provider value={{empleadosData, agregarEmpleado,setEmpleadosData}}>
            {children}
        </EmpleadosContext.Provider>
    );
    
};

export const useEmpleado=()=>{
    const context=useContext(EmpleadosContext);
    if (!context) {
        throw new Error('useEmpleados debe ser utilizado dentro de un EmpleadoProvider');
      }
      return context
}