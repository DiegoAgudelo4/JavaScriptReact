import React, { useContext, useState } from 'react'
import { useCarros } from '../context/CarrosContext';


const ParkingCarros = () => {
    // Matriz que representa las celdas del parqueadero

    const { carrosData, setCarrosData, disponibles } = useCarros();
    const [celdas, setCeldas] = useState(carrosData);

    // Función para alternar la disponibilidad de una celda al hacer clic
    const toggleDisponibilidad = (filaIndex, celdaIndex) => {
        const nuevasCeldas = [...celdas];
        nuevasCeldas[filaIndex][celdaIndex].ocupada = !nuevasCeldas[filaIndex][celdaIndex].ocupada;
        console.log("fila: " + filaIndex + " columna: " + celdaIndex)
        setCeldas(nuevasCeldas);
    };

    function encontrarIndices(identificador) {
        // Extraer la letra de la columna y el número de la fila desde el identificador
        const columna = identificador.charAt(0);
        const fila = parseInt(identificador.substring(1), 10);

        // Mapear las letras de las columnas a índices numéricos
        const columnaIndices = { A: 0, B: 1, C: 2, D: 3 };

        // Obtener el índice de la columna
        const indiceColumna = columnaIndices[columna];

        // Validar si la columna y fila son válidas
        if (indiceColumna !== undefined && !isNaN(fila) && fila >= 1 && fila <= 15) {
            return { fila: fila - 1, columna: indiceColumna };
        } else {
            console.error("Identificador de posición inválido");
            return null;
        }
    }

    return (
            <div>
                <h2>Parqueadero de los almendros</h2>
                <table>
                    <tbody>
                        {celdas.map((fila, filaIndex) => (
                            <tr key={filaIndex}>
                                {fila.map((celda, celdaIndex) => (
                                    <td
                                        key={celdaIndex}
                                        onClick={() => toggleDisponibilidad(filaIndex, celdaIndex)}
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            border: '1px solid #ccc',
                                            backgroundColor: celda.ocupada ? 'red' : 'green',
                                            // Aplicar transformaciones a las celdas de la columna A y C
                                            /*transform:
                                              celda.columna === 'A'
                                                ? 'skewY(30deg)'
                                                : celda.columna === 'D'
                                                ? 'skewY(-30deg)'
                                                : '',*/
                                        }}
                                    >
                                        {celda.ocupada ? (
                                            <div>
                                                <p>Placa: {celda.placa}</p>
                                                <p>Ocupado</p>
                                            </div>
                                        ) : (
                                            <p>Disponible</p>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
}

export default ParkingCarros