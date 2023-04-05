import { HistoricalEventList } from '../../components/HistoricalEventList';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <div className={styles.main}>
      <h1 className={styles.main__title}>Исторические даты</h1>
      <HistoricalEventList />
    </div>
  );
}
