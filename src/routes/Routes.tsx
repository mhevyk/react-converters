import { Routes, Route } from 'react-router-dom';
import sitemap, { RouteType } from './sitemap';

function AppRoutes() {
  return (
    <Routes>
      {sitemap.map((route: RouteType) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
}

export default AppRoutes;
