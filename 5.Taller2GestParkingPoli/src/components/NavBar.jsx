import React from 'react'

//contexto
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

//bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

//estilos
import style from './NavBar.module.css';


const NavBar = ({ showParkinCarros, setShowParkinCarros, setShowParkinMotos, showParkinMotos, authenticated }) => {
  const { setAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSalir = () => {
    setAuthenticated(false)
    navigate("/", { replace: true });
  }
  const handleParkCarros = () => {
    setShowParkinCarros(!showParkinCarros)
  }
  const handleParkMotos=()=>{
    setShowParkinMotos(!showParkinMotos)
  }
  const handleIniciarSesion =()=>{
    navigate("/login", { replace: true });
  }
  return (
    <Navbar expand="lg" className={style.container}>
      <Container>
        <Navbar.Brand href="" className={style.titulo}>ParkingPoli</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={style.opciones}>
          <Nav className="me-auto">
            {authenticated && <>
              <NavDropdown title="Parqueaderos" id="basic-nav-dropdown">
                <NavDropdown.Item href="" onClick={handleParkCarros}>Parqueadero carros</NavDropdown.Item>
                <NavDropdown.Item href="" onClick={handleParkMotos}>
                  Parqueaderos motos
                </NavDropdown.Item>
              </NavDropdown>
              
            </>
            }
            {!authenticated &&
             <Nav.Link href="" onClick={handleIniciarSesion}>Iniciar Sesion</Nav.Link>
            }
          <Nav.Link href="" onClick={handleSalir}>Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar