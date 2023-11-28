import React, { useState } from 'react';

const Parqueadero = () => {
  // Matriz que representa las celdas del parqueadero
  const [celdas, setCeldas] = useState([
    [0, 0, 1, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 1, 0, 0],
  ]);

  // Función para alternar la disponibilidad de una celda al hacer clic
  const toggleDisponibilidad = (filaIndex, celdaIndex) => {
    const nuevasCeldas = [...celdas];
    nuevasCeldas[filaIndex][celdaIndex] = 1 - nuevasCeldas[filaIndex][celdaIndex];
    setCeldas(nuevasCeldas);
  };

  return (
    <div>
      <h2>Parqueadero</h2>
      <table>
        <tbody>
          {celdas.map((fila, filaIndex) => (
            <tr key={filaIndex}>
              {fila.map((celda, celdaIndex) => (
                <td
                  key={celdaIndex}
                  onClick={() => toggleDisponibilidad(filaIndex, celdaIndex)}
                  style={{
                    width: '50px',
                    height: '50px',
                    border: '1px solid #ccc',
                    backgroundColor: celda ? 'red' : 'green',
                  }}
                >
                  {celda ? 'Ocupado' : 'Disponible'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Parqueadero;