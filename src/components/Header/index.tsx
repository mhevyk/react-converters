import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={`${styles.title} text-primary text-center text-uppercase`}>
        Converters
      </h1>
      <h3
        className={`${styles.subtitle} text-white text-center text-uppercase`}
      >
        Handy enough to use it!
      </h3>
    </header>
  );
}

export default Header;
