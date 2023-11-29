import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
//estilos
import style from './HomePage.module.css';

const HomePage = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/Login", { replace: true });
    }
    const handleInvitado = () => {
        navigate("/Dashboard", { replace: true });
    }
    return (
        <div className={style.body}>
            <h1>ParkingPoli</h1>
            <div className={style.botones}>
                <Button variant="primary" onClick={handleLogin} className={style.boton}>Iniciar sesion</Button>
                <Button variant="primary" onClick={handleInvitado} className={style.boton}>Entrar como invitado</Button>
            </div>
            <header>
                <h1>Descripción del Proyecto</h1>
            </header>

            <main>
                <p>En la dirección de tecnología del politécnico Jaime Isaza Cadavid, se plantea construir una aplicación web para realizar la gestión y administración del parqueadero que cumpla con los siguientes requisitos:</p>

                <ol>
                    <li>Debe haber un Login, usuario y contraseña, estos pueden ser estar en un state por defecto, no hay que hacer registro de estos.</li>
                    <li>Los vehículos permitidos que pueden ingresar al parqueadero de la sede Medellín son: carros y motos.</li>
                    <li>Cada empleado deberá registrar previamente los vehículos con los que cuenta, registrando para:
                        <ul>
                            <li>motos: número de placa, cilindraje y marca</li>
                            <li>carros: número de placa, modelo y marca</li>
                        </ul>
                        Se deben hacer las validaciones correspondientes.
                        <ul>
                            <li>Las placas son únicas, al igual que el documento de identidad.</li>
                            <li>Para la marca, modelo y cilindraje se recomienda usar una lista de valores que se pueda seleccionar.</li>
                        </ul>
                    </li>
                    <li>Al momento de ingresar al parqueadero el vigilante deberá registrar por medio de la cedula del empleado o por la placa del vehículo, el ingreso, registrando la fecha y hora de entrada, y el número de celda en la cual se va a parquear el vehículo.
                        <ul>
                            <li>Si el vigilante ha ingresado una cédula, se le deben mostrar todos los vehículos asociados a ese número de cedula, para después seleccionar el que está ingresando.</li>
                            <li>Si el vigilante ingresó un número de placa, se le debe mostrar toda la información relacionada al vehículo y después marcar su entrada.</li>
                            <li>Se cuenta con N celdas para carro y M celdas para motos (vía libre para definir esos valores, mínimo 5)</li>
                        </ul>
                    </li>
                    <li>Visualizar en una página las celdas del parqueadero, cuales estas disponibles y cuales ocupadas con información respectiva.</li>
                    <li>La aplicación debe permitir la salida de los vehículos del parqueadero, para que quede de nuevo habilitada la celda que tenía ocupada.</li>
                </ol>

                <p>Que se debe utilizar:</p>
                <ul>
                    <li>React Router</li>
                    <li>Hooks</li>
                    <li>Context</li>
                    <li>Componentes</li>
                    <li>Opcional Librería UI</li>
                </ul>

                <p>Notas:</p>
                <ul>
                    <li>El taller se puede hacer en parejas</li>
                    <li>Se debe publicar en la nube.</li>
                    <li>Me deben enviar el repositorio o drive</li>
                    <li>Fecha entrega: 28 noviembre</li>
                    <li>Fecha socialización: 29 noviembre</li>
                </ul>
            </main>
        </div>

    )
}

export default HomePage