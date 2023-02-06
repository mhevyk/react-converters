import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import AreaPage from './pages/AreaPage';
import LengthPage from './pages/LengthPage';
import TemperaturePage from './pages/TemperaturePage';
import NotFoundPage from './pages/NotFoundPage';

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Navigate to="area" />} />
        <Route path="area" element={<AreaPage />} />
        <Route path="length" element={<LengthPage />} />
        <Route path="temperature" element={<TemperaturePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Navigation;
