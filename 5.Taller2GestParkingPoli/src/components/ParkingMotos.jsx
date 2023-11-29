import React, { useEffect, useState } from 'react'
import { useMotos } from '../context/MotosContext';
import style from './ParkingMotos.module.css';
import Mensaje from './Mensaje';
const ParkingMotos = ({ setMotos, numeroPlacaSeleccionada, setNumeroPlacaSeleccionada }) => {

  const { motosData, setMotosData, disponibles, ocupadas } = useMotos();
  const [error, seterror] = useState('')
  const [confirmacion, setConfirmacion] = useState({
    mostrar: false,
    titulo: "¿Está seguro?",
    mensaje: "¿Está seguro de que desea confirmar la salidad de este vehiculo?",
  }
  )

  // Función para alternar la disponibilidad de una celda al hacer clic
  const toggleDisponibilidad = (filaIndex, celdaIndex) => {
    if (motosData[filaIndex][celdaIndex].ocupada) {
      setConfirmacion((prevConfirmacion) => ({
        ...prevConfirmacion,
        mostrar: true,
      }));
      setUbicacion({ filaIndex: filaIndex, celdaIndex: celdaIndex })
    } else {
      if (!numeroPlacaSeleccionada.numeroPlaca == '' && !numeroPlacaSeleccionada.tipo == '') {
        if (numeroPlacaSeleccionada.tipo == 'moto') {
          let encontrado = false;
          for (let i = 0; i < motosData.length; i++) {
            if (encontrado) {
              break;
            }
            for (let j = 0; j < motosData[i].length; j++) {
              if (motosData[i][j].placa === numeroPlacaSeleccionada.numeroPlaca) {
                encontrado = true

                break
              }
            }
          }
          if (!encontrado) {
            const nuevasCeldas = [...motosData];
            nuevasCeldas[filaIndex][celdaIndex].ocupada = !nuevasCeldas[filaIndex][celdaIndex].ocupada;
            nuevasCeldas[filaIndex][celdaIndex].placa = numeroPlacaSeleccionada.numeroPlaca
            setMotosData(nuevasCeldas);
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
    const nuevasCeldas = [...motosData];
    nuevasCeldas[filaIndex][celdaIndex].ocupada = !nuevasCeldas[filaIndex][celdaIndex].ocupada;
    nuevasCeldas[filaIndex][celdaIndex].placa = numeroPlacaSeleccionada.numeroPlaca
    setMotosData(nuevasCeldas);
    setNumeroPlacaSeleccionada({})
    setConfirmacion((prevConfirmacion) => ({
        ...prevConfirmacion,
        mostrar: false,
    }));
}
  const cancelar = () => {
    setConfirmacion((prevConfirmacion) => ({
      ...prevConfirmacion,
      mostrar: false,
    }));
  }
  const [ubicacion, setUbicacion] = useState({});
  useEffect(() => {
    setMotos({ disponibles: disponibles, ocupadas: ocupadas })
    
  }, [disponibles, ocupadas])
  useEffect(() => {
    seterror('')
  }, [numeroPlacaSeleccionada])
  
  return (
    <div className={style.container}>
      <h2>Parqueadero de motos Mofles</h2>
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
        <thead><tr><td>#</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td></tr></thead>

        <tbody>

          {motosData.map((fila, filaIndex) => (

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
  )
}

export default ParkingMotos