import React, { useEffect, useState } from 'react';
import style from './ParkingOption.module.css'
const ParkingOption = ({carros,motos}) => {
  
  return (
    <div className={style.container}>
      <h2>Parqueadero de Motos</h2>
      <div>
        <p>Disponibles: {motos.disponibles}</p>
        <p>Ocupados: {motos.ocupadas}</p>
      </div>

      <h2>Parqueadero de Carros</h2>
      <div>
        <p>Disponibles: {carros.disponibles}</p>
        <p>Ocupados: {carros.ocupadas}</p>
      </div>
    </div>
  );
};

export default ParkingOption;