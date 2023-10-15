import { useEffect, useState } from "react";
import CuentasItem from "./CuentasItem";
import style from "./CuentasList.module.css"

const CuentasList = ({ cuenta, setCuenta, edit, setEdit }) => {
    const [cantidad, setCantidad] = useState(0);
    const [busqueda, setBusqueda] = useState('');
    const [cuentaFiltrada, setCuentaFiltrada] = useState([]);
    const [opcion, setOpcion] = useState('Todos');

    useEffect(() => {
        setCantidad(cuenta.length);
    }, [cuenta]);

    useEffect(() => {
        //filtrar por opcion
        var resultadoOpcion = cuenta;
        if (opcion != 'Todos') {
            resultadoOpcion = cuenta.filter((item) => item.tipo == opcion);
        }
        //busca por item.nombre o item.cantidad
        if (busqueda) {
            const resultadoFiltrado = resultadoOpcion.filter((item) => {
              const buscar = busqueda.toLowerCase();
              const buscadoNombre = item.nombre.toLowerCase();
              const buscadoCantidad = item.cantidad.toString(); // Convierte la cantidad a una cadena
              return (
                buscadoNombre.includes(buscar) || buscadoCantidad.includes(buscar)
              );
            });
            setCuentaFiltrada(resultadoFiltrado);
          } else {
            setCuentaFiltrada(resultadoOpcion);
          }
    }, [busqueda, cuenta, opcion]);

    const deleteCuenta = ({ id }) => {
        const newCuenta = cuenta.filter(Cuenta => Cuenta.id !== id);
        setCuenta(newCuenta);
    };
    return (
        <>
            <div className={style.header}>
                <div>Lista de Movimientos</div>
                <div className={style.cantidad}>
                    {cantidad}
                </div>
            </div>
            <div className={style.busqueda}>
               Buscar:
                <input
                    type="text"
                    name="busqueda"
                    onChange={(e) => setBusqueda(e.target.value)}
                    className={style.inputText}
                />
                <div>
                    <input
                        type="radio"
                        name="opciones"
                        value='Todos'
                        onChange={(e) => setOpcion(e.target.value)}
                        defaultChecked={true}
                    />
                    Todos
                </div>
                <div>
                    <input
                        type="radio"
                        name="opciones"
                        value='Ingreso'
                        onChange={(e) => setOpcion(e.target.value)}
                    />
                    Ingreso
                </div>
                <div>
                    <input
                        type="radio"
                        name="opciones"
                        value='Gasto'
                        onChange={(e) => setOpcion(e.target.value)}
                    />
                    Gasto
                </div>
            </div>
            <div className={style.containtable}>
                <table className={style.table}>
                    {
                        cuentaFiltrada.map(c => (
                            <CuentasItem
                                key={c.id}
                                cuenta={c}
                                deleteCuenta={deleteCuenta}
                                edit={edit}
                                setEdit={setEdit}
                            />
                        ))
                    }
                </table>
            </div>
        </>
    )
};

export default CuentasList;