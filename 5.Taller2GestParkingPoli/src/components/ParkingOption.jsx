import React, { useEffect, useState } from 'react';
import style from './ParkingOption.module.css'
import { useNavigate } from "react-router-dom";
const ParkingOption = () => {
  const [motos, setMotos] = useState([]);
  const [carros, setCarros] = useState([]);

  const navigate = useNavigate();

  // Función para obtener información sobre parqueaderos
  const obtenerInformacionParqueaderos = () => {
    // Aquí puedes realizar una llamada a la API o utilizar el estado de tu aplicación
    // para obtener la información sobre los parqueaderos.
    // Por ejemplo, podrías tener un estado global que mantenga la información de disponibilidad
    // de parqueaderos y utilizarlo aquí.
    // Esto es solo un ejemplo para ilustrar la idea.

    // Supongamos que disponibilidadParqueaderos es un estado que contiene la información de
    // cuántos parqueaderos están disponibles y ocupados para motos y carros.
    const disponibilidadParqueaderos = {
      motos: { disponibles: 3, ocupados: 2 },
      carros: { disponibles: 5, ocupados: 3 },
    };

    // Actualiza los estados de motos y carros con la información obtenida.
    setMotos(disponibilidadParqueaderos.motos);
    setCarros(disponibilidadParqueaderos.carros);
  };
  const handleMotos=()=>{
    navigate("/Motos", { replace: true });
  }
  const handleCarros=()=>{
    navigate("/Carros", { replace: true });
  }
  useEffect(() => {
    obtenerInformacionParqueaderos('motos')
    obtenerInformacionParqueaderos('carros')
  }, [])
  
  return (
    <div className={style.container}>
      <h2>Parqueadero de Motos</h2>
      <div>
        <p>Disponibles: {motos.disponibles}</p>
        <p>Ocupados: {motos.ocupados}</p>
      </div>

      <h2>Parqueadero de Carros</h2>
      <div>
        <p>Disponibles: {carros.disponibles}</p>
        <p>Ocupados: {carros.ocupados}</p>
      </div>
    </div>
  );
};

export default ParkingOption;