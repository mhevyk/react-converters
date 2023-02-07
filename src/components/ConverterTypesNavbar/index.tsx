import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

interface ConverterTypesNavProps {
  onLinkClick: () => void;
}

function ConverterTypesNav({ onLinkClick }: ConverterTypesNavProps) {
  const converterTypes: string[] = ['area', 'length', 'temperature'];

  return (
    <Nav className="justify-content-end flex-grow-1 pe-3">
      {converterTypes.map((type) => (
        <NavLink
          key={type}
          to={`/${type}`}
          className="nav__link"
          onClick={onLinkClick}
        >
          {type}
        </NavLink>
      ))}
    </Nav>
  );
}

export default ConverterTypesNav;
