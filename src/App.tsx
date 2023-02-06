import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import AppRoutes from './Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
