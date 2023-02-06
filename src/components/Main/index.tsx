import './Main.css';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu';

function Main() {
  return (
    <main className="App__main">
      <Menu />
      <Outlet />
    </main>
  );
}

export default Main;
