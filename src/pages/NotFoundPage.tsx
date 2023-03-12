import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function NotFoundPage() {
  const navigate = useNavigate();
  const navigateHomePage = () => navigate('/');

  return (
    <Container>
      <p>Opps... Converter was not found!</p>
      <Button onClick={navigateHomePage}>To home page</Button>
    </Container>
  );
}

export default NotFoundPage;
