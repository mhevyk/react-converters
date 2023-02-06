import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu';

function Main() {
  return (
    <main>
      <Menu />
      <Container fluid>
        <Outlet />
      </Container>
    </main>
  );
}

export default Main;
