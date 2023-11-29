import React, { useState } from 'react';
import { useEmpleado } from '../context/EmpleadoContext';
//Estilos
import style from './FormEmpleado.module.css';

const FormEmpleado = () => {
  const { empleadosData, setEmpleadosData } = useEmpleado();

  const [cedula, setCedula] = useState('');
  const [tipoVehiculo, setTipoVehiculo] = useState('');
  const [numeroPlaca, setNumeroPlaca] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [cilindraje, setCilindraje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!cedula || !numeroPlaca || !marca || !tipoVehiculo ||!marca) {
      setError('Todos los campos son obligatorios');
      return;
    }

    // Verificar si la cédula ya existe en empleadosData
    const empleadoExistente = empleadosData.find((empleado) => empleado.cedula === cedula);

    if (empleadoExistente) {
      // La cédula ya existe, verificar si la placa ya está registrada
      const placaExistente = empleadoExistente.vehiculos.some((vehiculo) => vehiculo.numeroPlaca === numeroPlaca);

      if (placaExistente) {
        setError('La placa de este vehículo ya está registrada');
        return;
      }

      // Agregar el nuevo vehículo al empleado existente
      const nuevoVehiculo = {
        tipo: tipoVehiculo === 'moto' ? 'moto' : 'carro',
        numeroPlaca,
        marca,
        cilindraje: tipoVehiculo === 'moto' ? cilindraje : undefined,
        modelo: tipoVehiculo === 'carro' ? modelo : undefined,
      };

      setEmpleadosData((prevEmpleadosData) => {
        const nuevosEmpleadosData = prevEmpleadosData.map((empleado) =>
          empleado.cedula === cedula
            ? { ...empleado, vehiculos: [...empleado.vehiculos, nuevoVehiculo] }
            : empleado
        );
        return nuevosEmpleadosData;
      });
    } else {
      // La cédula no existe, agregar un nuevo empleado con el vehículo correspondiente
      const nuevoEmpleado = {
        cedula,
        vehiculos: [
          {
            tipo: tipoVehiculo === 'moto' ? 'moto' : 'carro',
            numeroPlaca,
            marca,
            cilindraje: tipoVehiculo === 'moto' ? cilindraje : undefined,
            modelo: tipoVehiculo === 'carro' ? modelo : undefined,
          },
        ],
      };

      setEmpleadosData((prevEmpleadosData) => [...prevEmpleadosData, nuevoEmpleado]);
    }

    // Limpiar el formulario y errores
    setCedula('');
    setTipoVehiculo('');
    setNumeroPlaca('');
    setMarca('');
    setModelo('');
    setCilindraje('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h2>Formulario de Empleado</h2>

      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label htmlFor="cedula" className="form-label">
          Cedula:
        </label>
        <input
          type="text"
          className="form-control"
          id="cedula"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="numeroPlaca" className="form-label">
          Número de Placa:
        </label>
        <input
          type="text"
          className="form-control"
          id="numeroPlaca"
          value={numeroPlaca}
          onChange={(e) => setNumeroPlaca(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tipoVehiculo" className="form-label">
          Tipo de Vehículo:
        </label>
        <br />
        <select
          className="form-select"
          id="tipoVehiculo"
          value={tipoVehiculo}
          onChange={(e) => setTipoVehiculo(e.target.value)}
        >
          <option value="">Seleccionar Tipo</option>
          <option value="moto">Moto</option>
          <option value="carro">Carro</option>
        </select>
      </div>



      {tipoVehiculo === 'moto' && (
        <>
          <div className="mb-3">
            <label htmlFor="marca" className="form-label">
              Marca:
            </label>
            <br />
            <select
              className="form-select"
              id="marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            >
              <option value="">Seleccionar Tipo</option>
              <option value="harley">Harley Davidson</option>
              <option value="bmw">BMW</option>
              <option value="ducati">Ducati</option>
              <option value="yamaha">Yamaha</option>
              <option value="honda">Honda</option>
              <option value="triumph">Triumph</option>
              <option value="suzuki">Suzuki</option>
              <option value="kawasaki">Kawasaki</option>
              <option value="aprilia">Aprilia</option>
              <option value="ktm">KTM</option>
              <option value="mv_agusta">MV Augusta</option>
              <option value="cagiva">Cagiva</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="cilindraje" className="form-label">
              Cilindraje:
            </label>
            <br />
            <select
              className="form-select"
              id="cilindraje"
              value={cilindraje}
              onChange={(e) => setCilindraje(e.target.value)}
            >
              <option value="">Seleccione un Cilindraje</option>
              <option value="80">80 CC</option>
              <option value="100">100 CC</option>
              <option value="200">200 CC</option>
              <option value="300">300 CC</option>
              <option value="600">600 CC</option>
              <option value="1000">1000 CC</option>
              <option value="1200">1200 CC</option>
            </select>
          </div>
        </>
      )}

      {tipoVehiculo === 'carro' && (
        <>
          <div className="mb-3">
            <label htmlFor="marca" className="form-label">
              Marca:
            </label>
            <br />
            <select
              className="form-select"
              id="marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            >
              <option value="">Seleccionar marca</option>
              <option value="Chevrolet Spark">Chevrolet Spark</option>
              <option value="Chevrolet Aveo">Chevrolet Aveo</option>
              <option value="Chevrolet Sail">Chevrolet Sail</option>
              <option value="Ford Fiesta">Ford Fiesta</option>
              <option value="Toyota Hilux">Toyota Hilux</option>
              <option value="Chevrolet Aveo Emotion">Chevrolet Aveo Emotion</option>
              <option value="Chevrolet Tracker">Chevrolet Tracker</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="modelo" className="form-label">
            Modelo:
            </label>
            <br />
            <select
              className="form-select"
              id="modelo"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
            >
              <option value="">Seleccione un Modelo</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </>
      )}

      <button type="submit" className="btn btn-primary">
        Agregar Vehículo
      </button>
    </form>
  )
}

export default FormEmpleado