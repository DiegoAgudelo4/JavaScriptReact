import React, { createContext, useContext, useEffect, useState } from 'react';
import {carros} from "../data/dataParkingCarros";

const CarrosContext = createContext();

export const CarrosProvider = ({ children }) => {
  const [carrosData, setCarrosData] = useState(carros);
  const [disponibles, setDisponibles] = useState(0);
  const [ocupadas, setOcupadas] = useState(0)
  const [parqueados, setParqueados] = useState({})

  useEffect(() => {
    let count = 0;
    let count2=0;
    for (let i = 0; i < carrosData.length; i++) {
      for (let j = 0; j < carrosData[i].length; j++) {
        if (!carrosData[i][j].ocupada) {
          count++;
        }else{
          count2++;
        }
      }
    }
    setOcupadas(count2);
    setDisponibles(count);
  },[carrosData])
  

  return (
    <CarrosContext.Provider value={{ carrosData, setCarrosData, disponibles,ocupadas,parqueados,setParqueados}}>
      {children}
    </CarrosContext.Provider>
  );
};

export const useCarros = () => {
  const context = useContext(CarrosContext);
  if (!context) {
    throw new Error('useCarros debe ser utilizado dentro de un CarrosProvider');
  }
  return context;
};
