import React, { createContext, useContext, useState } from 'react';

const MotosContext = createContext();

export const MotosProvider = ({ children }) => {
  const [motosData, setMotosData] = useState(/* inicializar con tus datos de motos */);

  return (
    <MotosContext.Provider value={{ motosData, setMotosData }}>
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
