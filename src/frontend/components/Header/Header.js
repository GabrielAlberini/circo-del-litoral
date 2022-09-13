import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src="/logo.png"
              width="150"
              className="d-inline-block align-top"
              alt="Logo Circo del Litoral"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link className="link-nav">Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/quienes-somos">
              <Nav.Link className="link-nav">Quiénes somos</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Eventos" id="basic-nav-dropdown">
              <LinkContainer to="/animaciones">
                <NavDropdown.Item className="link-nav">
                  Animaciones
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/intervenciones">
                <NavDropdown.Item className="link-nav">
                  Intervenciones
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/shows">
                <NavDropdown.Item className="link-nav">Shows</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Producciones" id="basic-nav-dropdown">
              <LinkContainer to="/festivales">
                <NavDropdown.Item className="link-nav">
                  Festivales
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/formacion">
                <NavDropdown.Item className="link-nav">
                  Formación
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/galeria">
              <Nav.Link className="link-nav">Galeria</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacto">
              <Nav.Link className="link-nav">Contacto</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { Header };
