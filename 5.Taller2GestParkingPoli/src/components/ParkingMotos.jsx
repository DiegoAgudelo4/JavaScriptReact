import React, { useEffect, useState } from 'react'
import { useMotos } from '../context/MotosContext';
import style from './ParkingMotos.module.css';
const ParkingMotos = ({ setMotos,numeroPlacaSeleccionada,setNumeroPlacaSeleccionada }) => {

  const { motosData, setMotosData, disponibles, ocupadas } = useMotos();
  const [error, seterror] = useState('')
  const [confirmacion, setConfirmacion] = useState({
    mostrar: false,
    titulo: "¿Está seguro?",
    mensaje: "¿Está seguro de que desea confirmar la salidad de este vehiculo?",
  }
  )
  const [ubicacion, setUbicacion] = useState({});
  useEffect(() => {
    setMotos({ disponibles: disponibles, ocupadas: ocupadas })
  }, [disponibles, ocupadas])
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
        <thead><tr><td>#</td><td>A</td><td>B</td><td>C</td><td>D</td></tr></thead>

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
                  style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: celda.ocupada ? 'red' : 'green',
                    cursor: 'pointer'
                  }}
                  className={style.td}
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