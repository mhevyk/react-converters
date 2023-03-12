import './Loader.css';
import { Container } from 'react-bootstrap';
import { ImSpinner8 } from 'react-icons/im';

function Loader() {
  return (
    <Container
      fluid="md"
      className="loader-container d-flex justify-content-center align-items-center"
    >
      <ImSpinner8 className="loading-icon" size={30} />
    </Container>
  );
}

export default Loader;
