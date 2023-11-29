import React, { useContext, useEffect, useState } from 'react'
import { useCarros } from '../context/CarrosContext';
import style from './ParkingCarros.module.css';

import Mensaje from './Mensaje';


const ParkingCarros = ({ numeroPlacaSeleccionada, setNumeroPlacaSeleccionada, setCarros }) => {
    // Matriz que representa las celdas del parqueadero

    const { carrosData, setCarrosData, disponibles, ocupadas } = useCarros();
    const [error, seterror] = useState('')
    const [confirmacion, setConfirmacion] = useState({
        mostrar: false,
        titulo: "¿Está seguro?",
        mensaje: "¿Está seguro de que desea confirmar la salidad de este vehiculo?",
    }
    )
    const [ubicacion, setUbicacion] = useState({});

    // Función para alternar la disponibilidad de una celda al hacer clic
    const toggleDisponibilidad = (filaIndex, celdaIndex) => {
        if (carrosData[filaIndex][celdaIndex].ocupada) {
            setConfirmacion((prevConfirmacion) => ({
                ...prevConfirmacion,
                mostrar: true,
            }));
            setUbicacion({ filaIndex: filaIndex, celdaIndex: celdaIndex })
        } else {
            if (!numeroPlacaSeleccionada.numeroPlaca == '' && !numeroPlacaSeleccionada.tipo == '') {
                if (numeroPlacaSeleccionada.tipo == 'carro') {
                    let encontrado = false;
                    for (let i = 0; i < carrosData.length; i++) {
                        if (encontrado) {
                            break;
                        }
                        for (let j = 0; j < carrosData[i].length; j++) {
                            if (carrosData[i][j].placa===numeroPlacaSeleccionada.numeroPlaca) {
                                encontrado = true
                                
                                break
                            }
                        }
                    }
                    if (!encontrado) {
                        const nuevasCeldas = [...carrosData];
                        nuevasCeldas[filaIndex][celdaIndex].ocupada = !nuevasCeldas[filaIndex][celdaIndex].ocupada;
                        nuevasCeldas[filaIndex][celdaIndex].placa = numeroPlacaSeleccionada.numeroPlaca
                        setCarrosData(nuevasCeldas);
                        setNumeroPlacaSeleccionada({})

                    } else {
                        seterror(1);
                    }
                } else {
                    seterror(0);
                }

            } else {
                seterror(2);
            }
        }
    }
    const confirmarSalida = () => {
        const filaIndex = ubicacion.filaIndex
        const celdaIndex = ubicacion.celdaIndex
        const nuevasCeldas = [...carrosData];
        nuevasCeldas[filaIndex][celdaIndex].ocupada = !nuevasCeldas[filaIndex][celdaIndex].ocupada;
        nuevasCeldas[filaIndex][celdaIndex].placa = numeroPlacaSeleccionada.numeroPlaca
        setCarrosData(nuevasCeldas);
        setNumeroPlacaSeleccionada({})
        setConfirmacion((prevConfirmacion) => ({
            ...prevConfirmacion,
            mostrar: false,
        }));
    }
    const cancelar=()=>{
        setConfirmacion((prevConfirmacion) => ({
            ...prevConfirmacion,
            mostrar: false,
        }));
    }

    useEffect(() => {
        seterror('')
    }, [numeroPlacaSeleccionada])

    useEffect(() => {
        setCarros({ disponibles: disponibles, ocupadas: ocupadas })
    }, [disponibles, ocupadas])

    return (
        <div className={style.container}>
            <h2>Parqueadero de carros los Almendros</h2>
            {confirmacion.mostrar && 
                    <Mensaje 
                        titulo={confirmacion.titulo}
                        mensaje={confirmacion.mensaje}
                        cerrar={cancelar}
                        confirmar={confirmarSalida}
                    />
            }
            {error === 0 && <h5> Este vehiculo no lo puede parquear aqui</h5>}
            {error === 1 && <h5> Este vehiculo ya se encuentra en el parqueadero</h5>}
            {error === 2 && <h5> Debe seleccionar un vehiculo</h5>}
            {!numeroPlacaSeleccionada.numeroPlaca == '' && <h6>Placa: {numeroPlacaSeleccionada.numeroPlaca} Tipo: {numeroPlacaSeleccionada.tipo}</h6>}
            <table className={style.table}>
                <thead><tr><td>#</td><td>A</td><td>B</td><td>C</td><td>D</td></tr></thead>

                <tbody>

                    {carrosData.map((fila, filaIndex) => (

                        <tr key={filaIndex} className={style.th}>
                            <td>
                                {filaIndex + 1}
                            </td>
                            {fila.map((celda, celdaIndex) => (
                                <td
                                    key={celdaIndex}
                                    onClick={() => toggleDisponibilidad(filaIndex, celdaIndex)}
                                    className={`${style.td} ${style.celda} ${celda.ocupada ? style.ocupada:style.libre}`}
                                    
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