import { Fact } from '../../../data/config';
import styles from './HistoricalEvent.module.scss';

interface HistoricalEventProps {
  fact: Fact;
}

export default function HistoricalEvent({ fact }: HistoricalEventProps) {
  const { year, description } = fact;

  return (
    <li className={styles.historicalEvent}>
      <h3 className={styles.historicalEvent__title}>{year}</h3>
      <p className={styles.historicalEvent__description}>{description}</p>
    </li>
  );
}
