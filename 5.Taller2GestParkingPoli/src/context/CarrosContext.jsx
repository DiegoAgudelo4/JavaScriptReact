import React, { createContext, useContext, useEffect, useState } from 'react';
import {carros} from "../data/dataCarros";

const CarrosContext = createContext();

export const CarrosProvider = ({ children }) => {
  const [carrosData, setCarrosData] = useState(carros);
  const [disponibles, setDisponibles] = useState(0);

  useEffect(() => {
    const disponibles = carrosData.filter(carro => carro.ocupada === false).length;
    setDisponibles(disponibles);
  },[])
  

  return (
    <CarrosContext.Provider value={{ carrosData, setCarrosData, disponibles}}>
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
