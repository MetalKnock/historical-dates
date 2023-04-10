import { HistoricalDates } from '../../components/HistoricalDates';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <div className={styles.main}>
      <HistoricalDates />
      {/* <HistoricalDates /> */}
    </div>
  );
}
