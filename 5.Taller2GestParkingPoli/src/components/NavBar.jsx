import React from 'react'

//contexto
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

//bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = ({ showParkinCarros, setShowParkinCarros, setShowParkinMotos, ShowParkinMotos, authenticated }) => {
  const { setAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSalir = () => {
    setAuthenticated(false)
    navigate("/", { replace: true });
  }
  const handleParqueaderos = () => {
    setShowParkinCarros(!showParkinCarros)
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ParkingPoli</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {authenticated &&
              <NavDropdown title="Parqueaderos" id="basic-nav-dropdown">
                <NavDropdown.Item href="" onClick={handleParqueaderos}>Parqueadero Carros</NavDropdown.Item>
                <NavDropdown.Item href="">
                  Parqueaderos motos
                </NavDropdown.Item>
              </NavDropdown>
            }


            <Nav.Link href="" onClick={handleSalir}>Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar