import './Main.css';
import { Suspense } from 'react';
import Navbar from '../Navbar';
import Loader from '../Loader';
import Routes from '../../routes/Routes';

function Main() {
  return (
    <main className="App__main">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </main>
  );
}

export default Main;
