import './Header.css';

function Header() {
  return (
    <header className="App__header">
      <div className="header__main">
        <h1 className="title text-primary text-center text-uppercase">
          Converters
        </h1>
        <h3 className="subtitle text-white text-center text-uppercase">
          Handy enough to use it!
        </h3>
      </div>
    </header>
  );
}

export default Header;
