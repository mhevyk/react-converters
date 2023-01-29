import styles from './Footer.module.css';

function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} text-center text-white`}>
      {currentYear} © <span className="text-primary">Max Hevyk</span>
    </footer>
  );
}

export default Footer;
