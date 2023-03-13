import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ConvertingResultProvider from './context/ConvertingResultContext';

function App() {
  return (
    <div className="App">
      <Header />
      <ConvertingResultProvider>
        <Main />
      </ConvertingResultProvider>
      <Footer />
    </div>
  );
}

export default App;
