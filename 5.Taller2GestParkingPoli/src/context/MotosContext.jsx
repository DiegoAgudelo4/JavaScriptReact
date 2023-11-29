import React, { createContext, useContext, useEffect, useState } from 'react';
import {motos} from "../data/dataParkingMotos";
const MotosContext = createContext();

export const MotosProvider = ({ children }) => {
  const [motosData, setMotosData] = useState(motos);
  const [disponibles, setDisponibles] = useState(0);
  const [ocupadas, setOcupadas] = useState(0)

  useEffect(() => {
    let count = 0;
    let count2=0;
    for (let i = 0; i < motosData.length; i++) {
      for (let j = 0; j < motosData[i].length; j++) {
        if (!motosData[i][j].ocupada) {
          count++;
        }else{
          count2++;
        }
      }
    }
    setOcupadas(count2);
    setDisponibles(count);
  },[motosData])
  return (
    <MotosContext.Provider value={{ motosData, setMotosData, disponibles,ocupadas }}>
      {children}
    </MotosContext.Provider>
  );
};

export const useMotos = () => {
  const context = useContext(MotosContext);
  if (!context) {
    throw new Error('useMotos debe ser utilizado dentro de un MotosProvider');
  }
  return context;
};
