import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import NavBar from '../components/NavBar';
import ParkingOption from '../components/ParkingOption';
import EmpleadosRegistrados from '../components/EmpleadosRegistrados';
import ParkingCarros from'../components/ParkingCarros';

//estilos
import style from './Dashboard.module.css'
import { CarrosProvider } from '../context/CarrosContext';
const DashBoard = () => {
  const { authenticated, setAuthenticated } = useAuth();
  const [showParkinMotos, setShowParkinMotos] = useState(false)
  const [showParkinCarros, setShowParkinCarros] = useState(false)
  return (
    <>
      

      <NavBar
        showParkinCarros={showParkinCarros}
        setShowParkinCarros={setShowParkinCarros}
        setShowParkinMotos={setShowParkinMotos}
        showParkinMotos={showParkinMotos}
        authenticated={authenticated}
      />
      {authenticated ? "" : "Estás como invitado"}

      <div className={style.container}>
        {authenticated &&
          <>
            <ParkingOption />
            <EmpleadosRegistrados />
          </>}
      </div>
      <div>
        
        {showParkinCarros && 
        <CarrosProvider>
          <ParkingCarros/>
        </CarrosProvider>
        }
        
      </div>
    </>
  )
}

export default DashBoard