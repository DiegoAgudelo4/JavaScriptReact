import React from 'react'
import style from './EmpleadosRegistrados.module.css'

const EmpleadosRegistrados = () => {
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

                />
                <div>
                    <input
                        type="radio"
                        name="opciones"
                        value='Todos'
                        defaultChecked={true}
                    />
                    Todos
                </div>
                <div>
                    <input
                        type="radio"
                        name="opciones"
                        value='carros'
                    />
                    Carros
                </div>
                <div>
                    <input
                        type="radio"
                        name="opciones"
                        value='motos'
                    />
                    Motos
                </div>
            </div>
            <div >
                <table >

                </table>
            </div>
        </div>
    )
}

export default EmpleadosRegistrados