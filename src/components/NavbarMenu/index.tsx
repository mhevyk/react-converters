import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import sitemap, { RouteType } from '../../routes/sitemap';

interface NavbarMenuProps {
  onLinkClick: () => void;
}

function NavbarMenu({ onLinkClick }: NavbarMenuProps) {
  return (
    <Nav className="justify-content-end flex-grow-1 pe-3">
      {sitemap.map(
        (route: RouteType) =>
          route?.name && (
            <NavLink
              key={route.path}
              to={route.path}
              className="nav__link"
              onClick={onLinkClick}
            >
              {route.name}
            </NavLink>
          )
      )}
    </Nav>
  );
}

export default NavbarMenu;
