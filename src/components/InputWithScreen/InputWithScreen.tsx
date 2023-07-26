import styles from './InputWithScreen.module.css';

export function InputWithScreen() {
  return (
    <div>
      <div className={styles.input}>Input</div>
      <div className={styles.screen}>Screen</div>
    </div>
  )
}