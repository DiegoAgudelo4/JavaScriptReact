import React, { useState } from 'react';
import style from './EmpleadosItem.module.css';
const EmpleadosItem = ({ empleado, setNumeroPlacaSeleccionada }) => {
  const { cedula, vehiculos } = empleado;

  const handleClick = (numeroPlaca, tipo) => {
    // Guardar el número de placa en el estado
    //console.log(numeroPlaca,tipo)
    setNumeroPlacaSeleccionada({ numeroPlaca, tipo });
  };

  return (
    <tr className={style.tr}>
      <td >{cedula}</td>
      <td>
        {vehiculos.map((vehiculo, index) => (
          <div key={index}>{vehiculo.numeroPlaca}</div>
        ))}
      </td>
      <td>
        {vehiculos.map((vehiculo, index) => (
          <div key={index}>{vehiculo.marca}</div>
        ))}
      </td>
      <td>
        {vehiculos.map((vehiculo, index) => (
          <div key={index}>{vehiculo.tipo}</div>
        ))}
      </td>
      <td>
        {vehiculos.map((vehiculo, index) => (
          <div key={index} className={style.accion}>
            {/* Agregar un botón con el evento onClick para manejar la acción */}
            <button onClick={() => handleClick(vehiculo.numeroPlaca, vehiculo.tipo)}>
              seleccionar
            </button>
          </div>
        ))}
      </td>
    </tr>
  );
};

export default EmpleadosItem;
