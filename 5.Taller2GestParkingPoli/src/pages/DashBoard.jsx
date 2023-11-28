import React from 'react'
import { useAuth } from '../context/AuthContext'
import NavBar from '../components/NavBar';
import ParkingOption from '../components/ParkingOption';
import EmpleadosRegistrados from '../components/EmpleadosRegistrados';
//estilos
import style from './Dashboard.module.css'
const DashBoard = () => {
  const { authenticated, setAuthenticated } = useAuth();
  return (
    <>
    {authenticated ? "":"Estás como invitado"}
      {authenticated && <NavBar />}
      <div className={style.container}>
        {authenticated && <ParkingOption />}
        {authenticated && <EmpleadosRegistrados /> }
      </div>
    </>
  )
}

export default DashBoard