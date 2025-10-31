import styles from './Header.module.css';
import Logo from '../../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Pilops Logo" />
      <p>Your virtual pilot career for Flight Simulator</p>
    </header>
  );
}