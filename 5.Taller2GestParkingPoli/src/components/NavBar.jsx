import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const { setAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSalir=()=>{
    setAuthenticated(false)
    navigate("/", { replace: true });
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ParkingPoli</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Soporte</Nav.Link>
            <Nav.Link href="#link" onClick={handleSalir}>Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar