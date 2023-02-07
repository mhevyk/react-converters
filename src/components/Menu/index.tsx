import './Menu.css';
import { Navbar, Container, Offcanvas } from 'react-bootstrap';
import ConverterTypesNavbar from '../ConverterTypesNavbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Menu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const expand: string = 'md';
  const offCanvasNavbarClassName: string = `offcanvasNavbar-expand-${expand}`;
  const offCanvasNavbarLabelClassName: string = `offcanvasNavbarLabel-expand-${expand}`;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const hideSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Navbar
      bg="light"
      expanded={isSidebarOpen}
      expand={expand}
      className="mb-3 border-bottom border-secondary"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src="assets/logo.png" alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={offCanvasNavbarClassName}
          onClick={toggleSidebar}
        />
        <Navbar.Offcanvas
          id={offCanvasNavbarClassName}
          aria-labelledby={offCanvasNavbarLabelClassName}
          placement="end"
        >
          <Offcanvas.Header closeButton onHide={hideSidebar}>
            <Offcanvas.Title id={offCanvasNavbarLabelClassName}>
              Converters
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ConverterTypesNavbar onLinkClick={hideSidebar} />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Menu;
