import './Footer.css';

function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="App__footer text-center text-white">
      {currentYear} © <span className="text-primary">Max Hevyk</span>
    </footer>
  );
}

export default Footer;
