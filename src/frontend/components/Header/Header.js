import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/logo.png"
            width="150"
            className="d-inline-block align-top"
            alt="Logo Circo del Litoral"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="link-nav" href="#home">
              Inicio
            </Nav.Link>
            <Nav.Link className="link-nav" href="#link">
              Quiénes somos
            </Nav.Link>
            <NavDropdown title="Eventos" id="basic-nav-dropdown">
              <NavDropdown.Item className="link-nav" href="#action/3.1">
                Animaciones
              </NavDropdown.Item>
              <NavDropdown.Item className="link-nav" href="#action/3.2">
                Intervenciones
              </NavDropdown.Item>
              <NavDropdown.Item className="link-nav" href="#action/3.3">
                Shows
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Producciones" id="basic-nav-dropdown">
              <NavDropdown.Item className="link-nav" href="#action/3.1">
                Festivales
              </NavDropdown.Item>
              <NavDropdown.Item className="link-nav" href="#action/3.2">
                Formación
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="link-nav" href="#link">
              Novedades
            </Nav.Link>
            <Nav.Link className="link-nav" href="#link">
              Galeria
            </Nav.Link>
            <Nav.Link className="link-nav" href="#link">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { Header };
