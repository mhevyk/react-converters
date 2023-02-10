import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ConverterTypes } from '../../types';

interface ConverterTypesNavProps {
  onLinkClick: () => void;
}

function ConverterTypesNav({ onLinkClick }: ConverterTypesNavProps) {
  return (
    <Nav className="justify-content-end flex-grow-1 pe-3">
      {Object.values(ConverterTypes).map((type) => (
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
