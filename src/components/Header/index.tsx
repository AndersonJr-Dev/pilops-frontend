import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="Pilops Logo" /> 
      <p>Your virtual pilot career for Flight Simulator</p>
    </header>
  );
}