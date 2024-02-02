import viteLogo from '/vite.svg'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
      <img
              src={viteLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            
        <Navbar.Brand href="#home">Tienda Skate</Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#link">CONTACTO</Nav.Link>
            <NavDropdown title="TIENDA" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SkateDecks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Arte
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Impresion 3D</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Otros
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 

    );
}