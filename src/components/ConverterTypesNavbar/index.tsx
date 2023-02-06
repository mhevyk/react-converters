import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function ConverterTypesNav() {
  const converterTypes: string[] = ['area', 'length', 'temperature'];

  return (
    <Nav className="justify-content-end flex-grow-1 pe-3">
      {converterTypes.map((type) => (
        <NavLink key={type} to={`/${type}`} className="nav__link">
          {type}
        </NavLink>
      ))}
    </Nav>
  );
}

export default ConverterTypesNav;
