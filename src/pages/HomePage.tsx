import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sitemap from '../routes/sitemap';

function HomePage() {
  return (
    <Container fluid="md" className="px-3">
      <h2>Welcome to Converters!</h2>
      <p>Select one of converters to start your work:</p>
      <ul className="list-group list-group-flush">
        {sitemap.map(
          (route) =>
            route.name && (
              <li key={route.path} className="list-group-item bg-transparent">
                {route?.icon && (
                  <span className="me-4">
                    <route.icon size={25} />
                  </span>
                )}
                <Link to={route.path} className="text-primary">
                  {route.name}
                </Link>
              </li>
            )
        )}
      </ul>
    </Container>
  );
}

export default HomePage;
