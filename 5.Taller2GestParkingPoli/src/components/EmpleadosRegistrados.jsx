import React, { useEffect, useState } from 'react';
import EmpleadosItem from './EmpleadosItem'; // Importa el componente EmpleadosItem aquí
import style from './EmpleadosRegistrados.module.css';
import { useEmpleado } from '../context/EmpleadoContext';
import { useNavigate } from "react-router-dom";

const EmpleadosRegistrados = ({ setNumeroPlacaSeleccionada, setAuthenticated }) => {
  const navigate = useNavigate();
  const { empleadosData } = useEmpleado();
  const [busqueda, setBusqueda] = useState('');
  const [opciones, setOpciones] = useState('todos');
  const [empleadoFiltrado, setempleadoFiltrado] = useState([])

  // Función para filtrar empleados según la búsqueda y las opciones seleccionadas
  const filtrarEmpleados = () => {
    return empleadosData.filter((empleado) => {
      const coincideBusqueda =
        empleado.cedula.toLowerCase().includes(busqueda.toLowerCase()) ||
        empleado.vehiculos.some(
          (vehiculo) =>
            vehiculo.numeroPlaca.toLowerCase().includes(busqueda.toLowerCase()) ||
            vehiculo.marca.toLowerCase().includes(busqueda.toLowerCase())
        );
      if (opciones === 'todos') {
        return coincideBusqueda;
      } else {
        return empleado.vehiculos.some((item) => item.tipo == opciones);
      }
    }).slice(0, 5);

  };
  useEffect(() => {
    var resultadoOpcion = filtrarEmpleados();
    setempleadoFiltrado(resultadoOpcion);
  }, [busqueda, opciones])

  const registrar = () => {
    setAuthenticated(false)
    navigate("/Dashboard", { replace: true });
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2>Empleados Registrados</h2>
      </div>
      <div className={style.busqueda}>
        Buscar:
        <input
          type="text"
          name="busqueda"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <div>
          <input
            type="radio"
            name="opciones"
            value="todos"
            defaultChecked={true}
            onChange={() => setOpciones('todos')}
          />
          Todos
        </div>
        <div>
          <input
            type="radio"
            name="opciones"
            value="carro"

            onChange={() => setOpciones('carro')}
          />
          Carros
        </div>
        <div>
          <input
            type="radio"
            name="opciones"
            value="moto"
            onChange={() => setOpciones('moto')}
          />
          Motos
        </div>
      </div>
      <div className={style.containTable}>
        <table className={style.table}>
          <thead>
            {empleadoFiltrado.length > 0 && <tr>
              <th>Cédula</th>
              <th>Número de Placa</th>
              <th>Marca</th>
              <th>Tipo</th>
              <th>Accion</th>
            </tr>}
            {empleadoFiltrado.length == 0 &&
              <>
                <tr>
                  <th>No hay registro de cedula o Número de placa, por favor registrala</th>
                  <th><button onClick={() => registrar()}> Registrar</button></th>
                </tr>
              </>
            }
          </thead>
          <tbody>
            {empleadoFiltrado.map((empleado) => (
              <EmpleadosItem key={empleado.cedula} empleado={empleado} setNumeroPlacaSeleccionada={setNumeroPlacaSeleccionada} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpleadosRegistrados;
