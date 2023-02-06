import './Menu.css';
import { Navbar, Container, Offcanvas } from 'react-bootstrap';
import ConverterTypesNavbar from '../ConverterTypesNavbar';
import { Link } from 'react-router-dom';

function Menu() {
  const expand: string = 'md';
  const offCanvasNavbarClassName: string = `offcanvasNavbar-expand-${expand}`;
  const offCanvasNavbarLabelClassName: string = `offcanvasNavbarLabel-expand-${expand}`;

  return (
    <Navbar
      bg="light"
      expand={expand}
      className="mb-3 border-bottom border-primary"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Types
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={offCanvasNavbarClassName} />
        <Navbar.Offcanvas
          id={offCanvasNavbarClassName}
          aria-labelledby={offCanvasNavbarLabelClassName}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={offCanvasNavbarLabelClassName}>
              Converters
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ConverterTypesNavbar />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Menu;
