import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { usuarios } from "../data/dataUsers";
import { useAuth } from '../context/AuthContext';
//Estilos 
import style from "./Login.module.css";

//bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fail, setfail] = useState(false);
    const navigate = useNavigate();

    const { setAuthenticated } = useAuth();

    const handleLogin = () => {
        // Aquí puedes agregar lógica para validar el usuario y contraseña
        // Puedes comparar con valores por defecto o utilizar una lógica más avanzada

        console.log('Username:', username);
        console.log('Password:', password);
        const usuarioValido = usuarios.find(u => u.user === username && u.pass === password);


        if (usuarioValido) {
            console.log('Inicio de sesión exitoso');
            setAuthenticated(true);
            navigate("/DashBoard", { replace: true });
            // Puedes redirigir a otra página o realizar otras acciones aquí
        } else {
            console.log('Usuario o contraseña incorrectos');
            setfail(true)
            // Puedes mostrar un mensaje de error o realizar otras acciones aquí
        }
    };
    const handleBack=()=>{
        navigate("/", { replace: true });
    }
    return (
        <> <div className={style.body}>
             <h1>Inicie Sesion</h1>
            <div className={style.form}>
               
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Usuario
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                
                                //defaultValue="email@example.com" 
                                placeholder="usuario"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Contraseña
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="password"
                                placeholder="contraseña"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Col>
                        {fail && <Form.Label column sm="6">
                            Usuario o contraseña incorrectos
                            <br />
                        </Form.Label>
                        }

                    </Form.Group>
                </Form>
                <Button variant="primary" onClick={handleLogin} className={style.boton}>Iniciar sesión</Button>
                <Button variant="primary" onClick={handleBack} className={style.boton}>Volver</Button>
            </div>
        </div>
        </>

    )
}

export default Login