import { createContext, useContext, useEffect, useState } from "react";
import { empleados } from "../data/dataEmpleados";

const EmpleadosContext=createContext();

export const EmpleadosProvider=({children})=>{
    const [empleadosData, setEmpleadosData] = useState(empleados);

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