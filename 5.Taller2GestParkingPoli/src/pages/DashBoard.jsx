import React, { useEffect, useState } from 'react'
//contexto
import { useAuth } from '../context/AuthContext'
import { CarrosProvider } from '../context/CarrosContext';
import { MotosProvider } from '../context/MotosContext';
import { EmpleadosProvider } from '../context/EmpleadoContext';
//componentes
import NavBar from '../components/NavBar';
import ParkingOption from '../components/ParkingOption';
import EmpleadosRegistrados from '../components/EmpleadosRegistrados';
import ParkingCarros from '../components/ParkingCarros';
import FormEmpleado from '../components/FormEmpleado';

//estilos
import style from './Dashboard.module.css'
import ParkingMotos from '../components/ParkingMotos';
const DashBoard = () => {
  const { authenticated, setAuthenticated } = useAuth();
  const [showParkinMotos, setShowParkinMotos] = useState(true)
  const [showParkinCarros, setShowParkinCarros] = useState(true)
  const [numeroPlacaSeleccionada, setNumeroPlacaSeleccionada] = useState({});
  const [carros, setCarros] = useState({})
  const [motos, setMotos] = useState({})

  useEffect(() => {
    if (numeroPlacaSeleccionada.tipo == 'carro') {
      setShowParkinCarros(true)
      setShowParkinMotos(false)
    } else if (numeroPlacaSeleccionada.tipo == 'moto') {
      setShowParkinCarros(false)
      setShowParkinMotos(true)
    }
  }, [numeroPlacaSeleccionada])

  useEffect(() => {
    if(showParkinMotos){
      setShowParkinCarros(false)
    }else if(showParkinCarros){
      setShowParkinMotos(false)
    }
  }, [showParkinMotos,showParkinCarros])
  
  useEffect(() => {
    setShowParkinMotos(false)
    setShowParkinCarros(false)
    console.log("Usefect inicial")
  }, [])
  
  return (
    <>
      <NavBar
        showParkinCarros={showParkinCarros}
        setShowParkinCarros={setShowParkinCarros}
        setShowParkinMotos={setShowParkinMotos}
        showParkinMotos={showParkinMotos}
        authenticated={authenticated}
      />
      <div className={style.container}>
        {authenticated && <ParkingOption carros={carros} motos={motos} />}

        {!authenticated &&
          <FormEmpleado />
        }
        {authenticated &&
          <>
            <EmpleadosRegistrados setNumeroPlacaSeleccionada={setNumeroPlacaSeleccionada} setAuthenticated={setAuthenticated} />
          </>}

      </div>
      <div>

        {showParkinCarros && authenticated &&
          <CarrosProvider>
            <ParkingCarros
              numeroPlacaSeleccionada={numeroPlacaSeleccionada}
              setNumeroPlacaSeleccionada={setNumeroPlacaSeleccionada}
              setCarros={setCarros}
            />
          </CarrosProvider>
        }
        {showParkinMotos && authenticated &&
          <MotosProvider>
            <ParkingMotos
              numeroPlacaSeleccionada={numeroPlacaSeleccionada}
              setNumeroPlacaSeleccionada={setNumeroPlacaSeleccionada}
              setMotos={setMotos}
            />
          </MotosProvider>
        }

      </div>
    </>
  )
}

export default DashBoard