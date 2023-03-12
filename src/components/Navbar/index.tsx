import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BSNavbar, Container, Offcanvas } from 'react-bootstrap';
import NavbarMenu from '../NavbarMenu';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const expand: string = 'md';
  const offcanvasNavbarClassName: string = `offcanvasNavbar-expand-${expand}`;
  const offcanvasNavbarLabelClassName: string = `offcanvasNavbarLabel-expand-${expand}`;

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const hideSidebar = () => setSidebarOpen(false);

  return (
    <BSNavbar
      bg="light"
      expanded={sidebarOpen}
      expand={expand}
      className="mb-3 border-bottom border-secondary"
    >
      <Container fluid>
        <BSNavbar.Brand as={Link} to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="logo" className="logo" />
        </BSNavbar.Brand>
        <BSNavbar.Toggle
          aria-controls={offcanvasNavbarClassName}
          onClick={toggleSidebar}
        />
        <BSNavbar.Offcanvas
          id={offcanvasNavbarClassName}
          aria-labelledby={offcanvasNavbarLabelClassName}
          placement="end"
        >
          <Offcanvas.Header closeButton onHide={hideSidebar}>
            <Offcanvas.Title id={offcanvasNavbarLabelClassName}>
              Converters
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NavbarMenu onLinkClick={hideSidebar} />
          </Offcanvas.Body>
        </BSNavbar.Offcanvas>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
